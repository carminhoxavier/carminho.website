import { z } from 'zod';

export const ConfigSchema = z.object({
    brand: z.string(),
    author: z.string(),
    social: z.array(z.object({
        name: z.string(),
        icon: z.string(),
        url: z.string().url(),
    })),
    ga: z.string().optional(),
});

export type Config = z.infer<typeof ConfigSchema>;

export const config: Config = {
    brand: '-',
    author: 'Carminho',
    social: [
        {
            name: 'Github',
            icon: 'mdi:github',
            url: 'https://github.com/carminhoxavier'
        },
        {
            name: 'Instagram',
            icon: 'mdi:instagram',
            url: 'https://github.com/carminho'
        }
    ],
    // Google Analytics tracking ID (leave blank to disable)
    ga: 'G-2NL5SXV9B3'
};
