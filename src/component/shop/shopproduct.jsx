import mask from "../../assets/images/shopMask.svg"
const Shopproduct = ({title, price}) => {
  return (
    <div className="flex flex-col p-2" >
        {/* img */}
        <a className="hover:cursor-pointer" >
        <div className="transition duration-300 ease-in-out hover:opacity-70" >
            
            <a ><img className="" src={mask} alt="" /></a>
        </div>
        {/* text */}  
        <div className="" >
            <p className="text-lightblack hover:text-black hover:border-black" >{title}</p>
            <p className="text-gold hover:text-yellow hover:border-black" >PKR {price}</p>
        </div>
        </a>
    </div>
  )
}

export default Shopproduct;