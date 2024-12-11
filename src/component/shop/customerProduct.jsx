import img from "../../assets/images/customerProduct.svg"
const CustomerProduct = ({title, item, price}) => {
  return (
    <div className="flex flex-row space-x-3" >
        <div>
            <img className="lg:h-20 lg:w-24" src={img} alt="" />
        </div>
        <div className="lg:text-base text-wrap text-sm " >
            <p className="font-bold" >{title}</p>
            <p className="text-line" >{item}</p>
            <p className="font-bold" >Pkr{price}</p>
        </div>
    </div>
  )
}

export default CustomerProduct
