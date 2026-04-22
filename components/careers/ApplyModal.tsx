import { useState } from "react";

type ApplyModalProps = {
  onClose: () => void;
};

const ApplyModal = ({ onClose }: ApplyModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold text-primary">
              Application Submitted
            </h2>

            <p className="mt-3 text-muted-foreground">
              Thank you for your interest. Our team will review your application
              and contact you soon.
            </p>

            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 bg-primary text-white rounded-md"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-foreground">Apply Now</h2>

            <p className="text-sm text-muted-foreground mb-4">
              Submit your information and we’ll get in touch.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                placeholder="Full Name"
                className="w-full border border-border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                placeholder="Phone"
                className="w-full border border-border rounded-md p-3"
              />

              <input
                placeholder="LinkedIn Profile"
                className="w-full border border-border rounded-md p-3"
              />

              <input type="file" className="w-full text-sm" />

              <textarea
                placeholder="Message"
                className="w-full border border-border rounded-md p-3 h-24"
              />

              <button className="w-full bg-primary text-white py-3 rounded-md font-medium hover:opacity-90 transition">
                Submit Application
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ApplyModal;
