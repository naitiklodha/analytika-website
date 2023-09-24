import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <main className="bg-analytikaBlack min-h-screen">
      <Head>
        <title>About Analytika</title>
      </Head>
      <Navbar />
      <section className="flex flex-col m-8 items-center justify-center md:mx-24 text-white">
        <h1 className="uppercase text-4xl font-semibold mb-6">
          About{" "}
          <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-analytikaGreen to-analytikaYellow">
            Analytika
          </span>
        </h1>
        <div className="my-8 mx-4">
          <Image
            src="/analytika-team.jpeg" // Replace with the image URL of the Analytika team
            alt="Analytika Team"
            width={800}
            height={200}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <p className="mx-4 mt-4 text-lg leading-relaxed">
          Analytika, founded by Om Agrawal, Shreya Govil, and Vanshaj Ajmera, is
          a thriving data science club at NMIMS (Narsee Monjee Institute of
          Management Studies). We are dedicated to cultivating a data-centric
          mindset and fostering an environment for realizing the potential of
          data-driven insights.
        </p>
        <p className="mx-4 mt-4 text-lg leading-relaxed">
          Our flagship event, the Data Summit, brings together experts, data
          scientists, and students to explore the latest trends, challenges, and
          opportunities in data science. It serves as a platform for
          thought-provoking discussions, practical workshops, and inspirational
          keynote speeches.
        </p>

        <p className="mx-4 mt-4 text-lg leading-relaxed">
          Beyond education, Analytika hosts interactive challenges like "Play
          Data," where participants analyze real-world datasets for meaningful
          insights. Our "Data Feud" quiz competition tests participants'
          knowledge across various data science facets, promoting continuous
          learning in an engaging format.
        </p>
        <p className="mx-4 mt-4 text-lg leading-relaxed">
          Analytika is more than just a club; it's a dynamic ecosystem inspiring
          students to become data leaders. Through our efforts, we build
          promising careers and contribute to a brighter, data-informed future
          for society.
        </p>
      </section>
    </main>
  );
}
