import React from 'react';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import person3 from '../assets/person3.png';
import quoteImg from '../assets/quote.png';

const sliderData = [
  {
    id: '01',
    name: 'Kevin Hammer',
    image: person1,
    quote: quoteImg,
    desc: 'Sed ut perspiciatis unde omnise natus ervoluptatem accusantium doloremque laudantium, trem aperiam, eaque ipsa quae ab i inventore veritatis i architecto beatae vitae dicta sunt explicabo.'
  },
  {
    id: '02',
    name: 'Kevin Hammer',
    image: person2,
    quote: quoteImg,
    desc: 'Sed ut perspiciatis unde omnise natus ervoluptatem accusantium doloremque laudantium, trem aperiam, eaque ipsa quae ab i inventore veritatis i architecto beatae vitae dicta sunt explicabo.'
  },
  {
    id: '03',
    name: 'Kevin Hammer',
    image: person3,
    quote: quoteImg,
    desc: 'Sed ut perspiciatis unde omnise natus ervoluptatem accusantium doloremque laudantium, trem aperiam, eaque ipsa quae ab i inventore veritatis i architecto beatae vitae dicta sunt explicabo.'
  },
];

const Cards = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
      {sliderData.map(item => (
        <div key={item.id} className="w-full p-4 bg-white rounded-lg shadow-xl md:w-1/3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <div className="flex items-center space-x-1">
                  <img src={item.quote} alt="quote" className="w-6 h-6" />
                  <div className="flex space-x-1">
                    <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959h4.163c.97 0 1.371 1.24.588 1.81l-3.364 2.447 1.286 3.959c.3.921-.755 1.688-1.538 1.16l-3.364-2.448-3.364 2.448c-.783.528-1.838-.239-1.538-1.16l1.286-3.959-3.364-2.447c-.783-.57-.382-1.81.588-1.81h4.163L9.049 2.927z" />
                    </svg>
                    <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959h4.163c.97 0 1.371 1.24.588 1.81l-3.364 2.447 1.286 3.959c.3.921-.755 1.688-1.538 1.16l-3.364-2.448-3.364 2.448c-.783.528-1.838-.239-1.538-1.16l1.286-3.959-3.364-2.447c-.783-.57-.382-1.81.588-1.81h4.163L9.049 2.927z" />
                    </svg>
                    <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959h4.163c.97 0 1.371 1.24.588 1.81l-3.364 2.447 1.286 3.959c.3.921-.755 1.688-1.538 1.16l-3.364-2.448-3.364 2.448c-.783.528-1.838-.239-1.538-1.16l1.286-3.959-3.364-2.447c-.783-.57-.382-1.81.588-1.81h4.163L9.049 2.927z" />
                    </svg>
                    <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959h4.163c.97 0 1.371 1.24.588 1.81l-3.364 2.447 1.286 3.959c.3.921-.755 1.688-1.538 1.16l-3.364-2.448-3.364 2.448c-.783.528-1.838-.239-1.538-1.16l1.286-3.959-3.364-2.447c-.783-.57-.382-1.81.588-1.81h4.163L9.049 2.927z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-base text-gray-700">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
