import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <div>
      <div className="my-10 mt-40 flex grid-cols-[3fr_1fr_1fr] flex-col gap-14 text-sm sm:grid">
        <div>
          <img src={logo} alt="" className="mb-3 w-[150px]" />
          <p className="w-full text-gray-600 md:w-2/3">
            Whether you`re looking for speed, comfort, or adventure, we have the
            perfect bike for you. Our motorbikes are designed with the latest
            technology and safety features to ensure a smooth ride. Contact us
            through email, phone or whatsapp to experience the freedom of the
            open road!.
          </p>
        </div>
        <div>
          <p className="mb-5 text-xl font-medium">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Delivery</li>
            <li>Online Payment</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div>
          <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+255774625707</li>
            <li>khalefbond@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
