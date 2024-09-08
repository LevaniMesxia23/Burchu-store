import data from "../data.json";

function Products() {
  return (
    <div className='bg-black h-full text-white grid gap-8 p-8 md:grid-cols-2 lg:grid-cols-4'>
      {data.product.map((item, index) => (
        <div key={index} className='flex flex-col items-center rounded-lg p-4'>
          <img src={item.image} alt="" className='w-full h-auto rounded-lg mb-6'/>
          <p className='mb-2 text-center'>{item.name}</p>
          <p className='text-center'>₾ {item.cost} Gel</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
