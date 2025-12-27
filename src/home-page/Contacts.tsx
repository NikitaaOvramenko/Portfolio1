import "../cssComp/cont.css";
import Swal from "sweetalert2";
import { useTheme } from "../context/ThemeContext.tsx";

export default function Contacts() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "38657813-54ac-464b-badf-73b942a57494");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Sent",
        icon: "success",
        draggable: true,
      });
      console.log("Success", res);
    }
  };

  return (
    <div
      id="Contacts"
      className={`h-[700px] w-[85%] bg-opacity-50 flex flex-row relative overflow-x-scroll overflow-y-hidden ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      {/* Contact Form Section */}
      <div className="min-w-full lg:min-w-0 lg:flex-1 bg-opacity-0 p-8 flex flex-col items-center justify-center">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-8 font-heading animate-fade-in-up ${
            isDark ? "text-white neon-glow" : "text-gray-900"
          }`}
        >
          Get in touch
        </h2>

        <form
          className="w-full max-w-md flex flex-col gap-6 font-body"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col gap-2">
            <input
              name="name"
              placeholder="Name"
              type="text"
              className={`w-full h-12 px-4 border rounded-lg transition-all duration-300 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgba(168,85,247,0.3)] ${
                isDark
                  ? "border-white/30 bg-black text-white placeholder-white/50"
                  : "border-gray-300 bg-white text-gray-900 placeholder-gray-400"
              }`}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <input
              name="email"
              placeholder="Email"
              type="email"
              className={`w-full h-12 px-4 border rounded-lg transition-all duration-300 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgba(168,85,247,0.3)] ${
                isDark
                  ? "border-white/30 bg-black text-white placeholder-white/50"
                  : "border-gray-300 bg-white text-gray-900 placeholder-gray-400"
              }`}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <textarea
              name="message"
              placeholder="Message"
              className={`w-full h-32 px-4 py-3 border rounded-lg resize-none transition-all duration-300 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgba(168,85,247,0.3)] ${
                isDark
                  ? "border-white/30 bg-black text-white placeholder-white/50"
                  : "border-gray-300 bg-white text-gray-900 placeholder-gray-400"
              }`}
              required
            />
          </div>

          <button
            className={`w-full h-12 font-semibold font-heading border rounded-lg transition-all duration-300 ${
              isDark
                ? "bg-white/10 border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] text-white"
                : "bg-gray-100 border-gray-300 hover:bg-gray-200 hover:border-gray-400 text-gray-900"
            }`}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="min-w-full lg:min-w-0 lg:flex-1 bg-opacity-0 p-8 flex flex-col items-center justify-center">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-8 font-heading animate-fade-in-up ${
            isDark ? "text-white neon-glow" : "text-gray-900"
          }`}
        >
          My Location
        </h2>

        <div className="w-full max-w-lg">
          <iframe
            className={`w-full h-80 border rounded-lg ${
              isDark ? "border-white/30" : "border-gray-300"
            }`}
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Thornhill&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen={true}
          />
        </div>
      </div>
    </div>
  );
}
