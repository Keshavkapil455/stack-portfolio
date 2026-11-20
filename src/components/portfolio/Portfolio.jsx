import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/upsc.jpeg";
import card2 from "../../assets/images/portfolio-images/gazania.jpeg";
import card3 from "../../assets/images/portfolio-images/pet.jpeg";
import card4 from "../../assets/images/portfolio-images/Workspace.png";
import card5 from "../../assets/images/portfolio-images/hamro.jpeg";
import card6 from "../../assets/images/portfolio-images/patanjali.jpeg";

const projectData = [
  {
  id: 1,
  image: card1,
  type: "Live Website",
  title: "UPSC Admin Dashboard",
  description:
    "Designed and developed a fully responsive admin dashboard with dynamic card-based components, enabling smooth data display, interactive operations, and an optimized user experience across all devices.",
  link: "https://upsconline.nic.in/login",
},

  {
  id: 2,
  image: card2,
  type: "Live Company Website",
  title: "Gazania Infotech",
  description:
    "Designed and developed a responsive company website with a clean UI, focusing on clear content structure, performance, and smooth user experience across all devices.",
  link: "https://gazaniainfotech.com",
},

  {
  id: 3,
  image: card3,
  type: "Live Website",
  title: "PetLeague",
  description:
    "Worked on a live web application by fixing critical UI bugs, improving admin panel usability, and developing winner certificate download pages for smooth user access.",
  link: "https://www.petleague.co.uk/",
},

  {
  id: 4,
  image: card4,
  type: "E-commerce (Full-Stack)",
  title: "Personal Project",
  description:
    "Developed a complete e-commerce application with both frontend and backend, implementing REST APIs, authentication, product management, and a fully responsive admin dashboard.",
  link: "#!",
},

 {
  id: 5,
  image: card5,
  type: "Live Website",
  title: "HamroSwabhiman",
  description:
    "Improved a live website by fixing minor UI bugs and designing responsive pages, ensuring a smooth and consistent user experience across devices.",
  link: "https://hamroswabhiman.com",
},

  {
  id: 6,
  image: card6,
  type: "Organization Website",
  title: "PYP Nepal",
  description:
    "Designed responsive pages, updated website content, and integrated a Nepal map to create a localized and user-friendly experience for a Nepal-based organization.",
  link: "#!",
},

];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
