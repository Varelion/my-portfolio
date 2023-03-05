import React, { useContext, useState } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";


const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [ip, setIp] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Within handleSubmit: \n IP: ${ip} \n name: ${name}, email: ${email}, message:${message}`);
  }

  const handleChange = (evt) => {
    console.log('handleChange evt', evt);
  }


  return (
    <div
      id="contact"
      className={
        darkMode
          ? "bg-gray-100 pt-24 md:h-screen"
          : "bg-black pt-24 text-white md:h-screen"
      }
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0 mb-12 -mt-2">
          Contact
        </h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500 mt-4">
            Connect with me
          </h4>
          <p className="text-gray-500 text-xl">
            If you want to know more about me or my work, or if you would just
            <br />
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>
        <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24">
          <div className="w-full md:pr-8 ">
            <form handleSubmit={handleSubmit}>
              <div className="my-6">
                <label
                  value={name}
                  onChange={handleChange}
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="flex justify-between ">
                <div className="underline">
                  <a href="mailto:Business.8508@Gmail.com">
                    Or email me here.
                  </a>
                </div>
                <button onSubmit={(evt)=> handleSubmit(evt)} className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400 ">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="w-full flex flex-col md:items-end  -mt-28 ">
            <h1 className="text-3xl font-bold">Phone</h1>
            <a
              href="tel:+18628888508"
              className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
            >
              +1 (862)-888-8508
            </a>

            <h1 className="text-3xl font-bold">Discord</h1>
            <a
              href="https://discord.gg/hvA6HF3gw3"
              className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
            >
              JOESTAR#8888
            </a>
            <h1 className="text-3xl font-bold">Email</h1>
            <a
              href="mailto:Business.8508@Gmail.com"
              className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
            >
              Business.8508@Gmail.com
            </a>
            <h1 className="text-3xl  font-bold">Address</h1>
            <a
              href="https://www.newarknj.gov/"
              className="mt-4  mb-12 md:text-right font-semibold text-blue-700 block uppercase"
            >
              Newark
              <br />
              New Jersey
            </a>
            <h1 className="text-3xl  font-bold">Social</h1>
            <ul className="flex">
              {contactLinks.map((el, index) => (
                <a key={index}
                  href={el.link}
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                >
                  <img alt="" src={el.url} />
                  <p className="text-md mt-2 hover:hidden">{el.name}</p>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "w-full bg-white text-black text-lg py-4 flex justify-center "
            : "w-full bg-gray-900 text-white text-lg py-4 flex justify-center "
        }
      >
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by Varelion
      </div>
    </div>
  );
};

export default Contact;
