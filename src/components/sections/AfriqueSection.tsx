import { Button } from "../ui";

export default function AfriqueSection() {
  return (
    <section className="py-8 lg:py-16 bg-[#FAFAFB]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left ">
              Offrez vous l&apos;Afrique en <br /> Numérique{" "}
              <span role="img" aria-label="rocket">
                🚀
              </span>
            </h2>
          </div>
          <div>
            <Button
              variant="primary"
              size="lg"
              className="whitespace-nowrap !rounded-full"
            >
              Download Free Chapter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
