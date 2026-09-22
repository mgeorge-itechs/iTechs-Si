import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { solutions } from "@/data/solutions";

// Background email service configuration (Web3Forms)
// To activate background delivery to your inbox:
// 1. Visit https://web3forms.com
// 2. Enter "m.george@itechs-group.com" to receive your free access key
// 3. Paste your key below or set VITE_WEB3FORMS_ACCESS_KEY in .env
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
  "44a8080d-345d-4bf9-adca-68a443aacf09";
const RECIPIENT_EMAIL = "m.george@itechs-group.com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    areaOfInterest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }

    const emailSubject = formData.areaOfInterest || "General Inquiry";

    // When Web3Forms key is configured, send directly in the background
    if (
      WEB3FORMS_ACCESS_KEY &&
      WEB3FORMS_ACCESS_KEY !== "YOUR_ACCESS_KEY_HERE"
    ) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: emailSubject,
            from_name: formData.name,
            name: formData.name,
            email: formData.email,
            company: formData.company || "N/A",
            area_of_interest: formData.areaOfInterest || "General Inquiry",
            message: formData.message,
          }),
        });

        const result = await response.json();

        if (result.success) {
          toast.success("Thank you! Your message has been sent successfully.");
          setFormData({
            name: "",
            company: "",
            email: "",
            areaOfInterest: "",
            message: "",
          });
        } else {
          toast.error(
            result.message || "Failed to send message. Please try again.",
          );
        }
      } catch {
        toast.error(
          "An error occurred while sending the message. Please try again.",
        );
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Safe fallback to mailto if key is not yet set
      const subject = encodeURIComponent(emailSubject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nCompany: ${formData.company || "N/A"}\nEmail: ${formData.email}\nArea of Interest: ${emailSubject}\n\nMessage:\n${formData.message}`,
      );
      window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
      toast.info(
        "Opening email client. (Set WEB3FORMS_ACCESS_KEY in ContactSection.tsx to send directly in the background)",
      );
    }
  };
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Gradient backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, hsl(var(--electric) / 0.06) 0%, transparent 70%), hsl(var(--navy-deep))",
        }}
      />

      {/* Gold shimmer top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.5), transparent)",
        }}
      />

      <div className="relative container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase font-display">
                Get In Touch
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Start Your{" "}
              <span className="gradient-gold-text">Digital Transformation</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Ready to future-proof your infrastructure? Talk to our experts and
              discover what iTechs can build for you.
            </p>
          </div>

          {/* Main card */}
          <div
            className="rounded-2xl border border-border overflow-hidden"
            style={{
              background:
                "linear-gradient(145deg, hsl(var(--card)), hsl(var(--navy-deep)))",
            }}
          >
            <div className="grid md:grid-cols-5">
              {/* Left info panel */}
              <div
                className="md:col-span-2 p-8 flex flex-col justify-between"
                style={{
                  background:
                    "linear-gradient(145deg, hsl(var(--navy-surface)), hsl(var(--navy-mid)))",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    Contact Details
                  </h3>
                  <p className="text-muted-foreground text-sm mb-8">
                    Reach our team directly or fill out the form.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: MapPin,
                        label: "10 Amin Zaki, Ard Elgolf, Nasr City",
                        value: "Cairo, Egypt",
                        sub: "Serving Egypt & Middle East",
                      },
                      {
                        icon: Phone,
                        label: "Phone",
                        value: "+20 2 2418 0290",
                        sub: "SUN – THU, 9am – 6pm",
                      },
                      {
                        icon: Mail,
                        label: "Email",
                        value: "info@itechs-group.com",
                        sub: "We reply within 24hrs",
                      },
                    ].map(({ icon: Icon, label, value, sub }) => (
                      <div key={label} className="flex items-start gap-3">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            background: "hsl(var(--gold) / 0.1)",
                            border: "1px solid hsl(var(--gold) / 0.2)",
                          }}
                        >
                          <Icon className="w-4 h-4 text-gold" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-0.5">
                            {label}
                          </p>
                          <p className="text-sm font-medium text-foreground">
                            {value}
                          </p>
                          <p className="text-xs text-muted-foreground">{sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-border/40">
                  <p className="text-xs text-muted-foreground">
                    Follow us for the latest in tech innovation across the
                    Middle East.
                  </p>
                </div>
              </div>

              {/* Right form panel */}
              <div className="md:col-span-3 p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-2 font-display uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Ahmed Al-Rashid"
                        className="w-full px-4 py-3 rounded-lg text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:ring-1 focus:ring-electric/50"
                        style={{
                          background: "hsl(var(--navy-deep))",
                          border: "1px solid hsl(var(--border))",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor =
                            "hsl(var(--electric) / 0.5)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "hsl(var(--border))")
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-2 font-display uppercase tracking-wider">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Your Organization"
                        className="w-full px-4 py-3 rounded-lg text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200"
                        style={{
                          background: "hsl(var(--navy-deep))",
                          border: "1px solid hsl(var(--border))",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor =
                            "hsl(var(--electric) / 0.5)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "hsl(var(--border))")
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-2 font-display uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="ahmed@company.com"
                      className="w-full px-4 py-3 rounded-lg text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200"
                      style={{
                        background: "hsl(var(--navy-deep))",
                        border: "1px solid hsl(var(--border))",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor =
                          "hsl(var(--electric) / 0.5)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "hsl(var(--border))")
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-2 font-display uppercase tracking-wider">
                      Area of Interest
                    </label>
                    <div className="relative">
                      <select
                        value={formData.areaOfInterest}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            areaOfInterest: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 pr-10 rounded-lg text-sm text-foreground outline-none transition-all duration-200 appearance-none cursor-pointer"
                        style={{
                          background: "hsl(var(--navy-deep))",
                          border: "1px solid hsl(var(--border))",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor =
                            "hsl(var(--electric) / 0.5)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "hsl(var(--border))")
                        }
                      >
                        <option value="">Select an area of interest</option>
                        {solutions.map((item) => (
                          <option
                            key={item.slug}
                            value={item.shortTitle}
                            className="bg-navy-deep text-foreground"
                          >
                            {item.shortTitle}
                          </option>
                        ))}
                        <option
                          value="General Inquiry"
                          className="bg-navy-deep text-foreground"
                        >
                          General Inquiry
                        </option>
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-2 font-display uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your project or requirements..."
                      className="w-full px-4 py-3 rounded-lg text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "hsl(var(--navy-deep))",
                        border: "1px solid hsl(var(--border))",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor =
                          "hsl(var(--electric) / 0.5)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "hsl(var(--border))")
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-semibold font-display text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--gold)), hsl(35 90% 45%))",
                      color: "hsl(var(--navy-deep))",
                      boxShadow: "0 8px 30px hsl(var(--gold) / 0.25)",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
