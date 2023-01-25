import thankU from "../assets/images/icon-thank-you.svg";

const Finish = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center h-full">
      <img src={thankU} alt="Thank you image" />

      <h1 className="font-bold text-3xl text-marineblue mb-4 mt-6">Thank you!</h1>
      <p className="text-coolGray text-sm sm:w-[380px]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Finish;
