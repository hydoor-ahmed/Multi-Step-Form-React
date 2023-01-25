import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import PersonalInfo from "./components/PersonalInfo";
import Plan from "./components/Plan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import Finish from "./components/Finish";

const App = () => {
  const [page, setPage] = useState(0);
  const [check, setCheck] = useState([]); // AddOns Checkbox
  let [subInfo, setSubInfo] = useState(true); // true = Monthly
  let [plan, setPlan] = useState(1);

  useEffect(() => {
    setCheck({ box1: true, box2: true });
  }, []);

  const componentList = [
    <PersonalInfo page={page} setPage={setPage} />,
    <Plan
      plan={plan}
      setPlan={setPlan}
      subInfo={subInfo}
      setSubInfo={setSubInfo}
      page={page}
      setPage={setPage}
    />,
    <AddOns
      check={check}
      setCheck={setCheck}
      subInfo={subInfo}
      page={page}
      setPage={setPage}
    />,
    <Summary
      check={check}
      plan={plan}
      subInfo={subInfo}
      page={page}
      setPage={setPage}
    />,
    <Finish />,
  ];
  return (
    <div className="sm:h-screen w-full bg-magnolia flex justify-center items-center sm:px-4">
      <div className="w-full sm:w-fit bg-white md:p-4 sm:rounded-xl shadow md:h-[75%] md:min-w-[60%] flex flex-col md:flex-row overflow-hidden md:overflow-visible">
        <SideBar page={page} />
        <div className="pl-4 sm:pl-8 md:pl-24 pr-4 sm:pr-8 pb-4 pt-8 w-[90%] sm:w-auto mx-auto md:mx-0 shadow-md shadow-slate-800/30 sm:shadow-none rounded-md sm:rounded-none mt-[-25px] z-50 sm:z-auto bg-white sm:bg-transparent mb-4 sm:mb-0">
          {componentList[page]}
        </div>
      </div>
    </div>
  );
};

export default App;
