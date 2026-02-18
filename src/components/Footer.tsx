import React from 'react';
import { MailIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:najarhmuhrd4@gmail.com',
      icon: MailIcon
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: LinkedinIcon
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: TwitterIcon
    },
  ];

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="py-20 px-6 border-t border-subtle bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-subtle">
                <span className="text-white font-bold text-base">N</span>
              </div>
              <span className="text-lg font-bold text-text">Naja'atu Muhammed</span>
            </div>
            <p className="text-secondary text-body-small leading-relaxed mb-6">
              Driving operational excellence through strategic project management and customer-centric solutions.
            </p>
            <div className="flex items-center gap-2.5 text-sm text-secondary">
              <span className="w-2.5 h-2.5 bg-success rounded-full" />
              <span className="font-medium">Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-text uppercase tracking-widest mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-secondary hover:text-text transition-all text-body-small font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-text uppercase tracking-widest mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="text-secondary text-body-small">
                <span className="block text-xs font-semibold mb-1.5 text-tertiary uppercase tracking-wider">Email</span>
                <a href="mailto:najarhmuhrd4@gmail.com" className="hover:text-text transition-all">
                  najarhmuhrd4@gmail.com
                </a>
              </li>
              <li className="text-secondary text-body-small">
                <span className="block text-xs font-semibold mb-1.5 text-tertiary uppercase tracking-wider">Location</span>
                Abuja, Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-subtle pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.name !== 'Email' ? '_blank' : undefined}
                    rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="w-12 h-12 flex items-center justify-center rounded-xl border border-subtle hover:border-border hover:bg-border-subtle transition-all"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5 text-secondary" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-secondary text-body-small">
                © {currentYear} Naja'atu Muhammed. All rights reserved.
              </p>
              <p className="text-secondary text-xs mt-2">
                Project Management | Customer Success | Remote Collaboration
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
