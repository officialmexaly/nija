import React, { useState } from 'react';
import { SendIcon, CheckCircleIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: MailIcon,
      label: 'Email',
      value: 'najarhmuhrd4@gmail.com',
      href: 'mailto:najarhmuhrd4@gmail.com'
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+234 807 560 4065',
      href: 'tel:+2348075604065'
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Abuja, Nigeria',
      href: undefined
    }
  ];

  return (
    <section id="contact" className="py-32 px-6 border-t border-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-sm font-semibold text-secondary mb-5 uppercase tracking-widest">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight">
            Let's start a conversation
          </h2>
          <p className="text-body text-secondary max-w-3xl">
            I'm always open to discussing new opportunities, creative ideas, or ways to help deliver results
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            const Content = item.href ? 'a' : 'div';
            return (
              <Content
                key={item.label}
                href={item.href as string}
                className="p-8 bg-surface border border-subtle rounded-xl hover:border-border transition-all shadow-subtle hover:shadow-elevated"
              >
                <div className="w-14 h-14 rounded-xl bg-background border border-subtle flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-text" />
                </div>
                <div className="text-sm text-secondary mb-2">
                  {item.label}
                </div>
                <div className="text-lg font-semibold text-text">
                  {item.value}
                </div>
              </Content>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="p-10 md:p-14 bg-surface border border-subtle rounded-xl shadow-subtle">
          {isSubmitted ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-success-light flex items-center justify-center">
                <CheckCircleIcon className="w-10 h-10 text-success" />
              </div>
              <h3 className="text-2xl font-bold text-text mb-3 tracking-tight">
                Message Sent!
              </h3>
              <p className="text-body text-secondary">
                Thank you for reaching out. I'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-text mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all ${
                      errors.name ? 'border-red-500' : 'border-subtle'
                    } text-text placeholder:text-secondary text-base`}
                    placeholder="Naja'atu Muhammed"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500 font-semibold" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all ${
                      errors.email ? 'border-red-500' : 'border-subtle'
                    } text-text placeholder:text-secondary text-base`}
                    placeholder="najarhmuhrd4@gmail.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500 font-semibold" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-text mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-5 py-4 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none ${
                    errors.message ? 'border-red-500' : 'border-subtle'
                  } text-text placeholder:text-secondary text-base`}
                  placeholder="I'd like to discuss..."
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-500 font-semibold" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all focus-ring shadow-subtle hover:shadow-elevated"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <SendIcon className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
