"use client";

import CardAiportInfo from "@/components/CardAiportInfo";
import GoogleMap from "@/components/GoogleMap";
import airportStore from "@/stores/airport";
import { useState } from "react";

export default function Airport() {
  const [activeTab, setActiveTab] = useState(0);
  const airport = airportStore((state: any) => state.airport);
  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };
  return (
    <div className="min-h-screen justify-center items-center">
      <div className="text-center p-6">
        <p className="text-[40px] titleA">{airport?.airport_name}</p>
      </div>
      <div className="m-10">
        <div className="w-full">
          <div className="relative right-0">
            <ul
              className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-[#3F495F]"
              data-tabs="tabs"
              role="list"
            >
              <li className="z-30 flex-auto text-center">
                <a
                  className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer text-white ${
                    activeTab === 0
                      ? "bg-[#0060FF] font-bold"
                      : "hover:bg-[#0060FF]"
                  }`}
                  data-tab-target=""
                  role="tab"
                  aria-selected="true"
                  onClick={() => handleTabClick(0)}
                >
                  General
                </a>
              </li>
              <li className="z-30 flex-auto text-center">
                <a
                  className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer text-white ${
                    activeTab === 1
                      ? "bg-[#0060FF] font-bold"
                      : "hover:bg-[#0060FF]"
                  }`}
                  data-tab-target=""
                  role="tab"
                  aria-selected="false"
                  onClick={() => handleTabClick(1)}
                >
                  Ubicación
                </a>
              </li>
              <li className="z-30 flex-auto text-center">
                <a
                  className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer text-white ${
                    activeTab === 2
                      ? "bg-[#0060FF] font-bold"
                      : "hover:bg-[#0060FF]"
                  }`}
                  data-tab-target=""
                  role="tab"
                  aria-selected="false"
                  onClick={() => handleTabClick(2)}
                >
                  Zona Horaria
                </a>
              </li>
              <li className="z-30 flex-auto text-center">
                <a
                  className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer text-white ${
                    activeTab === 3
                      ? "bg-[#0060FF] font-bold"
                      : "hover:bg-[#0060FF]"
                  }`}
                  data-tab-target=""
                  role="tab"
                  aria-selected="false"
                  onClick={() => handleTabClick(3)}
                >
                  Estadísticas
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          {activeTab === 0 && (
            <div>
              <CardAiportInfo title="Información General" />
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <CardAiportInfo svg="pointer" title="Ubicación" />
              <div className="pt-6">
                <GoogleMap
                  latitude={airport?.latitude}
                  longitude={airport?.longitude}
                />
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <CardAiportInfo svg="world" title="Zona Horaria" />
              <div className="pt-6">
                <CardAiportInfo svg="clock" title="Hora Local" />
              </div>
            </div>
          )}
          {activeTab === 3 && <div></div>}
        </div>
      </div>
    </div>
  );
}
