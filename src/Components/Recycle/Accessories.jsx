import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AccessoriesRecyclingForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [recycleItemPrice, setRecycleItemPrice] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedFacility, setSelectedFacility] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (
      selectedCategory&&
      recycleItemPrice &&
      pickupDate &&
      pickupTime &&
      location &&
      phone &&
      selectedFacility
    ) {
      // Simulate form submission
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        toast.success("Form submitted successfully!");
        // Reset form fields
        setSelectedCategory("");
        setRecycleItemPrice("");
        setPickupDate("");
        setPickupTime("");
        setLocation("");
        setPhone("");
        setSelectedFacility("");
      }, 2000); // Simulating a delay for submission
    } else {
      toast.error("Please fill in all required fields.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <ToastContainer />
      <h1 className="text-4xl font-bold mb-6 text-center">Smartphone Recycling</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="brand" className="block font-semibold mb-1">
                Select Category:
              </label>
              <select
                id="brand"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Category</option>
                <option value="Headphones">Headphones</option>
                <option value="Chargers">Chargers</option>
                <option value="Laptop Bags">Laptop Bags</option>
                <option value="External Hard Drives">External Hard Drives</option>
                <option value="Smartwatches">Smartwatches</option>
                <option value="Mouse and Keyboards">Mouse and Keyboards</option>
                <option value="Power Banks">Power Banks</option>
                <option value="Other">Other</option>
              </select>
            </div>

            

            <div>
              <label htmlFor="recycleItemPrice" className="block font-semibold mb-1">
                Recycle Item Price:
              </label>
              <input
                type="number"
                id="recycleItemPrice"
                value={recycleItemPrice}
                onChange={(e) => setRecycleItemPrice(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="pickupDate" className="block font-semibold mb-1">
                Pickup Date:
              </label>
              <input
                type="date"
                id="pickupDate"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="pickupTime" className="block font-semibold mb-1">
                Pickup Time:
              </label>
              <input
                type="time"
                id="pickupTime"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          </form>
        </div>

        {/* Right Column */}
        <div>
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-4">


           

            <div>
              <label htmlFor="location" className="block font-semibold mb-1">
                Location:
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-semibold mb-1">
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="facility" className="block font-semibold mb-1">
                Select Facility:
              </label>
              <select
                id="facility"
                value={selectedFacility}
                onChange={(e) => setSelectedFacility(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Facility</option>
                {/* Add options for different facilities */}
                <option value="Facility A">Facility A</option>
                <option value="Facility B">Facility B</option>
                {/* Add more facilities here */}
              </select>
            </div>
          </form>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          onClick={handleFormSubmit}
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default AccessoriesRecyclingForm;
