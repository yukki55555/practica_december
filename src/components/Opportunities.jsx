import React from 'react';

const Opportunities = () => {
  const opportunities = [
    {
      title: "Работа в Китае",
      imagePath: "/src/assets/Work.svg"
    },
    {
      title: "Учеба в Китае",
      imagePath: "/src/assets/Study.svg"
    },
    {
      title: "Путешествия",
      imagePath: "/src/assets/Travel.svg"
    },
    {
      title: "Культура",
      imagePath: "/src/assets/Culture.svg"
    }
  ];

  return (
    <section className="py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-6xl">
        

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Какие возможности открывает изучение китайского языка?
          </h2>
        </div>

        <div className="space-y-32">
          
          <div className="grid md:grid-cols-2 gap-20">
            
            <div className="text-center">
              <div className="mb-8 flex items-center justify-center">
                <div className="relative">
                  <img 
                    src="/src/assets/Work.svg" 
                    alt="Работа в Китае"
                    className="w-auto h-96 object-contain"
                    style={{ maxWidth: '100%' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full flex items-center justify-center">
                          <div class="text-center">
                            <div class="text-6xl mb-4">📷</div>
                            <p class="text-2xl text-gray-700 font-medium">Вставьте фото сюда</p>
                            <p class="text-lg text-gray-500 mt-2">Работа в Китае</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900">
                Работа в Китае
              </div>
            </div>
            
            <div className="text-center">
              <div className="mb-8 flex items-center justify-center">
                <div className="relative">
                  <img 
                    src="/src/assets/Study.svg" 
                    alt="Учеба в Китае"
                    className="w-auto h-96 object-contain"
                    style={{ maxWidth: '100%' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full flex items-center justify-center">
                          <div class="text-center">
                            <div class="text-6xl mb-4">📷</div>
                            <p class="text-2xl text-gray-700 font-medium">Вставьте фото сюда</p>
                            <p class="text-lg text-gray-500 mt-2">Учеба в Китае</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900">
                Учеба в Китае
              </div>
            </div>
            
          </div>
          
          <div className="grid md:grid-cols-2 gap-20">
            
            <div className="text-center">
              <div className="mb-8 flex items-center justify-center">
                <div className="relative">
                  <img 
                    src="/src/assets/Travel.svg" 
                    alt="Путешествия"
                    className="w-auto h-96 object-contain"
                    style={{ maxWidth: '100%' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full flex items-center justify-center">
                          <div class="text-center">
                            <div class="text-6xl mb-4">📷</div>
                            <p class="text-2xl text-gray-700 font-medium">Вставьте фото сюда</p>
                            <p class="text-lg text-gray-500 mt-2">Путешествия</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900">
                Путешествия
              </div>
            </div>
            
            <div className="text-center">
              <div className="mb-8 flex items-center justify-center">
                <div className="relative">
                  <img 
                    src="/src/assets/Culture.svg" 
                    alt="Культура"
                    className="w-auto h-96 object-contain"
                    style={{ maxWidth: '100%' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full flex items-center justify-center">
                          <div class="text-center">
                            <div class="text-6xl mb-4">📷</div>
                            <p class="text-2xl text-gray-700 font-medium">Вставьте фото сюда</p>
                            <p class="text-lg text-gray-500 mt-2">Культура</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900">
                Культура
              </div>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
};

export default Opportunities;