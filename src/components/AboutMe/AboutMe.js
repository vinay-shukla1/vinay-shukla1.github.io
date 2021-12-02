import React from "react";

export default function AboutMe() {
  return (
    <div
      id="profile"
      className="flex justify-center h-auto flex-wrap mx-auto my-32 lg:my-16"
    >
      <div className="w-full lg:w-4/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 items-stretch ">
        <div className="p-4 md:p-8 text-center lg:text-left flex-col h-full justify-between ">
          <h1 className="text-3xl font-bold pt-8 lg:pt-0">Vinay Shukla</h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
          <p className="pt-4 text-sm lg:text-base font-bold flex items-center justify-center lg:justify-start">
            <svg
              className="h-4 fill-current text-green-700 lg:pr-4 lg:block hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
            </svg>{" "}
            Technical Lead / Fullstack Developer 
          </p>
          <p className="pt-2 text-gray-800 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
            <svg
              className="h-4 fill-current text-green-700 lg:pr-4 lg:block hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
            </svg>
            vinayshukla.sdei@gmail.com
          </p>
          <p className="pt-8 text-sm lg:text-base flex-grow mb-auto">
            A full stack programmer who needs more challenges and craving for
            the newest knowledge of programming languages and technologies. I
            was a student at University of applied science Berlin, German with
            the major International Media Computing. In 2021, I joined a
            Javascript Bootcamp for four months and graduate with the predicate
            honors. At moment I work at Digital Lab Sprout as a{" "}
            <span className="font-bold">Software Engineer</span>
          </p>

          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25 lg:mt-20"></div>
          <div className="mt-8 pb:8 lg:pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap gap-7">
            <a
              className="link"
              href="https://github.com/vinay-shukla1"
              data-tippy-content="@github_handle"
            >
              <svg
                className="h-6 fill-current text-gray-600 hover:text-green-700"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              className="link"
              href="#"
              data-tippy-content="@unsplash_handle"
            >
              <svg
                className="h-6 fill-current text-gray-600 hover:text-green-700"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Linkedin</title>
                <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
