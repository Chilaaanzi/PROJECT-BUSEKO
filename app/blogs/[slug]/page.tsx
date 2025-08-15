"use server";

import { getSingleContent, SingleContent } from "@/lib/getSingleContent";
import Image from "next/image";
import * as motion from "motion/react-client";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const blog: SingleContent = await getSingleContent(
    "blogs",
    (await params).slug,
  );

  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      {/* Header Section */}
      <div className="w-full bg-neutral-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
          {/* Left Side: Full Image with animation */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative w-full h-[300px] lg:h-auto"
          >
            <Image
              src={blog.images?.[0] || "/placeholder.jpg"}
              alt={blog.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right Side: Text Content with animation */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center gap-4 px-6 py-10 lg:px-16"
          >
            <h1 className="text-3xl lg:text-5xl font-extrabold text-yellow-400">
              {blog.title}
            </h1>

            {typeof blog.intro === "string" && (
              <p className="text-lg text-gray-300">{blog.intro}</p>
            )}

            <div className="text-sm text-gray-500 mt-2">
              <p>Written by: {blog.author}</p>
              {blog.date && (
                <p>
                  Published:{" "}
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blog Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="prose prose-sm sm:prose-base max-w-5xl pb-6 sm:pb-12 prose-p:text-gray-700 prose-h2:text-pink-800 prose-li:marker:text-pink-500 prose-img:rounded-xl prose-img:shadow-md prose-img:my-6 prose-img:mx-auto prose-blockquote:border-l-4 prose-blockquote:border-pink-300 prose-blockquote:pl-4 prose-blockquote:text-gray-600 prose-hr:border-pink-300 px-4 w-full"
      >
        <div
          className="markdown-body p-4 max-w-full overflow-x-hidden"
          dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
          style={{
            lineHeight: "1.6",
          }}
        />
      </motion.article>
    </div>
  );
}
