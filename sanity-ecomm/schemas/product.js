export default {
	name: "product",
	title: "Product",
	type: "document",
	fields: [
		{
			name: "image",
			title: "Image",
			type: "array",
			of: [{ type: "image" }],
			options: {
				hotspot: true,
			},
		},
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 90,
			},
			/*validation: (Rule) => [
				Rule.required().max(90).error("Slugs can only be 90 characters"),
			],*/
		},
		{
			name: "price",
			title: "Price",
			type: "number",
		},
		{
			name: "details",
			title: "Details",
			type: "string",
		},
	],
};
