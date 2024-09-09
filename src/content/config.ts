import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string().url(),
      text: z.string(),
    }),

    pubDate: z.date(),
    tags: z.array(z.string()),
    title: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};
