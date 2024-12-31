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
    <>
      <div className="contacts flex w-full flex-wrap h-auto p-2">
        <div className="left flex flex-col  w-full md:w-1/2 justify-between">
          <div className="text-4xl flex-auto text-center">Location</div>
          <iframe
            className="border-black flex-auto border rounded-md md:w-[400px] w-[200-x] md:h-80 h-40 self-center"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=77%20mintwood%20road+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen={true}
          ></iframe>
        </div>

        <div className="right flex flex-col  w-full md:w-1/2 justify-between items-center">
          <div className="text-4xl flex-auto text-center">Get in touch</div>
          <form
            className="md:w-[500px] w-[200-x] md:h-80 h-40 flex flex-col  items-center"
            onSubmit={onSubmit}
          >
            <div className="flex  flex-col gap-3">
              <label
                htmlFor=""
                className="text-end self-start w-[60px]"
              ></label>
              <input
                name="name"
                placeholder=" Name:"
                type="text"
                className="w-[300px]  h-8 border-b-2 border-black focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-end self-end w-[60px]"></label>
              <input
                name="email"
                placeholder=" Email:"
                type="email"
                className="w-[300px]  h-8 border-b-2 border-black focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-end self-end w-[60px]"></label>
              <input
                name="subject"
                placeholder=" Subject:"
                type="text"
                className="w-[300px]  h-8 border-b-2 border-black focus:outline-none"
                required
              />
            </div>

            <div className="flex flex-col gap-3 mt-8">
              <label
                htmlFor=""
                className="message text-end self-start w-[60px]"
              ></label>
              <textarea
                name="message"
                className="message border-2 border-black focus:outline-none rounded resize-none "
                cols={33}
                rows={5}
                required
                placeholder=" Message:"
              ></textarea>
            </div>

            <button className="subBut w-16 h-8" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
