import Link from "next/link";

const Footer = () => (
  <footer className="border-t border-border bg-white">
    <div className="container py-16">
      <div className="grid gap-12 md:grid-cols-4">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="flex items-center">
              <img
                src="/images/innpro-logo.png"
                alt="InnPro Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Science-driven plant protein ingredients for performance-focused
            food manufacturers.
          </p>
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
                href="/contact?type=sample"
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
                href="/team"
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
            <li>+1 (555) 234-5678</li>
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
      </div>
    </div>
  </footer>
);

export default Footer;
