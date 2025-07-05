"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// Define the SuccessMessage component separately
function SuccessMessage() {
  return (
    <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center justify-center text-center h-[400px] w-full mx-auto max-w-md">
      <h2 className="text-xl md:text-2xl font-bold text-[#1e4849] mb-4">
        Get In Touch
      </h2>
      <p className="text-sm text-[#154033] mb-6">
        Simply fill out the brief fields below and Ellie will be in touch
        with you soon, usually within one business day. This form is
        safe, private, and completely free.
      </p>
      <div className="mt-8 text-2xl md:text-3xl font-semibold text-[#1e4849] flex flex-col items-center">
        <span role="img" aria-label="smiling face" className="text-5xl mb-4">😊</span>
        Thank you! Ellie will get back<br />to you soon
      </div>
    </div>
  );
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredTime: '',
    reason: '',
    agree: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredTime: '',
    reason: '',
    agree: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement;
    let fieldValue: string | boolean = value;
    if (type === 'checkbox' && e.target instanceof HTMLInputElement) {
      fieldValue = e.target.checked;
    }
    setFormData(prev => ({
      ...prev,
      [id]: fieldValue,
    }));
    setErrors(prev => ({ ...prev, [id]: '' }));
  };

  const validateForm = () => {
    const newErrors: typeof errors = {
      name: '',
      email: '',
      phone: '',
      message: '',
      preferredTime: '',
      reason: '',
      agree: '',
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email.';
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required.';
      isValid = false;
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number.';
      isValid = false;
    }
    if (!formData.reason.trim()) {
      newErrors.reason = 'Please let us know what brings you here.';
      isValid = false;
    }
    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = 'Preferred time is required.';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      isValid = false;
    }
    if (!formData.agree) {
      newErrors.agree = 'You must agree to be contacted.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted', formData);
      setTimeout(() => setIsSubmitted(true), 500);
    }
  };

  return (
    <section className="bg-[#e4ecee] py-16 md:py-24" id="contact">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div className="text-[#1e4145] space-y-8 md:space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Office</h2>
            <address className="not-italic text-lg md:text-xl leading-relaxed">
              1287 Maplewood Drive<br />
              Los Angeles,<br />
              CA 90026<br />
            </address>
            <Link href="http://googleusercontent.com/maps.google.com/3" target="_blank" rel="noopener noreferrer">
              <Button className="mt-4 px-6 py-2 bg-[#1e4145] hover:bg-[#2a5b5e] text-white rounded-md text-base shadow-sm">
                Google Maps
              </Button>
            </Link>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Office Hours</h2>
            <ul className="text-lg md:text-xl space-y-1 list-disc list-inside">
              <li><span className="font-medium">In-person:</span> Tue & Thu, 10 AM–6 PM</li>
              <li><span className="font-medium">Virtual via Zoom:</span> Mon, Wed & Fri, 1 PM–5 PM</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact</h2>
            <p className="text-lg md:text-xl">(323) 555-0192</p>
          </div>
        </div>

        {isSubmitted ? (
          <SuccessMessage />
        ) : (
          <div className="bg-white p-8 md:p-10 rounded-lg border border-black w-full mx-auto max-w-md">
            <h2 className="text-xl md:text-2xl font-bold text-[#1e4849] mb-4 text-center">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input id="name" placeholder="Name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-3 border rounded-md ${errors.name ? 'border-red-500' : 'border-black'}`} />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              <Input id="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className={`w-full px-4 py-3 border rounded-md ${errors.phone ? 'border-red-500' : 'border-black'}`} />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

              <Input id="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 border rounded-md ${errors.email ? 'border-red-500' : 'border-black'}`} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <Textarea id="reason" placeholder="What brings you here?" value={formData.reason} onChange={handleChange} rows={3} className={`w-full px-4 py-3 border rounded-md resize-y ${errors.reason ? 'border-red-500' : 'border-black'}`} />
              {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}

              <Input id="preferredTime" placeholder="Preferred time to reach you" value={formData.preferredTime} onChange={handleChange} className={`w-full px-4 py-3 border rounded-md ${errors.preferredTime ? 'border-red-500' : 'border-black'}`} />
              {errors.preferredTime && <p className="text-red-500 text-sm">{errors.preferredTime}</p>}

              <Textarea id="message" placeholder="Your message" value={formData.message} onChange={handleChange} rows={4} className={`w-full px-4 py-3 border rounded-md resize-y ${errors.message ? 'border-red-500' : 'border-black'}`} />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

              <div className="flex items-center space-x-2">
                <input id="agree" type="checkbox" checked={formData.agree} onChange={handleChange} className="border-black" />
                <label htmlFor="agree" className="text-sm">I agree to be contacted</label>
              </div>
              {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

              <Button type="submit" className="w-full bg-[#1e484a] hover:bg-white hover:text-[#1e484a] border border-[#1e484a] text-white py-3 rounded-md text-lg font-semibold transition-colors duration-200">Submit</Button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
