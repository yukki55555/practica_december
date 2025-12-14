import React from 'react';

const Pricing = () => {
  return (
    <section className="py-20 px-4 md:py-28 bg-white">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Стоимость и тарифы
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Индивидуальные занятия
              </h3>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Групповые занятия
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div 
                style={{ color: '#F4C2C2' }}
                className="text-6xl font-bold mb-2"
              >
                от 1.500 ₽
              </div>
              <p className="text-2xl text-gray-700">
                за занятие
              </p>
            </div>
            <div className="text-center">
              <div 
                style={{ color: '#F4C2C2' }}
                className="text-6xl font-bold mb-2"
              >
                от 1.300 ₽
              </div>
              <p className="text-2xl text-gray-700">
                за занятие
              </p>
            </div>
          </div>

          <div className="my-16 border-t border-gray-300"></div>


          <div className="text-center">
            <p className="text-2xl text-gray-700 mb-6">
              Первый пробный урок - <span className="font-bold">бесплатно</span>
            </p>
            <button 
              style={{ backgroundColor: '#F4C2C2' }}
              className="hover:opacity-90 text-white text-2xl font-bold py-5 px-16 rounded-full transition-opacity shadow-lg"
            >
              ЗАПИСАТЬСЯ НА ПРОБНЫЙ УРОК
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;