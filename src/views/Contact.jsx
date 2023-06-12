import React, { useContext, useState, useEffect } from 'react';
import { contactLinks } from '../constants';
import { ThemeContext } from '../themeProvider';
import axios from 'axios';
import Confirmed from '../views/Confirmed';
import Hamburger from 'hamburger-react';

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isHoveringElementVisible, setIsHoveringElementVisible] =
    useState(false);

  const isViewportNarrow = window.innerWidth < 766;

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setIsHoveringElementVisible(true);

    try {
      console.log({ name, email, message });
      const response = await axios.post('/api/contacts/send', {
        name: name,
        email: email,
        message: message,
      });
      // alert("Thank you for your message; I will reply shortly!"); // Handle the response data here
    } catch (error) {
      console.error(error); // Handle the error here
    }
  };

  const handleChange = (evt) => {
    const changing = evt.target.name;
    switch (changing) {
      case 'name':
        setName(evt.target.value);
        break;

      case 'email':
        setEmail(evt.target.value);
        break;

      case 'message':
        setMessage(evt.target.value);
        break;

      default:
        console.log('handleChange switch case statement default');
        break;
    }
  };

  return (
    <>
      <div
        id="contact"
        className={
          darkMode
            ? 'bg-gray-100 py-10 '
            : 'bg-black py-10 text-white'
        }
      >
        {isHoveringElementVisible && (
          <Confirmed name={name} email={email} message={message} />
        )}
        <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
          <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0 -mt-2">
            Contact
          </h2>
          <div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500 mt-4">
              Connect with me
            </h4>
            <p className="text-gray-500 text-xl">
              Any messages you send here will be relayed to <strong>ALL</strong>{' '}
              of my e-mails!
              <br />
              So, please drop any inquiries here and I'll respond as soon as
              possible!
            </p>
          </div>

          <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row">
            <div className="w-full md:pr-8 ">
              <form onSubmit={(evt) => handleSubmit(evt)}>
                <div className="my-6">
                  <label
                    className={
                      darkMode
                        ? 'block mb-2 text-lg font-medium text-gray-900'
                        : 'block mb-2 text-lg font-medium text-white'
                    }
                  >
                    Name
                  </label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(evt) => handleChange(evt)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className={
                      darkMode
                        ? 'block mb-2 text-lg font-medium text-gray-900'
                        : 'block mb-2 text-lg font-medium text-white'
                    }
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className={
                      darkMode
                        ? 'block mb-2 text-lg font-medium text-gray-900'
                        : 'block mb-2 text-lg font-medium text-white'
                    }
                  >
                    Message
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your message"
                    required
                  />
                </div>
                <div className="flex justify-between ">
                  <div className="underline">
                    <a href="mailto:Varelion@outlook.com">
                      Or email me here.
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400 "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {isViewportNarrow ? (
              <>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </>
            ) : null}

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
                href="mailto:Varelion@outlook.com"
                className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
              >
                Varelion@outlook.com
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
                  <a
                    key={index}
                    href={el.link}
                    className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                  >
                    <img alt="" src={el.url} />
                    <p className="text-md mt-2 ">{el.name}</p>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        id="footer"
        className={
          darkMode
            ? 'relative bottom-0 left-0 w-full bg-white text-black text-lg py-4 flex justify-center '
            : 'relative bottom-0 left-0 bg-gray-900 text-white text-lg py-4 flex items-center justify-center'
        }
      >
        <>
          {' '}
          Made with
          <div className="text-red-500 px-2 text-2xl">&#10084;</div>
          by Varelion
        </>
      </div>
      </>
  );
};

export default Contact;
