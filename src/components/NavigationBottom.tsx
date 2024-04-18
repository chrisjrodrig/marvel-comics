"use client";
import { ImHome, ImSearch, ImBooks, ImUser } from "react-icons/im";
import * as React from "react";
import Link from "next/link";

export function NavigationBottom() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <Link
          href="/"
          className="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600"
        >
          <ImHome
            className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400
          group-hover:text-blue-600 dark:group-hover:text-blue-500"
          />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Home
          </span>
        </Link>
        <Link
          href="/search"
          className="inline-flex flex-col items-center justify-center px-5 border-e border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600"
        >
          <ImSearch
            className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400
          group-hover:text-blue-600 dark:group-hover:text-blue-500"
          />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Search
          </span>
        </Link>
        <Link
          href="/library"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <ImBooks
            className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400
          group-hover:text-blue-600 dark:group-hover:text-blue-500"
          />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Library
          </span>
        </Link>
        <Link
          href="/profile"
          className="inline-flex flex-col items-center justify-center px-5 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group border-x dark:border-gray-600"
        >
          <ImUser
            className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400
          group-hover:text-blue-600 dark:group-hover:text-blue-500"
          />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Profile
          </span>
        </Link>
      </div>
    </div>
  );
}
