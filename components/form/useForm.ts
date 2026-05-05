import { useState } from "react";

export function useForm<T extends Record<string, unknown>>(initialState: T) {
  const [form, setForm] = useState<T>(initialState);

  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (name: keyof T, value: string) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return {
    form,
    setForm,
    errors,
    setErrors,
    loading,
    setLoading,
    success,
    setSuccess,
    handleChange,
  };
}
