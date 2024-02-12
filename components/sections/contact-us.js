import Link from "next/link";
import { useRef } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = process.env.NEXT_PUBLIC_APPSCRIPT_URL;
    const data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      mode: "no-cors",
    };

    fetch(url, requestOptions)
      .then((response) => {
        console.log(response);
        alert("Message sent sucessfully!");
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      })

      .catch((error) => {
        console.error("Error:", error);
        // Handle any errors that occurred during the request
      });
  };

  return (
    <section className="md:flex md:justify-center mt-16 pt-20" id="contact-us">
      <div className="max-w-md mx-6 md:max-w-xl md:mx-0 md:mr-16">
        <p className="text-lg text-center md:text-left">Any queries?</p>
        <h2 className="font-semibold text-4xl md:text-6xl mt-4 text-center md:text-left text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow">
          CONTACT US
        </h2>
        <div className="flex items-center md:items-start p-4 border-2 border-analytikaWhite rounded-md mt-6 transform hover:scale-105 transition-transform">
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
          <p className="ml-4 text-lg">dscnmims@gmail.com</p>
        </div>
        <div className="mt-4 flex gap-8 justify-center md:justify-start">
       <Link href={"https://instagram.com/analytika.nmims"}><FaInstagram size={48} className="hover:text-analytikaGreen"/></Link> 
              <Link href={"https://www.linkedin.com/company/analytika-nmims/"}><FaLinkedin size={48} className="hover:text-analytikaGreen"/></Link> 

        </div>
      </div>
      <div className="max-w-md mx-6 md:mx-2 mt-6 md:w-1/2 md:mt-0">
        <form className="text-md flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            ref={nameRef}
            id="name"
            name="name"
            autoComplete="true"
            placeholder="Name: John Doe"
            className="border-analytikaWhite bg-transparent border-2 rounded-md p-3 mb-4 transition duration-300"
          />
          <input
            type="email"
            ref={emailRef}
            id="email"
            name="email"
            autoComplete="true"
            placeholder="Email: xyz@example.com"
            className="border-analytikaWhite bg-transparent border-2 rounded-md p-3 mb-4 transition duration-300"
          />
          <textarea
            placeholder="Type your heart out!"
            ref={messageRef}
            rows="4"
            autoComplete="true"
            id="message"
            name="message"
            className="border-analytikaWhite bg-transparent border-2 rounded-md p-3 mb-4 transition duration-300"
          ></textarea>
          <button
            type="submit"
            className="p-4 bg-gradient-to-b from-analytikaGreen to bg-analytikaYellow rounded-lg text-analytikaWhite hover:shadow-md transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
