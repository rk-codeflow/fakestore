import Link from "next/link";
import React from "react";
import Heart from "./icons/Heart";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-4 sm:mt-8 flex justify-between">
      <p className="my-4 flex items-center justify-center w-full gap-1.5">
        Made with{" "}
        <span className="animate-pulse">
          <Heart />
        </span>{" "}
        by
        <Link
          href="https://www.linkedin.com/in/raj-kiran-chaudhary-3443abbb/"
          target="_blank"
          className="text-pink-500 underline decoration-2 underline-offset-2"
        >
          <span>Raj</span>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
