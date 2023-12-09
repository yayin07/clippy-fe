import React from "react";

const MainFooter = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Column 1 */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Column 1</h4>
          {/* Add your content for column 1 here */}
        </div>

        {/* Column 2 */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Column 2</h4>
          {/* Add your content for column 2 here */}
        </div>

        {/* Column 3 */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Column 3</h4>
          {/* Add your content for column 3 here */}
        </div>

        {/* Column 4 */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Column 4</h4>
          {/* Add your content for column 4 here */}
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
