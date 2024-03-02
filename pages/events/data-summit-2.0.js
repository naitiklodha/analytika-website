import Navbar from "@/components/Navbar";
import Head from "next/head";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  const pageTitle = "Data Summit 2.0";
  const ogImageUrl = "analytika-team.jpeg";
  const siteUrl = "https://analytikanmims.com/";

  const pageDescription =
    "Analytika's flagship event for data science students";

  const textStyle =
    "text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen  to-analytikaYellow";

  return (
    <>
      <Head>
        {/* Title */}
        <title>{pageTitle}</title>

        {/* Meta tags */}
        <meta name="description" content={pageDescription} />

        {/* Open Graph (OG) tags for social media sharing */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <div className="p-4 m-4 flex flex-col mx-4 items-center justify-center md:mx-8">
        <h1
          className={`text-5xl font-extrabold text-center uppercase mb-4 ${textStyle}`}
        >
          Data Summit 2.0
        </h1>
        <div className="p-4">
          <h2 className={` my-4 text-4xl text-center font-bold ${textStyle}`}>
            All 3 days (13th-15th March)
          </h2>
          <h3
            className={`self-start my-4 mt-6 text-3xl font-bold ${textStyle}`}
          >
            Data Carnival
          </h3>
          <div className="md:flex  items-center">
            <Image
              src="/images/carnival.jpeg"
              width={500}
              height={100}
              alt="Data Carnival"
              className="w-full mx-auto mb-8  md:w-[40%]"
            />
            <p className="text-analytikaWhite mb-6 text-xl md:ml-10 ">
              'Data Carnival' is a feast for the senses featuring delectable
              food stalls,thrilling games, and a captivating photobooth. This
              event isn't just about brands showcasing themselves; it's a lively
              playground where visitors can indulge in irresistible treats,
              enjoy exciting activities, and snag exclusive offers. Student can
              immerse themselves in the festive atmosphere, as brands take
              centre stage, promising a day of laughter,fun, and unforgettable
              experiences.
            </p>
          </div>
        </div>
        <div className="p-4">
          <h2 className={` my-6 text-4xl text-center font-bold ${textStyle}`}>
            Day 1 (13th March)
          </h2>
          <h3
            className={`self-start my-2 mt-6 text-3xl font-bold ${textStyle}`}
          >
            Data Hunt
          </h3>
          <div className="md:flex flex-row-reverse gap-12  items-center">
            <Image
              src="/images/data-hunt.jpeg"
              alt="Data Carnival"
              width={500}
              height={100}
              className="w-full mx-auto mb-8  md:w-[40%]"
            />
            <div className="text-analytikaWhite mb-6 text-xl  ">
              'Data Hunt' is a dynamic coding treasure hunt that blends intense
              problem-solving with the thrill of a timed challenge. Participants
              navigate through coding puzzles, each revealing clues to the next,
              in a race to uncover the ultimate treasure. With a ticking timer
              adding an element of urgency, participants showcase their coding
              prowess to unlock each level. This event tests coding skills,
              quick thinking, andadaptability in an adrenaline-packed quest for
              victory.
              <br></br>
              <Link href="/data-hunt" target="_blank">
                <Button className="md:animate-bounce bg-analytikaGreen mt-6 p-4 md:p-4  text-sm md:text-base text-white">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>

          <h3 className={`self-start my-4 text-3xl  font-bold ${textStyle}`}>
            Data Feud
          </h3>
          <div className="md:flex gap-12  items-center">
            <Image
              src="/images/data-feud.png"
              width={500}
              height={100}
              alt="Data Carnival"
              className="w-full mx-auto mb-8  md:w-[40%]"
            />
            <div className="text-analytikaWhite text-xl mb-8 ">
              'Data Feud' is a fast-paced data science quiz competition where
              teamsbuzz in to answer a diverse range of questions on data
              science topics.This engaging event features varied question
              formats, competitive rounds, and a clear scoring system to track
              performance. Led by an expert facilitator, it provides both
              educational insights and networkingchances, with attractive prizes
              awaiting the winning team.
              <br></br>
              <Link href="/data-feud" target="_blank">
                <Button className="md:animate-bounce  bg-analytikaGreen  mt-6 p-4  text-sm md:text-base text-analytikaWhite">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h2 className={` my-6 text-4xl font-bold text-center ${textStyle}`}>
            Day 2 (14th March)
          </h2>
          <h3 className={` mt-6 mb-2 text-3xl font-bold ${textStyle}`}>
            Panel Discussion
          </h3>
          <div className="md:flex flex-row-reverse gap-12  items-center">
            <Image
              src="/images/panel.avif"
              width={500}
              height={100}
              alt="Data Carnival"
              className="w-full mx-auto mb-8  md:w-[40%]"
            />
            <div className="text-analytikaWhite text-xl ">
              Join our free panel discussion focusing on current trends in data
              science, featuring presentations from experts on artificial
              intelligence, explainability, social impact, privacy, and emerging
              technologies. Renowned experts will unveil the future of AI,
              explaining its implications and exploring its potential social
              impact. Whether you're a seasoned professional or someone with a
              general interest in data science, this event is designed for you.
              Participants will have the opportunity to gain insights, ask
              questions, and engage in networking with fellow data enthusiasts.
              Don't miss this chance to stay ahead of the curve and explore the
              hottest trends in data science!
              <br></br>
              <Link href="/panel-discussion" target="_blank">
                <Button className="md:animate-bounce  bg-analytikaGreen  mt-6 p-4  text-sm md:text-base text-analytikaWhite">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>

          <h3
            className={`self-start mb-2 mt-6 text-3xl font-bold ${textStyle}`}
          >
            Algo-Rhythm{" "}
          </h3>
          <div className="md:flex gap-12  items-center">
            <Image
              src="/images/algo-rhtym.jpeg"
              alt="Algo Rhythm"
              width={500}
              height={100}
              className="w-full mx-auto mb-8  md:w-[40%]"
            />
            <p className="text-analytikaWhite mb-4 text-xl ">
              ‘Algo-Rhythm’, an enchanting evening of musical fusion,
              whererhythms and melodies merge seamlessly. With surprises,
              treats, andinteractive moments, Algo-Rhythm promises a night of
              pure musicaldelight, transcending boundaries and creating an
              atmosphere wherethe joy of music takes center stage.
            </p>
          </div>
        </div>
        <div className="p-4">
          <h2 className={` my-6 text-4xl font-bold ${textStyle} text-center `}>
            Day 3 (15th March)
          </h2>
          <h3 className={`self-start my-4 text-3xl font-bold ${textStyle}`}>
            Internship Fair{" "}
          </h3>
          <div className="md:flex flex-row-reverse gap-12  items-center">
            <Image
              src="/images/internship-fair.jpeg"
              alt="Internship Fair"
              width={500}
              height={100}
              className="w-full m-4 md:block md:w-[40%]"
            />
            <div className="text-analytikaWhite text-xl ">
              Analytika’s internship fair is an unmissable career event where
              students can meet with a variety of employers and organizations to
              learn about available internship opportunities. This event aims to
              bring together many companies in one location, and provide
              attendees with the opportunity to network, learn about potential
              internships, and submit applications or resumes on the spot. The
              internship fair is designed to help students find opportunities to
              gain hands-on experience in their field of study, build their
              professional networks, and increase their chances of securing
              full-time employment after graduation.
              <br></br>
              <Link href="/internship-fair" target="_blank">
                <Button className="md:animate-bounce  bg-analytikaGreen  mt-6 p-4 text-base text-analytikaWhite">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
