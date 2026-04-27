import Image from "next/image";

export default function TechnologySection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/videos/protein-platform-video.mp4" type="video/mp4" />
      </video>

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[4px]" />

      {/* CONTENT */}
      <div className="relative z-10 container text-center max-w-3xl text-gray-900">
        {/* LOGO */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/pro1.png"
            alt="Profectein"
            width={220}
            height={60}
            className="object-contain"
            priority
          />
        </div>

        {/* TITLE */}
        <h2 className="mb-6 text-3xl md:text-4xl font-bold leading-tight">
          Pea Protein Platform Engineered for Performance
        </h2>

        {/* DESC */}
        <p className="mb-10 max-w-2xl mx-auto text-gray-700 leading-relaxed">
          Developed using proprietary processing technologies, delivering
          superior solubility, clean taste profile, and scalable performance
          across diverse food and beverage applications.
        </p>

        {/* ADVANTAGES */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "High Functionality",
            "Clean Sensory Profile",
            "Optimized Nutrition",
            "Formulation Versatility",
          ].map((item) => (
            <div
              key={item}
              className="rounded-full bg-white/80 px-5 py-3 text-sm font-medium border border-gray-200 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
