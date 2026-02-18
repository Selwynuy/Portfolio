import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxCrop,
    title: "Next.js Development",
    description:
      "Modern Next.js sites/apps (routing, data-fetching, SEO, performance).",
  },
  {
    Icon: RxPencil2,
    title: "UI Implementation",
    description: "Responsive UI builds from designs with Tailwind + component systems.",
  },
  {
    Icon: RxDesktop,
    title: "API & Integrations",
    description: "Auth, forms, payments, and third-party integrations that don’t break.",
  },
  {
    Icon: RxReader,
    title: "Security Review",
    description: "Practical app hardening: input validation, auth/session, OWASP checks.",
  },
  {
    Icon: RxRocket,
    title: "Penetration Testing",
    description: "Web pentesting with clear reports + fixes you can actually implement.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="w-full h-[260px] sm:h-[300px] pb-10"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i} className="h-full">
          <div className="bg-[rgba(65,47,123,0.15)] h-full rounded-xl px-6 py-8 flex flex-col justify-between gap-y-6 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            <div className="space-y-4">
              {/* icon */}
              <div className="text-4xl text-accent">
                <item.Icon aria-hidden />
              </div>

              {/* title & description */}
              <div>
                <div className="mb-2 text-lg font-semibold text-white">
                  {item.title}
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* arrow */}
            <div className="text-3xl text-white/50 flex justify-end">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
