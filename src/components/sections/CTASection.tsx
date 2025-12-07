import Image from "next/image";
import { Button } from "../ui";

export default function CTASection() {
  return (
    <section className="py-9 lg:py-12 container mx-auto px-4">
      <div className=" bg-[url('/images/telecommande.jpg')] bg-cover bg-center bg-no-repeat rounded-[60px] overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/75" />
        <div>
          <div className="relative z-10 p-8 md:p-12 lg:px-18 lg:pt-8 lg:pb-10">
            <div className="grid lg:grid-cols-2 gap-4 items-center">
              <div className="space-y-4 lg:space-y-8">
                <p className="text-white font-medium text-sm">
                  Executive TELECOM
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-[45px] font-bold text-white">
                  Pret à profiter des meilleurs divertissements ?
                </h2>
                <div className="xl:hidden flex gap-4 mt-3">
                  <Button
                    variant="secondary"
                    size="md"
                    className="bg-white !text-primary !rounded-full h-max w-full hover:bg-white/90"
                  >
                    Découvrez nos offres
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    className="border-white text-white !rounded-full h-max w-full hover:bg-white/10"
                  >
                    Contactez-Nous
                  </Button>
                </div>
                <p className="text-white text-sm md:max-w-md">
                  Nous sommes toujours disponibles! Rejoignez Executive TELECOM
                  au service de votre divertissement.
                </p>
              </div>
              <div className="hidden xl:flex gap-4">
                <Button
                  variant="secondary"
                  size="md"
                  className="bg-white !text-primary h-max w-full hover:bg-white/90"
                >
                  Découvrez nos offres
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  className="border-white text-white h-max w-full hover:bg-white/10"
                >
                  Contactez-Nous
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
