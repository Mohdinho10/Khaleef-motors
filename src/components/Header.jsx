import logo from "../assets/images/logo.png";
import { IoLogoWhatsapp } from "react-icons/io";

function Header() {
  // WhatsApp link
  const whatsappNumber = "+255774625707"; // Replace with your actual number
  const whatsappMessage = "Thank you for contacting us! We deal with motors."; // Customize your message
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
  return (
    <div className="flex items-center justify-between">
      <img className="w-[150px]" src={logo} alt="" />
      <a
        href={whatsappLink}
        className="flex items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoWhatsapp className="h-8 w-8 text-green-700" />
        <span className="ml-2 text-green-700">Contact Us</span>
      </a>
    </div>
  );
}

export default Header;
