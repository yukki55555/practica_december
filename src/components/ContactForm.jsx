import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+7'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact-form" className="py-12 px-4 sm:py-16 md:py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Попробуйте первый бесплатный урок
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700">
            и убедитесь, что это проще, чем кажется
          </p>
        </div>

        <div className="max-w-xl mx-auto px-2 sm:px-0">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            
            <div>
              <label className="block text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-2 sm:mb-3">
                Как вас зовут?
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg md:text-xl border-2 border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#F4C2C2] focus:border-transparent outline-none"
                placeholder="Введите ваше имя"
                required
              />
            </div>

            <div>
              <label className="block text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-2 sm:mb-3">
                Ваш телефон
              </label>
              <div className="relative">
                <span className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-base sm:text-lg md:text-xl text-gray-500">
                  +7
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 sm:pl-12 pr-4 sm:pr-6 py-3 sm:py-4 text-base sm:text-lg md:text-xl border-2 border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#F4C2C2] focus:border-transparent outline-none"
                  placeholder="XXX XXX XX XX"
                  required
                />
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <button
                type="submit"
                style={{ backgroundColor: '#F4C2C2' }}
                className="w-full hover:opacity-90 text-white text-lg sm:text-xl md:text-2xl font-bold py-4 sm:py-5 px-4 sm:px-8 rounded-lg sm:rounded-xl transition-opacity shadow-lg"
              >
                Оставить заявку
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;