import Image from "next/image";
import { Inter } from "next/font/google";
import { groq } from "next-sanity";
import localFont from 'next/font/local'
import sanityClient from "@/data/client";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/about-us";
import Events from "@/components/sections/events";
import TeamPage from "@/components/sections/team";
import ContactUs from "@/components/sections/contact-us";


const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({src:"./coolvetica rg.ttf"});

export default function Home({ teamMembers,events }) {
  return (
    <main className={`min-h-screen bg-analytikaBlack ${myFont.className} `}>
      <Navbar />
      <section className="flex flex-col-reverse mt-8 md:flex-row justify-around">
        <h1 className="text-6xl font-extrabold mt-12 md:mt-20 ml-10 tracking-wide mb-6 md:mb-0">
          The only
          <br />{" "}
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow">
            Data Science
          </span>{" "}
          <br />
          club of NMIMS
        </h1>
        <Image
          className="md:hover:scale-110"
          src="Hero-illustration.svg"
          width={600}
          height={300}
          alt="illustration"
        />
      </section>
      <About />
      <Events events={events}/>
      <TeamPage teamMembers={teamMembers} />
      <ContactUs />
    </main>
  );
}
export async function getStaticProps() {
  // Fetch team members from Sanity
  const query = groq`*[_type == "team"]{_id, name, position, department, role, "image": image.asset->}`;
  const teamMembers = await sanityClient.fetch(query);
  const Eventquery = `*[_type == 'events'] {
    name,
    description,
    image {
      asset-> {
        _id,
        url
      },
      alt
    },
    gallery {
      asset-> {
        _id,
        url
      },
      alt
    }
  }`;

  const events = await sanityClient.fetch(Eventquery);
  return {
    props: {
      teamMembers,
      events,
    },
  };
}
