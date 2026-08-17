const Footer = () => {
  return (
    <footer className="w-full bg-hover text-white p-5.5">
      <div className="max-w-5xl mx-auto px-6 py-12 text-center grid grid-cols-2 gap-5 sm:grid-cols-4">
        <div>
          <ul>
            <li className="font-bold">MAKE MONEY WITH US</li>
            <li>Sell products on Shopico</li>
            <li>Become an afilliate</li>
            <li>Sell apps on Shopico</li>
            <li>Advertise your products</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="font-bold">SHOP</li>
            <li>New Arrivals</li>
            <li>Men</li>
            <li>Women</li>
            <li>Categories</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="font-bold">CUSTOMER CARE</li>
            <li>Contact Us</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="font-bold">GET TO KNOW US</li>
            <li>About us</li>
            <li>Our Story</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 px-6 py-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
        <p>© 2026 Shopico. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-primary transition-colors">
             Privacy Policy
          </a>
          <a href="#" className="hover:text-primary transition-colors">
             Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
