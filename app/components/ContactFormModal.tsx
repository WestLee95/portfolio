"use client";

import { useActionState, useState, ViewTransition } from "react";
import { sendContactEmail, FormState } from "@/app/actions/sendEmail";

export interface ContactFormModalProps {
  setIsContactOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState: FormState = {
  success: false,
  message: "",
  errors: {},
};

export default function ContactFormModal({ setIsContactOpen }: ContactFormModalProps) {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);
  const [contactService, setContactService] = useState<"dev" | "media">("dev");

  return (
    <div className="p-6 rounded-2xl bg-[#062c33] border border-[#0d4b56] shadow-2xl max-w-md w-full">
      <ViewTransition>
        {state.success ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto text-xl">
              <i className="fas font-solid fa-check"></i>
            </div>
            <h4 className="text-white font-bold text-base">Inquiry Sent Successfully!</h4>
            <p className="text-xs text-teal-200/70">{state.message}</p>
            <button
              type="button"
              onClick={() => setIsContactOpen(false)}
              className="mt-4 px-4 py-2 text-xs rounded-xl bg-[#0d4b56] text-teal-100 hover:bg-[#03191e] transition"
            >
              Close Modal
            </button>
          </div>
        ) : (
          <form action={formAction} className="space-y-4">
            <input type="hidden" name="contactService" value={contactService} />

            <ViewTransition>
              {state.message && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs">
                  {state.message}
                </div>
              )}
            </ViewTransition>

            <div>
              <label className="block text-xs font-semibold text-teal-200 mb-2">Project Type:</label>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setContactService("dev")}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    contactService === "dev"
                      ? "border-cyan-400 bg-cyan-500/15 text-cyan-300 font-semibold"
                      : "border-[#0d4b56] bg-[#021013] text-teal-300/70 hover:border-teal-500"
                  }`}
                >
                  Frontend App Dev
                </button>
                <button
                  type="button"
                  onClick={() => setContactService("media")}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    contactService === "media"
                      ? "border-teal-400 bg-teal-500/15 text-teal-300 font-semibold"
                      : "border-[#0d4b56] bg-[#021013] text-teal-300/70 hover:border-teal-500"
                  }`}
                >
                  Social Media & Content
                </button>
              </div>
            </div>

            {/* Name Field */}
            <div>
              <label className="block text-xs font-semibold text-teal-200 mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                required
                disabled={isPending}
                placeholder="Jane Doe"
                className={`w-full px-4 py-2.5 rounded-xl bg-[#021013] border text-white text-xs focus:outline-none transition-colors ${
                  state.errors?.name ? "border-rose-500" : "border-[#0d4b56] focus:border-cyan-400"
                }`}
              />
              <ViewTransition>
                {state.errors?.name && <p className="text-[10px] text-rose-400 mt-1">{state.errors.name}</p>}
              </ViewTransition>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xs font-semibold text-teal-200 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                disabled={isPending}
                placeholder="jane@company.com"
                className={`w-full px-4 py-2.5 rounded-xl bg-[#021013] border text-white text-xs focus:outline-none transition-colors ${
                  state.errors?.email ? "border-rose-500" : "border-[#0d4b56] focus:border-cyan-400"
                }`}
              />
              <ViewTransition>
                {state.errors?.email && <p className="text-[10px] text-rose-400 mt-1">{state.errors.email}</p>}
              </ViewTransition>
            </div>

            {/* Project Details Field */}
            <div>
              <label className="block text-xs font-semibold text-teal-200 mb-1">Project Details</label>
              <textarea
                name="details"
                rows={3}
                required
                disabled={isPending}
                placeholder="Describe your web application scope or social media / content strategy request..."
                className={`w-full px-4 py-2.5 rounded-xl bg-[#021013] border text-white text-xs focus:outline-none resize-none transition-colors ${
                  state.errors?.details ? "border-rose-500" : "border-[#0d4b56] focus:border-cyan-400"
                }`}
              ></textarea>
              <ViewTransition>
                {state.errors?.details && <p className="text-[10px] text-rose-400 mt-1">{state.errors.details}</p>}
              </ViewTransition>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-slate-950 font-extrabold text-xs shadow-lg hover:brightness-110 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isPending ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  <span>Submitting...</span>
                </>
              ) : (
                "Send Direct Inquiry"
              )}
            </button>
          </form>
        )}
      </ViewTransition>
    </div>
  );
}