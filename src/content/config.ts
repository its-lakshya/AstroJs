import { defineCollection, z } from "astro:content";

// Blog collection schema
const homeCollection = defineCollection({
  schema: ({image}) => z.object({
    title: z.string(),
    content: z.string().optional(),
    button: z.object({
        label: z.string(),
        link: z.string(),
        enable: z.boolean(),
    }).optional(),
    description: z.string().optional(),
    bannerImage : image().optional(),
    services:z.array(z.object({
      text: z.string(),
      count: z.string().optional(),
      image: image().optional(),
      description: z.string().optional(),
      subText: z.string().optional(),
    })).optional(),
    additional: z.array(z.object({
      text: z.string(),
      image: image()
    })).optional(),
  }),
});


// Export collections
export const collections = {
  home: homeCollection,
};