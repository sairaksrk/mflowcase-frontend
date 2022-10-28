import React from "react";

function TableShowuser() {
  return (
    <div className="main-content flex flex-col flex-grow p-4 w-auto">
      <div className="mx-10 mt-6">
        <h1 className="text-left font-bold text-2xl my-2  text-gray-700">
          All User
        </h1>
      </div>

      <section className="pt-5 antialiased bg-gray-100 text-gray-600 px-4">
        <div className="justify-center">
          {/* Table */}
          <div className="lg:max-w-6xl  md:max-w-md max-w-xs  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="flex justify-between px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">User Detail</h2>

              <button
                type="button"
                class="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                เพิ่ม User +
              </button>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto">
                  <thead className="text-sm font-semibold uppercase divide-gray-100">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">No</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Ref Number
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          วันที่เปิดเคส
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          ชื่อผู้แจ้ง
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          Priority
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">ปัญหา</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">สถานะ</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          คนรับเรื่อง
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          รายละเอียด
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Edit</div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-sm divide-y divide-gray-100">
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">1</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">PS221022IV000021</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium ">22/10/2022</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className=" text-center">ZoL</div>
                      </td>

                      <td className="p-2 whitespace-nowrap text-red-600">
                        <div className=" text-center">High</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className=" text-center">
                          ตรวจสอบสาเหตุ ไม่ตัด Easy-Pass อัตโนมัติ Easy-Pass
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap text-yellow-400">
                        <div className=" text-center">waiting</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className=" text-center">Hut</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div classname=" text-center">
                          <button
                            type="button"
                            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            Detail
                          </button>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className=" text-center">
                          <button
                            type="button"
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                          >
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">2</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">PS221022IV000021</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium ">22/10/2022</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className=" text-center">ZoL</div>
                      </td>

                      <td className="p-2 whitespace-nowrap text-red-600">
                        <div className=" text-center">High</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className=" text-center">
                          ตรวจสอบสาเหตุ ไม่ตัด Easy-Pass อัตโนมัติ Easy-Pass
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap text-yellow-400">
                        <div className=" text-center">waiting</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className=" text-center">Hut</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div classname=" text-center">
                          <button
                            type="button"
                            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            Detail
                          </button>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className=" text-center">
                          <button
                            type="button"
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                          >
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TableShowuser;
