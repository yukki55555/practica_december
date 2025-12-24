import React from 'react';

const Footer = () => {
  const footerLinks = [
    {
      column1: [
        { text: "О нас", href: "#" },
        { text: "Об обучении", href: "#" },
        { text: "Преподаватели", href: "#" },
        { text: "Стоимость", href: "#" }
      ],
      column2: [
        { text: "Оферта", href: "#" },
        { text: "Сведения об образовательной деятельности", href: "#" },
        { text: "Политика конфиденциальности", href: "#" },
        { text: "Образовательная лицензия", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { 
      icon: "/src/assets/Whatsupp.svg", 
      alt: "WhatsApp", 
      href: "#",
      scale: "scale-75" 
    },
    { 
      icon: "/src/assets/Telegram.svg", 
      alt: "Telegram", 
      href: "#",
      scale: "scale-75" 
    },
    { 
      icon: "/src/assets/Vk.svg", 
      alt: "VKontakte", 
      href: "#",
      scale: "scale-75" 
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-24 max-w-4xl mx-auto">
            
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8">Китайский Flow</h3>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                {footerLinks[0].column1.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-base sm:text-lg md:text-xl text-gray-300 hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 sm:mt-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8">Документы</h3>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                {footerLinks[0].column2.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-base sm:text-lg md:text-xl text-gray-300 hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-16 mb-6 sm:mb-8 md:mb-12">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.href}
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors ${social.scale}`}
            >
              <img 
                src={social.icon}
                alt={social.alt}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <span class="text-2xl sm:text-3xl md:text-4xl">${social.alt[0]}</span>
                  `;
                }}
              />
            </a>
          ))}
        </div>

        <div className="text-center border-t border-gray-800 pt-4 sm:pt-6 md:pt-8">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 px-2">
            © Онлайн-школа китайского языка Chinese Flow, 2025
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;