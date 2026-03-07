import laptop from "../assets/Images/laptop.png";

const ContactForm = () => {
  return (
    <section className="mb-10 lg:mb-25 px-5 xl:px-0">
      <div className="text-white flex flex-col md:flex-row max-w-285 w-full mx-auto justify-center md:justify-between gap-6 md:gap-10">
        <h2 className="text-[24px] md:text-[40px] lg:text-[48px] text-center md:text-start  mx-auto md:mx-0 max-w-79 font-bold font-syne">
          Get in Touch With Me
        </h2>
        <div className="text-white mx-auto lg:mx-0 max-w-150 md:max-w-120 lg:max-w-150 w-full flex flex-col  gap-5 font-rubik">
          <input
            className="text-white border-b-2 mt-0 lg:mt-5 pt-0 lg:pt-2.5 pl-2 pr-5 pb-8 max-w-150 w-full mx-auto md:mx-0"
            type="text"
            placeholder="Name"
          />
          <input
            className="text-white mt-5 pt-2.5 pl-2 pr-5 pb-8 max-w-150 w-full mx-auto md:mx-0  border-b-2"
            type="email"
            placeholder="Email"
          />
          <input
            className="text-white mt-5 pt-2.5 pl-2 pr-5 pb-8 max-w-150  w-full mx-auto md:mx-0 border-b-2 "
            placeholder="Message"
          />
          <button className="text-white w-fit  ml-auto hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]  duration-300 ease-linear border border-[#5F5F5F] hover:border-white px-4.5 py-[7.78px] rounded-[20px] text-[16px]">
            Contact
          </button>
        </div>
      </div>
      <div className="w-full lg:max-w-285 mx-auto mt-10 lg:mt-20  h-70 sm:h-120 md:h-150 lg:h-full">
        <img
          className="rounded-2xl w-full h-full object-cover"
          src={laptop}
          alt="laptop"
        />
      </div>
      <div className="flex flex-col sm:flex-row text-white max-w-250 w-full text-center sm:text-start justify-center sm:justify-between mx-auto px-5 lg:px-0 text-[18px] md:text-[20px] lg:text-[24px] mt-10 lg:mt-20 gap-5">
        <p>Greater Noida</p>
        <p>+91 96254 08587</p>
        <p>sourabhlather579@gmail.com</p>
      </div>
    </section>
  );
};

export default ContactForm;
