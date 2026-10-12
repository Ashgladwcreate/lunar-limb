import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publikasiCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publikasi' }),
  
  schema: ({ image }) => z.object({
    judul: z.string(),
    deskripsi: z.string(),
    tanggal: z.date().or(z.string()),
    kategori: z.string(),
    penulis: z.string().optional(),
    gambar: image(), // Gunakan fungsi image(), bukan z.string()
    sorotan: z.boolean().optional(),
    tipe: z.union([z.string(), z.array(z.string())]).optional(),
    lokasi: z.string().optional(),
  }),
});

export const collections = {
  'publikasi': publikasiCollection,
};