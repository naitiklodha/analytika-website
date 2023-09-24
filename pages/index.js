import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // Sample gallery images from Unsplash
  const galleryImages = [
    "\https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1539&q=80",
    "\https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80",
    "\https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1539&q=80",
    "\https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80",
    "\https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1539&q=80",
  ];

  return (
    <main className={`min-h-screen bg-analytikaBlack ${inter.className}`}>
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

      {/* Gallery Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <div className="font-extrabold text-5xl my-4 text-center text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow">
            GALLERY
          </div>
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden m-2">
                <Image src={image} width={400} height={300} alt={`Image ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
