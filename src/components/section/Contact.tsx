import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { toast, Toaster } from "../ui/toast/toast";
import emailjs from "emailjs-com";
import { GradientCta } from "../ui/GradientCta";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: {
    preventDefault: () => void;
    target: string | HTMLFormElement;
  }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Oh! Something doesn't seem right. Please try again... "),
      );
  };

  const inputClassName =
    "w-full rounded-none border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground/35 transition focus:border-indigo-400/70 focus:bg-indigo-400/[0.04] focus:outline-none";

  return (
    <section id="contact" className="relative z-10 py-24 md:py-32">
      <RevealOnScroll>
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:px-8">
          <div>
            <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-indigo-300">
              <span className="h-px w-8 bg-indigo-400" /> 05 / Contact
            </p>
            <h2 className="mb-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Have a project in mind?
            </h2>
            <p className="max-w-md text-base leading-7 text-foreground/60">
              I’m always open to thoughtful conversations about engineering,
              data, and building products that make work better.
            </p>
            <p className="mt-8 border-l border-indigo-400/60 pl-4 font-mono text-xs uppercase tracking-[0.16em] text-foreground/45">
              Dallas, Texas · Available for conversations
            </p>
          </div>

          <div className="border-t border-border pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className={inputClassName}
                    placeholder="Your name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className={inputClassName}
                    placeholder="you@example.com"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  className={`${inputClassName} resize-y`}
                  placeholder="Tell me a little about what you’re working on..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center justify-center">
                <Toaster>
                  <GradientCta
                    type="submit"
                    onClick={() =>
                      toast.add({
                        title: "Message Sent",
                        description: "Thank you for your message!",
                      })
                    }
                  >
                    Send message{" "}
                    <span aria-hidden="true" className="ml-2">
                      ↗
                    </span>
                  </GradientCta>
                </Toaster>
              </div>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
