import React from "react";
import { FaInfo, FaHome, FaMoneyBillAlt } from "react-icons/fa";

import { BsClipboardData,  BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-0 lg:bottom-0.5 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div
          className="w-full bg-black/30  h-[40px] backdrop-blur-2xl
        rounded-full max-w-[350px] mx-auto px-6 flex justify-between 
        items-center text-2xl text-white/70"
        >
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            offset={-200}
            spy={true}
            className="cursor-pointer   flex items-center
            justfy-center">
            <FaHome />
          </Link>

          <Link
            to="about"
            activeClass="active"
            smooth={true}
            offset={42}
            spy={true}
            className="cursor-pointer   flex items-center
            justfy-center">
            <FaInfo />
          </Link>
          <Link
            to="service"
            activeClass="active"
            smooth={true}
            offset={30}
            spy={true}
            className="cursor-pointer   flex items-center
            justfy-center">
            <BsClipboardData />
          </Link>
          <Link
            to="preco"
            activeClass="active"
            smooth={true}
            offset={120}
            spy={true}
            className="cursor-pointer  flex items-center
            justfy-center">
            <FaMoneyBillAlt />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            offset={50}
            spy={true}
            className="cursor-pointer  flex items-center
            justfy-center">
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
