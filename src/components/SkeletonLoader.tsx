import React from "react";

const SkeletonLoader: React.FC = () => {
  const skeletonItems = Array.from({ length: 6 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0 animate-pulse">
      {skeletonItems.map((_, index) => (
        <div key={index} className="bg-gray-200 rounded-lg p-6 shadow-lg">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-6 bg-blue-300 rounded w-1/4 mt-4"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
