import { BlobOptions } from "buffer";

export type Project = {
	projectName: string;
	akronim: string;
	timSaradnika: string;
	apstrakt: string;
	status: string;
	link?: string;
	nio?: string;
	finansijer?: string;
	period?: string;
	slug: string;
};
