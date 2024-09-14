import data from "../data.json";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Products() {
  const { t } = useTranslation();
  
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className='text-white grid gap-8 p-8 min-h-screen grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 min-w-[270px]'>
      {data.product.map((item, index) => (
        <div 
          key={index} 
          className='flex flex-col items-start rounded-lg p-4' 
          data-aos="fade-up" 
        >
          <img src={item.image} alt={t(item.nameKey)} className='w-full h-auto rounded-lg mb-6'/>
          <p className='mb-2 text-center text-[1.5rem] text-black max-w-[260px] truncate whitespace-nowrap'>{t(item.nameKey)}</p>
          <p className='text-black text-center text-[1.5rem]'>₾ {item.cost} {t('Gel')}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
