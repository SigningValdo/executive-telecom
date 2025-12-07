import Image from "next/image";
import { Button } from "../ui";

export default function AboutSection() {
  return (
    <section className="pb-9 lg:pb-0 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-5 items-center">
          {/* Content */}
          <div>
            <h2 className="text-2xl text-center lg:text-left md:text-4xl lg:text-[55px] font-bold">
              A propos de Nous
            </h2>
            <div className="relative px-5 pt-4 lg:hidden">
              <div className="relative h-[254px] md:h-[389px] rounded-[24px] overflow-hidden">
                <Image
                  src="/images/about.jpg"
                  alt="À propos de nous"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="pb-6 pt-4 text-xs md:text-lg lg:text-2xl">
              Executive Telecom est une société du Groupe NOUBROU HOLDING.Elle
              com- mercialise les bouquets de télévisions africaines et
              internationales en numé rique sur l’Afrique sub-saharienne. Elle
              vise à offrir au plus grand nombre de ménages africains une offre
              télévisée de qualité à un prix abordable et ambi tionne de devenir
              l’un des leaders du marché de la télévision payante en Afrique.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button variant="primary" size="lg">
                En savoir plus
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative h-[389px] rounded-[24px] overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="À propos de nous"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
