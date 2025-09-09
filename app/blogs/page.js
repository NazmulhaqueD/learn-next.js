import Link from 'next/link';
import React from 'react'

export const blogs = [
    {
        id: 1,
        title: "Getting Started with Next.js",
        slug: "getting-started-nextjs",
        content: "Next.js is a powerful React framework for building server-side rendered and static web applications.",
        author: "Nazmul Haqqi",
        date: "2025-09-09"
    },
    {
        id: 2,
        title: "Understanding App Router in Next.js",
        slug: "app-router-nextjs",
        content: "The App Router introduces a new way to structure your Next.js applications with layouts and nested routes.",
        author: "Programming Hero",
        date: "2025-09-08"
    },
    {
        id: 3,
        title: "Tailwind CSS with Next.js",
        slug: "tailwind-css-nextjs",
        content: "Tailwind CSS makes styling in Next.js fast and efficient with utility-first classes.",
        author: "Nazmul Haqqi",
        date: "2025-09-05"
    },
    {
        id: 4,
        title: "Deploying Next.js to Vercel",
        slug: "deploying-nextjs-vercel",
        content: "Vercel provides the best deployment experience for Next.js apps with zero configuration.",
        author: "Vercel Team",
        date: "2025-09-01"
    }
];


export default function BlogsPage() {

    return (
        <main>
            <div className='mt-6'>There are all blogs</div>

            <div className='flex items-center gap-6 mt-4'>
                {
                    blogs.map(blog => <Link
                        key={blog.id}
                        href={`blogs/${blog.id}`}
                    >
                        <div
                            className='border p-6 grid justify-center items-center max-w-sm rounded-sm'
                        >
                            <p>{blog.id}</p>
                            <h1>{blog.slug}</h1>
                        </div>
                    </Link>)
                }
            </div>
        </main>
    )
}
