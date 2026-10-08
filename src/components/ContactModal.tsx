import React, { useState } from 'react';
import { X, Check, Copy, Send, Mail, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '3D Modeling & Animation',
    budget: '$5k - $15k',
    message: '',
  });

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jack@3dcreator.design');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in select-none"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 text-[#D7E2EA] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-6 right-6 p-2 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] hover:bg-[#D7E2EA]/20 transition-colors cursor-pointer"
        >
          <X size={22} />
        </button>

        <div className="mb-6">
          <span className="text-xs font-light text-[#D7E2EA]/60 uppercase tracking-widest block mb-1">
            Let&apos;s Build Together
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#D7E2EA]">
            Start A Project
          </h2>
        </div>

        {sent ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
              <Check size={32} />
            </div>
            <h3 className="text-2xl font-bold uppercase">Inquiry Received!</h3>
            <p className="text-sm text-[#D7E2EA]/70 max-w-sm">
              Thanks for reaching out, {formData.name || 'there'}! Jack reviews incoming requests daily and will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 block mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#161616] border border-[#D7E2EA]/25 rounded-xl px-4 py-3 text-sm text-[#D7E2EA] focus:outline-none focus:border-[#D7E2EA]"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@studio.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#161616] border border-[#D7E2EA]/25 rounded-xl px-4 py-3 text-sm text-[#D7E2EA] focus:outline-none focus:border-[#D7E2EA]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 block mb-1.5">
                  Primary Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#161616] border border-[#D7E2EA]/25 rounded-xl px-4 py-3 text-sm text-[#D7E2EA] focus:outline-none focus:border-[#D7E2EA]"
                >
                  <option value="3D Modeling">01 - 3D Modeling</option>
                  <option value="Rendering">02 - Photorealistic Rendering</option>
                  <option value="Motion Design">03 - Motion Design</option>
                  <option value="Branding">04 - Visual Identity & Branding</option>
                  <option value="Web Design">05 - 3D Web & Interactive</option>
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 block mb-1.5">
                  Estimated Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-[#161616] border border-[#D7E2EA]/25 rounded-xl px-4 py-3 text-sm text-[#D7E2EA] focus:outline-none focus:border-[#D7E2EA]"
                >
                  <option value="Under $5k">Under $5k</option>
                  <option value="$5k - $15k">$5k - $15k</option>
                  <option value="$15k - $30k">$15k - $30k</option>
                  <option value="$30k+">$30k+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 block mb-1.5">
                Brief / Vision
              </label>
              <textarea
                rows={3}
                required
                placeholder="Tell Jack about the project scope, timeline, and deliverables..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#161616] border border-[#D7E2EA]/25 rounded-xl px-4 py-3 text-sm text-[#D7E2EA] focus:outline-none focus:border-[#D7E2EA] resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D7E2EA]/70 hover:text-white transition-colors cursor-pointer"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? 'Email Copied!' : 'jack@3dcreator.design'}</span>
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-medium uppercase tracking-widest text-xs flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                  outline: '2px solid white',
                  outlineOffset: '-3px',
                }}
              >
                <span>Send Brief</span>
                <Send size={14} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
