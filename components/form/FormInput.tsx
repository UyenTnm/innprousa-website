type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string;
  type?: string;
};

export default function FormInput({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
}: Props) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className={`w-full rounded-md border px-3 py-2 text-sm 
          ${error ? "border-red-500" : "border-border"}`}
      />

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
