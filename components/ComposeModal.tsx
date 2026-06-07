"use client";

import { useState } from "react";
import { Send, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ORANGE = "#bf5220";
const CREAM = "#f5f0e8";
const BORDER = "#e0d8cc";
const INK = "#1a1a1a";

export function ComposeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.subject || !form.message) return;

    const width = 900;
    const height = 650;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;

    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Hello, Rizaldy\n\nMy name is ${form.name}.\n\n${form.message}\n\nBest regards,\n${form.name}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&to=rizaldycondino07@gmail.com&su=${subject}&body=${body}`,
      "gmailCompose",
      `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
    );
    setSent(true);
  };

  const handleClose = () => {
    setSent(false);
    setForm({ name: "", email: "", subject: "", message: "" });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        showCloseButton={false}
        className="p-0 gap-0 rounded-sm overflow-hidden"
        style={{ backgroundColor: CREAM, border: `1px solid ${BORDER}`, maxWidth: "480px" }}
      >
        {/* Header — static title, never changes */}
        <DialogHeader
          className="px-5 py-3 border-b flex flex-row items-center justify-between"
          style={{ backgroundColor: INK, borderColor: BORDER }}
        >
          <DialogTitle className="text-sm font-medium text-white tracking-wide">
            Create a Message
          </DialogTitle>
          <DialogClose className="cursor-pointer flex items-center justify-center w-6 h-6 rounded-sm bg-white hover:bg-white/80 transition-colors">
            <X size={12} style={{ color: INK }} />
          </DialogClose>
        </DialogHeader>

        {sent ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <Send size={32} style={{ color: ORANGE }} />
            <p className="text-sm font-medium" style={{ color: INK }}>
              Gmail opened with your message!
            </p>
            
          </div>
        ) : (
          <div className="flex flex-col">
            {/* To */}
            <div className="flex items-center gap-3 px-5 py-3 border-b font-bold" style={{ borderColor: BORDER }}>
              <span className="text-xs tracking-widest uppercase w-16" style={{ color: "#9e9080" }}>To</span>
              <span className="text-sm" style={{ color: INK }}>rizaldycondino07@gmail.com</span>
            </div>

            {/* Name */}
            <div className="flex items-center gap-3 px-5 py-3 border-b font-bold" style={{ borderColor: BORDER }}>
              <span className="text-xs tracking-widest uppercase w-16 font-bold" style={{ color: "#9e9080" }}>Name</span>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#c4bdb3]"
                style={{ color: INK }}
              />
            </div>

            {/* From */}
            <div className="flex items-center gap-3 px-5 py-3 border-b font-bold" style={{ borderColor: BORDER }}>
              <span className="text-xs tracking-widest uppercase w-16" style={{ color: "#9e9080" }}>From</span>
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#c4bdb3]"
                style={{ color: INK }}
              />
            </div>

            {/* Subject — now editable */}
            <div className="flex items-center gap-3 px-5 py-3 border-b font-bold" style={{ borderColor: BORDER }}>
              <span className="text-xs tracking-widest uppercase w-16" style={{ color: "#9e9080" }}>Subject</span>
              <input
                type="text"
                placeholder="Your subject..."
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#c4bdb3]"
                style={{ color: INK }}
              />
            </div>

            {/* Message */}
            <textarea
              placeholder={`Hello, Rizaldy\n\nI would like to...`}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={6}
              className="w-full bg-transparent text-sm outline-none px-5 py-4 resize-none placeholder:text-[#c4bdb3]"
              style={{ color: INK }}
            />

            {/* Footer */}
            <div
              className="flex items-center justify-between px-5 py-3 border-t"
              style={{ borderColor: BORDER }}
            >
              <button
                onClick={handleSubmit}
                className="flex items-center cursor-pointer gap-2 px-5 py-2 rounded-sm text-sm font-medium text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: ORANGE }}
              >
                <Send size={14} />
                Send
              </button>
              <span className="text-xs" style={{ color: "#9e9080" }}>
                {!form.name || !form.email || !form.subject || !form.message
                  ? "Fill all fields to send"
                  : "Ready to send ✓"}
              </span>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}