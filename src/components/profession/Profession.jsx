import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "I build responsive, fast, and interactive user interfaces using React.js, Tailwind CSS, Bootstrap, HTML, CSS, and JavaScript.",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "I develop secure, scalable, and high-performance backend systems using modern frameworks, APIs, and databases.",
  },
  {
    id: 3,
    title: "Full Stack Solutions",
    description:
      "I create complete web applications by seamlessly integrating frontend and backend technologies with optimized performance and clean architecture.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>

        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I am a Full Stack Developer specializing in building complete web
            applications using modern frontend and backend technologies.
          </p>

          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My expertise includes React.js, Tailwind CSS, Bootstrap, JavaScript,
            HTML, CSS for frontend, and robust backend development with secure
            APIs and scalable architectures.
          </p>
        </div>

        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Let’s Work Together
        </a>
      </div>

      <div>
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
