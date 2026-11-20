import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-indigo-500/20 bg-indigo-500/5 py-12">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="mb-2 font-mono text-lg">
          Built between the codebase, the court, and Chester.
        </p>
        <h4 className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-indigo-400">
          Connect with me
        </h4>
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com/justin.alcendor"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-blue-500"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.twitter.com/kareem4285"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-blue-400"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/j_taurus42"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-pink-500"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/justin-alcendor-16a738131/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-blue-600"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="mt-4 font-mono text-sm">
          © {new Date().getFullYear()} Justin C. Alcendor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
