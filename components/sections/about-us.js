import Image from "next/image";

export default function About() {
  return (
    <article className="bg-analytikaBlack pt-20" id="about-us">
      <div className="flex flex-col pt-8 items-center justify-center text-white">
        <h1 className="uppercase text-3xl md:text-4xl  font-bold mb-6">
          About{" "}
          <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-analytikaGreen to-analytikaYellow">
            Analytika
          </span>
        </h1>
        <section className="md:flex flex-col lg:flex-row">
          <figure className="my-8 mx-4">
            <Image
              src="/analytika-team.jpeg"
              alt="Analytika Team"
              width={0}
              height={0}
              sizes="100vw"
              className="transition ease-linear delay-100 md:hover:scale-105 w-full rounded-lg shadow-lg"
            />
          </figure>

          <section className="mt-4 self-center md:self-baseline max-w-full md:max-w-[65ch] text-lg  font-light  [&>*]:mx-4  [&>*]:mt-4  [&>*]:text-md  [&>*]:leading-relaxed ">
            <p>
              Analytika, founded by Om Agrawal, Shreya Govil, and Vanshaj
              Ajmera, is a thriving data science club at NMIMS (Narsee Monjee
              Institute of Management Studies). We are dedicated to cultivating
              a data-centric mindset and fostering an environment for realizing
              the potential of data-driven insights.
            </p>
            <p>
              Our flagship event, the Data Summit, brings together experts, data
              scientists, and students to explore the latest trends, challenges,
              and opportunities in data science. It serves as a platform for
              thought-provoking discussions, practical workshops, and
              inspirational keynote speeches.
            </p>
            <p>
              We also host a variety of workshops and events throughout the year
              to help students develop technical skills and gain exposure to the
              industry.
            </p>
          </section>
        </section>
      </div>
    </article>
  );
}
