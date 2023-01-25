import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

const Plan = ({ page, setPage, subInfo, setSubInfo, plan, setPlan }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-marineblue mb-2">
        Select your plan
      </h1>
      <p className="mb-8 text-coolGray">
        You have the option of monthly or yearly billing.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <div
          className={`border ${
            plan == 1 ? "border-marineblue bg-magnolia" : "border-lightGray"
          } rounded-md pt-6 pb-4 pl-3 pr-10 cursor-pointer mr-4 mb-4 md:mb-0`}
          onClick={() => setPlan((plan = 1))}
        >
          <img className="mb-8 mr-auto" src={arcade} alt="Arcade" />
          <h1 className="font-bold text-marineblue">Arcade</h1>
          <h2 className="text-coolGray text-sm">
            {subInfo ? "$9/mo" : "$90/yr"}
          </h2>
          <span
            className={`text-sm text-marineblue ${
              subInfo ? "opacity-0" : "opacity-100"
            }`}
          >
            2 months free
          </span>
        </div>

        <div
          className={`border ${
            plan == 2 ? "border-marineblue bg-magnolia" : "border-lightGray"
          } rounded-md pt-6 pb-4 pl-3 pr-10 cursor-pointer mr-4 mb-4 md:mb-0`}
          onClick={() => setPlan((plan = 2))}
        >
          <img className="mb-8 mr-auto" src={advanced} alt="Arcade" />
          <h1 className="font-bold text-marineblue">Advanced</h1>
          <h2 className="text-coolGray text-sm">
            {subInfo ? "$12/mo" : "$120/yr"}
          </h2>
          <span
            className={`text-sm text-marineblue ${
              subInfo ? "opacity-0" : "opacity-100"
            }`}
          >
            2 months free
          </span>
        </div>

        <div
          className={`border ${
            plan == 3 ? "border-marineblue bg-magnolia" : "border-lightGray"
          } rounded-md pt-6 pb-4 pl-3 pr-10 cursor-pointer mr-4`}
          onClick={() => setPlan((plan = 3))}
        >
          <img className="mb-8 mr-auto" src={pro} alt="Arcade" />
          <h1 className="font-bold text-marineblue">Pro</h1>
          <h2 className="text-coolGray text-sm">
            {subInfo ? "$15/mo" : "$150/yr"}
          </h2>
          <span
            className={`text-sm text-marineblue ${
              subInfo ? "opacity-0" : "opacity-100"
            }`}
          >
            2 months free
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center bg-magnolia mt-8 rounded-md py-3">
        <div>
          <h1
            className={`${
              subInfo ? "text-marineblue" : "text-coolGray"
            } font-bold`}
          >
            Monthly
          </h1>
        </div>
        <div>
          <button
            onClick={() => setSubInfo(!subInfo)}
            className="mx-4 bg-marineblue w-[45px] h-[20px] rounded-full p-0.5 px-1"
          >
            <span
              className={`${
                subInfo ? "" : "ml-auto"
              } bg-white rounded-full block w-3.5 h-3.5`}
            ></span>
          </button>
        </div>
        <div>
          <h1
            className={`${
              subInfo ? "text-coolGray" : "text-marineblue"
            } font-bold`}
          >
            Yearly
          </h1>
        </div>
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
          Next Step
        </button>
      </div>
    </div>
  );
};
export default Plan;
