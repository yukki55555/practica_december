import React from 'react';

const Teachers = () => {
  const teachers = [
    {
      name: "Ли Сяо",
      experience: "Опыт преподавания - 1.5 лет",
      photo: "/src/assets/Teacher 1.svg"
    },
    {
      name: "Ли Ифан",
      experience: "Опыт преподавания - 3 года",
      photo: "/src/assets/Teacher 2.svg"
    },
    {
      name: "Чу Меньяо",
      experience: "Опыт преподавания - более 5 лет",
      photo: "/src/assets/Teacher 3.svg"
    },
    {
      name: "Мо Сюань",
      experience: "Опыт преподавания - более 8 лет",
      photo: "/src/assets/Teacher 4.svg"
    }
  ];

  return (
    <section id="teachers" className="py-12 px-4 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-8">
            Наши преподаватели
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16 max-w-7xl mx-auto">
          {teachers.map((teacher, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="mb-6 sm:mb-8 md:mb-10 flex items-center justify-center">
                <div className="rounded-2xl sm:rounded-3xl">
                  <img 
                    src={teacher.photo}
                    alt={teacher.name}
                    className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain rounded-2xl sm:rounded-3xl mx-auto"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center rounded-2xl sm:rounded-3xl mx-auto">
                          <div class="text-center">
                            <div class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-2 sm:mb-4"></div>
                            <p class="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium">${teacher.name}</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                {teacher.name}
              </h3>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700">
                {teacher.experience}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Teachers;