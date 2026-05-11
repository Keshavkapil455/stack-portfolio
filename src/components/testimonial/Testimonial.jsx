import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Keshav is a highly skilled software developer with excellent problem-solving abilities and strong technical expertise.",
    quote: `He played a key role in building scalable web applications and integrating complex APIs. His understanding of both frontend and backend technologies helped us deliver high-quality solutions efficiently.`,
    name: "Gourav Choudhary",
    designation: "Founder & CEO, Gazania Infotech",
  },
  {
    message:
      "An extremely dedicated and reliable developer who consistently delivers clean and optimized code.",
    quote: `Keshav’s work on frontend development using React and backend integration significantly improved our system performance and user experience. He is proactive, detail-oriented, and a great team player.`,
    name: "Ankit Verma",
    designation: "Tech Lead, Patanjali Yogpeeth",
  },
  {
    message:
      "A professional full stack developer with strong technical skills and a great attitude towards teamwork.",
    quote: `From responsive UI design to backend API development, Keshav handled everything with efficiency and precision. His commitment to quality and performance truly stands out.`,
    name: "Neha Singh",
    designation: "Operations Manager, Patanjali Yogpeeth",
  },
];


const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25 mt-5">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
