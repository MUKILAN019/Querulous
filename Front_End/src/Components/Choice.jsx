import bgimg from "../assets/alebert.png";
import bgimg2 from "../assets/elonMusk.png";
import bgimg3 from "../assets/markZ.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ChoicePage() {
  const topics = [
    { label: "Financial Issues", color: "orange-700", id: 0 },
    { label: "Health Concerns", color: "red-500", id: 1 },
    { label: "Employment", color: "green-500", id: 2 },
    { label: "Housing", color: "purple-500", id: 3 },
    { label: "Relationships", color: "sky-500", id: 4 },
    { label: "Education", color: "pink-500", id: 5 },
    { label: "Addiction", color: "blue-700", id: 6 },
    { label: "Legal Issues", color: "orange-600", id: 7 },
    { label: "Transportation", color: "green-600", id: 8 },
    { label: "Safety Concerns", color: "yellow-300", id: 9 },
    { label: "Caregiving", color: "red-300", id: 10 },
    { label: "Time Management", color: "sky-700", id: 11 },
    { label: "Environmental Concerns", color: "pink-700", id: 12 },
    { label: "Technology Challenges", color: "sky-300", id: 13 },
    { label: "Isolation", color: "yellow-600", id: 14 },
  ];

  const TopicCard = ({ topic, id, handleClick, isSelected }) => (
    <div
      className={`h-32  ${isSelected ? `bg-${topic.color}` :  'bg-orange-400'}  border-black border-4 rounded-lg flex justify-center items-center transform hover:scale-105 transition-transform duration-300`}
      onClick={() => handleClick(id,topic.label)}
    >
      <h1 className="text-white text-1xl font-semibold">{topic.label}</h1>
    </div>
  );

  const [selectedTopics, setSelectedTopics] = useState([]);
  const handleClick = (id,name) => {
    if (selectedTopics.includes(name)) {
      setSelectedTopics((prev) => prev.filter((topic) => topic !=name));
    } else {
      setSelectedTopics((prev) => [...prev,name]);
    }
    console.log(id);
  };
console.log(selectedTopics)
  const QuoteCard = ({ quote, author }) => (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md relative w-3/4">
      <div className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full"></div>
      <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 bg-white rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 bg-white rounded-full"></div>
      <div className="relative p-4 bg-white rounded-lg">
        <h1 className="text-xl font-bold text-blue-600">{quote}</h1>
      </div>
      <span className="block text-right mt-4">{author}</span>
    </div>
  );

  const AnimatedImage = ({ src, alt }) => (
    <img
      className="mt-6 w-1/2 transform hover:translate-y-2 transition-transform duration-300"
      src={src}
      alt={alt}
    />
  );

  return (
    <>
      <div className="h-screen flex">
        <div className="w-3/4 h-[146%] bg-orange-100 shadow-lg">
          <div className="bg-orange-500 text-white text-center py-7 px-20 rounded-lg shadow-xl mb-8 mt-5">
            <h1 className="text-3xl font-bold">Choose Your Topic</h1>
            <p className="text-lg mt-2">What Are You Interested In?</p>
          </div>

          <div className="grid grid-cols-3 gap-6 w-4/5 mx-auto">
            {topics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                id={topic.id}
                handleClick={handleClick}
                isSelected={selectedTopics.includes(topic.label)}
              />
            ))}
          </div>
          <Link to="/home">
            <div className="relative inline-flex items-center justify-start ml-[80%] mt-[3%] py-4 pl-7 pr-12 overflow-hidden font-semibold shadow text-orange-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-orange-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-5 h-5 text-blue-400"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-5 h-5 text-white-400"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
                Get Started
              </span>
            </div>
          </Link>
        </div>

        <div className="w-1/2 bg-gray-100 bg-[url('./assets/BG.png')] h-[146%]">
          <div className="flex mt-5 mr-5">
            <AnimatedImage src={bgimg} alt="" />
            <QuoteCard
              quote="“If I had an hour to solve a problem, I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions.”"
              author="- Albert Einstein"
            />
          </div>
          <div className="mt-4 ml-2 flex">
            <QuoteCard
              quote="“When you struggle with a problem, that is when you understand it.”"
              author="- Elon Musk"
            />
            <AnimatedImage src={bgimg2} alt="" />
          </div>
          <div className="flex mt-3 mr-5">
            <AnimatedImage src={bgimg3} alt="" />
            <QuoteCard
              quote="“If we want to have the biggest impact, the best way to do this is to make sure we always focus on solving the most important problems.”"
              author="- Mark Zuckerberg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
