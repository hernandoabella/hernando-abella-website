"use client";

import React from "react";

const Newsletter = () => {
  return (
    <section className="dark:bg-[#141414]">
      <div className="text-center">
        <div className="flex justify-center py-5">
          <div className="flex items-center gap-2">
            <div>
              <img src="/beat-byte-logo.png" alt="bbp" width={50} />
            </div>
            <h1 className="font-extrabold text-transparent text-3xl sm:text-4xl xl:text-5xl bg-clip-text bg-gradient-to-r from-green-100 via-green-300 to-green-500 bg-transparent h-full">
              Beat-Byte Publishing
            </h1>
          </div>
        </div>
        <p className="mb-10 text-lg text-gray-400 dark:text-gray-300">
          Stay updated with the latest news, articles, and resources directly in
          your inbox.
        </p>

        <div className="mt-6">
          <a
            href="https://www.beat-byte-publishing.com/"
            target="_blank"
            rel="bbp"
          >
            <button className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-green-50 bg-gradient-to-tr from-green-900/30 via-green-900/70 to-green-900/30 ring-4 ring-green-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-green-50/10 before:blur-xl">
              Subscribe Now!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
