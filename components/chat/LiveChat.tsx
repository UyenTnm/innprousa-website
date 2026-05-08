"use client";

import { useState } from "react";
import { X, MessageCircle, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LiveChat() {
  const [step, setStep] = useState<"lead" | "chat">("lead");

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [chatEnded, setChatEnded] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const [messages, setMessages] = useState<
    {
      role: "bot" | "user";
      text: string;
    }[]
  >([]);

  const quickActions = [
    "Request Sample",
    "Product Inquiry",
    "Manufacturing",
    "Contact Team",
  ];

  const handleLeadSubmit = () => {
    if (!name.trim() || !email.trim()) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setStep("chat");

    setMessages([
      {
        role: "bot",
        text: `👋 Welcome ${name}! How can InnPro assist you today?`,
      },
    ]);
  };

  const sendMessage = (customMessage?: string) => {
    const finalMessage = customMessage || message;

    if (!finalMessage.trim() || isSending) return;

    setIsSending(true);

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: finalMessage,
      },
    ]);

    setMessage("");

    let botReply =
      "Thank you for contacting InnPro. Our team will review your inquiry and respond shortly.";

    // SMART REPLIES
    const lowerMessage = finalMessage.toLowerCase();

    if (
      lowerMessage.includes("sample") ||
      lowerMessage.includes("request sample")
    ) {
      botReply =
        "Thank you for your sample request. Our team will contact you shortly regarding product availability and shipping.";
    }

    if (lowerMessage.includes("price") || lowerMessage.includes("quote")) {
      botReply =
        "Thank you for your inquiry. Please share additional details about your application so our team can prepare the appropriate quotation.";
    }

    if (lowerMessage.includes("manufacturing")) {
      botReply =
        "InnPro supports scalable manufacturing solutions for modern food applications. Our team will follow up with additional details shortly.";
    }

    if (lowerMessage === "hi" || lowerMessage === "hello") {
      botReply = "Hello 👋 How can InnPro assist you today?";
    }

    setTimeout(async () => {
      setMessages((prev) => [
        ...prev,

        {
          role: "bot",
          text: botReply,
        },
      ]);
      const greetings = ["hi", "hello", "hey", "xin chào", "chào"];

      const isGreeting =
        greetings.some((greeting) => lowerMessage.startsWith(greeting)) &&
        lowerMessage.length < 20;

      const hasInquiryIntent =
        lowerMessage.includes("sample") ||
        lowerMessage.includes("quote") ||
        lowerMessage.includes("product") ||
        lowerMessage.includes("manufacturing") ||
        lowerMessage.includes("pricing") ||
        lowerMessage.includes("contact");

      if (hasInquiryIntent && !isGreeting && !leadSubmitted) {
        setChatEnded(true);

        const fullConversation = [
          ...messages,
          {
            role: "user",
            text: finalMessage,
          },
          {
            role: "bot",
            text: botReply,
          },
        ]
          .map((msg) => `${msg.role.toUpperCase()}: ${msg.text}`)
          .join("\n");

        submitLead(fullConversation);

        setLeadSubmitted(true);
      }

      // try {
      //   await fetch("/api/live-chat", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },

      //     body: JSON.stringify({
      //       name,
      //       email,
      //       message: finalMessage,
      //       source: "Live Chat",
      //     }),
      //   });
      // } catch (error) {
      //   console.error("Webhook Error:", error);
      // }

      setIsSending(false);
    }, 1000);
  };

  const submitLead = async (conversation: string) => {
    try {
      await fetch("/api/live-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          message: conversation,
          source: "Live Chat",
        }),
      });
    } catch (error) {
      console.error("Webhook Error:", error);
    }
  };

  const closeChat = () => {
    setOpen(false);
    setLeadSubmitted(false);

    setTimeout(() => {
      setStep("lead");

      setName("");
      setEmail("");
      setMessage("");

      setMessages([]);

      setChatEnded(false);

      setIsSending(false);
    }, 300);
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        onClick={() => {
          if (open) {
            closeChat();
          } else {
            setOpen(true);
          }
        }}
        className="
  fixed bottom-5 right-5 z-[9999]

   overflow-hidden

  w-14 h-14 rounded-full

  bg-gradient-to-br from-primary via-[#008ea3] to-[#00a9c0]

  text-white

  border border-white/20

  shadow-[0_12px_35px_rgba(0,0,0,0.28)]

  flex items-center justify-center

  transition-all duration-300

  hover:scale-110
  hover:-translate-y-2

  hover:shadow-[0_25px_55px_rgba(0,0,0,0.42)]

  hover:brightness-110

  active:scale-95
"
      >
        <div className="relative z-10">
          {open ? <X size={22} /> : <MessageCircle size={22} />}
        </div>
        <div
          className="
    absolute inset-0 rounded-full
    blur-md
  "
        />
      </motion.button>

      {/* CHAT PANEL */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <div className="fixed inset-0 z-[9998]" onClick={closeChat} />
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="
              fixed bottom-24 right-5 z-[9999]
              w-[92vw] sm:w-[380px]
              rounded-3xl overflow-hidden
              border border-white/10
              bg-white shadow-2xl
            "
            >
              {/* HEADER */}
              <div className="bg-primary text-white p-5">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-400 rounded-full" />

                    <span className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></span>
                  </div>

                  <div>
                    <h3 className="font-semibold">InnPro Support</h3>

                    <p className="text-sm text-white/80">
                      Typically replies within 1 hour
                    </p>
                  </div>
                </div>
              </div>

              {/* BODY */}
              <div className="p-5">
                {step === "lead" ? (
                  <>
                    <div className="bg-muted rounded-2xl p-4 text-sm leading-relaxed">
                      👋 Welcome to InnPro.
                      <br />
                      Please enter your information to begin chatting.
                    </div>

                    <div className="mt-5 space-y-3">
                      <input
                        value={name}
                        disabled={chatEnded}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="
            w-full h-12 px-4 rounded-xl
            border outline-none
            focus:ring-2 focus:ring-primary/30
          "
                      />

                      <input
                        type="email"
                        value={email}
                        disabled={chatEnded}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="
            w-full h-12 px-4 rounded-xl
            border outline-none
            focus:ring-2 focus:ring-primary/30
          "
                      />

                      <button
                        onClick={handleLeadSubmit}
                        className="
            w-full h-12 rounded-xl
            bg-primary text-white
            font-medium
            hover:scale-[1.01]
            transition
          "
                      >
                        Start Conversation
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* MESSAGES */}
                    <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
                      {messages.map((msg, i) => (
                        <div
                          key={i}
                          className={`flex ${
                            msg.role === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`
                max-w-[85%]
                rounded-2xl px-4 py-3 text-sm leading-relaxed
                ${msg.role === "user" ? "bg-primary text-white" : "bg-muted"}
              `}
                          >
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>

                    {chatEnded && (
                      <div className="mt-4 rounded-2xl border bg-primary/5 border-primary/10 p-4">
                        <p className="text-sm leading-relaxed text-foreground">
                          ✅ Your inquiry has been received.
                          <br />
                          Our InnPro team will contact you shortly via email.
                        </p>
                      </div>
                    )}

                    {/* QUICK ACTIONS */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {quickActions.map((item) => (
                        <button
                          key={item}
                          disabled={chatEnded}
                          onClick={() => setMessage(item)}
                          className="px-3 py-2 rounded-full border text-sm hover:bg-primary hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {item}
                        </button>
                      ))}
                    </div>

                    {/* INPUT */}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        sendMessage();
                      }}
                      className="mt-5 flex items-center gap-2"
                    >
                      <input
                        value={message}
                        disabled={chatEnded}
                        onChange={(e) => setMessage(e.target.value)}
                        // onKeyDown={(e) => {
                        //   if (e.key === "Enter" && !e.shiftKey && !isSending) {
                        //     e.preventDefault();
                        //     sendMessage();
                        //   }
                        // }}
                        placeholder="Type your message..."
                        className="
            flex-1 h-12 px-4 rounded-xl
            border outline-none
            focus:ring-2 focus:ring-primary/30
          "
                      />

                      <button
                        // onClick={() => sendMessage()}
                        type="submit"
                        className="
            w-12 h-12 rounded-xl
            bg-primary text-white
            flex items-center justify-center
            hover:scale-105 transition
          "
                      >
                        <Send size={18} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
