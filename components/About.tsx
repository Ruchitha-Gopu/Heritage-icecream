import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="bg-cream py-16 md:py-24">
      <div className="container-page grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-scoop">
            <Image
              src="/images/about.jpg"
              alt="Heritage Ice Cream Parlour shop (placeholder — replace with a real shop photo)"
              fill
              sizes="(max-width: 768px) 90vw, 500px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <h2 className="font-display text-3xl font-semibold text-cocoa md:text-4xl">
            Welcome to Heritage Ice Cream Parlour
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-cocoa/80 md:text-lg">
            <p>
              Welcome to Heritage Ice Cream Parlour, Cherukupalli — a place
              where delicious flavors, quality products and memorable moments
              come together.
            </p>
            <p>
              We offer a wide variety of ice creams, dry fruit ice creams,
              special faloodas, badam milk, Gulab Jamun with Ice Cream and
              many other delicious treats.
            </p>
            <p>
              Our goal is to provide delicious products and a welcoming
              environment where families, friends and children can enjoy
              their favorite desserts together.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
