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
    <section id="opportunities" className="py-12 px-4 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl">
        

        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Какие возможности открывает изучение китайского языка?
          </h2>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-32">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
            
   
            <div className="text-center">
              <div className="mb-6 sm:mb-8 flex items-center justify-center">
                <div className="relative">
                  <img 
                    src="/src/assets/Work.svg" 
                    alt="Работа в Китае"
                    className="w-auto h-48 sm:h-64 md:h-80 lg:h-96 object-contain"
                    style={{ maxWidth: '100%' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full flex items-center justify-center">
                          <div class="text-center">
                            <div class="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4"></div>
                            <p class="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">Работа в Китае</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Работа в Китае
              </div>
            </div>
            
   
            <div className="text-center">
              <div className="mb-6 sm:mb-8 flex items-center justify-center">
                <div className="relative">
                  <img 
                    src="/src/assets/Study.svg" 
                    alt="Учеба в Китае"
                    className="w-auto h-48 sm:h-64 md:h-80 lg:h-96 object-contain"
                    style={{ maxWidth: '100%' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full flex items-center justify-center">
                          <div class="text-center">
                            <div class="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4"></div>
                            <p class="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">Учеба в Китае</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Учеба в Китае
              </div>
            </div>
            
          </div>
          
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
            
          
            <div className="text-center">
              <div className="mb-6 sm:mb-8 flex items-center justify-center">
                <div className="relative">
                  <img 
                    src="/src/assets/Travel.svg" 
                    alt="Путешествия"
                    className="w-auto h-48 sm:h-64 md:h-80 lg:h-96 object-contain"
                    style={{ maxWidth: '100%' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full flex items-center justify-center">
                          <div class="text-center">
                            <div class="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4"></div>
                            <p class="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">Путешествия</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Путешествия
              </div>
            </div>
            
    
            <div className="text-center">
              <div className="mb-6 sm:mb-8 flex items-center justify-center">
                <div className="relative">
                  <img 
                    src="/src/assets/Culture.svg" 
                    alt="Культура"
                    className="w-auto h-48 sm:h-64 md:h-80 lg:h-96 object-contain"
                    style={{ maxWidth: '100%' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full flex items-center justify-center">
                          <div class="text-center">
                            <div class="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4"></div>
                            <p class="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">Культура</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
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