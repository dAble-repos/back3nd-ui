import { cardsData } from "../../../../public/data/product_card_data";
import ProductCard from "../organisms/cards/product_card";

const ProductsContainer = () => {
  return (
    <div className="bg-white w-2/3 rounded-xl text-black px-8 py-8">
      <h1 className="text-4xl font-semibold items-center text-center mx-8 my-12">
        Products and solutions for every stage of your dapp development journey
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {/* Columns */}
        {cardsData.map((item) => {
          return <ProductCard cardData={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductsContainer;
