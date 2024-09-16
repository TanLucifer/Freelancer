import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What is SkillMitraX?",
    answer: "SkillMitraX is a platform that connects freelancers with clients looking for various services. You can find work, deliver work, manage finances, and communicate with clients through our platform."
  },
  {
    question: "How do I create an account?",
    answer: "To create an account, click on the 'Sign Up' button on the top right corner of the page. Follow the instructions to fill in your details and verify your email address."
  },
  {
    question: "How can I find work?",
    answer: "Once you're logged in, you can browse job listings, apply for projects, or be contacted by clients directly through our platform. Use the search and filter options to find work that matches your skills and interests."
  },
  {
    question: "How do I get paid?",
    answer: "Payments are processed through our secure payment system. Once your work is completed and approved by the client, the payment will be transferred to your account. You can withdraw your funds using various payment methods available on the platform."
  },
  {
    question: "What should I do if I encounter a problem?",
    answer: "If you encounter any issues, please contact our support team through the 'Help' button on the website. You can also check our support center for troubleshooting guides and FAQs."
  },
  {
    question: "Can I update my profile information?",
    answer: "Yes, you can update your profile information by going to your profile settings. Here, you can change your contact details, update your skills, and modify other relevant information."
  }
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-indigo-800">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out">
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-indigo-600" />
                )}
              </button>
              <div 
                className={`px-6 py-4 bg-indigo-50 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
