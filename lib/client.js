import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
	projectId: "asfjcitv",
	dataset: "production",
	apiVersion: "2022-12-04",
	useCdn: true,
	token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
