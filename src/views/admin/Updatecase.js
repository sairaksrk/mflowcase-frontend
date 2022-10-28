import React from "react";

function Updatecase() {
  return (
    <>
      <div className="main-content flex flex-col flex-grow p-4">
        <div className="mx-4 mt-6">
          <h1 className="text-left font-bold text-2xl my-2 pl-4 text-gray-700">
            Update Case
          </h1>
        </div>

        <div className="m-8 flex flex-col flex-grow pt-0  border-gray-400 border-dashed rounded">
          <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-10">
              <form>
                <div className="grid gap-6 mb-6 md:grid-cols-4">
                  <div>
                    <label
                      htmlFor="refNumber"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Ref Number
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="PS221024IV00078-1"
                      required
                      readOnly
                      value={"PS221024IV00078-1"}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="typecase"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      ประเภทเคส
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Invoice"
                      required
                      readOnly
                      value={"Invoice"}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      วันที่เปิดเคส
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="22/10/2022"
                      required
                      readOnly
                      value={"22/10/2022"}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      ชื่อผู้แจ้ง
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="สมชาย"
                      required
                      readOnly
                      value={"สมชาย"}
                    />
                  </div>
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-4">
                  <div>
                    <label
                      htmlFor="typecase"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Priority
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Critical"
                      required
                      readOnly
                      value={"Critical"}
                    />
                  </div>

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
                      className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="1กข"
                      required
                      readOnly
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
                      className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="9876"
                      required
                      readOnly
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      จังหวัด (ทะเบียนรถ)
                    </label>
                    <input
                      type="text"
                      id=""
                      className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="ปทุมธานี"
                      required
                      readOnly
                    />
                  </div>
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-4">
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
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="รบกวนตรวจสอบ สาเหตุระบบไม่ตัด M-Pass อัตโนมัติ ชื่อ : ปานทิพย์ บูรณะ .........."
                      required
                      readOnly
                    ></textarea>
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
                      className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="สาเหตุระบบไม่ตัด M-Pass อัตโนมัต"
                      required
                      readOnly
                      //   value={""}
                    />
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
                      className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                      readOnly
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      สถานะผู้ใช้ทาง
                    </label>

                    <input
                      type="text"
                      id="last_name"
                      className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                      readOnly
                    />
                  </div>
                </div>

                {/* <div className="grid gap-6 mb-6 md:grid-cols-3">
                </div> */}
                <br />
                <hr />
                <br />

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
                      htmlFor="typecase"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      สถานะ case
                    </label>
                    <select
                      required
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="">เลือก</option>
                      <option value="US">Warning</option>
                      <option value="FR">ขอข้อมูลเพิ่มเติม</option>
                      <option value="FR">รอ Dev</option>
                      <option value="DE">Success</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="visitors"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      ผู้รับเรื่อง
                    </label>

                    <select
                      required
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="">เลือก</option>
                      <option value="US">สมหมาย</option>
                      <option value="CA">สมปอง</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-3">
                  <div>
                    <label
                      for="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      รายละเอียดที่หาเพิ่มเติม
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
                      htmlFor="website"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      customer id
                    </label>

                    <input
                      type="text"
                      id=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                    <p
                      className="mt-1 text-sm text-red-500 dark:text-gray-300"
                      id="file_input_help"
                    >
                      * กรณีมี member กรุณาใส่ customer id
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      วันที่ปิดเคส
                    </label>

                    <input
                      type="date"
                      id=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-3">
                  {/* <div>
                    <label
                      for="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      รายละเอียดที่หาเพิ่มเติม
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    ></textarea>
                  </div> */}

                  <div>
                    <label
                      htmlFor="website"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      remark
                    </label>

                    <textarea
                      id="message"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    ></textarea>

                    {/* <div>
                    <label
                      htmlFor="website"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      remark (เพิ่มเติม)
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    ></textarea>
                  </div> */}
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

export default Updatecase;
