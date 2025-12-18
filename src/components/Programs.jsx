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
    <section id="programs" className="py-16 px-4 md:py-24 bg-white">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Программы и форматы
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`${program.bgColor} p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow flex items-start space-x-6`}
            >
              <div className="w-20 h-20 bg-white bg-opacity-30 rounded-2xl flex items-center justify-center flex-shrink-0">
                <img 
                  src={program.icon}
                  alt={program.iconAlt}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="text-3xl">
                        ${index === 2 ? '💬' : index === 3 ? '📄' : '📁'}
                      </div>
                    `;
                  }}
                />
              </div>
              

              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-lg text-gray-800">
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