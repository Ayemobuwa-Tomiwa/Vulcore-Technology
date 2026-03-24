import { useState } from "react";
import {
  Linkedin,
  Instagram,
  Phone,
  Mail,
} from "lucide-react";
import whatsapp from "../assets/icons/whatsapp.jpg";
import whatsapp2 from "../assets/icons/whatsapp1.jpg";

export default function Footer() {
  const [hovered, setHovered] = useState(false);
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold tracking-widest mb-4 pl-7">
              VULCORE
            </h3>

            <p className="text-gray-400 text-sm pl-7">
              Delivering scalable and modern software
              solutions for clients worldwide.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold pl-7">
              Contact
            </h4>

            <div className="space-y-3 text-gray-400 pl-7">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>
                  +234 903 604 6611
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>
                  +234 806 683 7234
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>
                  vulcoretechnology@gmail.com
                </span>
              </div>

            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold pl-7">
              Follow Us
            </h4>

            <div className="flex gap-4 pl-7">

              <a href="#" target="_blank">
                <Linkedin className="hover:text-yellow-400 transition" />
              </a>

              <a href="#" target="_blank">
                <Instagram className="hover:text-yellow-400 transition" />
              </a>

              <a
      href="https://wa.me/2349036046611"
      target="_blank"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={hovered ? whatsapp2 : whatsapp}
        className="w-6 h-6 transition duration-300"
      />
    </a>

            </div>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center pl-7 gap-4 text-sm text-gray-500">

          <div className="flex gap-6">

            <a
              href="#"
              className="hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white"
            >
              Terms of Service
            </a>

          </div>

          <p>
            © 2026 Vulcore Technology
          </p>

        </div>

      </div>
    </footer>
  );
}