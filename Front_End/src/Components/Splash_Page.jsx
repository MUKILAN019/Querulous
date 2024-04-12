import "../index.css";
import logo from "../assets/querulous.png"
import bgimg from "../assets/Desktop.png";
export default function Splash_Page(){
    return(
      <>
          <div className="flex w-full h-full border shadow-md">
    <div className='w-96 relative'>
        <img className="absolute w-72 mt-2" src={logo} alt="Logo" />
    </div>
</div>
<div className="flex">
<div className="min-h-screen grid items-center justify-center bg-gray-300 w-1/2 shadow-zinc-200">
    <h1 className="text-4xl font-bold text-gray-800 mt-36 ml-11">Let's solve problem together</h1>
    <p className="ml-11 font-semibold text-sky-800">Navigate challenges effortlessly with our intuitive platform. Let's turn obstacles into opportunities together. Dive in and discover a new way to problem-solve!</p>
  <div className="bg-white p-10 rounded-lg shadow-lg w-11/12 h-64 ml-6">
    <h4 className="text-3xl font-bold text-gray-700">Welcome to Querulous</h4>
    <p className="mt-4 text-lg text-blue-500">Join me, let's tackle challenges hand in hand</p>
    <div className="w-full h-24 flex items-center justify-center cursor-pointer ml-11">
      <div
        className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group"
      >
        <span
          className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"
        ></span>
        <span
          className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className="w-5 h-5 text-green-400"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </span>
        <span
          className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className="w-5 h-5 text-green-400"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </span>
        <span
          className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200"
        >
          Get Started
        </span>
      </div>
    </div>
  </div>
</div>

<div className="w-3/4">
    <img src={bgimg} alt="" />
</div>
</div>
      </>
    )
}