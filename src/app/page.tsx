import React from 'react';

const ResponsiveCard = () => {
  return (
    <div className="mx-8 my-6 justify-self-center space-y-8">
      
      {/* Grid container with responsive column settings  */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="flex items-center justify-center w-40 h-40 bg-green-400 rounded-lg shadow-md shadow-gray-600">
          <div className="text-white text-2xl">Card 1</div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center justify-center w-40 h-40 bg-red-400 rounded-lg shadow-md shadow-gray-600">
          <div className="text-white text-2xl">Card 2</div>
        </div>
      
        {/* Card 3 */}
        <div className="flex items-center justify-center w-40 h-40 bg-blue-400 rounded-lg shadow-md shadow-gray-600">
          <div className="text-white text-2xl">Card 3</div>
        </div>

        {/* Card 4 */}
        <div className="flex items-center justify-center w-40 h-40 bg-cyan-400 rounded-lg shadow-md shadow-gray-600">
          <div className="text-white text-2xl">Card 4</div>
        </div>

        {/* Card 5 */}
        <div className="flex items-center justify-center w-40 h-40 bg-yellow-400 rounded-lg shadow-md shadow-gray-600">
          <div className="text-white text-2xl">Card 5</div>
        </div>

      </div>
    </div>
  );
};

export default ResponsiveCard;
