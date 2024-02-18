import React from "react";

const TeamMember = () => {
  return (
    <>
      <section class="flex items-center py-10 lg:py-24  ">
        <div class="justify-center flex-1 px-4 py-6 mx-auto max-w-6xl lg:py-4 md:px-6">
          <div class="mb-20 text-center">
            {/* <span
                    class="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase dark:text-gray-400">
                    Team
                </span> */}
            <h1 class="text-3xl font-bold capitalize">Meet Our Team </h1>
          </div>
          <div class="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div class="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row">
              <div class="inline-block w-full mb-3 overflow-hidden text-xs text-white md:rounded-full h-96 sm:w-48 sm:h-48">
                <img
                  class="object-cover w-full h-full transition-all hover:scale-110"
                  src="https://avatars.githubusercontent.com/u/64706066?v=4"
                  alt="vinay kumar image"
                />
              </div>
              <div class="relative flex self-center flex-1 lg:ml-8 ">
                <div>
                  <h2 class="mb-2 text-2xl font-bold">Vinay Kumar</h2>
                  <p class="mb-4 text-sm font-medium text-blue-500">
                    Full Stack Developer
                  </p>
                  <p class="mb-6 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetu incididunt ut dolore
                    magna aliqua. Ut enim ad minim veniam
                  </p>
                  <div class="flex">
                    <span class="inline-block mr-5 text-gray-700 hover:text-blue-500">
                      <a
                        href="https://github.com/vkumar8192449"
                        target="_blank"
                        className="text-gray-900 hover:text-gray-900 "
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </span>
                    <span class="inline-block mr-5 text-gray-700 hover:text-blue-500">
                      <a
                        href="https://www.linkedin.com/in/vk8192449/"
                        target="_blank"
                        className="text-gray-900 hover:text-gray-900 "
                      >
                        <svg
                          className="w-5 h-5 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row">
              <div class="inline-block mb-3 overflow-hidden text-xs text-white bg-blue-500 md:rounded-full h-96 sm:w-48 sm:h-48">
                <img
                  class="object-cover w-full h-full transition-all hover:scale-110"
                  src="https://avatars.githubusercontent.com/u/137149762?v=4"
                  alt="vikash burman image"
                />
              </div>
              <div class="relative flex self-center flex-1 lg:ml-8 ">
                <div>
                  <h2 class="mb-2 text-2xl font-bold">Vikash Burman</h2>
                  <p class="mb-4 text-sm font-medium text-blue-500">
                    Full Stack Developer
                  </p>
                  <p class="mb-6 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetu incididunt ut dolore
                    magna aliqua. Ut enim ad minim veniam
                  </p>
                  <div class="flex">
                    <span class="inline-block mr-5 text-gray-700 hover:text-blue-500">
                      <a
                        href="https://github.com/VikashBurman"
                        target="_blank"
                        className="text-gray-900 hover:text-gray-900"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </span>
                    <span class="inline-block mr-5 text-gray-700 hover:text-blue-500">
                      <a
                        href="https://www.linkedin.com/in/vikash-burman-33517824a/"
                        target="_blank"
                        className="text-gray-900 hover:text-gray-900 "
                      >
                        <svg
                          className="w-5 h-5 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row">
              <div class="inline-block mb-3 overflow-hidden text-xs text-white bg-blue-500 md:rounded-full h-96 sm:w-48 sm:h-48">
                <img
                  class="object-cover w-full h-full transition-all hover:scale-110"
                  src="https://avatars.githubusercontent.com/u/112263798?v=4"
                  alt="vishal kumar image"
                />
              </div>
              <div class="relative flex self-center flex-1 lg:ml-8 ">
                <div>
                  <h2 class="mb-2 text-2xl font-bold">Vishal Kumar</h2>
                  <p class="mb-4 text-sm font-medium text-blue-500">
                    Full Stack Developer
                  </p>
                  <p class="mb-6 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetu incididunt ut dolore
                    magna aliqua. Ut enim ad minim veniam
                  </p>
                  <div class="flex">
                    <span class="inline-block mr-5 text-gray-700 hover:text-blue-500">
                      <a
                        href="https://github.com/vishu567"
                        target="_blank"
                        className="text-gray-900 hover:text-gray-900"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </span>
                    <span class="inline-block mr-5 text-gray-700 hover:text-blue-500">
                      <a
                        href="https://www.linkedin.com/in/vishal-563015231/"
                        target="_blank"
                        className="text-gray-900 hover:text-gray-900 "
                      >
                        <svg
                          className="w-5 h-5 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row">
              <div class="inline-block mb-3 overflow-hidden text-xs text-white bg-blue-500 md:rounded-full h-96 sm:w-48 sm:h-48">
                <img
                  class="object-cover w-full h-full transition-all hover:scale-110"
                  src="https://avatars.githubusercontent.com/u/115224664?v=4"
                  alt="sachin kumar image"
                />
              </div>
              <div class="relative flex self-center flex-1 lg:ml-8 ">
                <div>
                  <h2 class="mb-2 text-2xl font-bold">Sachin Kumar</h2>
                  <p class="mb-4 text-sm font-medium text-blue-500">
                    Full Stack Developer
                  </p>
                  <p class="mb-6 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetu incididunt ut dolore
                    magna aliqua. Ut enim ad minim veniam
                  </p>
                  <div class="flex">
                    <span class="inline-block mr-5 text-gray-700 hover:text-blue-500">
                      <a
                        href="https://github.com/sachinkumar911"
                        target="_blank"
                        className="text-gray-900 hover:text-gray-900"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </span>
                    <span class="inline-block mr-5 text-gray-700 hover:text-blue-500">
                      <a
                        href="https://www.linkedin.com/in/sachin-kumar-7b6a121a6/"
                        target="_blank"
                        className="text-gray-900 hover:text-gray-900 "
                      >
                        <svg
                          className="w-5 h-5 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMember;
