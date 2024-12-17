import React from "react";
import TheReactHelmet from "../components/TheReactHelmet";

const TheDriversPage = () => {
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => {
              return (
                <div
                  key={el}
                  className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
                >
                  <div className="h-52 flex flex-col justify-center items-center bg-amber-500 rounded-t-xl">
                    <svg
                      className="size-28"
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="56" height="56" rx="10" fill="white" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.7326 11.968C21.9637 11.9693 20.5321 13.4049 20.5334 15.1738C20.5321 16.9427 21.965 18.3782 23.7339 18.3795H26.9345V15.1751C26.9358 13.4062 25.5029 11.9706 23.7326 11.968C23.7339 11.968 23.7339 11.968 23.7326 11.968M23.7326 20.5184H15.2005C13.4316 20.5197 11.9987 21.9553 12 23.7242C11.9974 25.4931 13.4303 26.9286 15.1992 26.9312H23.7326C25.5016 26.9299 26.9345 25.4944 26.9332 23.7255C26.9345 21.9553 25.5016 20.5197 23.7326 20.5184V20.5184Z"
                        fill="#36C5F0"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M44.0001 23.7242C44.0014 21.9553 42.5684 20.5197 40.7995 20.5184C39.0306 20.5197 37.5977 21.9553 37.599 23.7242V26.9312H40.7995C42.5684 26.9299 44.0014 25.4944 44.0001 23.7242ZM35.4666 23.7242V15.1738C35.4679 13.4062 34.0363 11.9706 32.2674 11.968C30.4985 11.9693 29.0656 13.4049 29.0669 15.1738V23.7242C29.0643 25.4931 30.4972 26.9286 32.2661 26.9312C34.035 26.9299 35.4679 25.4944 35.4666 23.7242Z"
                        fill="#2EB67D"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M32.2661 44.0322C34.035 44.0309 35.4679 42.5953 35.4666 40.8264C35.4679 39.0575 34.035 37.622 32.2661 37.6207H29.0656V40.8264C29.0642 42.594 30.4972 44.0295 32.2661 44.0322ZM32.2661 35.4804H40.7995C42.5684 35.4791 44.0013 34.0436 44 32.2747C44.0026 30.5058 42.5697 29.0702 40.8008 29.0676H32.2674C30.4985 29.0689 29.0656 30.5045 29.0669 32.2734C29.0656 34.0436 30.4972 35.4791 32.2661 35.4804V35.4804Z"
                        fill="#ECB22E"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 32.2746C11.9987 34.0435 13.4316 35.479 15.2005 35.4804C16.9694 35.479 18.4024 34.0435 18.401 32.2746V29.0688H15.2005C13.4316 29.0702 11.9987 30.5057 12 32.2746ZM20.5334 32.2746V40.825C20.5308 42.5939 21.9637 44.0295 23.7326 44.0321C25.5016 44.0308 26.9345 42.5952 26.9332 40.8263V32.2772C26.9358 30.5083 25.5029 29.0728 23.7339 29.0702C21.9637 29.0702 20.5321 30.5057 20.5334 32.2746C20.5334 32.2759 20.5334 32.2746 20.5334 32.2746Z"
                        fill="#E01E5A"
                      />
                    </svg>
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
            })}
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
