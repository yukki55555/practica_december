import React from 'react';

const Programs = () => {
  const programs = [
    {
      title: "Программа для детей и подростков",
      description: "Игровой формат, мультфильмы, песни",
      bgColor: "bg-[#F4C2C2]", 
      icon: "/src/assets/Teddy Bear.svg",
      iconAlt: "Игрушечный мишка"
    },
    {
      title: "Китайский для работы и бизнеса",
      description: "Деловая лексика, переговоры, презентации",
      bgColor: "bg-[#E4DBCC]", 
      icon: "/src/assets/Work Bag.svg",
      iconAlt: "Рабочая сумка"
    },
    {
      title: "С нуля до разговорного уровня",
      description: "Пошаговое обучение с любого уровня",
      bgColor: "bg-[#F4C2C2]", 
      icon: "/src/assets/Communication.svg",
      iconAlt: "Общение"
    },
    {
      title: "Подготовка к HSK",
      description: "Сертификация всех уровней, пробные тесты",
      bgColor: "bg-[#E4DBCC]", 
      icon: "/src/assets/Documentation.svg",
      iconAlt: "Документы"
    }
  ];

   return (
    <section id="programs" className="py-12 px-4 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Программы и форматы
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`${program.bgColor} p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-shadow flex flex-col sm:flex-row items-start gap-4 sm:gap-6`}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-30 rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                <img 
                  src={program.icon}
                  alt={program.iconAlt}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="text-2xl sm:text-3xl">
                        ${index === 2 ? '💬' : index === 3 ? '' : ''}
                      </div>
                    `;
                  }}
                />
              </div>
              

              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {program.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-800">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Programs;