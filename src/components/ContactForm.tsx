import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { z } from "zod";
import { HiCheck, HiPaperAirplane } from "react-icons/hi2";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(200),
  subject: z.string().trim().min(2, "Please add a subject").max(120),
  message: z.string().trim().min(10, "Message is a bit short").max(2000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  function set<K extends keyof typeof form>(k: K, v: string) {
    setForm(f => ({ ...f, [k]: v }));
    if (errors[k]) setErrors(e => ({ ...e, [k]: undefined }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fe: Errors = {};
      for (const issue of parsed.error.issues) {
        fe[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(fe);
      return;
    }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 900));
    setSubmitting(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <form onSubmit={onSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5 relative overflow-hidden">
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-card/95 backdrop-blur-sm"
          >
            <div className="h-14 w-14 rounded-full gradient-bg flex items-center justify-center glow">
              <HiCheck className="h-7 w-7 text-primary-foreground" />
            </div>
            <p className="font-display text-lg font-semibold">Message sent</p>
            <p className="text-sm text-muted-foreground">I'll get back to you within 24 hours.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Name" id="name" value={form.name} onChange={v => set("name", v)} error={errors.name} placeholder="Your name" />
        <Field label="Email" id="email" type="email" value={form.email} onChange={v => set("email", v)} error={errors.email} placeholder="you@example.com" />
      </div>
      <Field label="Subject" id="subject" value={form.subject} onChange={v => set("subject", v)} error={errors.subject} placeholder="What's it about?" />
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={e => set("message", e.target.value)}
          placeholder="Tell me about your project…"
          className="w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
        />
        {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 w-full rounded-xl gradient-bg text-primary-foreground py-3 font-medium glow hover:opacity-95 transition-opacity disabled:opacity-60"
      >
        {submitting ? "Sending…" : <>Send message <HiPaperAirplane className="h-4 w-4" /></>}
      </button>
    </form>
  );
}

function Field({
  label, id, value, onChange, error, placeholder, type = "text",
}: {
  label: string; id: string; value: string; onChange: (v: string) => void;
  error?: string; placeholder?: string; type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        aria-invalid={!!error}
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
