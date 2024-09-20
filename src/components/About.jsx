import AboutImage from "../assets/about.webp";
function About() {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
      <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">
        About
      </h2>
      <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
        <div className="mb-8 lg:mb-0">
          <img
            src={AboutImage}
            alt="About Vastuspaze"
            className="w-full h-auto"
          />
        </div>
        <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
          we specialize in transforming living spaces through high-quality
          renovations of living rooms, bathrooms, kitchens, and more. With a
          passion for design and craftsmanship, we bring your vision to life,
          creating functional and stylish homes. Our team of experts ensures
          every project is completed with attention to detail and on time. We
          use top-quality materials to deliver lasting results that enhance the
          beauty and comfort of your home. Let us help you build the perfect
          space tailored to your lifestyle!
        </p>
      </div>
    </section>
  );
}

export default About;
