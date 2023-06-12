import { useState } from "react";

function Confirmed({ name, email, message }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    window.location.reload();
  };

  return isVisible ? (
    <div className="hovering-element rounded-md py-2 max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-6 mx-3">
      <br />
      <br />
      {console.log(name)}
      <p key={"p"}>
        Thank you, {name}, for sending me a message! I shall respond as soon as
        possible; I'll try to reach you at the provided email,"{email}".
      </p>
      <br />
      And, just so we're both on the same page — the message you sent me is:
      <br />"{message}"
      <br />
      <br />
      <button
        className="float:right bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400"
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  ) : null;
}

export default Confirmed;
