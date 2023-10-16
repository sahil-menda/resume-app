import { HStack, Headings, VStack } from "./utils";

function Main() {
  return (
    <HStack className="divide-x-2 divide-gray-300">
      <VStack className="w-1/3 gap-2 py-4 mb-8">
        <PersonalDetails />
        <Links />
        <Skills />
      </VStack>
      <VStack className="w-2/3 gap-2 px-8 py-4 mb-8">
        <Profile />
        <Experience />
        <Education />
      </VStack>
    </HStack>
  );
}

export default Main;

function PersonalDetails() {
  return (
    <>
      <Headings className=" mt-4 font-medium">
        DETAILS
        <div className="w-10 border-2 border-black"></div>
      </Headings>
      <VStack className="mt-2">
        <HStack className="font-medium">Address</HStack>
        <HStack className="mt-1 text-sm text-gray-500">Bengaluru</HStack>
        <HStack className="text-sm text-gray-500">India</HStack>
      </VStack>
      <VStack className="mt-2">
        <HStack className="font-medium">Phone</HStack>
        <HStack className="text-sm text-gray-500">
          <a href="tel:+91 9106623708">9106623708</a>
        </HStack>
      </VStack>
      <VStack className="mt-2">
        <HStack className="font-medium">Email</HStack>
        <HStack className="text-sm text-gray-500">
          <a
            href="mailto:sahilymenda@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            sahilymenda@gmail.com
          </a>
        </HStack>
      </VStack>
    </>
  );
}

function Links() {
  return (
    <>
      <Headings className="mt-12 font-medium">
        LINKS
        <div className="w-10 border-2 border-black"></div>
      </Headings>
      <VStack className="gap-4 mt-3">
        <HStack className="text-sm text-gray-500 underline">
          <a
            href="https://www.linkedin.com/in/sahil-menda-31a899186"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </HStack>
        <HStack className="text-sm text-gray-500 underline">
          <a
            href="https://github.com/sahil-menda"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </HStack>
        <HStack className="text-sm text-gray-500 underline">
          <a
            href="https://stately-kelpie-17460c.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            PortFolio
          </a>
        </HStack>
      </VStack>
    </>
  );
}

function Skills() {
  return (
    <>
      <Headings className=" mt-12 font-medium">
        SKILLS
        <div className="w-10 border-2 border-black"></div>
      </Headings>
      <VStack className="gap-3 mt-3">
        <HStack className=" text-sm text-gray-500">NodeJS</HStack>
        <HStack className=" text-sm text-gray-500">ReactJS</HStack>
        <HStack className=" text-sm text-gray-500">MySQL</HStack>
        <HStack className=" text-sm text-gray-500">Java(SpringBoot)</HStack>
        <HStack className=" text-sm text-gray-500">Git</HStack>
        <HStack className=" text-sm text-gray-500">Prisma</HStack>
      </VStack>
    </>
  );
}

function Profile() {
  return (
    <>
      <Headings className="mt-4 font-medium">
        PROFILE
        <div className="w-10 border-2 border-black"></div>
      </Headings>
      <VStack>
        <HStack className="mt-4 text-sm text-gray-500">
          Passionate software developer with 2 years of experience driven by an
          insatiable thirst for knowledge. Dedicated to staying on the cutting
          edge of technology, with an unwavering commitment to lifelong
          learning. Eager to tackle challenges, solve problems, and create
          innovative solutions.
        </HStack>
      </VStack>
    </>
  );
}
function Education() {
  return (
    <>
      <Headings className="mt-12 font-medium">
        EDUCATION
        <div className="w-10 border-2 border-black"></div>
      </Headings>
      <HStack className="">
        <p>Bachelor Of Engineering,BMS College of Engineering</p>
        <p>Bengaluru</p>
      </HStack>
      <HStack className="">
        <p>Aug-2017 - Aug-2021</p>
      </HStack>
      <HStack className=" text-sm text-gray-500">
        Graduated with 8.4 GPA
      </HStack>
    </>
  );
}
function Experience() {
  return (
    <>
      <Headings className="mt-12 font-medium">
        EMPLOYMENT HISTORY
        <div className="w-10 border-2 border-black"></div>
      </Headings>
      <HStack className="">
        <p>
          Software Engineer-II,Rulezero Technology Solutions Private Limited
        </p>
        <p>Bengaluru</p>
      </HStack>
      <HStack className="">
        <p>Aug-2021 - Present</p>
      </HStack>
      <VStack className="">
        <HStack className=" text-sm text-gray-500">
          &#x2022; Created a RESTful API that allowed for seamless integration
          with other applications
        </HStack>
        <HStack className=" text-sm text-gray-500">
          &#x2022; Implemented a Responsive Design that allowed the application
          to be used on various devices with the same user experience
        </HStack>
        <HStack className=" text-sm text-gray-500">
          &#x2022; Improved the application performance by X% by optimizing the
          back-end code
        </HStack>
        <HStack className=" text-sm text-gray-500">
          &#x2022; Developed a secure authentication system that ensured user
          privacy and data security
        </HStack>
        <HStack className=" text-sm text-gray-500">
          &#x2022; Refactored legacy code to improve reliability, scalability and
          maintainability
        </HStack>
      </VStack>
    </>
  );
}
