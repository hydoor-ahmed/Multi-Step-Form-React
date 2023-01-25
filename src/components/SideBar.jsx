
const SideBar = ({ page }) => {
  return (
    <div className="flex h-[200px] sm:h-full md:w-[250px] mobileSideBarBg sideBarBg text-white md:rounded-xl px-5 py-6 md:pt-6 items-start justify-center md:justify-start">
      <ul className="flex md:block">

        <li className="flex items-center md:mb-6">
          <button className={`${page == 0 ? "bg-lightBlue border-lightBlue text-marineblue" : ""} mr-4 font-bold border-2 rounded-full px-2.5 py-0.5`}>1</button>
          <div className="hidden md:block">
            <span className="font-light text-sm">STEP 1</span>
            <h1 className="font-bold text-[15px]">YOUR INFO</h1>
          </div>
        </li>
        <li className="flex items-center md:mb-6">
          <button className={`${page == 1 ? "bg-lightBlue border-lightBlue text-marineblue" : ""} mr-4 font-bold border-2 rounded-full px-2.5 py-0.5`}>2</button>
          <div className="hidden md:block">
            <span className="font-light text-sm">STEP 2</span>
            <h1 className="font-bold text-[15px]">Select plan</h1>
          </div>
        </li>
        <li className="flex items-center md:mb-6">
          <button className={`${page == 2 ? "bg-lightBlue border-lightBlue text-marineblue" : ""} mr-4 font-bold border-2 rounded-full px-2.5 py-0.5`}>3</button>
          <div className="hidden md:block">
            <span className="font-light text-sm">STEP 3</span>
            <h1 className="font-bold text-[15px]">Add-ons</h1>
          </div>
        </li>
        <li className="flex items-center">
          <button className={`${page == 3 || page == 4 ? "bg-lightBlue border-lightBlue text-marineblue" : ""} mr-4 font-bold border-2 rounded-full px-2.5 py-0.5`}>4</button>
          <div className="hidden md:block">
            <span className="font-light text-sm">STEP 4</span>
            <h1 className="font-bold text-[15px]">Summary</h1>
          </div>
        </li>
        

      </ul>
    </div>
  )
}
export default SideBar;