import React from "react";

function Addcase() {
  return (
    <>
      <div className="main-content flex flex-col flex-grow p-4">
        <div className="mx-4 mt-6">
          <h1 className="text-left font-bold text-2xl my-2 pl-4 text-gray-700">
            Add Case
          </h1>
        </div>

        <div className="m-8 flex flex-col flex-grow pt-0  border-gray-400 border-dashed rounded">
          <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-10">
              <form>
                <div className="grid gap-6 mb-6 md:grid-cols-3">
                  <div>
                    <label
                      htmlFor="typecase"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      ประเภทเคส
                    </label>
                    <select
                      required
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="">เลือก</option>
                      <option value="CU">Customer info</option>
                      <option value="EF">Enforcement</option>
                      <option value="IV">Invoice</option>
                      <option value="PM">Payment process</option>
                      <option value="TS">Transaction</option>
                      <option value="OT">Other</option>
                      <option value="ST">System</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      วันที่เปิดเคส
                    </label>
                    <input
                      type="date"
                      id="last_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      ชื่อผู้แจ้ง
                    </label>

                    <select
                      required
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="">เลือก</option>
                      <option value="US">สมชาย</option>
                      <option value="CA">สมหญิง</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-3">
                  <div>
                    <label
                      htmlFor="typecase"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Priority
                    </label>
                    <select
                      required
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

                  <div>
                    <label
                      htmlFor="website"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      ปัญหา
                    </label>
                    <input
                      type="text"
                      id=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      รายละเอียด
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    ></textarea>
                  </div>
                </div>

              
                <div className="grid gap-6 mb-6 md:grid-cols-3">
                  <div>
                    <label
                      htmlFor="website"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      ทะเบียนรถ (หน้า)
                    </label>

                    <input
                      type="text"
                      id=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="1กข"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      ทะเบียนรถ (กลาง)
                    </label>

                    <input
                      type="text"
                      id=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="9876"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      จังหวัด (ทะเบียนรถ)
                    </label>
                    <select
                      required
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="">เลือก</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-3">
                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      htmlFor="file_input"
                    >
                      รูปประกอบ
                    </label>
                    <input
                      className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      aria-describedby="file_input_help"
                      id="file_input"
                      type="file"
                    />
                    <p
                      className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                      id="file_input_help"
                    >
                      SVG, PNG, JPG or GIF (MAX. 800x400px).
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      ชื่อผู้ใช้ทาง
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      สถานะผู้ใช้ทาง
                    </label>

                    <div>
                      <div className="flex items-center mb-4">
                        <input
                          required
                          id="default-radio-1"
                          type="radio"
                          defaultValue
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          member
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="default-radio-2"
                          type="radio"
                          defaultValue
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          non member
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex flex-row-reverse mt-10">
                  <button
                    type="submit"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    บันทึก
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    ยกเลิก
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addcase;
