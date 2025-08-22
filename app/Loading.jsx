
import React from "react";

const Loading = () => {
  return (
    <div className="p-6 space-y-4 animate-pulse">
      {/* Avatar Skeleton */}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-700 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="w-48 h-4 bg-gray-700 rounded"></div>
          <div className="w-32 h-4 bg-gray-600 rounded"></div>
        </div>
      </div>

      {/* Card Skeleton */}
      <div className="w-full h-40 bg-gray-700 rounded-lg"></div>

      {/* Button Skeletons */}
      <div className="flex space-x-4">
        <div className="w-24 h-10 bg-gray-700 rounded-lg"></div>
        <div className="w-24 h-10 bg-gray-600 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Loading;
