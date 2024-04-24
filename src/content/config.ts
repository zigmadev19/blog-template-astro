import { defineCollection, reference, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image(),
		author: reference('authors').default('anonimus'),
	}),
});

const authors = defineCollection({
  type: 'data',
  schema: ({image}) =>  z.object({
		name: z.string(),
		description: z.string(),
		headShot: image().optional(),
	})
});

export const collections = { blog , authors };
