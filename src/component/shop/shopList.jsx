

const ShopList = ({title, quantity}) => {
  return (
    <div className="flex p-2 justify-between">
      <a className=" cursor-pointer hover:text-black  hover:border-black text-lightblack">
      {title}
      </a>
      <a className="cursor-pointer hover:text-black  hover:border-black text-lightblack">
        ({quantity})
      </a>
    </div>
  );
};

export default ShopList;