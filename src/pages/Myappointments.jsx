import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);

  if (!doctors || doctors.length === 0) {
    return (
      <div>
        <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
          My Appointments
        </p>
        <p className="mt-4 text-gray-500">No appointments available.</p>
      </div>
    );
  }

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Appointments
      </p>
      <div>
        {doctors.slice(0,3).map((item, index) => (
          <div
            key={index}
            className="py-4 border-b grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6"
          >
            {/* Doctor's Image */}
            <img
              className="w-32 h-32 object-cover bg-indigo-50 rounded-md"
              src={item.image}
              alt={item.name}
            />

            {/* Doctor's Details */}
            <div>
              <p className="font-medium text-lg">{item.name}</p>
              <p className="text-sm text-gray-600">{item.speciality}</p>
              <p className="mt-2 text-sm font-medium">Address:</p>
              <p className="text-sm text-gray-600">{item.address.line1}</p>
              <p className="text-sm text-gray-600">{item.address.line2}</p>
              <p className="mt-2 text-sm">
                <span className="font-medium">Date & Time:</span> 28, Nov, 2024
                | 8:30 PM
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 mt-4 sm:mt-0">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Pay Online
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
