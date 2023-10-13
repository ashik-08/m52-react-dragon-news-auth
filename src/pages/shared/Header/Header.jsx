import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="mt-12">
      <figure className="flex justify-center">
        <img src={logo} alt="logo-img" />
      </figure>
      <p className="text-sec-text text-lg mt-5 text-center">Journalism Without Fear or Favour</p>
      <p className="text-pri-text text-xl font-medium mt-3 text-center">{moment().format("dddd, MMMM D YYYY, h:mm:ss A")}</p>
    </div>
  );
};

export default Header;
