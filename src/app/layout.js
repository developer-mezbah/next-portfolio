import BgSnow from "@/components/Others/BgSnow";
import TransitionProvider from "@/components/Others/TransitionProvider";
import "@/utils/css/Animation.css";
import "@/utils/css/Custom.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import AosHook from "@/utils/AosHook";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Mezbah Uddin",
  description:
    "I am Mezbah Uddin, a dedicated and passionate full stack web developer with a keen eye for detail and a commitment to creating seamless, user-friendly web experiences. With expertise in both front-end and back-end technologies, I specialize in building robust, scalable, and dynamic web applications. My proficiency spans across HTML, CSS, JavaScript, and various back-end frameworks, enabling me to deliver comprehensive solutions tailored to meet diverse client needs. I thrive in collaborative environments, continuously seeking opportunities to innovate and enhance the digital landscape through cutting-edge web development practices.",
  keywords: [
    "Mezbah uddin",
    "portfolio",
    "portfolio with dashboard",
    "react project",
    "next.js project",
    "react and next.js project",
    "npm",
    "blogs",
    "web Projects",
    "IELTS",
    "English learning",
    "Developer Mezbah Uddin",
    "Full stack web developer mezbah uddin",
    "bangladeshi web developer",
    "developer of bangladesh",
    "proficent web developer",
    "blogs web page",
    "full stack web site ",
    "CSE student Mebah uddin",
    "computer technolody, Mebah Uddin",
    "Eshikhon student mezbah uddin ",
    "comilla web developer",
    "dhaka web developer",
    "Prisma",
    "MYSQL",
    "JavaScript Portfolio",
    "Modern Web Development",
    "Web Developer Resume",
    "Software Engineering Student",
    "Web Application Development",
    "Full Stack Projects",
    "JavaScript Frameworks",
    "GraphQL Developer",
    "RESTful API Developer",
    "Node.js Developer",
    "Responsive Web Design",
    "MERN Stack Developer",
    "JavaScript Developer",
    "CSE Student Portfolio",
    "Next.js Developer",
    "React Developer",
  ],
  openGraph: {
    title:
      "Full Stack Developer Portfolio - Mezbah Uddin | Modern Web Solutions",
    images: [
      {
        url: "https://res.cloudinary.com/dqxizxsl0/image/upload/v1720856384/npdmmnsv2li41bijpq23.png",
      },
    ],
    description:
      "Welcome to the portfolio of Mezbah Uddin, a passionate Full Stack Web Developer with a proven track record of delivering high-quality web solutions. I specialize in modern web technologies, including React, Next.js, Node.js, Express, and MongoDB.",
    locale: "bn_Dhaka",
  },
  generator: "Next.js, react.js",
  applicationName: "Mezbah uddin Portfolio, mezbah developer",
  referrer: "origin-when-cross-origin",
  authors: [
    { name: "Mezbah uddin" },
    { name: "Mezbah", url: "https://mezbah.netlify.app/" },
  ],
  creator: "Developer Mezbah Uddin",
  publisher: "Mezbah Uddin",
  formatDetection: {
    email: "developer.mezbah@gmail.com",
    address: "Dhaka, Bangladesh",
    telephone: "+880 1843504994",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={inter.className + " dark-theme"}>
        {/* + " dark-theme" */}

        <TransitionProvider>
          <AosHook>{children}</AosHook>
        </TransitionProvider>
        <BgSnow />
        <Toaster />
      </body>
    </html>
  );
}
