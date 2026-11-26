import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/justin.alcendor", Icon: FaFacebook },
  { label: "Twitter", href: "https://www.twitter.com/kareem4285", Icon: FaTwitter },
  { label: "Instagram", href: "https://www.instagram.com/j_taurus42", Icon: FaInstagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/justin-alcendor-16a738131/", Icon: FaLinkedin },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <a href="#home" className="font-mono text-sm font-semibold text-foreground">
            Just.<span className="text-indigo-400">in.Time</span>
          </a>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/40">
            Built between the codebase, the court, and Chester.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/40">Connect</span>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/55 transition-colors hover:text-indigo-300"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/40">
          © {new Date().getFullYear()} Justin C. Alcendor
        </p>
      </div>
    </footer>
  );
};

export default Footer;
