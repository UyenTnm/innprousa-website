import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaThreads,
} from "react-icons/fa6";

const Footer = () => (
  <footer className="border-t border-border bg-white">
    <div className="container py-16">
      <div className="grid gap-12 md:grid-cols-4">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/innpro-logo.png"
                alt="InnPro Logo"
                width={120}
                height={40}
                sizes="100vw"
                priority
                className="w-40 h-auto"
              />
            </Link>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Science-driven plant protein ingredients for performance-focused
            food manufacturers.
          </p>

          <div className="flex items-center gap-3 mt-5">
            {/* FaFacebookF */}
            <a
              href="https://www.facebook.com/profile.php?id=61570666198600"
              target="_blank"
              rel="noopener noreferrer"
              className="
      w-10 h-10 rounded-full
      border border-border
      flex items-center justify-center
      text-muted-foreground
      hover:bg-primary hover:text-white hover:border-primary hover:scale-105
hover:shadow-md
      transition-all duration-300
    "
            >
              <FaFacebookF size={18} />
            </a>

            {/* FaInstagram */}
            <a
              href="https://www.instagram.com/innprousa/"
              target="_blank"
              rel="noopener noreferrer"
              className="
      w-10 h-10 rounded-full
      border border-border
      flex items-center justify-center
      text-muted-foreground hover:scale-105 hover:shadow-md
      hover:bg-primary hover:text-white hover:border-primary
      transition-all duration-300
    "
            >
              <FaInstagram size={18} />
            </a>

            {/* Threads */}
            <a
              href="https://www.threads.com/@innprousa"
              target="_blank"
              rel="noopener noreferrer"
              className="
      w-10 h-10 rounded-full
      border border-border
      flex items-center justify-center
      text-muted-foreground hover:scale-105 hover:shadow-md
      hover:bg-primary hover:text-white hover:border-primary
      transition-all duration-300
    "
            >
              {/* <span className="text-sm font-semibold">@</span> */}
              <FaThreads size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/innprousa/"
              target="_blank"
              rel="noopener noreferrer"
              className="
      w-10 h-10 rounded-full
      border border-border
      flex items-center justify-center
      text-muted-foreground hover:scale-105 hover:shadow-md
      hover:bg-primary hover:text-white hover:border-primary
      transition-all duration-300
    "
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-display text-base font-semibold mb-4 text-foreground">
            Products
          </h4>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link
                href="/products"
                className="hover:text-primary transition-colors"
              >
                Product Catalog
              </Link>
            </li>
            <li>
              <Link
                href="/applications"
                className="hover:text-primary transition-colors"
              >
                Applications
              </Link>
            </li>
            <li>
              <Link
                href="/request-sample"
                className="hover:text-primary transition-colors"
              >
                Request a Sample
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display text-base font-semibold mb-4 text-foreground">
            Company
          </h4>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link
                href="/about"
                className="hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/about#team"
                className="hover:text-primary transition-colors"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="hover:text-primary transition-colors"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-base font-semibold mb-4 text-foreground">
            Contact
          </h4>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>info@innprousa.com</li>
            <li>+1 605-206-3467</li>
            <li>
              <Link
                href="/contact"
                className="text-primary font-medium hover:bg-accent px-2 py-1 rounded-md transition"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} InnPro. All rights reserved.
        <span className="block mt-2">
          Powered by{" "}
          <a
            href="https://www.staffunitedgroup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
    font-medium
    text-primary
    visited:text-primary
    hover:text-secondary
    active:text-primary
    focus:text-primary
    transition-colors
    hover:underline
    underline-offset-4
  "
          >
            STAFF United Group
          </a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
