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

  return (
    <section
      id="contact"
      className="relative z-10 min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-mono font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-input/30 font-mono border border-border rounded px-4 py-3 text-foreground transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-input/30 border font-mono border-border rounded px-4 py-3 text-foreground transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-input/30 border font-mono border-border rounded px-4 py-3 text-foreground transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
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
                  Send Message
                </GradientCta>
              </Toaster>
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
