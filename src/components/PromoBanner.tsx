import heroBanner from "@/assets/hero-banner.jpg";

const PromoBanner = () => {
  return (
    <section className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] overflow-hidden rounded-none sm:rounded-xl md:rounded-2xl mx-auto my-6 sm:my-8">
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Promoção"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative h-full flex items-end pb-6 sm:pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6">
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white drop-shadow-lg">
            Colchão dos seus Sonhos
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white drop-shadow-lg mt-2 sm:mt-3 md:mt-4 max-w-2xl">
            Condições especiais por tempo limitado! Frete grátis a partir de R$ 300
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
