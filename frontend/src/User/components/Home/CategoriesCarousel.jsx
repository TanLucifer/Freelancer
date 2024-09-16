import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GrTechnology } from "react-icons/gr";
import { PiGraphicsCardBold } from "react-icons/pi";
import { SiGooglemarketingplatform } from "react-icons/si";
import { BsTranslate } from "react-icons/bs";
import { MdOutlineAnimation } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import { IoBusiness } from "react-icons/io5";
import { SiConsul } from "react-icons/si";

const CategoriesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const categories = [
    { name: 'Programming & Tech', icon: <GrTechnology size={30} /> },
    { name: 'Graphics & Design', icon: <PiGraphicsCardBold size={30} /> },
    { name: 'Digital Marketing', icon: <SiGooglemarketingplatform size={30} /> },
    { name: 'Writing & Translation', icon: <BsTranslate size={30} /> },
    { name: 'Video & Animation', icon: <MdOutlineAnimation size={30} /> },
    { name: 'AI Services', icon: <MdMiscellaneousServices size={30} /> },
    { name: 'Music & Audio', icon: <RiNeteaseCloudMusicFill size={30} /> },
    { name: 'Business', icon: <IoBusiness size={30} /> },
    { name: 'Consulting', icon: <SiConsul size={30} /> }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(3);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  return (
    <div className="relative mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 py-8 -mx-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Explore Categories</h2>
        <div className="relative">
          <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200 z-10">
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          <div className="flex justify-between items-center overflow-hidden">
            {categories.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage).map((category, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center px-2 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 mb-3 bg-white rounded-full flex items-center justify-center shadow-lg">
                  {React.cloneElement(category.icon, { className: "text-indigo-600" })}
                </div>
                <span className="text-sm font-medium text-gray-700">{category.name}</span>
              </div>
            ))}
          </div>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200 z-10">
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {[...Array(totalPages)].map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full mx-1 ${
                i === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesCarousel;
