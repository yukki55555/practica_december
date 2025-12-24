import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 px-4 sm:py-16 md:py-20 lg:py-28 bg-white">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-8">
            Стоимость и тарифы
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Индивидуальные занятия
              </h3>
            </div>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Групповые занятия
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="text-center">
              <div 
                style={{ color: '#F4C2C2' }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
              >
                от 1.500 ₽
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
                за занятие
              </p>
            </div>
            <div className="text-center">
              <div 
                style={{ color: '#F4C2C2' }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
              >
                от 1.300 ₽
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
                за занятие
              </p>
            </div>
          </div>

          <div className="my-8 sm:my-12 md:my-16 border-t border-gray-300"></div>

          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 sm:mb-6">
              Первый пробный урок - <span className="font-bold">бесплатно</span>
            </p>
            <button 
              style={{ backgroundColor: '#F4C2C2' }}
              className="hover:opacity-90 text-white text-lg sm:text-xl md:text-2xl font-bold py-4 sm:py-5 px-8 sm:px-12 md:px-16 rounded-full transition-opacity shadow-lg w-full sm:w-auto"
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