import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="bg-analytikaBlack min-h-screen">
      <Navbar />
      <section className="flex flex-col m-12 items-center justify-center text-center text-white">
        <h1 className="uppercase text-4xl font-semibold mb-6">
          About{" "}
          <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-analytikaGreen to-analytikaYellow">
            Analytika
          </span>
        </h1>
        <p className="mx-8 text-lg leading-relaxed">
          Analytika, founded by the visionary trio of Om Agrawal, Shreya Govil,
          and Vanshaj Ajmera, stands as a thriving and influential data science
          club at NMIMS (Narsee Monjee Institute of Management Studies). This
          club is dedicated to cultivating a data-centric mindset among its
          members, fostering an environment where the potential of data-driven
          insights is fully realized.
        </p>
        <p className="mx-8 mt-4 text-lg leading-relaxed">
          Flagship events like the Data Summit exemplify Analytika's commitment
          to excellence. This annual gathering brings together leading experts,
          data scientists, and students to delve into the latest trends,
          challenges, and opportunities in the realm of data science. It serves
          as a forum for thought-provoking discussions, practical workshops, and
          inspirational keynote speeches.
        </p>
        <p className="mx-8 mt-4 text-lg leading-relaxed">
          Analytika's impact extends beyond the confines of traditional
          education. The club hosts interactive challenges, including the
          popular "Play Data," where participants are tasked with analyzing
          real-world datasets to extract meaningful insights. Additionally, the
          "Data Feud" quiz competition tests participants' knowledge across
          various facets of data science, encouraging continuous learning in an
          engaging format.
        </p>

        <p className="mx-8 mt-4 text-lg leading-relaxed">
          In essence, Analytika is not just a club; it's a dynamic ecosystem
          where students are inspired, challenged, and equipped to become the
          data leaders of tomorrow. Through their efforts, they are not only
          building their own promising careers but also contributing to a
          brighter, data-informed future for society at large.
        </p>
      </section>
    </main>
  );
}
