import React, { useState } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('О нас');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (linkName, e) => {
    e.preventDefault();
    setActiveLink(linkName);
    setIsMenuOpen(false); // Закрываем меню на мобильных
    
    let sectionId = '';
    
    switch(linkName) {
      case 'О нас':
        sectionId = 'hero'; 
        break;
      case 'Об обучении':
        sectionId = 'opportunities'; 
        break;
      case 'Преподаватели':
        sectionId = 'teachers'; 
        break;
      case 'Стоимость':
        sectionId = 'pricing'; 
        break;
      default:
        return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setActiveLink('Связаться');
    setIsMenuOpen(false); // Закрываем меню на мобильных
    
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      const yOffset = -80;
      const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const menuItems = [
    { name: "О нас" },
    { name: "Об обучении" },
    { name: "Преподаватели" },
    { name: "Стоимость" }
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center">
            <div className="flex flex-col leading-tight">
              <span className="text-base sm:text-lg font-bold text-gray-900">CHINESE</span>
              <span className="text-base sm:text-lg font-bold text-gray-900">FLOW</span>
            </div>
          </div>

          {/* Гамбургер-меню для мобильных */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleLinkClick(item.name, e)}
                className={`text-gray-700 font-medium text-sm hover:text-gray-900 whitespace-nowrap transition-colors ${
                  activeLink === item.name ? 'text-gray-900 font-semibold' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <button 
              onClick={handleContactClick}
              className={`bg-gray-800 text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-gray-900 whitespace-nowrap transition-colors ${
                activeLink === 'Связаться' ? 'ring-2 ring-gray-300' : ''
              }`}
            >
              Связаться
            </button>
          </div>

        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={(e) => handleLinkClick(item.name, e)}
                  className={`text-gray-700 font-medium text-base hover:text-gray-900 transition-colors text-left px-4 py-2 ${
                    activeLink === item.name ? 'text-gray-900 font-semibold bg-gray-100' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={handleContactClick}
                className={`bg-gray-800 text-white px-4 py-2 rounded text-base font-medium hover:bg-gray-900 transition-colors mx-4 ${
                  activeLink === 'Связаться' ? 'ring-2 ring-gray-300' : ''
                }`}
              >
                Связаться
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;