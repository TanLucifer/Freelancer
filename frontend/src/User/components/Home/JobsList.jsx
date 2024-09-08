import React from 'react'

function JobsList() {
  return (
    <>
      <div className="border-t py-4">
                <h3 className="text-md md:text-lg font-semibold mb-2">Edit html css</h3>
                <p className="text-sm text-gray-600 mb-2">Fixed-price - Entry level - Est. Budget: $5</p>
                <p className="mb-2">Budget as is, suit someone for review there is changes/edit needed to the files, there are 15 files.</p>
                <div className="flex space-x-2">
                  <button className="text-green-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.05L10.59 9.528a2 2 0 00-1.092-.279L7 10H4a2 2 0 00-2 2v4a2 2 0 002 2h3v-4H6l2.36-.684a2 2 0 00.94-.654l3.5-7a2 2 0 01-.66-2.656A2 2 0 0114 2h-2a2 2 0 00-2 2v1" />
                    </svg>
                  </button>
                  <button className="text-gray-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9v6h12V9H6zm0-4h12c1.657 0 3 1.343 3 3v14a3 3 0 01-3 3H6a3 3 0 01-3-3V8c0-1.657 1.343-3 3-3z" />
                    </svg>
                  </button>
                </div>
              </div>
    </>
  )
}

export default JobsList
