import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center ">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          onClick={() => router.push("/")}
          width={120}
          height={40}
          className="cursor-pointer"
        />
        <form className="flex flex-grow border border-gray-200 rounded-full w-full px-4 mr-5 py-2.5 ml-10 max-w-3xl shadow-lg items-center">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 cursor-pointer hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            search
          </button>
        </form>
        <Avatar className="ml-auto" url="https://cutt.ly/AQ4Agcs" />
      </div>
      {/* Header option components*/}
      <HeaderOptions />
    </header>
  );
}

export default Header;
