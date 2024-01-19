import { useState } from "react";
import "../build/output.css";

//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

const experienceData = {
  gata: {
    id: 1,
    name: "GATA Fx",
    role: "Software Engineer",
    duration: "Jan 2024 - Present",
    img: "/gata.jpg",
    responsiblities: `  Developed a responsive and user-friendly 4-page
    business website using modern web technologies.
    - Implemented both front-end (HTML, CSS,
    JavaScript)
    
    Payment Integration:
- Successfully integrated a secure payment
gateway (Cryptocurrency) for users to purchase packages.
- Ensured PCI compliance and implemented secure
payment handling practices.

SEO Optimization:
- Implemented SEO best practices to enhance the
website's visibility on search engines.
- Utilized proper meta tags, heading structures, and
other SEO techniques.

Performance Optimization:
- Optimized website performance through
techniques such as lazy loading images, minimizing
HTTP requests, and utilizing caching strategies.

Responsive Design:
- Ensured a seamless user experience across
various devices and screen sizes by implementing
responsive design principles.
    `,
    techstack: "⌀ Vite, ⌀ Git, ⌀ Tailwind, ⌀ Javascript, ⌀ Figma",
  },

  Freelance: {
    id: 2,
    name: "Freelance",
    role: "Software Engineer",
    duration: "sept 2023 - Present",
    img: "/freelance.jpg",
    responsiblities: ` 📌 Designing and developing both front-end and back-end components of software products.

    📌 Participating in the entire software development lifecycle, from requirements gathering to deployment and maintenance.
    
    📌 Implementing Continuous Integration and Continuous Deployment (CI/CD) pipelines to ensure smooth and automated software delivery.
    
    📌 Containerizing applications using Docker and orchestrating them with Kubernetes for scalability and manageability.
    
    📌 Writing and implementing automation tests, including unit tests, integration tests, and end-to-end tests, to ensure software quality.
    
    📌 Evaluating and selecting appropriate technology stacks and tools for various projects and considering niche technologies for specific scenarios.
    
    📌 Collaborating with cross-functional teams to ensure seamless integration and delivery of software products.
    
    📌 Monitoring and optimizing the performance, security, and reliability of applications in production.
    
    📌 Experienced working with niche technologies, to push the boundaries of innovation and deliver high-value products.`,

    techstack: "⌀ Vite, ⌀ Next Js, ⌀ Git, ⌀ Tailwind, ⌀ Javascript, ⌀ Figma »»",
  },

  shutter: {
    id: 3,
    name: "Shutter Movies",
    role: "Software Engineer",
    duration: "May 2023 - Present",
    img: "/shutter.jpg",
    responsiblities: ` • Designed and developed a responsive and visually appealing landing page that     effectively conveyed Shutter's brand and message. 
    • Utilized HTML, CSS, and JavaScript to create an interactive and user-friendly   web interface, improving user engagement and experience. 
    • Collaborated closely with the marketing team to ensure the landing page   aligned with the company's marketing strategies and goals.
    • Implemented SEO best practices to optimize the landing page for search  engine visibility and drive organic traffic. `,

    techstack: "⌀ Tailwind, ⌀ Javascript, ⌀ Git",
  },
  kekchain: {
    id: 4,
    name: "Kekchain Blockchain",
    role: "Software Engineer (intern) & Communinity Executive",
    duration: "Sept 2022 - April 2023",
    img: "/kekchain.png",
    responsiblities: `• Implemented SEO best practices to optimize the landing page for search  engine visibility and drive organic traffic. 
    • Met project deadlines and delivered the landing page on time, showcasing   strong project management and time management skills.
    • Confer with staff, users, and management to establish requirements for new systems or modifications. 
    • Read technical manuals, confer with users, or conduct computer diagnostics to investigate and resolve problems or to provide technical assistance and support.`,
    techstack: "⌀ SASS, ⌀ Git, ⌀ Figma, ⌀ Javascript",
  },
};

