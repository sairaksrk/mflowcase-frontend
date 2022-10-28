import React from "react";

function Navber() {
  return (
    <>
      <div className="block lg:hidden md:hidden">
        <nav className="bg-gray-700 text-white ">
          <div className="py-3 mx-auto max-w-screen-xl">
            <div className="flex items-center ">
              <ul className="mx-auto flex flex-row mt-0 space-x-8 text-sm font-medium">
                <li>
                  <a href="#" className="hover:underline" aria-current="page">
                    ผู้ใช้งาน
                  </a>
                </li>
                <li>
                  <a href="#" className=" hover:underline">
                    ตรวจสอบเคส
                  </a>
                </li>
                <li>
                  <a href="#" className=" hover:underline">
                    ออกจากระบบ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navber;
