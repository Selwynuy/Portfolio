import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CertsCarousel = ({ certs = [] }) => {
  return (
    <div className="relative w-full">
      {/* custom nav arrows */}
      <div className="cert-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-4 xl:-translate-x-6 cursor-pointer text-white/60 hover:text-accent transition-colors duration-300">
        <BsArrowLeft className="text-2xl" aria-hidden />
      </div>
      <div className="cert-next absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-4 xl:translate-x-6 cursor-pointer text-white/60 hover:text-accent transition-colors duration-300">
        <BsArrowRight className="text-2xl" aria-hidden />
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        centeredSlides
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".cert-prev",
          nextEl: ".cert-next",
        }}
        modules={[Navigation, Pagination]}
        className="w-full pb-16"
      >
        {certs.map((cert, i) => (
          <SwiperSlide key={i}>
            <div className="mx-auto w-full max-w-[420px] bg-[rgba(65,47,123,0.15)] rounded-xl border border-white/10 overflow-hidden">
              {/* image top — full width, fixed height */}
              <div className="w-full h-[280px] bg-white/5 border-b border-white/10 overflow-hidden">
                {cert.image ? (
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={420}
                    height={280}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <span className="text-[13px] text-white/25 text-center px-4 leading-relaxed">
                    {cert.title}
                  </span>
                )}
              </div>

              {/* text bottom */}
              <div className="p-5">
                <div className="text-white font-semibold text-[15px] leading-snug">
                  {cert.title}
                </div>

                {cert.info && (
                  <div className="text-[12px] text-white/60 mt-1">
                    {cert.info}
                  </div>
                )}

                <div className="text-[11px] text-white/45 mt-2 flex flex-wrap gap-x-2 gap-y-1">
                  {cert.site && <span>{cert.site}</span>}
                  {cert.category && <span>• {cert.category}</span>}
                  {cert.stage && <span>• {cert.stage}</span>}
                </div>

                {cert.credential && (
                  <div className="text-[11px] text-white/35 mt-2 break-all">
                    Credential: {cert.credential}
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CertsCarousel;

