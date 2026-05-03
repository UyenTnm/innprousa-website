import Image from "next/image";

export default function TechnologySection({
  variant = "home",
}: {
  variant?: "home" | "products";
}) {
  console.log("variant: ", variant);
  return (
    <section
      className={`relative py-20 md:py-28 ${
        variant === "products" ? "bg-white" : "overflow-hidden"
      }`}
    >
      {/* VIDEO chỉ cho HOME */}
      {variant === "home" && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
          >
            <source src="/videos/protein-platform-video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-white/40 backdrop-blur-[4px]" />
        </>
      )}

      {/* IMAGE BACKGROUND cho PRODUCTS */}
      {variant === "products" && (
        <div className="absolute inset-0">
          <Image
            src="/images/products/bg-products.jpeg"
            alt="Protein background"
            fill
            className="object-cover opacity-10"
          />
        </div>
      )}

      <div className="relative z-10 container text-center max-w-3xl text-gray-900">
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/pro1.png"
            alt="Profectein"
            width={200}
            height={60}
            className="object-contain"
          />
        </div>

        <h2 className="mb-6 text-3xl md:text-4xl font-bold leading-tight">
          {variant === "products"
            ? "Profectin™ Protein Platform"
            : "Pea Protein Platform Engineered for Performance"}
        </h2>

        <p className="mb-10 max-w-2xl mx-auto text-gray-700 leading-relaxed">
          Developed using proprietary processing technologies, delivering
          superior solubility, clean taste profile, and scalable performance
          across diverse food and beverage applications.
        </p>

        {/* Advantages → FIX style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "High Functionality",
            "Clean Sensory Profile",
            "Optimized Nutrition",
            "Formulation Versatility",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-gray-200 px-4 py-3 text-sm bg-white shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
