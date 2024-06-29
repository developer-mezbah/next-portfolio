import LayoutComponent from "./LayoutComponent";

export const metadata = {
  title: "Dashboard | Mezbah Uddin",
  description:
    "I am Mezbah Uddin, a dedicated and passionate full stack web developer with a keen eye for detail and a commitment to creating seamless, user-friendly web experiences. With expertise in both front-end and back-end technologies, I specialize in building robust, scalable, and dynamic web applications. My proficiency spans across HTML, CSS, JavaScript, and various back-end frameworks, enabling me to deliver comprehensive solutions tailored to meet diverse client needs. I thrive in collaborative environments, continuously seeking opportunities to innovate and enhance the digital landscape through cutting-edge web development practices.",
  openGraph: {
    title:
      "Hi, I'am Mezbah Uddin I'm software engineer.High level experience in web design, development and knowledge,And producing quality work.",
    images: [
      "https://res.cloudinary.com/dizwg3tzh/image/upload/v1719684555/portfolio/jfi9jm0bc7xvfzyv9ofe.png",
    ],
    description: "This is my portfolio's Hero sections",
  },
};

export default function Layout({ children }) {
  return (
    <>
      <LayoutComponent>{children}</LayoutComponent>
    </>
  );
}
