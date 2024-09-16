import React, { useState } from 'react';

function FiverrModal() {
  const [showModal, setShowModal] = useState(true); // Modal visibility
  const [step, setStep] = useState(1); // Step in modal
  const [selectedOption, setSelectedOption] = useState(null); // Selected option

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setStep(step + 1); // Go to next step
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[600px] h-[500px] p-6 shadow-lg relative"> {/* Increased width and height */}
            {step === 1 && (
              <>
                <h2 className="text-xl font-bold mb-4">What brings you to Fiverr?</h2>
                <p className="mb-6">We want to tailor your experience so you’ll feel right at home.</p>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handleSelectOption('buying')}
                    className={`p-4 border rounded-lg ${selectedOption === 'buying' ? 'border-green-500' : 'border-gray-300'}`}
                  >
                    <img
                      src="https://via.placeholder.com/50" // Placeholder image
                      alt="Buying services"
                      className="w-12 h-12 mx-auto mb-2"
                    />
                    Buying freelance services
                  </button>
                  <button
                    onClick={() => handleSelectOption('selling')}
                    className={`p-4 border rounded-lg ${selectedOption === 'selling' ? 'border-green-500' : 'border-gray-300'}`}
                  >
                    <img
                      src="https://via.placeholder.com/50" // Placeholder image
                      alt="Selling services"
                      className="w-12 h-12 mx-auto mb-2"
                    />
                    Selling freelance services
                  </button>
                </div>
                <button
                  onClick={() => setStep(step + 1)}
                  className="mt-6 w-full bg-green-500 text-white py-2 rounded-lg"
                >
                  Next
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-xl font-bold mb-4">What type of freelancer are you?</h2>
                <p className="mb-6">Whatever your style, we’ll make it work.</p>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handleSelectOption('side_hustle')}
                    className={`p-4 border rounded-lg ${selectedOption === 'side_hustle' ? 'border-green-500' : 'border-gray-300'}`}
                  >
                    <img
                      src="https://via.placeholder.com/50" // Placeholder image
                      alt="Side Hustle"
                      className="w-12 h-12 mx-auto mb-2"
                    />
                    A side hustle
                  </button>
                  <button
                    onClick={() => handleSelectOption('solo')}
                    className={`p-4 border rounded-lg ${selectedOption === 'solo' ? 'border-green-500' : 'border-gray-300'}`}
                  >
                    <img
                      src="https://via.placeholder.com/50" // Placeholder image
                      alt="Solo freelancer"
                      className="w-12 h-12 mx-auto mb-2"
                    />
                    Solo freelancer
                  </button>
                  <button
                    onClick={() => handleSelectOption('agency_employee')}
                    className={`p-4 border rounded-lg ${selectedOption === 'agency_employee' ? 'border-green-500' : 'border-gray-300'}`}
                  >
                    <img
                      src="https://via.placeholder.com/50" // Placeholder image
                      alt="Agency employee"
                      className="w-12 h-12 mx-auto mb-2"
                    />
                    Agency employee
                  </button>
                  <button
                    onClick={() => handleSelectOption('agency_owner')}
                    className={`p-4 border rounded-lg ${selectedOption === 'agency_owner' ? 'border-green-500' : 'border-gray-300'}`}
                  >
                    <img
                      src="https://via.placeholder.com/50" // Placeholder image
                      alt="Agency owner"
                      className="w-12 h-12 mx-auto mb-2"
                    />
                    Agency owner
                  </button>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-6 w-full bg-green-500 text-white py-2 rounded-lg"
                >
                  Finish
                </button>
              </>
            )}

            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FiverrModal;
