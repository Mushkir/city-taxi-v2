import React, { FunctionComponent, useState } from "react";
import TheProfileImageView from "./TheProfileImageView";
import { GoKebabHorizontal } from "react-icons/go";
import { Link } from "react-router";

interface TheProfileCardProps {
  userData: {
    name: string;
    profileImage?: string;
    role: string;
    email: string;
    username: string;
    phone: string;
    idCardNo: string;
    address: string;
    city: string;
  } | null;
}

const TheProfileCard: FunctionComponent<TheProfileCardProps> = ({
  userData,
}) => {
  // console.log(userData);

  const [openKebabMenu, setOpenKebabMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenKebabMenu(!openKebabMenu);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 border border-gray-200 rounded-lg shadow bg-gray-800 pt-10">
      <div className="flex flex-col items-center pb-10 relative">
        {/* Option button */}
        <div>
          <div
            onClick={() => handleOpenMenu()}
            className=" text-gray-400 text-lg absolute -top-4 right-5 cursor-pointer hover:text-gray-300"
          >
            <GoKebabHorizontal />
          </div>

          {openKebabMenu && (
            <ul className=" bg-gray-400 rounded-md text-right absolute right-5 mt-2">
              <li className="px-5 py-1.5 hover:bg-gray-600 transition-all hover:rounded-t-md cursor-pointer hover:text-gray-200">
                <Link to={"/"}>Edit</Link>
              </li>
              <li className="px-5 py-1.5 hover:bg-gray-600 transition-all hover:text-gray-200">
                <Link to={"/"}>Delete Account</Link>
              </li>
              <li className="px-5 py-1.5 hover:bg-gray-600 transition-all hover:rounded-b-md cursor-pointer hover:text-gray-200">
                Logout
              </li>
            </ul>
          )}
        </div>

        {/* Profile card */}
        <div className="w-24 h-24 mb-3 rounded-full shadow-lg">
          <TheProfileImageView image={userData?.profileImage} />
        </div>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {userData?.name}
        </h5>
        <span className="text-sm text-gray-400 capitalize">
          {userData?.role}
        </span>

        <div className="mt-4 w-full">
          {/* Email */}
          <div className=" flex flex-col w-full px-10 mb-3">
            <span className=" text-gray-200">Email:</span>
            <span className=" text-gray-400">{userData?.email}</span>
          </div>

          {/* Username */}
          <div className=" flex flex-col w-full px-10 mb-3">
            <span className=" text-gray-200">Username:</span>
            <span className=" text-gray-400">{userData?.username}</span>
          </div>

          {/* Phone */}
          <div className=" flex flex-col w-full px-10 mb-3">
            <span className=" text-gray-200">Contact No:</span>
            <span className=" text-gray-400">{userData?.phone}</span>
          </div>

          {/* ID Card No */}
          <div className=" flex flex-col w-full px-10 mb-3">
            <span className=" text-gray-200">ID Card No:</span>
            <span className=" text-gray-400">{userData?.idCardNo}</span>
          </div>

          {/* Address */}
          <div className=" flex flex-col w-full px-10 mb-3">
            <span className=" text-gray-200">Address:</span>
            <span className=" text-gray-400">
              No. {userData?.address}, {userData?.city}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheProfileCard;
