import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";

const POSTS = [
  {
    image: blog1,
    title: "5 Skills Every AI Builder Needs in 2025",
    tag: "AI & ML",
  },
  {
    image: blog2,
    title: "How to Prepare for Your First Tech Conference — And Get the Most Out of It",
    tag: "Community",
  },
  {
    image: blog3,
    title: "The Careers of the Future That You Should Know",
    tag: "Careers",
  },
];

export function Blog() {
  return (
    <section id="blog" className="bg-background py-20 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Blog"
          title="Featured Blogs"
          underline={false}
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl overflow-hidden bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  width={800}
                  height={512}
                  loading="lazy"
                  className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-brand text-brand-foreground">
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-heading leading-snug">
                  {p.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" size="md" className="!border-brand !text-brand hover:!bg-brand hover:!text-brand-foreground">
            View all blogs
          </Button>
        </div>
      </div>
    </section>
  );
}
