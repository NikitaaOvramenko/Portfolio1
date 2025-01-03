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
      className="main  contacts flex flex-row-reverse overflow-x-auto scroll whitespace-nowrap w-full h-auto sm:justify-center snap-x snap-mandatory p-2 "
    >
      {/* left */}
      <div className="left flex flex-col snap-center w-[500px]  gap-3 flex-shrink-0   ">
        <div className="text-3xl sm:text-4xl text-center font-bold w-full ">
          My Location
        </div>
        <iframe
          className="border-black flex-auto border rounded-md  self-center"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Thornhill&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen={true}
        ></iframe>
      </div>

      {/* right */}

      <div className="right flex  flex-col snap-center w-[500px]  gap-3 flex-shrink-0  ">
        <div className="text-3xl sm:text-4xl  text-center font-bold w-full">
          Get in touch
        </div>
        <form
          className="  w-full sm:w-auto h-auto flex flex-col  items-center justify-center"
          onSubmit={onSubmit}
        >
          <div className="flex  flex-col gap-3">
            <label htmlFor="" className="text-end self-start w-[60px]"></label>
            <input
              name="name"
              placeholder="Name:"
              type="text"
              className="w-[300px]   h-8 border-b-2  px-2 border-black focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-end self-end w-[60px] "></label>
            <input
              name="email"
              placeholder="Email:"
              type="email"
              className="w-[300px]  h-8 border-b-2 px-2 border-black focus:outline-none"
              required
            />
          </div>
          {/* <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-end self-end w-[60px]"></label>
              <input
                name="subject"
                placeholder=" Subject:"
                type="text"
                className="w-[300px]  h-8 border-b-2 border-black focus:outline-none"
                required
              />
            </div> */}

          <div className="flex flex-col gap-3 mt-8">
            <label
              htmlFor=""
              className="message text-end self-start w-[60px]"
            ></label>
            <textarea
              name="message"
              className="message border-2 border-black px-2 pt-1 focus:outline-none rounded resize-none "
              cols={33}
              rows={5}
              required
              placeholder="Message:"
            ></textarea>
          </div>

          <button
            className="subBut w-16 h-8 font-semibold active:scale-90 active:text-yellow-200 duration-300"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
