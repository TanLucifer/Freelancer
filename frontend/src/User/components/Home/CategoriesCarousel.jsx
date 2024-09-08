import React from 'react'
import { useState } from 'react';
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

  const itemsPerPage = 5;
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  
  return (
    <>
    
      <div className="relative mb-8 bg-white py-6 -mx-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
            <button onClick={prevSlide} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <ChevronLeft size={24} />
            </button>
            <div className="flex-1 flex justify-between items-center overflow-hidden">
              {categories.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage).map((category, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center px-2">
                  <div className="w-12 h-12 mb-2 bg-gray-200 rounded-full flex items-center justify-center">
                    {category.icon}
                  </div>
                  <span className="text-sm">{category.name}</span>
                </div>
              ))}
            </div>
            <button onClick={nextSlide} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <ChevronRight size={24} />
            </button>
          </div>
        </div> 
    </>
  )
}

export default CategoriesCarousel
