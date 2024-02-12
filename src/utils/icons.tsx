import { IoMdMail } from "react-icons/io";
import { AiFillShop } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";
import { MdDashboard, MdOutlineRequestQuote } from "react-icons/md";
import {
  FaLock,
  FaInfo,
  FaUser,
  FaSearch,
  FaFacebookF,
  FaSignInAlt,
  FaLinkedinIn,
  FaSignOutAlt,
  FaGooglePlusG,
} from "react-icons/fa";

export const menuIcons = {
  shop: <AiFillShop fill="#451e12" size="2rem" />,
  search: <FaSearch fill="#451e12" size="1.5rem" />,
  cart: <FaCartShopping fill="#451e12" size="2rem" />,
  about: <FaInfo fill="#451e12" size="2rem" />,
  signIn: <FaSignInAlt fill="#451e12" size="2rem" />,
  logout: <FaSignOutAlt fill="#451e12" size="2rem" />,
  dashboard: <MdDashboard fill="#451e12" size="2rem" />,
  request: <MdOutlineRequestQuote fill="#451e12" size="2rem" />,
  facebook: <FaFacebookF size="1.5rem" fill="#fff" />,
  google: <FaGooglePlusG size="2rem" fill="#fff" />,
  linkedin: <FaLinkedinIn size="1.5rem" fill="#fff" />,
  lock: FaLock,
  email: IoMdMail,
  user: FaUser,
  arrowTopRight: <CgArrowTopRight size="2rem" color="#fff" />,
};
