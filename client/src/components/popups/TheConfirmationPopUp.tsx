import React, { FunctionComponent, useContext } from "react";
import { IoWarningOutline, IoCloseSharp } from "react-icons/io5";
import Context from "../../context/context";

interface TheConfirmationPopUpProps {
  content: string;
  confirmation?: string;
  deleteId?: string | null;
  cancelation?: string;
  url: { url: string; method: string };
  onClose: () => void;
}

const TheConfirmationPopUp: FunctionComponent<TheConfirmationPopUpProps> = ({
  content,
  confirmation,
  deleteId,
  cancelation,
  url,
  onClose,
}) => {
  const { getAllReservationDetails } = useContext(Context);
  // console.log(context);

  const handleDeleteReservation = async (
    id: string,
    url: { url: string; method: string }
  ) => {
    try {
      const response = await fetch(url?.url + `/${id}`, {
        method: url?.method,
        credentials: "include",
      });

      const respData = await response.json();
      if (respData?.status === 200 && !respData?.error) {
        onClose();
      }

      console.log(respData);
    } catch (error) {
      console.error(error);
    }

    // console.log(`Delete Id: ${id}`);
    // console.log(url?.url);
  };

  return (
    <div className="w-full h-full relative">
      <div className="bg-slate-200 bg-opacity-80 fixed top-0 bottom-0 left-0 right-0 z-40 flex justify-center pt-52 p-2 ">
        {/* Modal */}
        <div className=" bg-white w-full max-w-[20rem] rounded-lg p-5 h-64">
          <div className="flex justify-between items-start w-full">
            <div className="text-red-500 text-lg bg-red-100 px-2 py-2 flex justify-center items-center w-10 rounded-md mx-auto">
              <IoWarningOutline />
            </div>

            <div
              className="text-lg cursor-pointer hover:bg-red-500 rounded-full hover:text-white transition-all"
              onClick={() => onClose()}
            >
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
            <button
              onClick={() => handleDeleteReservation(deleteId, url)}
              className=" bg-red-500 text-white w-full py-1 rounded-md text-sm hover:bg-red-600 transition-all"
            >
              {confirmation || "Confirm"}
            </button>
            <button
              type="button"
              onClick={() => onClose()}
              className="shadow-md w-full py-1 rounded-md mt-2 text-sm hover:bg-gray-300 transition-all"
            >
              {cancelation || "Cancel"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheConfirmationPopUp;
