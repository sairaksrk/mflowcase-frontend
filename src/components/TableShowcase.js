import React from "react";
import { Link } from "react-router-dom";

function TableShowcase() {
  return (
    <div className="main-content flex flex-col flex-grow p-4 w-auto">
      <div className="mx-10 mt-6">
        <h1 className="text-left font-bold text-2xl my-2  text-gray-700">
          All Case
        </h1>
        {/* <button
          type="button"
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          เพิ่มข้อมูล
        </button> */}
      </div>

      {/* <div className="mx-10 mt-2">
        <button
          type="button"
          class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
        >
          Excel
        </button>
        <button
          type="button"
          class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
        >
          PDF
        </button>
      </div> */}

      {/* <div className="m-8 flex flex-col flex-grow pt-0  border-gray-400 border-dashed rounded"> */}
      <div className="m-8 flex flex-col  pt-0  border-gray-400 border-dashed rounded">
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-10">
            <form>
              <div className="grid gap-6 mb-6 grid-cols-1 lg:grid-cols-5">
                <div>
                  <label
                    htmlFor="date"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    refnumber
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    วันที่เริ่มต้น
                  </label>
                  <input
                    type="date"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    วันที่สิ้นสุด
                  </label>
                  <input
                    type="date"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="typecase"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    สถานะ case
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">เลือก</option>
                    <option value="US">Warning</option>
                    <option value="CA">ส่งต่อให้ Noc</option>
                    <option value="FR">ส่งต่อให้ Oper</option>
                    <option value="FR">ส่งต่อให้ Dev</option>
                    <option value="DE">Success</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="typecase"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Priority
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">เลือก</option>
                    <option value="Critical">Critical</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              <div class="mt-10 lg:flex  md:flex justify-center">
                <button
                  type="button"
                  className="w-28 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  ค้นหา
                </button>
                <button
                  type="button"
                  className="w-28 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Excel
                </button>
                <button
                  type="button"
                  className="w-28 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  PDF
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <section className="pt-5 antialiased bg-gray-100 text-gray-600 px-4">
        <div className="justify-center">
          {/* Table */}
          <div className="lg:max-w-6xl  md:max-w-md max-w-xs  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="flex justify-between px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Case Detail</h2>

              <Link to="/pageaddcase">
                <button
                  type="button"
                  class="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  เพิ่ม Case +
                </button>
              </Link>
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
                        <div className="font-semibold text-center">Update</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          ขอข้อมูลเพิ่มเติม
                        </div>
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
                        <div className="text-left font-medium ">
                          22/10/2022 12:46
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className=" text-center">ZoL</div>
                      </td>

                      <td className="p-2 whitespace-nowrap text-red-600">
                        <div className=" text-center">High</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className=" text-center">
                          ตรวจสอบสาเหตุไม่ตัดEasy-Passอัตโนมัติ
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
                            Update
                          </button>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div classname=" text-center">
                          <button
                            type="button"
                            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            ขอข้อมูลเพิ่มเติม
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
                        <div className="text-left font-medium ">
                          22/10/2022 12:20
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className=" text-center">ZoL</div>
                      </td>

                      <td className="p-2 whitespace-nowrap text-red-600">
                        <div className=" text-center">High</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className=" text-center">
                          ตรวจสอบสาเหตุไม่ตัดEasy-Passอัตโนมัติ
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap text-yellow-400">
                        <div className=" text-center">waiting</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">Hut</div>
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
                            Update
                          </button>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div classname=" text-center">
                          <button
                            type="button"
                            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            ขอข้อมูลเพิ่มเติม
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">3</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">PS221022IV000021</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium ">
                          22/10/2022 15:46
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className=" text-center">ZoL</div>
                      </td>

                      <td className="p-2 whitespace-nowrap text-red-600">
                        <div className=" text-center">High</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className=" text-center">
                          ตรวจสอบสาเหตุไม่ตัดEasy-Passอัตโนมัติ
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
                            Update
                          </button>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div classname=" text-center">
                          <button
                            type="button"
                            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            ขอข้อมูลเพิ่มเติม
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">4</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">PS221022IV000021</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium ">
                          22/10/2022 15:47
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className=" text-center">ZoL</div>
                      </td>

                      <td className="p-2 whitespace-nowrap text-red-600">
                        <div className=" text-center">High</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className=" text-center">
                          ตรวจสอบสาเหตุไม่ตัดEasy-Passอัตโนมัติ
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap text-yellow-400">
                        <div className="text-center">waiting</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">Hut</div>
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
                        <div className="text-center">
                          <button
                            type="button"
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                          >
                            Update
                          </button>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div classname=" text-center">
                          <button
                            type="button"
                            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            ขอข้อมูลเพิ่มเติม
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">5</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">PS221022IV000021</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium ">
                          22/10/2022 17:56
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">ZoL</div>
                      </td>

                      <td className="p-2 whitespace-nowrap text-red-600">
                        <div className="text-center">High</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">
                          ตรวจสอบสาเหตุไม่ตัดEasy-Passอัตโนมัติ
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap text-yellow-400">
                        <div className="text-center">waiting</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">Hut</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div classname="text-center">
                          <button
                            type="button"
                            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            Detail
                          </button>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">
                          <button
                            type="button"
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                          >
                            Update
                          </button>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div classname=" text-center">
                          <button
                            type="button"
                            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            ขอข้อมูลเพิ่มเติม
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

export default TableShowcase;
