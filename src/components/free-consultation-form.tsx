// components/free-consultation-form.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

// Add 'export' here
export function FreeConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    howCanIHelp: "",
    notRobot: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend or an API
    alert("Form submitted! Ellie will be in touch soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      howCanIHelp: "",
      notRobot: false,
    });
  };

  return (
    <section className="py-12 bg-[#b5dbdf]">
      <div className="container mx-auto flex flex-col items-center px-4">
        <Button className="mb-8 bg-white text-black hover:bg-white  hover:border border-black  px-8 py-6 text-lg font-semibold rounded-md cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.22 18 3 13.78 3 8V6a1 1 0 011-1h2.153z" />
          </svg>
          Call Now
        </Button>

        

        <div className="w-full max-w-md bg-white p-8 rounded-lg border border-black ">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Free Consultation Form
          </h3>
          <p className="text-gray-600 mb-6 text-center text-sm">
            Simply fill out the brief fields below and Ellie will be in touch
            with you soon, usually within one business day. This form is safe,
            private, and completely free.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 234-5678"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="howCanIHelp" className="block text-sm font-medium text-gray-700 mb-1">
                How Can I Help?
              </label>
              <Textarea
                id="howCanIHelp"
                name="howCanIHelp"
                placeholder="Please provide some details to help us prepare for your consultation (e.g., goals, concerns)"
                value={formData.howCanIHelp}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="notRobot"
                name="notRobot"
                checked={formData.notRobot}
                onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, notRobot: !!checked }))}
              />
              <label htmlFor="notRobot" className="text-sm font-medium text-gray-700">
                I'm not a robot
              </label>
              {/* You might want to replace this with a real reCAPTCHA widget */}
              <div className="ml-auto text-xs text-gray-500">
                reCAPTCHA
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-semibold text-lg"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}