import React, { useState } from "react";

function Enq() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 text-white rounded-200 hover:bg-blue-700" style={{backgroundColor:" #0e1c3b"}}
      >
        Drop Enquiry
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">Drop Your Enquiry</h2>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Destination"
                className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Travel Dates"
                className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Your Message"
                className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={3}
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Enq;
