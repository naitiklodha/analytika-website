import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` min-h-screen  bg-analytikaBlack ${inter.className}`}>
      <Navbar />
      <section className="flex flex-col-reverse mt-4 md:flex-row justify-around">
        <h1 className="text-6xl mt-12 md:mt-20 ml-10 tracking-wide mb-6 md:mb-0">
          The only
          <br />{" "}
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow">
            Data Science
          </span>{" "}
          <br />
          club of NMIMS
        </h1>
        <Image
          src="Hero-illustration.svg"
          width={600}
          height={300}
          alt="illustration"
        />
      </section>
    </main>
  );
}
