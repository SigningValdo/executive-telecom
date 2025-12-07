import Image from "next/image";
import { Button, FeatureBadge, ChannelTag } from "../ui";

const features = [
  {
    icon: (
      <Image
        src="/hd.svg"
        alt="Haute Définition"
        width={50}
        height={50}
        className="w-6 h-6 lg:h-[50px] lg:w-[50px]"
      />
    ),
    label: "Haute Définition",
  },
  {
    icon: (
      <Image
        src="/chaine.svg"
        alt="Plus de 200 chaînes"
        width={50}
        height={50}
        className="w-6 h-6 lg:h-[50px] lg:w-[50px]"
      />
    ),
    label: "Plus de 200 chaînes",
  },
  {
    icon: (
      <Image
        src="/tv.svg"
        alt="Enregistrement Facile"
        width={50}
        height={50}
        className="w-6 h-6 lg:h-[50px] lg:w-[50px]"
      />
    ),
    label: "Enregistrement Facile",
  },
  {
    icon: (
      <Image
        src="/service.svg"
        alt="EServices connectés"
        width={50}
        height={50}
        className="w-6 h-6 lg:h-[50px] lg:w-[50px]"
      />
    ),
    label: "Services connectés",
  },
];

const channels = ["Ciné +", "Sport TV", "Kids", "Documentaire"];

export default function TVSection() {
  return (
    <section className=" lg:bg-[#68696D1A]">
      <div className="p-4 xl:px-0 lg:mr-auto ">
        <div className=" grid xl:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative hidden xl:block">
            <div className="absolute top-0 left-1 z-10">
              <Image
                src="/images/ellipse.png"
                alt="Décodeur Executive Telecom"
                height={600}
                width={600}
                className="object-contain h-[700px] w-auto"
              />
            </div>
            <div className="relative z-10">
              <Image
                src="/images/decodeur.png"
                alt="Décodeur Executive Telecom"
                height={600}
                width={600}
                className="object-contain h-[700px] w-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-xs md:text-lg lg:text-2xl">
            <h2 className="text-2xl text-center lg:text-left md:text-4xl lg:text-[55px] font-semibold mb-6">
              Le Meilleur de la Télévision Simplement
            </h2>
            <div className="relative justify-center flex items-center xl:hidden">
              <div className="">
                <Image
                  src="/images/ellipse2.png"
                  alt="Décodeur Executive Telecom"
                  height={600}
                  width={600}
                  className="object-contain h-[350px] w-auto"
                />
              </div>
              <div className="absolute -top-4 z-10">
                <Image
                  src="/images/decodeur.png"
                  alt="Décodeur Executive Telecom"
                  height={600}
                  width={600}
                  className="object-contain h-[328px] w-auto"
                />
              </div>
            </div>
            <p className="mb-8 leading-relaxed">
              Accédez à un monde de divertissement avec notre décodeur
              satellite. Profitez d&apos;une expérience visuelle exceptionnelle,
              d&apos; interfaces intuitives et de fonctionnalités innovantes
              pour une expérience TV inégalée.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 lg:gap-10 mb-8">
              {features.map((feature, index) => (
                <FeatureBadge
                  key={index}
                  icon={feature.icon}
                  label={feature.label}
                />
              ))}
            </div>

            {/* Channels */}
            <div className="mb-8">
              <p className="text-xs md:text-lg lg:text-2xl mb-4">
                Aperçu de nos chaînes phares
              </p>
              <div className="flex flex-wrap gap-3">
                {channels.map((channel) => (
                  <ChannelTag key={channel} name={channel} />
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button variant="primary" size="lg">
              Découvrez nos offres
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
