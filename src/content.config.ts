import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['engineering', 'travel', 'other']),
    excerpt: z.string().optional(),
  }),
});

const teardowns = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/teardowns' }),
  schema: z.object({
    title: z.string(),
    product: z.string(),
    date: z.date(),
    category: z.enum(['wearables', 'hardware', 'software', 'other']),
    summary: z.string(),
    verdict: z.string(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    phase: z.string(),
    context: z.string().optional(),
    body: z.string().optional(),
    paragraphs: z.array(z.string()).optional(),
    bodyImage: z.string().optional(),
    galleryScale: z.number().optional(),
    imageScales: z.record(z.string(), z.number()).optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    images: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverLayout: z.enum(['landscape', 'portrait']).default('landscape'),
    retro: z.boolean().default(false),
  }),
});

export const collections = { posts, teardowns, projects };
