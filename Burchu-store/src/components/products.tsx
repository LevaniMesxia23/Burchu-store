import data from "../data.json";

function Products() {
  return (
    <div className=' text-white grid gap-8 p-8 min-h-screen grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 min-w-[270px]'>
      {data.product.map((item, index) => (
        <div key={index} className='flex flex-col items-start rounded-lg p-4'>
          <img src={item.image} alt={item.name} className='w-full h-auto rounded-lg mb-6'/>
          <p className='mb-2 text-center text-[2rem] text-black max-w-[260px] truncate whitespace-nowrap'>{item.name}</p>
          <p className='text-black text-center text-[1.5rem]'>₾ {item.cost} Gel</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
