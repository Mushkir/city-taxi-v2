import React, { useEffect, useState } from "react";
import TheReactHelmet from "../components/TheReactHelmet";
import apiEndPoint from "../common/apiEndPoint";
import TheSkeletonLoading from "../components/TheSkeletonLoading";
import Driver from "../interface/driver";

const TheDriversPage = () => {
  const [availableDrivers, setAvailableDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(false);

  const getAllAvailableDrivers = async () => {
    try {
      setLoading(true);
      const response = await fetch(apiEndPoint.getAllDrivers.url, {
        method: apiEndPoint.getAllDrivers.method,
        credentials: "include",
      });

      setLoading(false);
      const respData = await response.json();
      if (!respData?.error) {
        setAvailableDrivers(respData?.data);
      }
      // console.log(respData?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllAvailableDrivers();
  }, []);
  console.log(availableDrivers);

  return (
    <div className="pt-[6rem]">
      <TheReactHelmet title="Available drivers | City-Taxi" />
      <div>
        {/* <!-- Card Blog --> */}
        <div className="max-w-[70rem] container px-2 sm:px-10 mx-auto mb-5 mt-5">
          <h3 className=" text-2xl text-center font-semibold mb-3">
            Available drivers
          </h3>
          {/* <!-- Grid --> */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <!-- Card --> */}
            {loading ? (
              <TheSkeletonLoading listsToRender={10} content={""} />
            ) : (
              availableDrivers.map((driver: Driver) => {
                return (
                  <div
                    key={driver?._id}
                    className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
                  >
                    <div className="h-52 flex flex-col justify-center items-center bg-amber-500 rounded-t-xl">
                      <img
                        className="w-32 h-32 rounded-full object-cover"
                        src={driver?.profileImg}
                        alt={`${driver?.name}'s image`}
                      />
                    </div>
                    <div className="p-4 md:p-6">
                      <span className="block mb-1 text-xs font-semibold uppercase text-amber-500">
                        Slack API
                      </span>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                        Slack
                      </h3>
                      <p className="mt-3 text-gray-500 dark:text-neutral-500">
                        Email collaboration and email service desk made easy.
                      </p>
                    </div>
                    <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                      <a
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="#"
                      >
                        View sample
                      </a>
                      <a
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="#"
                      >
                        View API
                      </a>
                    </div>
                  </div>
                );
              })
            )}
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
        {/* <!-- End Card Blog --> */}
      </div>
    </div>
  );
};

export default TheDriversPage;
