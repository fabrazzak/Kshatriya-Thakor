import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../app/assets/logo.png";
import Image from "next/image";
import "../../styles/style.css";

const Footer = () => {
  return (
    <footer className="footer-bg text-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2 space-y-6">
            <Image src={logo} alt="logo" width={256} height={60} />
            <p className="lg:w-[78%] w-full lato-regular text-[16px] text-[#ffffff99] leading-relaxed">
              Kshatriya Thakor Samaj is part of Community Matrimony which has
              over 200+ Indian community portals offering online matrimony
              services. Register with us for FREE to find a partner from your
              own community. Take advantage of our user-friendly search
              features to find a bride or groom who matches your preferences.
              Join us and begin your happy journey today.
            </p>
          </div>

          {/* Quick Links Section */}
          <nav className="space-y-4">
            <h3 className="text-[22px] playfair-display font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Service", "Contact"].map((link, index) => (
                <li key={index}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="text-[#ffffff] text-[18px] lato-regular transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Us Section */}
          <address className="not-italic space-y-4">
            <h3 className="text-[22px] playfair-display font-bold">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <div>
                <p className="font-medium lato-regular">Call Anytime</p>
                <a
                  href="tel:+911234567890"
                  className="hover:text-gray-200 lato-regular transition-colors"
                >
                  +91 12345 67890
                </a>
              </div>
              <div>
                <p className="lato-regular">Email</p>
                <a
                  href="mailto:contact@kshatriyathakorsamaj.com"
                  className="lato-regular transition-colors "
                >
                  contact@kshatriyathakorsamaj.com
                </a>
              </div>
            </div>
          </address>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-400">
          <p className="text-center playfair-display text-[#ffffff99] md:text-left">
            © 2025 Kshatriya Thakor Samaj. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
