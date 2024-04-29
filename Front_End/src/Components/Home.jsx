import logo from "../assets/querulous.png";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Profile from './Profile';

export default function HomePage() {
    return (
        <>
            <div className="mt-3 flex justify-between shadow-md">
                <div className="w-[19%] flex justify-between">
                    <img src={logo} alt="" />
                    <form className="flex items-center max-w-sm mx-auto">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-orange-500 dark:text-orange-400 ml-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="simple-search"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[700%] pl-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-5"
                                placeholder="Search Content"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="p-3 ml-[360%] text-sm font-medium text-white bg-orange-700 rounded-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                        >
                            <svg className="w-6 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </form>
                </div>

                <div>
                    <ul className="flex justify-between w-[30%] absolute right-20 top-8">
                        <li>
                            <svg className="h-8 w-8 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            <p className="text-xs mt-1 mr-2">Home</p>
                        </li>
                        <li>
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute bottom-8 left-5 inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                    <span className="relative bottom-8 left-5 inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                </span>
                            </div>
                            <div>
                                <p className="text-xs absolute bottom-0.5">Notification</p>
                            </div>
                        </li>
                        <li>
                            <Link to="/profile">
                                <svg className="h-8 w-8 text-orange-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx="12" cy="12" r="9" />
                                    <line x1="9" y1="9" x2="9.01" y2="9" />
                                    <line x1="15" y1="9" x2="15.01" y2="9" />
                                    <path d="M8 13a4 4 0 1 0 8 0m0 0H8" />
                                </svg>
                                <p className="text-xs ml-2 mt-1">Me</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div>
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div> */}
        </>
    )
}
