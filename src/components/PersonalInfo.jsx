import { useState } from "react";

const PersonalInfo = ({ page, setPage }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  let nameReq = false; // if true input is empty
  let emailReq = false; // if true input is empty
  let phoneReq = false; // if true input is empty

  if (name === "") {
    nameReq = true;
  } else {
    nameReq = false;
  }

  if (email == "") {
    emailReq = true;
  }
  if (email.includes("@") == false) {
    emailReq = true;
  } else {
    emailReq = false;
  }

  if (phone == "") {
    phoneReq = true;
  } else {
    phoneReq = false;
  }
  function handleInputs() {
    if (nameReq == false && emailReq == false && phoneReq == false) {
      setPage(page + 1);
    }
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-marineblue mb-2">Personal info</h1>
      <p className="mb-8 text-coolGray">
        Please provide your name, email address, and phone number.
      </p>

      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-marineblue text-sm">Name</h1>
          <h2
            className={`${
              nameReq ? "block text-strawberryRed text-sm" : "hidden"
            }`}
          >
            This field is required
          </h2>
        </div>
        <input
          className={`outline-none border ${
            nameReq ? "border-strawberryRed" : "border-lightGray"
          } rounded-md px-4 py-3 mb-8`}
          type="text"
          placeholder="e.g. Stephen King"
          onChange={(e) => setName(e.target.value.trim())}
          value={name}
        />
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-marineblue text-sm">Email Address</h1>
          <h2
            className={`${
              emailReq ? "block text-strawberryRed text-sm" : "hidden"
            }`}
          >
            This field is required
          </h2>
        </div>
        <input
          className={`outline-none border ${
            emailReq ? "border-strawberryRed" : "border-lightGray"
          } rounded-md px-4 py-3 mb-8`}
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          onChange={(e) => setEmail(e.target.value.trim())}
          value={email}
        />
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-marineblue text-sm">Phone Number</h1>
          <h2
            className={`${
              phoneReq ? "block text-strawberryRed text-sm" : "hidden"
            }`}
          >
            This field is required
          </h2>
        </div>
        <input
          className={`outline-none border ${
            phoneReq ? "border-strawberryRed" : "border-lightGray"
          } rounded-md px-4 py-3`}
          type="number"
          placeholder="e.g. +1 234 567 890"
          onChange={(e) => setPhone(e.target.value.trim())}
          value={phone}
        />
      </div>

      <button
        onClick={handleInputs}
        className="block ml-auto w-fit mt-10 bg-marineblue text-lightBlue font-bold py-3 px-5 rounded-md"
      >
        Next Step
      </button>
    </div>
  );
};
export default PersonalInfo;
