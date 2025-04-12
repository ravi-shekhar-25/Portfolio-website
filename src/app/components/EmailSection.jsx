"use client";
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";


const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    const JSONData = JSON.stringify(data);
    const endpoint = "/api/send";

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.success ? "Form submitted successfully!" : "Error sending email.");

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
      <section
          id="contact"
          className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      >
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-60 w-60 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2">

        </div>
        <div className="z-10">
          <h5 className="text-xl font-bold text-white my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/ravi-shekhar-25 ">
              <Image src="/assets/github.svg" alt="Github Icon" width={40} height={40} />
            </Link>
            <Link href="https://www.linkedin.com/in/ravi-shekhar25/">
              <Image src="/assets/linkedin.svg" alt="Linkedin Icon" width={40} height={40}/>
            </Link>
            <Link href="https://www.instagram.com/shekhar_025/">
              <Image src="/assets/instagram.svg" alt="Facebook Icon" width={40} height={40} />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100087018645883">
              <Image src="/assets/facebook.svg" alt="Facebook Icon" width={40} height={40} />
            </Link>
            <Link href="https://twitter.com/RaviShekhar_025">
              <Image src="/assets/twitter.svg" alt="Twitter Icon" width={40} height={40} />
            </Link>
          </div>
        </div>
        <div>
          {emailSubmitted ? (
              <p className="text-green-500 text-xl mt-2">
                Email sent successfully!
              </p>
          ) : (
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                      htmlFor="name"
                      className="text-white block text-sm mb-2 font-medium"
                  >
                    Name
                  </label>
                  <input
                      name="name"
                      type="text"
                      id="name"
                      required
                      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Name"
                  />
                </div>
                <div className="mb-6">
                  <label
                      htmlFor="email"
                      className="text-white block mb-2 text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                      name="email"
                      type="email"
                      id="email"
                      required
                      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Email"
                  />
                </div>
                <div className="mb-6">
                  <label
                      htmlFor="message"
                      className="text-white block text-sm mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                      name="message"
                      id="message"
                      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Let's talk about..."
                  />
                </div>
                <button
                    type="submit"
                    className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                >
                  Send Message
                </button>
              </form>
          )}
        </div>
      </section>
  );
};

export default EmailSection;
