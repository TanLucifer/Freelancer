import React from 'react'
import profile from '../../../assets/profile.jpg';

function SuggestedFreelancers() {
  return (
    <>
      <div className="flex flex-col space-y-4">
                {[
                  { name: 'Tanmay Mirgal', title: 'Web Developer', location: 'San Francisco, CA', img: profile },
                  { name: 'Tanmay Mirgal', title: 'Graphic Designer', location: 'New York, NY', img: profile },
                  { name: 'Tanmay Mirgal', title: 'Digital Marketer', location: 'Austin, TX', img: profile },
                  
                  
                ].map((freelancer, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <img src={freelancer.img} alt={freelancer.name} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <h3 className="font-semibold">{freelancer.name}</h3>
                      <p className="text-gray-600 text-sm">{freelancer.title}</p>
                      <p className="text-gray-400 text-xs">{freelancer.location}</p>
                    </div>
                  </div>
                ))}
              </div>
    </>
  )
}

export default SuggestedFreelancers
