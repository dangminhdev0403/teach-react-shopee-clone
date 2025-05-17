import { Link } from "react-router-dom";

interface ItemProductProps {
  id: number;
  name: string;
  img: string;
  price: number;
  rating?: number;
  sold?: number;
  location?: string;
  tag?: string;
}

const ItemProduct = ({
  id,
  name,
  img,
  price,
  rating = 4.8,
  sold = 1200,
  location = "TP.HCM",
  tag,
}: ItemProductProps) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="w-full rounded-sm border border-gray-200 bg-white transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="relative w-full overflow-hidden pt-[100%]">
          <img
            className="absolute top-0 left-0 h-full w-full object-cover"
            src={img}
            alt={name}
          />
        </div>
        <div className="p-2 text-[1rem]">
          <h5 className="line-clamp-2 h-10 leading-5 text-gray-800">
            {tag && (
              <span className="mr-0.5 rounded-sm bg-[#ee4d2d] px-0.5 text-xs text-white">
                {tag}
              </span>
            )}
            {name}
          </h5>
          <p className="mt-1 text-[#ee4d2d]">
            {price.toLocaleString("vi-VN")}₫
          </p>
          <div className="mt-1 flex justify-between text-xs text-gray-500">
            <span>
              ⭐ {rating} | Đã bán {sold.toLocaleString("vi-VN")}
            </span>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemProduct;
