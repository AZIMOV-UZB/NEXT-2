import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";

const Products = ({ data, our }) => {
  console.log(data);

  return (
    <>
      <div className="text-center">
        <p className="lg:text-[48px] md:text-[30px] sm:text-[26px] text-[22px] font-[500] text-[#000] mb-[32px]">
          {our}
        </p>
      </div>
      <div className="container mx-auto px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.products?.map((item) => (
          <div key={item.id} className="product bg-[#F4F5F7] max-w-80 ">
            <Link href={`/shop/${item.id}`}>
              <Image
                src={item.images[0]}
                alt="product image"
                width="300"
                height="300"
                className="max-h-80 object-contain duration-75 hover:scale-105"
              />
            </Link>
            <div className="product--info p-4 grid gap-1">
              <h4 className="font-bold text-[18px]">{item.title}</h4>
              <p className="text-[#666] text-base">{item.category}</p>
              <div className='flex gap-3'>
              <FaStar className='text-2xl text-yellow-400'/>
              <p className='text-yellow-400'>{item.rating}</p>
              </div>
              <p className="text-xl font-normal flex gap-3">
                PRICE : {item.price}
                <span className="text-base text-[#666] line-through">
                  {item.originalPrice && `Rp ${item.originalPrice}`}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
   
    </>
  );
};

export default Products;
