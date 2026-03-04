import { useState, useCallback, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useTheme } from "../context/ThemeContext.tsx";
import { MdClose } from "react-icons/md";
import axios from "axios";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface Lab {
  "project-name": string;
  url: string;
}

function sheetsToJson(data: string[][] | undefined): Lab[] {
  if (!data || data.length < 2) return [];
  const headers = data[0];
  return data.slice(1).map((row) => {
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => (obj[h] = row[i] || ""));
    return obj as unknown as Lab;
  });
}

const SPREADSHEET_ID = "1BgQYaHQ_D8wrc1U8qMGMmUiwAIm6VgPPhs4AbxL8WYk";
const RANGE = "Sheet1!A1:B20";

export default function DataViz() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [labs, setLabs] = useState<Lab[]>([]);
  const [selectedLab, setSelectedLab] = useState<Lab | null>(null);
  const [numPages, setNumPages] = useState<number>(0);

  const API_KEY = import.meta.env.VITE_SPREADSHEET_API;

  useEffect(() => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    axios
      .get(url)
      .then((res) => setLabs(sheetsToJson(res.data.values)))
      .catch(console.error);
  }, [API_KEY]);

  const onDocumentLoadSuccess = useCallback(
    ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);
    },
    []
  );

  return (
    <>
      <div
        id="DataViz"
        className={`min-h-dvh flex flex-col gap-10 justify-center items-center bg-opacity-50 w-[85%] py-20 ${
          isDark ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
      >
        <div
          className={`text-3xl sm:text-4xl md:text-6xl font-heading font-bold animate-fade-in-up ${
            isDark ? "text-white neon-glow" : "text-gray-900"
          }`}
        >
          Data Visualisation
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {labs.map((lab, index) => (
            <button
              key={lab["project-name"]}
              onClick={() => setSelectedLab(lab)}
              className="group relative h-[220px] cursor-pointer transition-all duration-500 ease-out hover:scale-105 text-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-[1px] backdrop-blur-md rounded-xl border transition-all duration-300 ${
                  isDark
                    ? "border-white/10 group-hover:border-white/20"
                    : "border-gray-200 group-hover:border-gray-300 bg-white/50"
                }`}
              />

              <div className="relative h-full flex flex-col items-center justify-center p-6 gap-3">
                <div
                  className={`w-14 h-14 rounded-full border flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-300 ${
                    isDark ? "border-white/10" : "border-gray-200"
                  }`}
                >
                  <span className="text-2xl">📊</span>
                </div>

                <p
                  className={`font-heading font-bold text-sm sm:text-base text-center leading-tight transition-all duration-300 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {lab["project-name"]}
                </p>

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

              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: isDark
                    ? "0 0 40px rgba(168, 85, 247, 0.15), 0 0 80px rgba(34, 211, 238, 0.1)"
                    : "0 0 40px rgba(168, 85, 247, 0.1)",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* PDF Modal */}
      {selectedLab && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedLab(null)}
        >
          <div
            className={`relative flex flex-col items-center gap-4 p-6 rounded-2xl border max-w-3xl w-[95%] max-h-[90vh] overflow-y-auto ${
              isDark
                ? "bg-black/90 border-white/10"
                : "bg-white/95 border-gray-200"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex w-full items-center justify-between">
              <p
                className={`font-heading font-bold text-lg ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {selectedLab["project-name"]}
              </p>
              <button
                onClick={() => setSelectedLab(null)}
                className={`p-1 rounded-lg transition-colors ${
                  isDark
                    ? "hover:bg-white/10 text-white"
                    : "hover:bg-gray-100 text-gray-900"
                }`}
              >
                <MdClose size={24} />
              </button>
            </div>

            <Document
              file={selectedLab.url}
              onLoadSuccess={onDocumentLoadSuccess}
              className="flex flex-col gap-3"
            >
              {Array.from({ length: numPages }, (_, i) => (
                <Page
                  key={i + 1}
                  pageNumber={i + 1}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="rounded-lg overflow-hidden"
                  width={Math.min(window.innerWidth * 0.8, 700)}
                />
              ))}
            </Document>
          </div>
        </div>
      )}
    </>
  );
}
