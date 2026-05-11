import WorkSteps from "./WorkSteps";
import workprocessImage from "../../assets/images/requirment.png";
import  ApiImage from "../../assets/images/API.png";
import BackendImage from "../../assets/images/Backend.png";
import TesterImage from "../../assets/images/tester.png";


const workStepData = [
  {
    id: 1,
    title: "Requirement Analysis",
    description:
      "Understanding project requirements, business logic, and data flow to plan a scalable backend architecture.",
    image: workprocessImage,
  },
  {
    id: 2,
    title: "API & Database Design",
    description:
      "Designing RESTful APIs, database schemas, and relationships using Laravel, MySQL, and best practices.",
    image : ApiImage,
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "I design seamless digital experiences with precision, purpose, and a touch of elegance.",
   image: BackendImage,
  },
  {
    id: 4,
    title: "Testing & Deployment",
    description:
      "Testing APIs, handling edge cases, optimizing performance, and deploying reliable backend solutions.",
    image: TesterImage,
  },
];

const WorkProcess = () => {
  return (
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="work-process"
    >
      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">Work Process</p>
        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
            I build scalable, secure backend systems using Laravel, PHP, and MySQL,
          focusing on clean architecture and performance-driven APIs.
        </p>
        <p className="mt-6 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
         My backend solutions power modern web applications with reliable data
          handling, authentication, and seamless frontend integration.
        </p>
      </div>

      <div className="grid xs:grid-cols-2 justify-end my-2 w-fit mx-auto ">
        {workStepData.map((data, index) => {
          return (
            <WorkSteps
              data={data}
              style={`max-xs:mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 ${
                index % 2 == 1 ? "xs:ms-3 xs:mt-6 " : "xs:mb-6"
              }`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
