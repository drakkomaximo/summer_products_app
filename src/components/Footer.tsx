import { FC } from "react";
import {
  FaExternalLinkAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { CustomModal } from ".";
import { privacyPolicy, termsAndConditionsContent } from "../utils";

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-8 text-center">
      <div className="flex justify-around items-center">
        <a
          href="https://github.com/drakkomaximo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white mr-2 font-bold"
        >
          Created by drakkomaximo &copy; 2023
        </a>
        <CustomModal
          message={termsAndConditionsContent}
          title={"Terms and Conditions"}
        />
        <CustomModal message={privacyPolicy} title={"Privacy Policy"} />
        <div className="flex ml-4">
          <a
            href="https://www.sumerlabs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-gray-500 hover:text-white hover:underline"
          >
            <FaExternalLinkAlt className="mr-1" />
          </a>
          <a
            href="https://www.facebook.com/sumer.labs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white hover:underline ml-2"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/company/sumerlatam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white hover:underline ml-2"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/sumer.latam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-300 hover:underline ml-2"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};
