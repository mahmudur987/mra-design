import { contactMethods } from "@/data/contact";
import { ContactCard } from "@/components/contact/ContactCard";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-secondary py-20">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or a question? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactMethods.map((item) => (
              <ContactCard key={item.title} {...item} />
            ))}
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
