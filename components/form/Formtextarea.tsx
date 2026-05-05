type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string;
};

export default function FormTextarea({
  label,
  name,
  value,
  onChange,
  error,
}: Props) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>

      <textarea
        rows={4}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className={`w-full rounded-md border px-3 py-2 text-sm 
          ${error ? "border-red-500" : "border-border"}`}
      />

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
