import "../cssComp/cont.css";
import Swal from "sweetalert2";

export default function Contacts() {
  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

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
      className="bg-black h-[700px] flex flex-row relative overflow-x-scroll overflow-y-hidden"
    >
      {/* Contact Form Section */}
      <div className="min-w-full lg:min-w-0 lg:flex-1 bg-black p-8 flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Get in touch
        </h2>

        <form
          className="w-full max-w-md flex flex-col gap-6"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col gap-2">
            <input
              name="name"
              placeholder="Name"
              type="text"
              className="w-full h-12 px-4 border-2 border-white bg-black text-white placeholder-white focus:outline-none focus:border-white rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <input
              name="email"
              placeholder="Email"
              type="email"
              className="w-full h-12 px-4 border-2 border-white bg-black text-white placeholder-white focus:outline-none focus:border-white rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <textarea
              name="message"
              placeholder="Message"
              className="w-full h-32 px-4 py-3 border-2 border-white bg-black text-white placeholder-white focus:outline-none focus:border-white rounded-lg resize-none"
              required
            />
          </div>

          <button
            className="w-full h-12 font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="min-w-full lg:min-w-0 lg:flex-1 bg-black p-8 flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          My Location
        </h2>

        <div className="w-full max-w-lg">
          <iframe
            className="w-full h-80 border-2 border-white rounded-lg"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Thornhill&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen={true}
          />
        </div>
      </div>
    </div>
  );
}
