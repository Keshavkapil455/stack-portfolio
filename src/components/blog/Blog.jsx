import img1 from "../../assets/images/blog/RestApi.jpeg";
import img2 from "../../assets/images/blog/JWT.jpeg";
import img3 from "../../assets/images/blog/MYSQL.jpeg";
import img4 from "../../assets/images/blog/Database.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
 {
  id: 1,
  image: img1,
  date: "22 Jan, 2024",
  comments: 246,
  title: "Designing Scalable REST APIs for Modern Applications",
  link: "#!",
},
{
  id: 2,
  image: img2,
  date: "22 Oct, 2024",
  comments: 182,
  title: "JWT Authentication Flow Explained with Real Examples",
  link: "#!",
},
{
  id: 3,
  image: img3,
  date: "15 Sep, 2025",
  comments: 134,
  title: "Database Design Principles Every Backend Developer Should Know",
  link: "#!",
},
{
  id: 4,
  image: img4,
  date: "10 Nov, 2024",
  comments: 201,
  title: "Building Secure & Performant Backend Architectures",
  link: "#!",
},
{
  id: 5,
  image: img2,
  date: "05 April, 2025",
  comments: 167,
  title: "Optimizing API Performance with Caching Strategies",
  link: "#!",
},
{
  id: 6,
  image: img1,
  date: "18 Jun, 2025",
  comments: 219,
  title: "Error Handling & Validation Best Practices in Backend APIs",
  link: "#!",
},

];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Blog</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Check out my recent blog posts where I share insights on design,
          development, and the latest industry trends.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
