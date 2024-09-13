import { NavItems } from "@/constant/data";



const NavList = () => {
  const commonClasses =
    "flex hover:bg-[#EDEDED] px-2 py-1 rounded-md transition-all cursor-pointer";
  const textClasses = "text-[#000000e6] text-[14px] font-[600]";

    return (
      <>
        <div className="flex gap-2 max-md:hidden">
          {NavItems.map((nav) => (
            <div key={nav.name} className={commonClasses}>
              <h1
                className={`${textClasses} ${
                  nav.name === "Developers " ? "mr-1" : ""
                }`}>
                {nav.name}
              </h1>
              {nav.hasDropdown ? (
                <></>
              ) : (
                <span className="ml-2 px-2 py-1 font-[400] text-[10px] rounded-xl bg-[#F0EEFB] text-slate-500">
                  {nav.label}
                </span>
              )}
            </div>
          ))}
        </div>
        
      </>
    );
};

export default NavList;
