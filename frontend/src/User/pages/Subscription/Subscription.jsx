import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PlanCard = ({ name, price, features, popular, isAnnual, isSelected, onSelect }) => {
  const annualPrice = Math.round(price * 12 * 0.65);  // 35% discount for annual billing
  const displayPrice = isAnnual ? annualPrice : price;
  const billingPeriod = isAnnual ? 'per user / year' : 'per user / month';

  return (
    <div 
      className={`p-6 border rounded-lg ${popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'} 
                  ${isSelected ? 'ring-2 ring-blue-500' : ''} relative cursor-pointer`}
      onClick={onSelect}
    >
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-3xl font-bold mb-4">
        ${displayPrice} <span className="text-sm font-normal">{billingPeriod}</span>
      </p>
      <button 
        className={`w-full py-2 px-4 rounded ${
          isSelected ? 'bg-blue-600 text-white' : 'bg-gray-800 text-white'
        }`}
      >
        {isSelected ? 'Selected' : 'Select Plan'}
      </button>
      <ul className="mt-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      {popular && <span className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 text-xs rounded-bl">Most Popular</span>}
    </div>
  );
};

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: 'Free',
      price: 0,
      features: [
        '1 transcription hour / month',
        'Export 720p, with watermarks',
        'Limited trial of Basic AI features',
        'Limited 5 minute trial of AI Speech'
      ]
    },
    {
      name: 'Hobbyist',
      price: 12,
      features: [
        '10 transcription hours / month',
        'Unlimited watermark-free export',
        'Up to 1080p video export',
        '20 uses / month of Basic AI suite including Remove Filler Words, Studio Sound, Draft Social Posts, Create Clips, and more',
        '30 minutes / month of AI Speech'
      ]
    },
    {
      name: 'Creator',
      price: 24,
      features: [
        '30 transcription hours / month',
        'Up to 4k video export',
        'Unlimited use of Basic and Advanced AI suite including Eye Contact, Translate Captions, and 20+ more AI features',
        '120 minutes / month of AI Speech',
        'Unlimited access to royalty-free stock library',
        'Advanced export options (timeline, batch files)',
        'Custom fonts and templates'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: 40,
      features: [
        '40 transcription hours / month',
        'Add free Basic members for collaboration',
        'Unlimited access to full Professional AI suite including Translate Captions with correction',
        '300 minutes / month of AI Speech',
        'Priority support (with SLA)'
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">Choose your plan</h1>
      <p className="text-center text-gray-600 mb-8">Trusted by teams at</p>
      <div className="flex justify-center items-center space-x-8 mb-8">
        {['Stanford', 'audible', 'WNYC', 'VICE', 'The New York Times'].map((company, index) => (
          <div key={index} className="text-gray-400 font-bold">{company}</div>
        ))}
      </div>
      <div className="flex justify-center items-center mb-8">
        <span className={`mr-2 ${!isAnnual ? 'font-bold' : ''}`}>Monthly</span>
        <div className="relative inline-block w-14 mr-2 align-middle select-none">
          <input 
            type="checkbox" 
            id="toggle" 
            className={`absolute block w-8 h-6 rounded-full bg-white border-4 border-gray-400 appearance-none cursor-pointer transition-transform duration-300 ease-in-out ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`}
            checked={isAnnual}
            onChange={() => setIsAnnual(!isAnnual)}
          />
          <label 
            htmlFor="toggle" 
            className={`block overflow-hidden h-6 rounded-full cursor-pointer transition-colors duration-300 ease-in-out ${isAnnual ? 'bg-blue-600' : 'bg-gray-300'}`}
          ></label>
        </div>
        <span className={`ml-2 ${isAnnual ? 'font-bold' : ''}`}>Annual</span>
      </div>
      <p className="text-center text-sm text-gray-600 mb-8">
        {isAnnual ? 'Saving up to 35% over monthly plan' : 'Switch to annual billing for up to 35% savings'}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <PlanCard 
            key={index} 
            {...plan} 
            isAnnual={isAnnual} 
            isSelected={selectedPlan === plan.name}
            onSelect={() => setSelectedPlan(plan.name)}
          />
        ))}
      </div>
      {selectedPlan && (
        <p className="text-center mt-8 text-lg font-semibold">
          You have selected the {selectedPlan} plan.
        </p>
      )}
    </div>
  );
};

export default PricingPage;
