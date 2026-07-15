import { ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";

type Post = {
  image: string;
  tag: string;
  title: string;
  description: string;
  size: "tall" | "small";
};

const POSTS: Post[] = [
  {
    image: blog1,
    tag: "AI & ML",
    title: "5 Tech Trends to Watch Out For in 2025",
    description: "AI, IoT, Robotics & More!",
    size: "tall",
  },
  {
    image: blog2,
    tag: "Community",
    title: "How to Prepare for a Tech Conference as a Student",
    description: "Maximize your experience!",
    size: "small",
  },
  {
    image: blog4,
    tag: "Speakers",
    title: "Meet the TechXplore 2025 Speakers",
    description: "Who's coming? Find out!",
    size: "small",
  },
  {
    image: blog3,
    tag: "Careers",
    title: "Tech Careers of the Future: What You Need to Know",
    description: "AI Engineers, Cybersecurity Experts & More!",
    size: "tall",
  },
];

function Card({ post, className }: { post: Post; className?: string }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 ${className ?? ""}`}
    >
      <img
        src={post.image}
        alt={post.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
      <span className="absolute top-4 left-4 z-10 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand text-brand-foreground">
        {post.tag}
      </span>
      <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
        <h3 className="text-lg md:text-xl font-semibold leading-snug !text-white">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-white/85">{post.description}</p>
        <a
          href="#"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 decoration-white/60 hover:decoration-white transition"
        >
          Read More <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

export function Blog() {
  const [leftTall, topSmall, bottomSmall, rightTall] = POSTS;

  return (
    <section id="blog" className="py-20 lg:py-24" style={{ backgroundColor: "#F1F2F0" }}>
      <div className="container-page">
        <SectionHeading eyebrow="Blog" title="Featured Blogs" underline={false} />

        <div className="grid gap-6 md:grid-cols-3 md:auto-rows-[220px] max-w-6xl mx-auto">
          <Card post={leftTall} className="md:row-span-2 min-h-[300px] md:min-h-0" />
          <Card post={topSmall} className="min-h-[260px] md:min-h-0" />
          <Card post={rightTall} className="md:row-span-2 md:col-start-3 md:row-start-1 min-h-[300px] md:min-h-0" />
          <Card post={bottomSmall} className="min-h-[260px] md:min-h-0 md:col-start-2 md:row-start-2" />
        </div>

        <div className="mt-10 text-center">
          <Button
            variant="outline"
            size="md"
            className="!border-brand !text-brand hover:!bg-brand hover:!text-brand-foreground"
          >
            View all blogs
          </Button>
        </div>
      </div>
    </section>
  );
}
