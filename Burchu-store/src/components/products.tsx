import data from "../data.json";

function Products() {
  return (
    <div className='bg-black text-white grid gap-8 p-8 min-h-screen sm:grid-cols-2 lg:grid-cols-4'>
      {data.product.map((item, index) => (
        <div key={index} className='flex flex-col items-start rounded-lg p-4'>
          <img src={item.image} alt={item.name} className='w-full h-auto rounded-lg mb-6'/>
          <p className='mb-2 text-center text-[2rem] text-orange-200'>{item.name}</p>
          <p className='text-center text-[1.5rem]'>₾ {item.cost} Gel</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
