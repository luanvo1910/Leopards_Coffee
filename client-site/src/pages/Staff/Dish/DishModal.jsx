import React from "react";

const DishModal = ({
  isOpen,
  onClose,
  dishData,
  onChange,
  onSave,
  categories,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-xl font-bold mb-4">
          {dishData ? "Edit Dish" : "Add Dish"}
        </h3>
        <div className="mb-4">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={dishData.name}
            onChange={onChange}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={dishData.price}
            onChange={onChange}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label>Category</label>
          <select
            name="category"
            value={dishData.category}
            onChange={onChange}
            className="p-2 border rounded w-full"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label>Available</label>
          <input
            type="checkbox"
            name="isValid"
            checked={dishData.isValid}
            onChange={onChange}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="p-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="p-2 bg-blue-500 text-white rounded"
          >
            {dishData ? "Save Changes" : "Add Dish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishModal;
