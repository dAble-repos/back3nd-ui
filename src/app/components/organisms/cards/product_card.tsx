import * as shared from "../../../../../shared";
import img1 from "../../../../../public/images/Back3nd_1.png";
import { TbBrandAuth0 } from "react-icons/tb";
import { BsPlugin } from "react-icons/bs";
import { CgPerformance } from "react-icons/cg";
import React from "react";

const ProductCard = (props: any) => {
  const cardData = props.cardData;
  // console.log(props);

  return (
    <div className="flex flex-col items-center justify-center text-black text-center bg-gray-100 rounded-2xl px-4 py-8 shadow-lg hover:bg-blue-100">
      <shared.Image src={cardData.img} alt="Image 1" width={600} height={600} />
      <div className="ml-4">
        <h1 className="font-semibold text-2xl">{cardData.title}</h1>
        <p className="mt-8 mb-8">{cardData.description}</p>
        <shared.Link
          href={cardData.link}
          className="mt-8 text-blue-500 text-lg font-medium"
        >
          View all products
        </shared.Link>
        <div className="flex flex-col mt-4 space-y-4">
          {cardData.list.map((item: any, index: number) => {
            return (
              <shared.Link key={index} href="/" className="flex items-center">
                {item.icon}
                <span className="ml-2">{item.info}</span>
              </shared.Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
