"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import Image from "next/image";

type FormType = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormType, string>>;

export default function ContactContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "contact";

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  // reset form sau khi submit
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          role: "",
          message: "",
        });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  // CHỈ SỬA NHỮNG PHẦN QUAN TRỌNG

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    // clear error đúng field (1 chỗ duy nhất)
    if (errors[name as keyof FormType]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      // 👉 focus + scroll input lỗi đầu tiên (xịn hơn)
      const firstError = Object.keys(validationErrors)[0];
      const el = document.querySelector(
        `[name="${firstError}"]`,
      ) as HTMLElement | null;

      if (el) {
        el.focus();
        el.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }

      return;
    }

    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.firstName + " " + form.lastName,
          email: form.email,
          phone: "",
          company: form.company,
          role: form.role,
          message: form.message,
          type: type,
        }),
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const validationErrors = validate();

  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);

  //     const firstError = Object.keys(validationErrors)[0];
  //     document.querySelector(`[name="${firstError}"]`)?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //     });

  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     await fetch("/api/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: form.firstName + " " + form.lastName,
  //         email: form.email,
  //         phone: "",
  //         company: form.company,
  //         role: form.role,
  //         message: form.message,
  //         type: type, // 🔥 QUAN TRỌNG
  //       }),
  //     });

  //     setSubmitted(true);
  //   } catch (err) {
  //     console.error(err);
  //     alert("Something went wrong");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const validate = () => {
    const e: FormErrors = {};

    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";

    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Invalid email format";

    if (!form.company.trim()) e.company = "Company is required";

    return e;
  };

  return (
    <>
      {/* HERO */}
      <section
        className="
    relative 
    min-h-[55vh] 
    sm:min-h-[60vh] 
    md:min-h-[65vh] 
    lg:min-h-[70vh] 
    flex items-center
    text-white 
    overflow-hidden
  "
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/images/contact/bg-contact.jpeg"
            alt="Contact InnPro"
            fill
            className="object-cover object-center md:object-[center_30%]"
            priority
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENT */}
        <div className="relative z-10 container max-w-3xl text-left">
          <p className="uppercase text-sm tracking-widest opacity-80">
            {type === "sample" ? "Request Sample" : "Contact"}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            {type === "sample" ? "Request a Sample" : "Contact Us"}
          </h1>

          <p className="mt-4 opacity-90 max-w-xl leading-relaxed">
            {type === "sample"
              ? "Tell us about your application and sample requirements. Our team will respond with suitable product recommendations."
              : "Tell us about your project, and our team will help you find the right plant-based protein solution."}
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20">
        <div className="container grid gap-12 lg:grid-cols-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="lg:col-span-2"
          >
            {submitted ? (
              <div className="text-center p-16 border rounded-lg">
                <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-500" />
                <h2 className="text-2xl font-bold">Thank You</h2>
                <p className="text-muted-foreground mt-2">
                  We’ll contact you within 24 hours.
                </p>
                <p className="text-sm mt-2 text-muted-foreground">
                  Form will reset automatically...
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 border rounded-lg p-8"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    name="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={(e) => {
                      handleChange(e);

                      if (errors.firstName) {
                        setErrors((prev) => ({ ...prev, firstName: "" }));
                      }
                    }}
                    className={errors.firstName ? "border-red-500" : ""}
                  />

                  {errors.firstName && (
                    <p className="text-xs text-red-500">{errors.firstName}</p>
                  )}

                  <Input
                    name="lastName"
                    placeholder="First Name"
                    value={form.lastName}
                    onChange={(e) => {
                      handleChange(e);

                      if (errors.lastName) {
                        setErrors((prev) => ({ ...prev, lastName: "" }));
                      }
                    }}
                    className={errors.lastName ? "border-red-500" : ""}
                  />

                  {errors.lastName && (
                    <p className="text-xs text-red-500">{errors.lastName}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <Input
                      name="company"
                      placeholder="Company"
                      value={form.company}
                      onChange={handleChange}
                      className={errors.company ? "border-red-500" : ""}
                    />
                    {errors.company && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.company}
                      </p>
                    )}
                  </div>
                </div>

                <Input
                  name="role"
                  placeholder="Your Role"
                  value={form.role}
                  onChange={handleChange}
                />

                <Textarea
                  name="message"
                  placeholder={
                    type === "sample"
                      ? "What sample are you looking for?"
                      : "Tell us about your project..."
                  }
                  value={form.message}
                  onChange={handleChange}
                />

                <Button
                  type="submit"
                  className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading
                    ? "Sending..."
                    : type === "sample"
                      ? "Request Sample"
                      : "Submit"}
                </Button>
              </form>
            )}
          </motion.div>

          {/* INFO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="space-y-6"
          >
            <div>
              <h3 className="font-semibold mb-3">Contact Info</h3>

              <div className="space-y-3 text-sm">
                <div className="flex gap-2">
                  <Mail className="w-4 h-4" />
                  info@innprousa.com
                </div>

                <div className="flex gap-2">
                  <Phone className="w-4 h-4" />
                  +1 605 206 3467
                </div>

                <div className="flex gap-2">
                  <MapPin className="w-4 h-4" />
                  United States
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
