import React from 'react'

function Features() {
  return (
    <div>
      <div className="mb-8 bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">A whole world of freelance talent at your fingertips</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Over 700 categories</h3>
                    <p className="text-gray-600">Get results from skilled freelancers from all over the world, for every task, at any price point.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Clear, transparent pricing</h3>
                    <p className="text-gray-600">Pay per project or by the hour (Pro). Payments only get released when you approve.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Quality work done faster</h3>
                    <p className="text-gray-600">Filter to find the right freelancers quickly and get great work delivered in no time, every time.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">24/7 award-winning support</h3>
                    <p className="text-gray-600">Chat with our team to get your questions answered or resolve any issues with your orders.</p>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Features
