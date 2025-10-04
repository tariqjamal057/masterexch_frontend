import React from "react";
import { Download, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-4 px-4 sm:px-8 mb-12 md:mb-0 border-t border-gray-300 shadow">
      <div className="container mx-auto flex flex-col items-center">
        <ul className="flex flex-wrap justify-center gap-5 mb-4 text-sm font-light">
          <li>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Rules and Regulations
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              KYC
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Responsible Gaming
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Self-Exclusion Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Underage Policy
            </a>
          </li>
        </ul>
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center space-x-2">
            <span className="text-sm">Powered by</span>
            <Star className="h-6 w-6" />
          </div>
          <div className="flex flex-col items-center space-y-2 bg-gray-400 p-2 rounded">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Download className="w-32 h-8" />
            </a>
            <p className="text-xs text-gray-300">v1.11 - 2022-03-23 - 3.1MB</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
