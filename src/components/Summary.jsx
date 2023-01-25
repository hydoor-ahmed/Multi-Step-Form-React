const Summary = ({ plan, subInfo, page, setPage, check }) => {
  let total = 0;
  return (
    <div>
      <h1 className="text-4xl font-bold text-marineblue mb-2">Finishing up</h1>
      <p className="mb-8 text-coolGray">
        Double-check everything looks OK before confirming.
      </p>

      <div className="bg-alabaster rounded-md p-8">
        <div className="flex justify-between items-center border-b border-lightGray pb-4">
          <div>
            <h1 className="font-bold text-marineblue">
              {plan == 1
                ? "Arcade"
                : plan == 2
                ? "Advanced"
                : plan == 3
                ? "Pro"
                : ""}{" "}
              ({subInfo ? "Monthly" : "Yearly"})
            </h1>
            <button
              onClick={() => setPage((page = 1))}
              className="text-coolGray text-sm underline"
            >
              Change
            </button>
          </div>
          <h1 className="font-bold text-marineblue">
            {subInfo ? "$9/mo" : "$90/yr"}
          </h1>
        </div>

        <div>
          <div className=" pt-4 text-coolGray text-sm">
            <div
              className={`flex justify-between items-center mb-2 ${
                check.box1 ? "block" : "hidden"
              }`}
            >
              <h1>{check.box1 ? "Online service" : ""}</h1>
              <h2>{subInfo ? "+$1/mo" : "+$10/yr"}</h2>
            </div>

            <div
              className={`flex justify-between items-center mb-2 ${
                check.box2 ? "block" : "hidden"
              }`}
            >
              <h1>{check.box2 ? "Larger storage" : ""}</h1>
              <h2>{subInfo ? "+$2/mo" : "+$20/yr"}</h2>
            </div>
            <div
              className={`flex justify-between items-center mb-2 ${
                check.box3 ? "block" : "hidden"
              }`}
            >
              <h1>{check.box3 ? "Customizable Profile" : ""}</h1>
              <h2>{subInfo ? "+$2/mo" : "+$20/yr"}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-coolGray text-sm mt-2">
          Total (per {subInfo ? "month" : "year"})
        </h1>
        <h2 className="text-purplishBlue font-bold">
          {subInfo
            ? // Monthly
              (plan == 1 ? (total = 9) : "",
              plan == 2 ? (total = 12) : "",
              plan == 3 ? (total = 15) : "",
              check.box1 ? (total += 1) : "",
              check.box2 ? (total += 2) : "",
              check.box3 ? (total += 2) : "",
              `+$${total}/mo`)
            : // Yearly
              (plan == 1 ? (total = 90) : "",
              plan == 2 ? (total = 120) : "",
              plan == 3 ? (total = 150) : "",
              check.box1 ? (total += 10) : "",
              check.box2 ? (total += 20) : "",
              check.box3 ? (total += 20) : "",
              `+$${total}/yr`)}
        </h2>
      </div>

      <div className="flex justify-between items-center mt-10">
        <button
          onClick={() => setPage(page - 1)}
          className="font-bold py-3 px-5 text-coolGray"
        >
          Go Back
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="bg-marineblue text-lightBlue font-bold py-3 px-5 rounded-md"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
