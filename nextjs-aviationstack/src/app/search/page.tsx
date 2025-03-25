"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };
  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    redirect(`/airports?search=${inputValue}&limit=5&offset=0`);
  };
  return (
    <form>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl mb-25 sm:text-4xl md:text-6xl lg:text-7xl text-center titleA">
          SkyConnect Explorer
        </h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Buscar aeropuertos..."
          className="p-2 mb-4 w-64 inputA"
        />
        <button
          className="flex py-2 px-6 text-white bg-gradient-to-r from-blue-500 via-teal-300 to-teal-200 border-[1.3px] border-white rounded-[10.4px] cursor-pointer hover:bg-blue-700 transform hover:scale-105 transition duration-200"
          onClick={onSearch}
          type="submit"
        >
          <Image
            src="/svg/search.svg"
            alt="Icon"
            width={20}
            height={20}
            className="mr-2"
          />
          Buscar
        </button>
      </div>
    </form>
  );
}
