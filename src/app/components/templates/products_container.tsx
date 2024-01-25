import Link from "next/link";

const ProductsContainer = () => {
  return (
    <div className="bg-white w-5/6">
      <h1>
        Products and solutions for every stage of your dapp development journey
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Column 1 */}
        <div className="flex items-center justify-center">
          <img
            src="path/to/column1-image.jpg"
            alt="Column 1 image"
            className="w-48 h-48 rounded-lg"
          />
          <div className="ml-4">
            <h3>Build</h3>
            <p>
              Accelerate dapp development with fully managed backend
              infrastructure
            </p>
            <h5>View all products</h5>
            <div className="flex flex-col">
              <Link href="/">Product 1</Link>
              <Link href="/">Product 2</Link>
              <Link href="/">Product 3</Link>
            </div>
          </div>
        </div>
        {/* Column 2 */}
        {/* ... repeat similar structure for Column 2 and 3, replacing image paths */}
      </div>
    </div>
  );
};

export default ProductsContainer;
