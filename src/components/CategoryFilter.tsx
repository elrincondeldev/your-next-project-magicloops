import React from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onChange,
}) => {
  return (
    <div className="flex justify-center mb-6">
      <select
        value={selectedCategory}
        onChange={(e) => onChange(e.target.value)}
        className="p-3 rounded-lg shadow border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white cursor-pointer hover:bg-blue-50 transition"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
