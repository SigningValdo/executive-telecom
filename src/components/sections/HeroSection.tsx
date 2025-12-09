"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import { Button } from "../ui";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="relative  lg:h-[833px] mt-20 flex items-end rounded-[25px] overflow-hidden bg-[url('/images/herosection.jpg')] p-4 lg:p-0 lg:pl-[120px] lg:pb-[120px] bg-center bg-cover ">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl pt-20">
              <div className="max-w-2xl">
                <h1 className="text-2xl md:text-4xl lg:text-[60px] font-bold text-white mb-6 leading-tight">
                  Toute l&apos;émotion du Sport en Direct
                </h1>
                <p className="text-xs md:text-lg lg:text-2xl text-gray-200 mb-8">
                  Ne manquez aucun match de la CAN. Vivez intensément chaque
                  moment avec nos bouquets sports
                </p>
                <div className="flex flex-wrap gap-1 lg:gap-9">
                  <Button variant="primary" size="lg">
                    Découvrez nos offres
                  </Button>
                  <Button variant="secondary" size="lg">
                    S&apos;abonner Maintenant
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative  lg:h-[833px] mt-20 flex items-end rounded-[25px] overflow-hidden bg-[url('/images/herosection1.jpg')] p-4 lg:p-0 lg:pl-[120px] lg:pb-[120px] bg-center bg-cover ">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl pt-20">
              <div className="max-w-4xl">
                <h1 className="text-2xl md:text-4xl lg:text-[60px] font-bold text-white mb-6 leading-tight">
                  Vivez des moments de plaisir En Famille
                </h1>
                <p className="text-xs md:text-lg lg:text-2xl text-gray-200 mb-8">
                  Tous vos programmes télés favoris en live sur nos bouquets
                  family. N’attendez plus et faites en profiter à vos proches.
                </p>
                <div className="flex flex-wrap gap-1 lg:gap-9">
                  <Button variant="primary" size="lg">
                    Découvrez nos offres
                  </Button>
                  <Button variant="secondary" size="lg">
                    S&apos;abonner Maintenant
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="relative  lg:h-[833px] mt-20 flex items-end rounded-[25px] overflow-hidden bg-[url('/images/herosection2.jpg')] p-4 lg:p-0 lg:pl-[120px] lg:pb-[120px] bg-center bg-cover ">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl pt-20">
              <div className="max-w-6xl">
                <h1 className="text-2xl md:text-4xl lg:text-[60px] font-bold text-white mb-6 leading-tight">
                  Soyez au coeur de la culture africaine en Direct
                </h1>
                <p className="text-xs md:text-lg lg:text-2xl text-gray-200 mb-8">
                  Profitez des dernieres nouvelles concernant notre beau
                  continent
                </p>
                <div className="flex flex-wrap gap-1 lg:gap-9">
                  <Button variant="primary" size="lg">
                    Découvrez nos offres
                  </Button>
                  <Button variant="secondary" size="lg">
                    S&apos;abonner Maintenant
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </section>
  );
}
