import axios from "axios";
import { useState } from "react"
export default function ProfileEdit(){
    const [data,setData] = useState(" ");
    const Myfunc =  (e)=>{
       const File =  new FileReader()
       console.log(e[0])
       File.onload=async (e)=>{
        try{
        const response = await axios.post('https://api.cloudinary.com/v1_1/dioirlnnn/image/upload', 
        {file:e.target.result,upload_preset:"hhzfw36i"});
        setData(response.data.secure_url)
       }
       catch(er){
        console.log("error",er)
       }}
       File.readAsDataURL(e[0])
      
    }
    console.log(data)
    localStorage.setItem("image",data)
    const handleClicker = (e) =>{
          e.preventDefault();
    }
    return(
        <>
          <div className="flex flex-col items-center justify-center h-screen dark  bg-[url('./assets/BG.png')]">
      <div className="w-full max-w-md  bg-gray-200 rounded-lg shadow-md p-6 border border-orange-700 border-4">
        <h2 className="text-2xl font-bold text-black mb-4">Edit your details</h2>

        <form className="flex flex-col">
          <input
            placeholder="Full Name"
            className=" text-gray-200 bg-gray-700 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
          />
          <input
            placeholder="Location (City/State)"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            
          />
          <input
            placeholder="Age"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="number"
          />
          <input
            placeholder="Professional"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
          />
          <input
            placeholder="Working At"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
          />
          <textarea
            placeholder="About"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            name="cover_letter"
          ></textarea>
          <label>Profile Image:</label>
          <input
            placeholder="Profile Image"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="file" onChange={(e)=>{Myfunc(e.target.files)}}
          /> 

          <button
            className="bg-gradient-to-r from-orange-500 to-orange-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-orange-600 hover:to-orange-600 transition ease-in-out duration-150"
            type="submit" onClick={handleClicker}
          >
            Edit
          </button>
        </form>
      </div>
    </div>
        </>
    )
}