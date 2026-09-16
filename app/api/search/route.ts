import { NextResponse } from "next/server";

import { searchPages } from "@/app/data/searchPages";
import { getEmployees } from "@/app/lib/google-sheets/employees";
import type { SearchResult } from "@/app/types/search";
import { getProjects } from "@/app/lib/google-sheets/projectss";

export async function GET() {
	try {
		const [employees, projects] = await Promise.all([
			getEmployees(),
			getProjects(),
		]);

		const pageResults: SearchResult[] = searchPages.map((page) => ({
			id: `page-${page.href}`,
			type: "page",

			title: page.title,

			description: page.description ?? "",

			href: page.href,

			searchText: [page.title, page.description, ...(page.keywords ?? [])]
				.filter(Boolean)
				.join(" "),
		}));

		const employeeResults: SearchResult[] = employees.map((employee) => ({
			id: `employee-${employee.slug}`,
			type: "employee",

			title: `${employee.firstName} ${employee.lastName}`,

			description: employee.naucnoZvanje || employee.position || "Istraživač",

			href: `/istrazivaci/${employee.slug}`,

			searchText: [
				employee.firstName,
				employee.lastName,
				employee.naucnoZvanje,
				employee.position,
				employee.oblastInteresovanja,
			]
				.filter(Boolean)
				.join(" "),
		}));

		const projectResults: SearchResult[] = projects.map((project, index) => ({
			id: `project-${index}`,
			type: "project",

			title: project.projectName,

			description: [project.akronim, project.finansijer]
				.filter(Boolean)
				.join(" · "),

			href: `/projekti/naucni?title=${encodeURIComponent(project.projectName)}`,

			searchText: [
				project.projectName,
				project.akronim,
				project.apstrakt,
				project.finansijer,
				project.nio,
			]
				.filter(Boolean)
				.join(" "),
		}));

		return NextResponse.json({
			results: [...employeeResults, ...pageResults, ...projectResults],
		});
	} catch (error) {
		console.error("Search API error:", error);

		return NextResponse.json(
			{
				results: [],
				message: "Pretraga trenutno nije dostupna.",
			},
			{
				status: 500,
			},
		);
	}
}
