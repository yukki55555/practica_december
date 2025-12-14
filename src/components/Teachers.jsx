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
    <section id="teachers" className="py-20 px-4 md:py-28 bg-white">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Наши преподаватели
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto">
          {teachers.map((teacher, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="mb-10 flex items-center justify-center">
                <div className="rounded-3xl">
                  <img 
                    src={teacher.photo}
                    alt={teacher.name}
                    className="w-80 h-80 object-contain rounded-3xl"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-80 h-80 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center rounded-3xl">
                          <div class="text-center">
                            <div class="text-8xl mb-4">👨‍🏫</div>
                            <p class="text-2xl text-gray-600 font-medium">${teacher.name}</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
              
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                {teacher.name}
              </h3>
              

              <p className="text-2xl text-gray-700">
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