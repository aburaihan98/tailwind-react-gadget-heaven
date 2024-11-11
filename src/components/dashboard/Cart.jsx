import { RxCrossCircled } from "react-icons/rx";

export default function Cart({ product, handleDeleteProduct }) {
  const { product_id, product_image, product_title, description, price } =
    product || {};

  return (
    <div className="w-11/12 m-auto p-8 rounded-2xl mb-6 flex justify-between bg-white shadow-2xl ">
      <div className="flex gap-8">
        <div className="w-[200px] h-[124px]">
          <img
            className="w-full h-full rounded-xl"
            src={product_image}
            alt={product_title}
          />
        </div>
        <div>
          <h2 className="font-bold text-2xl mb-4">{product_title}</h2>
          <p className="text-lg text-[#09080F99] mb-4">{description}</p>
          <p className="font-semibold text-xl text-[#09080FCC]">
            Price: $ {price}
          </p>
        </div>
      </div>

      <RxCrossCircled
        onClick={() => handleDeleteProduct(product_id)}
        className="text-[#FF0000] text-4xl cursor-pointer"
      />
    </div>
  );
}
