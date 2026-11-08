import React, { useState } from 'react';
import { ArrowUpRight, Mail, MessageCircle, Copy, Check, ExternalLink, AlertCircle } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

export const FinalCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [whatsappOpened, setWhatsappOpened] = useState(false);
  const [fallbackUrl, setFallbackUrl] = useState('');
  
  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    service: 'Restaurant Photography',
    details: '',
  });

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  const realEmail = 'ajakash594@gmail.com';
  const realWhatsAppDisplay = '+880 1537-272406';
  const realWhatsAppInternational = '8801537272406';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(realEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.service) errs.service = 'Please select a service';
    if (!formData.details.trim()) errs.details = 'Project details are required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Structured message according to specifications
    const brandLine = formData.brand.trim() ? `Brand/Business: ${formData.brand.trim()}\n` : '';
    const message = `Hello Akash!
I'm interested in working with you.

Name: ${formData.name.trim()}
Email: ${formData.email.trim()}
${brandLine}Service Interested In: ${formData.service}

Project Details:
${formData.details.trim()}

I'd love to discuss a potential collaboration with you.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${realWhatsAppInternational}?text=${encodedMessage}`;
    setFallbackUrl(waUrl);

    // Direct window open from user interaction
    window.open(waUrl, '_blank');
    setWhatsappOpened(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#080808] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-14 relative z-10">
        
        {/* Section Headline */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-accent uppercase">
            // DIRECT INQUIRY & COLLABORATION
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-off-white leading-[1.08]">
            Let's Create <br className="hidden sm:inline" />
            <span className="text-neutral-400">Something Together.</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-neutral-300 font-sans leading-relaxed">
            Tell me a little about your project. I'll get back to you soon.
          </p>
        </div>

        {/* Action Grid: Direct Channels & Functional WhatsApp Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Communication & Minimalist Social Media */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct Contact Box */}
            <div className="p-5 sm:p-7 rounded-2xl bg-[#121212] border border-white/[0.06] space-y-5">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
                  COMMUNICATION
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  Direct Contact
                </h3>
              </div>

              {/* Direct links: WhatsApp & Email */}
              <div className="space-y-2.5">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${realWhatsAppInternational}?text=Hi%20Akash%2C%20I%20would%20like%20to%20discuss%20a%20visual%20collaboration`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#25D366]/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-neutral-500 uppercase">WHATSAPP</div>
                      <div className="text-xs font-mono text-white group-hover:text-[#25D366] font-semibold transition-colors">
                        {realWhatsAppDisplay}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#25D366] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-neutral-500 uppercase">EMAIL</div>
                      <a href={`mailto:${realEmail}`} className="text-xs font-mono text-white hover:text-accent font-semibold transition-colors">
                        {realEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy email address"
                    aria-label="Copy email address to clipboard"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="text-[10px] font-mono text-neutral-500 pt-1">
                // Fast response via WhatsApp during business hours
              </div>
            </div>

            {/* Separate Dedicated Social Media Block - ICON-ONLY UI */}
            <div className="p-5 sm:p-7 rounded-2xl bg-[#121212] border border-white/[0.06] space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
                  SOCIAL CHANNELS
                </span>
                <p className="text-xs text-neutral-400 font-sans">
                  Follow Akash across video & content platforms
                </p>
              </div>

              {/* Icon-Only System: Instagram, Facebook 1, Facebook 2, TikTok, YouTube */}
              <SocialLinks className="gap-2.5 sm:gap-3" />
            </div>

          </div>

          {/* Right Column: Functional WhatsApp Brief Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-7 rounded-2xl bg-[#121212] border border-white/[0.06] space-y-5">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
                  PROJECT INQUIRY FORM
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  Send Brief via WhatsApp
                </h3>
              </div>

              {whatsappOpened && (
                <div className="p-4 rounded-xl bg-accent/10 border border-accent/30 space-y-2">
                  <div className="flex items-start gap-2.5 text-xs text-white">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-semibold text-accent">
                        WhatsApp is ready with your message. Please send it to complete your inquiry.
                      </p>
                      <p className="text-[11px] text-neutral-300">
                        Opening WhatsApp prefilled your inquiry. Click send inside WhatsApp to deliver it directly to Akash.
                      </p>
                    </div>
                  </div>
                  {fallbackUrl && (
                    <div className="pt-2">
                      <a
                        href={fallbackUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline"
                      >
                        <span>Click here if WhatsApp didn't open automatically</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleWhatsAppSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tanvir Ahmed"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border text-white placeholder-neutral-600 text-xs font-sans focus:outline-none focus:border-accent ${
                        errors.name ? 'border-red-500' : 'border-white/[0.08]'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] font-mono text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. brand@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border text-white placeholder-neutral-600 text-xs font-sans focus:outline-none focus:border-accent ${
                        errors.email ? 'border-red-500' : 'border-white/[0.08]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] font-mono text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Brand Name (Optional) */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                      Brand or Business Name <span className="text-neutral-500">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bistro Dhaka"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white placeholder-neutral-600 text-xs font-sans focus:outline-none focus:border-accent"
                    />
                  </div>

                  {/* Service Interested In */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                      Service Interested In *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-white/[0.08] text-white text-xs font-sans focus:outline-none focus:border-accent"
                    >
                      <option value="Brand Promotion">Brand Promotion</option>
                      <option value="Cinematography">Cinematography</option>
                      <option value="Product Photography">Product Photography</option>
                      <option value="Restaurant Photography">Restaurant Photography</option>
                      <option value="Social Media Content">Social Media Content</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                    Project Details *
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell Akash about your timeline, deliverables, or visual goals..."
                    value={formData.details}
                    onChange={(e) => {
                      setFormData({ ...formData, details: e.target.value });
                      if (errors.details) setErrors({ ...errors, details: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border text-white placeholder-neutral-600 text-xs font-sans focus:outline-none focus:border-accent resize-none ${
                      errors.details ? 'border-red-500' : 'border-white/[0.08]'
                    }`}
                  />
                  {errors.details && (
                    <span className="text-[10px] font-mono text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.details}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-accent text-background font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-white transition-colors"
                >
                  <span>LET'S CONNECT →</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
