export default function Contacts() {
  return (
    <>
      <div className="contacts flex w-full flex-wrap h-auto p-2">
        <div className="left flex flex-col  w-full md:w-1/2 justify-between">
          <div className="text-4xl flex-auto text-center">Location</div>
          <iframe
            className="border-black flex-auto border rounded-md md:w-[500px] w-[200-x] md:h-80 h-40 self-center"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=77%20mintwood%20road+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen={true}
          ></iframe>
        </div>

        <div className="right flex flex-col  w-full md:w-1/2 justify-between">
          <div className="text-4xl flex-auto text-center">Contact</div>
          <form className="md:w-[500px] w-[200-x] md:h-80 h-40">lol</form>
        </div>
      </div>
    </>
  );
}
