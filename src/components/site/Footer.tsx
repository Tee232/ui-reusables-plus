export function Footer() {
  return (
    <footer className="bg-hero overflow-hidden">
      <div className="container-page py-10 text-center">
        <p className="text-white/60 text-sm">
          © {new Date().getFullYear()} Vatebra Academy — All rights reserved.
        </p>
      </div>
      <div className="text-center pb-6 select-none">
        <span
          className="block font-extrabold text-transparent bg-clip-text"
          style={{
            fontSize: "clamp(3rem, 14vw, 12rem)",
            lineHeight: 0.9,
            backgroundImage:
              "linear-gradient(180deg, rgba(99,191,19,0.35) 0%, rgba(99,191,19,0.05) 100%)",
          }}
        >
          TechXplore Summit
        </span>
      </div>
    </footer>
  );
}
