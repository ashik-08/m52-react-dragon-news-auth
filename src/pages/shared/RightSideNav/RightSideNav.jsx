import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import qz1 from '../../../assets/qZone1.png';
import qz2 from '../../../assets/qZone2.png';
import qz3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
  return (
    <section>
      {/* Login with */}
      <div>
        <h2 className="text-pri-text text-xl font-semibold">Login With</h2>
        <p className="space-y-4 mt-5">
          <button className="w-full flex justify-center items-center gap-2 outline outline-1 rounded py-1">
            <FcGoogle></FcGoogle>Login with Google
          </button>
          <button className="w-full flex justify-center items-center gap-2 outline outline-1 rounded py-1">
            <FaGithub></FaGithub>Login with Github
          </button>
        </p>
      </div>
      {/* Find us on */}
      <div className="mt-8">
        <h2 className="text-pri-text text-xl font-semibold">Find Us On</h2>
        <p className="text-sec-text mt-5">
          <a href="" target="blank" className="font-medium w-full flex items-center gap-2 border rounded-t-lg p-4">
            <FaFacebook className="w-5 h-5"></FaFacebook>Facebook
          </a>
          <a href="" target="blank" className="font-medium w-full flex items-center gap-2 border-x p-4">
            <FaTwitter className="w-5 h-5"></FaTwitter>Twitter
          </a>
          <a href="" target="blank" className="font-medium w-full flex items-center gap-2 border rounded-b-lg p-4">
            <FaInstagram className="w-5 h-5"></FaInstagram>Instagram
          </a>
        </p>
      </div>
      {/* Q-zone */}
      <div className="bg-brk-news-bg mt-7 p-5 space-y-5">
        <h2 className="text-pri-text text-xl font-semibold">Q-Zone</h2>
        <figure>
            <img className="w-full" src={qz1} alt="swimming-img" />
            <img className="w-full" src={qz2} alt="class-img" />
            <img className="w-full" src={qz3} alt="play-img" />
        </figure>
      </div>
    </section>
  );
};

export default RightSideNav;
