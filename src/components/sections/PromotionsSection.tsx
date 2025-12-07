import Image from "next/image";
import { Button, SectionTitle } from "../ui";

interface PromotionCardProps {
  image: string;
  category: string;
  categoryColor?: string;
  title: string;
  description: string;
}

function PromotionCard({
  image,
  category,
  categoryColor = "text-primary",
  title,
  description,
}: PromotionCardProps) {
  return (
    <div className="group">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <span
        className={`${categoryColor} text-sm font-semibold uppercase tracking-wider`}
      >
        {category}
      </span>
      <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

const promotions = [
  {
    image: "/images/cinema.jpg",
    category: "Offre Speciale",
    categoryColor: "text-primary",
    title: "Le bouquet cinéma à moitié prix",
    description: "",
  },
  {
    image: "/images/divertissement.jpg",
    category: "Nouveau",
    categoryColor: "text-primary",
    title: "Le divertissement Africain vous ouvre de nouvelles portes",
    description: "",
  },
  {
    image: "/images/avenir.jpg",
    category: "A Venir",
    categoryColor: "text-primary",
    title: "Les nouvelles tendances musicales dans nos chaînes",
    description: "",
  },
];

export default function PromotionsSection() {
  return (
    <section className="pt-5 xl:py-20 bg-white">
      <div className=" px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Promotions et Evènements à ne pas manquer"
          subtitle="Restez à l'affut de nos offres spéciales, des grands évènements sportifs et culturels ainsi que de nos dernières campagnes"
        />

        {/* Featured Event */}
        <div className="mb-16 container mx-auto px-4">
          <div className="grid gap-8 items-center">
            <div className="relative h-[280px] md:h-[700px] xl:h-[984px] rounded-2xl overflow-hidden">
              <Image
                src="/images/coupe.jpg"
                alt="Coupe du Monde"
                fill
                className="object-cover"
              />
            </div>
            <div className=" flex flex-col lg:flex-row items-center lg:items-end text-center lg:text-left justify-between gap-4 ">
              <div className="text-sm md:text-lg lg:text-2xl max-w-[800px]">
                <p className="text-primary font-semibold uppercase tracking-wider">
                  Événements Sportifs
                </p>
                <h2 className="lg:hidden text-2xl md:text-4xl lg:text-5xl mt-9 mb-2">
                  <strong>Coupe Du Monde :</strong>
                  <br /> Vibrez au rythme du Football !
                </h2>
                <h2 className=" hidden lg:blocktext-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mt-9 mb-2">
                  Coupe Du Monde : Vibrez au rythme du Football !
                </h2>
                <p className="">
                  Toutes les rencontres en direct et en exclusivité sur nos
                  chaînes
                </p>
              </div>
              <div className="">
                <Button
                  variant="primary"
                  size="lg"
                  className="!rounded-full w-max"
                >
                  Souscrivez
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <PromotionCard key={index} {...promo} />
          ))}
        </div>
      </div>
    </section>
  );
}
