import React from 'react';

const Hero = () => {
  return (
    <section className="py-16 px-4 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span style={{ color: '#F4C2C2' }} className="mr-2">Китайский</span>
            <span className="text-gray-900">без страха</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto">
            Онлайн-школа, где вы заговорите по-китайски с первых занятий
          </p>
        </div>

 <div className="text-center mb-20">
          <button 
            style={{ backgroundColor: '#F4C2C2' }}
            className="hover:opacity-90 text-white text-2xl md:text-3xl font-bold py-6 px-20 rounded-full transition-opacity shadow-lg"
          >
            ЗАПИСАТЬСЯ НА ПРОБНЫЙ УРОК
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-900">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Не долго
            </h3>
            <p className="text-lg text-gray-700">
              Благодаря методике «погружения» и практике с носителями 
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-900">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Не сложно
            </h3>
            <p className="text-lg text-gray-700">
              Объясняем просто, учим говорить с первого урока, не грузим теорией. Преподаватели говорят на русском — вы точно всё поймёте 
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-900">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Не дорого
            </h3>
            <p className="text-lg text-gray-700">
              Пробный урок бесплатный - при покупке абонемента
            </p>
          </div>

        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-900 text-center">
            <div 
              style={{ color: '#F4C2C2' }}
              className="text-5xl font-bold mb-4"
            >
              1000+
            </div>
            <div className="text-xl text-gray-700 font-medium">
              Довольных учеников
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;