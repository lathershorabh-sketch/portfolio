import laptop from "../assets/Images/laptop.png";

const ContactForm = () => {
  return (
    <section className="mb-25 px-5 xl:px-0">
      <div className="text-white flex max-w-285 w-full mx-auto justify-between ">
        <h2 className="text-[48px] max-w-65 font-bold font-syne">
          Get in Touch With Me
        </h2>
        <div className="text-white max-w-150 w-full flex flex-col gap-5 font-rubik">
          <input
            className="text-white border-b-2  mt-5 pt-2.5 pl-2 pr-5 pb-8 max-w-150 w-full "
            type="text"
            placeholder="Name"
          />
          <input
            className="text-white mt-5 pt-2.5 pl-2 pr-5 pb-8 max-w-150 w-full   border-b-2"
            type="email"
            placeholder="Email"
          />
          <input
            className="text-white mt-5 pt-2.5 pl-2 pr-5 pb-8 max-w-150  w-full  border-b-2 "
            placeholder="Message"
          />
          <button
            className="text-white w-fit px-7 py-3 rounded-full border-2 border-gray-500 hover:bg-gray-500 hover:text-black transition duration-300"
            type="submit"
          >
            SEND
          </button>
        </div>
      </div>
      <div className="w-full lg:max-w-285 mx-auto mt-20 px-5 lg:px-0 h-70 sm:h-120 md:h-150 lg:h-full">
        <img
          className="rounded-2xl w-full h-full object-cover"
          src={laptop}
          alt="laptop"
        />
      </div>
      <div className="flex flex-col sm:flex-row text-white max-w-250 w-full text-center sm:text-start justify-center sm:justify-between mx-auto px-5 lg:px-0 text-[18px] md:text-[20px] lg:text-[24px] mt-20 gap-5">
        <p>Greater Noida</p>
        <p>+91 96254 08587</p>
        <p>sourabhlather579@gmail.com</p>
      </div>
    </section>
  );
};

export default ContactForm;
