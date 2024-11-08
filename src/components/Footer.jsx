const Footer = () => {
  return (
    <footer className="bg-colorWhite">
      <div className="flex justify-center">
        <div className="flex gap-3 flex-col justify-center items-center">
          <h1 className="font-bold text-3xl">Gadget Heaven</h1>
          <p className="text-cardGray font-medium text-base mb-2">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
      </div>
      <div className="divider container mx-auto"></div>
      <div className="footer flex-row md:justify-evenly lg:justify-evenly py-8">
        <nav className="lg:justify-self-start md:justify-self-center justify-self-center">
          <h6 className="text-cardBlack font-bold text-lg">Services</h6>
          <a className="link link-hover text-cardGray text-base">
            Product Support
          </a>
          <a className="link link-hover text-cardGray text-base">
            Order Tracking
          </a>
          <a className="link link-hover text-cardGray text-base">
            Shipping & Delivery
          </a>
          <a className="link link-hover text-cardGray text-base">Returns</a>
        </nav>
        <nav className="lg:justify-self-start md:justify-self-center justify-self-center mr-14 md:mr-0 lg:mr-0">
          <h6 className="text-cardBlack font-bold text-lg">Company</h6>
          <a className="link link-hover text-cardGray text-base">About Us</a>
          <a className="link link-hover text-cardGray text-base">Careers</a>
          <a className="link link-hover text-cardGray text-base">Contact</a>
        </nav>
        <nav className="lg:justify-self-start md:justify-self-center justify-self-center mr-4 md:mr-0 lg:mr-0">
          <h6 className="text-cardBlack font-bold text-lg">Legal</h6>
          <a className="link link-hover text-cardGray text-base">
            Terms of Service
          </a>
          <a className="link link-hover text-cardGray text-base">
            Privacy Policy
          </a>
          <a className="link link-hover text-cardGray text-base">
            Cookie Policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
