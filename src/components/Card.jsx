import {
  FaUser,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export default function Card({
  name,
  link,
  companyName,
  username,
  email,
  address,
}) {
  return (
    <div className="relative w-[20rem] bg-white rounded-md shadow-lg hover:shadow-xl hover:shadow-blue-200 pb-10 duration-300">
      <div className="w-full h-28 bg-blue-400 rounded-t-md"></div>

      <img
        src="/profile.jpg"
        alt="Profile Image"
        width={100}
        height={100}
        className="absolute top-12 left-1/2 -translate-x-1/2 rounded-full w-28 h-28 bg-cover border-4 border-white"
      />

      <div className="mt-16 flex flex-col justify-center items-center px-4">
        <div>
          <h1 className="text-2xl font-semibold text-center">{name}</h1>
          <h3 className="font-light text-center">{companyName}</h3>

          <div className="mt-4 w-full text-sm text-gray-600 space-y-3 px-4">
            <div className="flex items-center gap-3">
              <FaUser className="text-blue-600" />
              <p className="font-medium text-gray-900">{username}</p>
            </div>

            <a href={`mailto:${email}`} className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              <p className="break-all">{email}</p>
            </a>

            <div className="flex items-start gap-3">
              <IoLocationSharp className="text-blue-600 mt-1" />
              <p>
                {address?.street}, {address?.suite}
                <br />
                {address?.city}, {address?.zipcode}
              </p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-5 flex justify-center items-center gap-5 ">
          <SocialIcon icon={<FaFacebook />} title={"Facebook"} />
          <SocialIcon icon={<FaInstagram />} title={"Instagram"} />
          <SocialIcon icon={<FaTwitter />} title={"X"} />
          <SocialIcon icon={<FaYoutube />} title={"Youtube"} />
        </div>

        <a
          target="_blank"
          className="mt-5 flex items-center gap-2 text-sm group px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 duration-300"
          href={`https://${link}`}
        >
          Website Link
          <IoIosLink className="group-hover:rotate-12 duration-300" />
        </a>
      </div>
    </div>
  );
}

const SocialIcon = ({ icon, title, onClick = () => {} }) => {
  return (
    <button
      type="button"
      className="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 duration-300"
      title={title}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
