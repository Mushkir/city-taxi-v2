import React, { FunctionComponent } from "react";
import { IoWarningOutline, IoCloseSharp } from "react-icons/io5";

interface TheConfirmationPopUpProps {
  content: string;
  confirmation: string;
  cancelation: string;
}

const TheConfirmationPopUp: FunctionComponent<TheConfirmationPopUpProps> = ({
  content,
  confirmation,
  cancelation,
}) => {
  return (
    <div className="w-full h-full relative">
      <div className="bg-slate-200 bg-opacity-80 fixed top-0 bottom-0 left-0 right-0 z-40 flex justify-center pt-52 p-2 ">
        {/* Modal */}
        <div className=" bg-white w-full max-w-[20rem] rounded-lg p-5 h-64">
          <div className="flex justify-between items-start w-full">
            <div className="text-red-500 text-lg bg-red-100 px-2 py-2 flex justify-center items-center w-10 rounded-md mx-auto">
              <IoWarningOutline />
            </div>

            <div className="text-lg cursor-pointer">
              <IoCloseSharp />
            </div>
          </div>

          <h3 className=" text-center mt-2 text-2xl font-semibold">
            Are you sure?
          </h3>

          <small className=" text-center block text-gray-400 mt-1">
            {content}
          </small>

          <div className="mt-8">
            <button className=" bg-red-500 text-white w-full py-1 rounded-md text-sm hover:bg-red-600 transition-all">
              {confirmation}
            </button>
            <button className="shadow-md w-full py-1 rounded-md mt-2 text-sm hover:bg-gray-300 transition-all">
              {cancelation || "Cancel"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheConfirmationPopUp;
