import getContent, { ContentItem } from "@/lib/getContent";
import BlogList from "@/components/blogs/bloglist";

export default async function BlogsPage() {
  const blogs: ContentItem[] = getContent("blogs");

  return (
    <main className="w-full flex flex-col items-center justify-center">
      <section className="w-full bg-gradient-to-br from-background to-muted py-20">
        <div className="container mx-auto px-4 mt-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            BusekoSteel <span className="text-yellow-400">Blogs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get the latest News, Upcoming events and DIY Tutorials Here
          </p>
        </div>
      </section>

      <section className="w-full p-2 my-10 lg:max-w-[80vw]">
        <BlogList blogs={blogs} />
      </section>
    </main>
  );
}
