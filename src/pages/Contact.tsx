import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Extract values explicitly for emailjs.send
    const formEl = formRef.current as HTMLFormElement & {
      user_name: HTMLInputElement;
      user_email: HTMLInputElement;
      subject: HTMLInputElement;
      message: HTMLTextAreaElement;
    };

    const templateParams = {
      user_name: formEl.user_name?.value,
      user_email: formEl.user_email?.value,
      subject: formEl.subject?.value,
      message: formEl.message?.value,
    };

    try {
      setSending(true);
      // If emailjs.init is NOT called globally, pass publicKey as 4th arg
      const res = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // safe to include even if init is called
      );
      // Optional: check res.status === 200
      alert("Message sent successfully!");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(45, 27, 181, 0.1)" }}>
                <Phone className="w-8 h-8" style={{ color: "#2d1bb5" }} />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-muted-foreground">+91 120 4914498</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(45, 27, 181, 0.1)" }}>
                <Mail className="w-8 h-8" style={{ color: "#2d1bb5" }} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-muted-foreground">info@navarna.com</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(45, 27, 181, 0.1)" }}>
                <MapPin className="w-8 h-8" style={{ color: "#2d1bb5" }} />
              </div>
              <h3 className="text-xl font-bold mb-2">Office</h3>
              <p className="text-muted-foreground">A173, Corenthum Tower, Sector-62, Noida, Uttar Pradesh</p>
            </Card>
          </div>

          <Card className="max-w-2xl mx-auto p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input id="name" name="user_name" placeholder="John Doe" required disabled={sending} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input id="email" name="user_email" type="email" placeholder="john@example.com" required disabled={sending} />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input id="subject" name="subject" placeholder="How can we help you?" required disabled={sending} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="Tell us more about your inquiry..." rows={6} required disabled={sending} />
              </div>

              <Button className="w-full text-white" style={{ backgroundColor: "#2d1bb5" }} disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
