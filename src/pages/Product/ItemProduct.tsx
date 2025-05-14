interface ItemProductProps {
  name: string;
  img: string;
  price: number;
}

const ItemProduct = ({ ...props }: ItemProductProps) => {
  
  return (
    <div className="cursor-pointer border border-gray-300 hover:border-3 hover:border-amber-500">
      <img
        className="h-[50%] w-full object-cover"
        src={`${props.img}`}
        alt={`${props.name}`}
      />
      <h5>{props.name}</h5>
      <p className="text-amber-500">{props.price}</p>
    </div>
  );
};

export default ItemProduct;
