import { Fotterlinks } from "./common/Helper";
import {
  Email,
  Fottericons2,
  Fottericons3,
  Fottericons4,
  Phone,
} from "./common/Icons";
import Fottericons1 from "../assets/Images/Fottericon1.png";

const Fotter = () => {
  return (
    <section>
      <footer>
        <h3 className="text-[#FA6E00] text-4xl font-k2d text-center">
          SOURABH LATHER
        </h3>
        <ul className="text-[#959595] flex flex-wrap px-5 md:px-0 mx-auto max-w-180 my-5 md:my-10 text-[16px] md:text-2xl gap-5 sm:gap-10 md:gap-0 justify-center md:justify-between">
          {Fotterlinks.map((links, index) => (
            <li key={index}>{links}</li>
          ))}
        </ul>
        <div className="flex gap-5 md:gap-12 justify-center mb-5 lg:mb-15 px-5 md:px-0">
          <img
            className="max-w-15 sm:max-w-20"
            src={Fottericons1}
            alt="fottericon1"
          />
          <Fottericons2 />
          <Fottericons3 />
          <Fottericons4 />
        </div>
        <div className="flex flex-col sm:flex-row px-5 xl:px-0 justify-center gap-4 md:gap-10 mb-5 md:mb-10">
          <p className="text-[#959595] text-[16px] md:text-2xl flex items-center gap-1 mx-auto sm:mx-0">
            <Email /> sourabhlather579@gmail.com
          </p>
          <p className="text-[#959595] text-[16px] md:text-2xl flex items-center gap-1 mx-auto sm:mx-0">
            <Phone /> +91 96254 08587
          </p>
        </div>
      </footer>
      <p className="text-[#959595] text-center border-t max-w-150 mx-auto text-[16px] md:text-[20px] p-5">
        Designed by @sourabh.lather UI/UX designer
      </p>
    </section>
  );
};

export default Fotter;
