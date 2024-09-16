import React, { useState, useEffect } from 'react';
import { Search, ThumbsUp, Bookmark } from 'lucide-react';

function JobsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Best Matches');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const categories = [
    {
      name: "Web Development",
      jobs: [
        {
          id: 1,
          title: "React Frontend Developer",
          price: "Hourly - Intermediate - Est. Time: 20-30 hours/week",
          description: "Looking for a skilled React developer to work on an e-commerce platform. Experience with Redux and GraphQL is a plus.",
          date: new Date('2023-05-15'),
        },
        {
          id: 2,
          title: "Full Stack Developer (MERN)",
          price: "Fixed-price - Expert level - Est. Budget: $3000",
          description: "Need an experienced full-stack developer for a social media app. Proficiency in MongoDB, Express, React, and Node.js required.",
          date: new Date('2023-05-10'),
        },
        {
          id: 3,
          title: "WordPress Theme Customization",
          price: "Fixed-price - Entry level - Est. Budget: $200",
          description: "Seeking a WordPress developer to customize an existing theme for a personal blog.",
          date: new Date('2023-05-05'),
        }
      ]
    },
    {
      name: "Design",
      jobs: [
        {
          id: 4,
          title: "Logo Design for Startup",
          price: "Fixed-price - Expert level - Est. Budget: $500",
          description: "Need a professional logo designer to create a modern and memorable logo for our tech startup.",
          date: new Date('2023-05-12'),
        },
        {
          id: 5,
          title: "UI/UX Design for Mobile App",
          price: "Hourly - Intermediate - Est. Time: 15-25 hours/week",
          description: "Looking for a talented UI/UX designer to create intuitive and visually appealing interfaces for our fitness app.",
          date: new Date('2023-05-08'),
        },
        {
          id: 6,
          title: "Illustration for Children's Book",
          price: "Fixed-price - Expert level - Est. Budget: $1000",
          description: "Seeking an illustrator to create 15 colorful illustrations for a children's storybook.",
          date: new Date('2023-05-03'),
        }
      ]
    },
    {
      name: "Writing",
      jobs: [
        {
          id: 7,
          title: "Content Writer for Tech Blog",
          price: "Hourly - Entry level - Est. Time: 10-15 hours/week",
          description: "Need a tech-savvy writer to produce engaging articles on the latest technology trends and gadgets.",
          date: new Date('2023-05-14'),
        },
        {
          id: 8,
          title: "Copywriter for Marketing Campaign",
          price: "Fixed-price - Intermediate - Est. Budget: $800",
          description: "Seeking a creative copywriter to develop compelling ad copy and slogans for our upcoming product launch.",
          date: new Date('2023-05-09'),
        },
        {
          id: 9,
          title: "Technical Writer for Software Documentation",
          price: "Hourly - Expert level - Est. Time: 20-30 hours/week",
          description: "Looking for an experienced technical writer to create comprehensive user manuals and API documentation for our software products.",
          date: new Date('2023-05-06'),
        }
      ]
    }
  ];

  useEffect(() => {
    const allJobs = categories.flatMap(category => category.jobs);
    let filtered = allJobs;

    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeCategory === 'Most Recent') {
      filtered.sort((a, b) => b.date - a.date);
    } else if (activeCategory === 'Saved Jobs') {
      filtered = filtered.filter(job => savedJobs.includes(job.id));
    }

    setFilteredJobs(filtered);

    // Generate suggestions
    const allTitles = allJobs.map(job => job.title);
    const matchingSuggestions = allTitles.filter(title =>
      title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(matchingSuggestions.slice(0, 5)); // Limit to 5 suggestions

  }, [searchTerm, activeCategory, savedJobs]);

  const toggleSaveJob = (jobId) => {
    setSavedJobs(prevSavedJobs =>
      prevSavedJobs.includes(jobId)
        ? prevSavedJobs.filter(id => id !== jobId)
        : [...prevSavedJobs, jobId]
    );
  };

  const handleSearch = () => {
    // Trigger search functionality
    // This is already handled by the useEffect hook
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative mb-8">
        <input 
          type="text" 
          placeholder="Search for jobs" 
          className="w-full border rounded-full px-6 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search 
          className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer" 
          onClick={handleSearch}
        />
        {suggestions.length > 0 && searchTerm && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1">
            {suggestions.map((suggestion, index) => (
              <div 
                key={index} 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setSearchTerm(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-6">Jobs you might like</h2>
        <div className="flex space-x-4 mb-6">
          {['Best Matches', 'Most Recent', 'Saved Jobs'].map((category) => (
            <button
              key={category}
              className={`pb-2 ${
                activeCategory === category
                  ? 'text-teal-600 font-semibold border-b-2 border-teal-600'
                  : 'text-gray-500 hover:text-teal-600 transition duration-300'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {filteredJobs.map((job) => (
        <div key={job.id} className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{job.price}</p>
          <p className="mb-4">{job.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              Posted on {job.date.toLocaleDateString()}
            </span>
            <div className="flex space-x-2">
              <button className="text-green-500 hover:text-green-600 transition duration-300">
                <ThumbsUp className="w-6 h-6" />
              </button>
              <button 
                className={`${
                  savedJobs.includes(job.id) ? 'text-yellow-500' : 'text-gray-500'
                } hover:text-yellow-600 transition duration-300`}
                onClick={() => toggleSaveJob(job.id)}
              >
                <Bookmark className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobsList;
