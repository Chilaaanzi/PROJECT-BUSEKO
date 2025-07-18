"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const MyForm_Api = process.env.NEXT_PUBLIC_EMAIL_ENDPOINT || "";
const WebsiteID = process.env.NEXT_PUBLIC_WEBSITE_ALLOWED || "";
const WebsiteAPI = process.env.NEXT_PUBLIC_WEBSITE_ALLOWED_API || "";

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    quantity: "",
    company: "",
    firstName: "",
    lastName: "",
  });

  const productCategories = [
    "Steel Rebars",
    "I-Beams & H-Beams",
    "Roofing Sheets",
    "Steel Pipes & Tubes",
    "U-Channels & Angles",
    "Steel Sheets & Plates",
    "Custom Requirements",
  ];

  useEffect(() => {
    if (status) {
      toast("Notification", { description: status });
    }
  }, [status]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const res = await fetch(MyForm_Api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          websiteID: WebsiteID,
          apiKey: WebsiteAPI,
          senderName: `${formData.firstName} ${formData.lastName}`,
          senderEmail: formData.email,
          senderPhone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          quantity: formData.quantity,
          message: formData.message,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("Quote request sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          quantity: "",
          company: "",
          firstName: "",
          lastName: "",
        });
      } else {
        setStatus(result.error || "Failed to send message.");
      }
    } catch (error) {
      setStatus(`An error occurred: ${(error as Error).message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="quote"
      className="px-4 w-full flex justify-center items-center py-20 bg-muted/30"
    >
      <div className="container w-full lg:max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Get a <span className="text-primary">Quick Quote</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Fill in your details and we’ll get back within 24 hours.
            </p>

            <div className="space-y-5 text-sm md:text-base">
              {[
                {
                  title: "Competitive Rates",
                  desc: "Bulk pricing available",
                },
                {
                  title: "Fast Replies",
                  desc: "Responses within 24 hours",
                },
                {
                  title: "Trusted Quality",
                  desc: "Meets global standards",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <Card className="shadow-brand w-full max-w-xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-3 text-2xl">
                <Calculator className="h-7 w-7 text-primary" />
                <span>Request Quote</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                  />
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                  />
                </div>

                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company (optional)"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                  />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                  />
                </div>

                <div>
                  <Select
                    required
                    value={formData.subject}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select product category" />
                    </SelectTrigger>
                    <SelectContent>
                      {productCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Input
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  placeholder="Estimated Quantity (e.g. 500 sheets)"
                />

                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Details (sizes, grade, delivery...)"
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-yellow-400 text-zinc-950 hover:bg-yellow-300 hover:text-zinc-950"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Submit Request
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
