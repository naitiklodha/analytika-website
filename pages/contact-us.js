import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="md:flex justify-around mt-8">
        <div>
          <h3 className="text-lg">Any queries?</h3>
          <h1 className="font-semibold text-6xl mb-8 text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow">
            CONTACT US
          </h1>
          <div className="flex p-4 border-2 border-gray-200 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="32"
              viewBox="0 0 60 48"
              fill="none"
            >
              <path
                d="M54 47.4217H6C4.4087 47.4217 2.88258 46.7972 1.75736 45.6855C0.632141 44.5738 0 43.0661 0 41.494V5.66986C0.0672979 4.14285 0.729027 2.70054 1.84703 1.64405C2.96504 0.587563 4.45291 -0.00144411 6 2.65893e-06H54C55.5913 2.65893e-06 57.1174 0.624527 58.2426 1.73619C59.3679 2.84785 60 4.35559 60 5.92771V41.494C60 43.0661 59.3679 44.5738 58.2426 45.6855C57.1174 46.7972 55.5913 47.4217 54 47.4217ZM6 11.4642V41.494H54V11.4642L30 27.2675L6 11.4642ZM8.4 5.92771L30 20.1542L51.6 5.92771H8.4Z"
                fill="#FEFAFA"
              />
            </svg>
            <h3 className="ml-4 text-lg">dscnmims@gmail.com</h3>
          </div>
        </div>
        <div className="text-md flex flex-col">
          <input
            type="text"
            placeholder="Name"
            className="border-gray-200 bg-transparent border-2 rounded-md p-2 m-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-gray-200 bg-transparent border-2 rounded-md p-2 m-2"
          ></input>
          <textarea
            placeholder="Message"
            className="border-gray-200 bg-transparent border-2 rounded-md p-2 m-2"
          ></textarea>
          <input
            type="submit"
            className="p-4 bg-gradient-to-tr from-analytikaGreen to bg-analytikaYellow rounded-lg"
          ></input>
        </div>
      </section>
    </>
  );
}
