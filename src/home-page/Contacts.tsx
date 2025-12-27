import "../cssComp/cont.css";
import Swal from "sweetalert2";
import { useTheme } from "../context/ThemeContext.tsx";
import {ChangeEvent, useState} from "react";

export default function Contacts() {
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isDark = theme === "dark";

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", import.meta.env.VITE_FORM_KEY);

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

      console.log(name,email,message);
      setName("");
      setEmail("");
      setMessage("");


      console.log("Success", res);
    }
  };

  return (
    <div
      id="Contacts"
      className={`h-[600px] md:h-dvh w-[85%] bg-opacity-50 flex flex-row relative overflow-x-scroll overflow-y-hidden ${
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

                onChange={(event:ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
              name="name"
                value={name}
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
              onChange={(event:ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
              placeholder="Email"
              value={email}
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
                onChange={(event:ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value)}
              name="message"
              placeholder="Message"
                value={message}
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

    </div>
  );
}
