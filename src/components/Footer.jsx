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
    <footer className="bg-gray-900 text-white py-16 px-4 md:py-20">
      <div className="container mx-auto max-w-6xl">
        
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 max-w-4xl mx-auto">
            
            <div>
              <h3 className="text-3xl font-bold mb-8">Китайский Flow</h3>
              <ul className="space-y-4">
                {footerLinks[0].column1.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-xl text-gray-300 hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-8">Документы</h3>
              <ul className="space-y-4">
                {footerLinks[0].column2.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-xl text-gray-300 hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <div className="flex justify-center items-center space-x-16 mb-12">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.href}
              className={`w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors ${social.scale}`}
            >
              <img 
                src={social.icon}
                alt={social.alt}
                className="w-16 h-16 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <span class="text-${index === 1 ? '4xl' : '3xl'}">${social.alt[0]}</span>
                  `;
                }}
              />
            </a>
          ))}
        </div>

        <div className="text-center border-t border-gray-800 pt-8">
          <p className="text-xl text-gray-400">
            © Онлайн-школа китайского языка Chinese Flow, 2025
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;