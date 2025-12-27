import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "../cssComp/f.css";
import "../cssComp/scroll.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.tsx";

// TypeScript interface for project data from Google Sheets
interface SheetProject {
  [key: string]: string;
}

// Convert Google Sheets 2D array to array of JSON objects
function sheetsToJson(sheetsData: string[][] | undefined): SheetProject[] {
  if (!sheetsData || sheetsData.length < 2) {
    return [];
  }

  const headers = sheetsData[0];
  const rows = sheetsData.slice(1);

  return rows.map((row) => {
    const obj: SheetProject = {};
    headers.forEach((header, index) => {
      obj[header] = row[index] || "";
    });
    return obj;
  });
}

export default function Projects() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [dataSheet, setDataSheet] = useState<SheetProject[]>([]);
  const SPREADSHEET_ID = "1Daj905cL8JVyYoS7aedW1K0YXrKjXyVtn-EF5cxW7zg";
  const RANGE = "Sheet1!A1:E10";
  const API_KEY = import.meta.env.VITE_SPREADSHEET_API;

  useEffect(() => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    console.log("Fetching from:", url);

    axios
      .get(url)
      .then((response) => {
        console.log("Google Sheets raw response:", response.data);
        const jsonData = sheetsToJson(response.data.values);
        console.log("Converted to JSON:", jsonData);
        setDataSheet(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };

  const sliderRight = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };

  return (
    <>
      <div
        id="Projects"
        className={`h-[600px] md:h-dvh flex flex-col gap-10 justify-center relative bg-opacity-50 w-[85%] overflow-hidden ${
          isDark ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
      >
        <div
          className={`text-3xl sm:text-4xl md:text-6xl z-10 w-full flex justify-center items-center font-heading font-bold animate-fade-in-up ${
            isDark ? "text-white neon-glow" : "text-gray-900"
          }`}
        >
          Projects
        </div>

        <div className="projects flex items-center w-full h-[350px]">
          <MdChevronLeft
            size={40}
            className={`hover:scale-105 ease-in-out active:scale-50 duration-300 relative z-10 cursor-pointer bg-none h-full flex items-center justify-center ${
              isDark
                ? "text-white/50 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                : "text-gray-400 hover:text-gray-900 hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.3)]"
            }`}
            onClick={slideLeft}
          />

          <div
            id="slider"
            className="flex items-center w-full gap-6 h-full overflow-x-scroll relative z-10 scroll whitespace-nowrap scroll-smooth px-4"
          >
            {dataSheet
              .slice()
              .reverse()
              .map((item, index) => (
                <button
                  key={item.repo_name}
                  onClick={() => navigate(`/project/${item.repo_name}`)}
                  id={String(item.repo_name)}
                  className="group relative w-[clamp(350px,7vw,350px)] h-[200px] sm:h-[280px] 2xl:h-[320px] shrink-0 cursor-pointer transition-all duration-500 ease-out hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Card background */}
                  <div
                    className={`absolute inset-[1px] backdrop-blur-md rounded-xl border transition-all duration-300 ${
                      isDark
                        ? "border-white/10 group-hover:border-white/20"
                        : "border-gray-200 group-hover:border-gray-300 bg-white/50"
                    }`}
                  />

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-4 gap-4">
                    {/* Icon placeholder */}
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-300 ${
                        isDark ? "border-white/10" : "border-gray-200"
                      }`}
                    >
                      <span
                        className={`text-2xl sm:text-3xl font-heading transition-colors ${
                          isDark
                            ? "text-white/80 group-hover:text-white"
                            : "text-gray-600 group-hover:text-gray-900"
                        }`}
                      >
                        {item.project_name?.charAt(0) || "P"}
                      </span>
                    </div>

                    {/* Project name */}
                    <p
                      className={`font-heading font-bold text-sm sm:text-base 2xl:text-lg text-center whitespace-normal leading-tight transition-all duration-300 ${
                        isDark
                          ? "text-white group-hover:text-shadow-neon-sm"
                          : "text-gray-900"
                      }`}
                    >
                      {item.project_name}
                    </p>

                    <p
                      className={`type ${
                        isDark ? "text-white/60" : "text-gray-600"
                      }`}
                    >
                      {item.type.replace(",", " & ")}
                    </p>

                    {/* View arrow */}
                    <span
                      className={`absolute bottom-4 text-xs sm:text-sm transition-all duration-300 group-hover:translate-x-1 ${
                        isDark
                          ? "text-white/40 group-hover:text-white/80"
                          : "text-gray-400 group-hover:text-gray-700"
                      }`}
                    >
                      View →
                    </span>
                  </div>

                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: isDark
                        ? "0 0 40px rgba(168, 85, 247, 0.15), 0 0 80px rgba(34, 211, 238, 0.1)"
                        : "0 0 40px rgba(168, 85, 247, 0.1), 0 0 60px rgba(0, 0, 0, 0.05)",
                    }}
                  />
                </button>
              ))}
          </div>
          <MdChevronRight
            className={`hover:scale-105 ease-in-out active:scale-50 duration-300 relative z-0 cursor-pointer opacity-100 h-full flex items-center justify-center ${
              isDark
                ? "text-white/50 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                : "text-gray-400 hover:text-gray-900 hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.3)]"
            }`}
            size={40}
            onClick={sliderRight}
          />
        </div>
      </div>
    </>
  );
}
