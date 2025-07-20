"use server";

import getContent, { ContentItem } from "@/lib/getContent";
import BlogList from "@/components/blogs/bloglist";
import * as motion from "motion/react-client";

export default async function BlogsPage() {
  const blogs: ContentItem[] = getContent("blogs");

  return (
    <main className="w-full flex flex-col items-center justify-center">
      <section className="w-full bg-gradient-to-br from-background to-muted py-20">
        <div className="container mx-auto px-4 mt-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            BusekoSteel <span className="text-yellow-400">Blogs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Get the latest News, Upcoming events and DIY Tutorials Here
          </motion.p>
        </div>
      </section>

      <section className="w-full p-2 my-10 lg:max-w-[80vw]">
        <BlogList blogs={blogs} />
      </section>
    </main>
  );
}
