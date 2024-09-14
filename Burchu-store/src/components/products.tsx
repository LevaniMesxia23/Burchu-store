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
    <div className='bg-gray-100 text-gray-900 grid gap-8 p-8 min-h-screen grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
      {data.product.map((item, index) => (
        <div
          key={index}
          className='flex flex-col items-center bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300'
          data-aos="fade-up"
        >
          <img
            src={item.image}
            alt={t(item.nameKey)}
            className='w-full h-auto rounded-lg mb-4 hover:scale-105 transition-transform duration-300'
          />
          <p className='mb-2 text-center text-xl font-medium text-gray-800 max-w-[260px] truncate righteous-regular'>
            {t(item.nameKey)}
          </p>
          <p className='text-gray-600 text-center text-md mb-4 righteous-regular'>
            ₾ {item.cost} {t('Gel')}
          </p>
          <button className='bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300 righteous-regular'>
            {t('Buy Now')}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
