import React, { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import logo from "../../assets/img/konklom.png";

function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <aside
        className={`hidden lg:block md:block sidebar x-0 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-slate-800
        ${open ? "lg:w-64 md:w-64 w-64" : "lg:w-14 md:w-18 w-14"} `}
      >
        {/* <BsFillArrowLeftCircleFill
          className="bg-white text-gray-700 text-3xl rounded-full absolute -right-12 top-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        /> */}

        <div
          className={`sidebar-header flex items-center justify-center py-4 ${
            open ? "" : "hidden"
          } `}
        >
          <div className="inline-flex mt-2 -ml-4 ">
            <a
              href="#"
              className="inline-flex flex-row items-center border-b-4 border-indigo-500"
            >
              {/* <svg
                className="w-10 h-10 text-red-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg> */}
              <img
                src={logo}
                alt="logo"
                className="h-10 w-10  rounded-full mr-4 mb-3"
              />

              <span className="leading-10 text-gray-100 text-xl  font-bold ml-1 uppercase mb-3">
                Kon Klom
              </span>
            </a>
          </div>
        </div>

        <div className={`sidebar-content px-4 py-6  ${open ? "" : "hidden"} `}>
          <ul className="flex flex-col w-full">
            <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="ml-3">ผู้ใช้งาน</span>
              </a>
            </li>
            <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="flex items-center justify-center text-lg text-green-400">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </span>
                <span className="ml-3">ตรวจสอบเคส</span>
              </a>
            </li>

            {/* <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="flex items-center justify-center text-lg text-green-400">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="ml-3">Add new</span>
              </a>
            </li> */}

            {/* <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </span>
                <span className="ml-3">Notifications</span>
              </a>
            </li> */}

            {/* <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="ml-3">Settings</span>
              </a>
            </li> */}

            <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="flex items-center justify-center text-lg text-red-400">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="ml-3">ออกจากระบบ</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
