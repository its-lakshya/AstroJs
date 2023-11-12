import { defineCollection, z } from "astro:content";

// Blog collection schema
const homeCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    page_title: z.string(),
    content: z.string(),
    button:z.object({
        label: z.string(),
        link: z.string(),
        enable: z.boolean(),
    }),
    description: z.object({
        label: z.string(),
        image: z.string().optional(),
    }),
    services:z.array(z.string()),
  }),
});

// Pages collection schema

// Export collections
export const collections = {
  home: homeCollection,
};