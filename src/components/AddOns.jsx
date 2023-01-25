const AddOns = ({ subInfo, page, setPage, check, setCheck }) => {
  

  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold text-marineblue mb-2">Pick add-ons</h1>
      <p className="mb-8 text-coolGray">
        Add-ons help enhance your gaming experience.
      </p>

      {/* Box One */}
      <div
        className={`cursor-pointer flex border rounded-md pl-2 pr-4 py-3 items-center justify-between mb-4 ${
          check.box1 ? "bg-magnolia border-purplishBlue" : "border-lightGray"
        }`}
      >
        <input
          checked={!!check.box1}
          onChange={(e) => setCheck({ ...check, box1: e.target.checked })}
          className="accent-purplishBlue w-[15px] h-[15px] mx-4"
          type="checkbox"
        />
        <div>
          <h1 className="font-bold text-marineblue">Online service</h1>
          <p className="text-sm text-coolGray">Access to multiplayer games</p>
        </div>

        <div className="ml-auto">
          <h1 className="text-purplishBlue text-sm">
            {subInfo ? "+$1/mo" : "+$10/yl"}
          </h1>
        </div>
      </div>

      {/* Box Tow */}
      <div
        className={`cursor-pointer flex border border-lightGray rounded-md pl-2 pr-4 py-3 items-center justify-between mb-4 ${
          check.box2 ? "bg-magnolia border-purplishBlue" : "border-lightGray"
        }`}
      >
        <input
          checked={!!check.box2}
          onChange={(e) => setCheck({ ...check, box2: e.target.checked })}
          className="accent-purplishBlue w-[15px] h-[15px] mx-4"
          type="checkbox"
        />
        <div>
          <h1 className="font-bold text-marineblue">Larger storage</h1>
          <p className="text-sm text-coolGray">Extra 1TB of cloud save</p>
        </div>

        <div className="ml-auto">
          <h1 className="text-purplishBlue text-sm">
            {subInfo ? "+$2/mo" : "+$20/yl"}
          </h1>
        </div>
      </div>

      {/* Box Three */}
      <div
        className={`cursor-pointer flex border border-lightGray rounded-md pl-2 pr-4 py-3 items-center justify-between ${
          check.box3 ? "bg-magnolia border-purplishBlue" : "border-lightGray"
        }`}
      >
        <input
          checked={!!check.box3}
          onChange={(e) => setCheck({ ...check, box3: e.target.checked })}
          className="accent-purplishBlue w-[15px] h-[15px] mx-4"
          type="checkbox"
        />
        <div>
          <h1 className="font-bold text-marineblue">Customizable Profile</h1>
          <p className="text-sm text-coolGray">Custom theme on your profile</p>
        </div>

        <div className="ml-auto">
          <h1 className="text-purplishBlue text-sm">
            {subInfo ? "+$2/mo" : "+$20/yl"}
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

export default AddOns;