function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <section className="relative grid justify-center">
      <h1 className="text-white font-bold text-3xl my-12">Experience</h1>

      <div className=" flex flex-wrap gap-7">
        {Object.keys(experienceData).map((id) => (
          <div
            // id="experience"
            key={id}
            onClick={() => setIsModalOpen(true)}
            className=""
          >
            <div className="">
              <div
                key={id}
                onClick={() => setSelectedExperience(id)}
                className="cursor-pointer hover:scale-105 w-[350px] transition-all ease-in-out duration-200 bg-orange-950 gap-6 rounded-xl flex px-7 py-7 items-center"
              >
                <img
                  className="w-16 h-16 rounded-full"
                  src={experienceData[id].img}
                  alt={`${experienceData[id].name}-logo`}
                />
                <div>
                  <h2 className="font-semibold text-white text-xl">
                    {experienceData[id].name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {experienceData[id].role}
                  </p>
                  <p className="text-sm text-gray-500">
                    {experienceData[id].duration}
                  </p>
                </div>
              </div>

              {/* //MODAL 
              
              {selectedExperience && (
        <div className="modal-wrapper bg-black/70 bg-blend-saturation flex h-[100vh] w-[100vw] justify-center items-center absolute">
          {/* ... rest of your modal code 
        </div>
      )}
              */}
              {selectedExperience && (
                <div
                  onClick={() => setIsModalOpen(false)}
                  className={`modal-wrapper ${
                    isModalOpen ? "visibility" : "hidden"
                  } bg-black/70  bg-blend-saturation flex h-[100vh] w-[100vw] justify-center items-center absolute`}
                >
                  <div className="bg-blur-wrapper bg-black/50 blur-sm w-[100vw] h-[100vh] "></div>
                  <div className="modal absolute z-20 shadow-md transition-all duration-200  ease-in-out rounded-lg bg-[#020817]  border-[1px] px-2 py-4">
                    <div className="flex justify-between  py-3 top">
                      <div className="flex gap-4">
                        <span className="w-14 block bg-green-300 h-14 rounded-full">
                          <img
                            className="w-13 bg-green-300 h-13 rounded-full"
                            src={experienceData[id].img}
                            alt={`${experienceData[id].name}-logo`}
                          />
                        </span>
                        <div className="grid">
                          <h2 className="font-semibold text-white text-xl">
                            {experienceData[id].name}
                          </h2>
                          <p className="text-sm text-gray-500">
                            {experienceData[id].role}
                          </p>
                          <p className="text-sm text-gray-500">
                            Aug 2022 - Jan 2023
                            {experienceData[id].duration}
                          </p>
                        </div>
                      </div>
                      <span>
                        <svg
                          onClick={() => setIsModalOpen(false)}
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 mr-2 cursor-pointer text-white hover:scale-[1.03] font-bold"
                        >
                          <path
                            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </div>

                    <div className="h-[300px] text-white/80 w-[550px] px-2 py-3 rounded-lg my-2 p4 border-[1px] border-yellow-200 shadow overflow-y-scroll overflow-x-hidden">
                      {experienceData[id].responsibilities}
                    </div>

                    <div className="w-[550px] px-2 text-white/50 my-4">
                      <span className="font-semibold text-white text-[22px]">
                        Techstack:
                      </span>
                      <div>{experienceData[id].techstack})</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

//   {selectedExperience && (
//     <div className="modal-wrapper">
//     <div className="modal">
//       <div className="flex top">
//         <div>
//           <img
//             className="w-13 h-13 rounded-full"
//             src={experienceData[selectedExperience].logo}
//             alt={`${experienceData[selectedExperience].name}-logo`}
//           />
//           <div className="grid">
//             <h2 className="font-semibold text-xl">
//               {experienceData[selectedExperience].name}
//             </h2>
//             <p className="text-sm text-gray-500">
//               {experienceData[selectedExperience].role}
//             </p>
//             <p className="text-sm text-gray-500">
//               {experienceData[selectedExperience].duration}
//             </p>
//           </div>
//         </div>
//         <span onClick={closeModal}>
//           <svg
//             width="15"
//             height="15"
//             viewBox="0 0 15 15"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4"
//           >
//             <path
//               d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
//               fill="currentColor"
//               fillRule="evenodd"
//               clipRule="evenodd"
//             ></path>
//           </svg>
//         </span>
//       </div>

//       <div className="h-[300px] w-[550px] rounded-lg my-2 p4 border-[1px] border-yellow-200 shadow overflow-y-scroll overflow-x-hidden">
//         {experienceData[selectedExperience].responsibilities}
//       </div>

//       <div>
//         <span className="bg-yellow-300 p-3">Techstack</span>
//         <div>
//           {/* Render stacks from experienceData[selectedExperience] */}
//           {experienceData[selectedExperience].techstack.map(
//             (stack, index) => (
//               <div key={index}>{stack}</div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
//  )} */}
