import { formatCurrency } from "../utils";

function Motor({ motor }) {
  return (
    <div className="mt-5 cursor-pointer rounded-lg bg-white p-4 text-gray-700 shadow-lg transition-transform duration-200 hover:scale-105">
      <div className="overflow-hidden">
        <img
          src={motor.image} // Ensure you're accessing the correct image URL
          alt={motor.title} // Use a meaningful alt text
          className="h-[300px] w-[400px] object-cover transition duration-300 ease-in-out hover:scale-110" // Adjusted classes for better responsiveness
        />
      </div>
      <p className="pb-1 pt-3 text-sm font-semibold">{motor.title}</p>
      <p className="text-sm font-medium">{formatCurrency(motor.price)}</p>
    </div>
  );
}

export default Motor;
