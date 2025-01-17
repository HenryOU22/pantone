import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";


const DashBoard = () => {
    const [divIndex, setDivIndex] = useState(0);
    const navigate = useNavigate()
    // const {dispatch} = useContext(AppContext)



    const divInfo = [
        {
        heading: "Capture the Unseen: Hidden Gems in Photography",
        paragraph: "Discover tips and techniques to uncover the beauty in everyday scenes. Learn how to turn ordinary locations into extraordinary photo opportunities with creative angles and lighting.",
        button: "Read More",
        img:"/assets/pexels-haleyve-2087391.jpg",
        alt:  "image 1" ,
    },
    {
        heading: "Fuel Your Imagination: Top 10 Creative Books",
        paragraph: "Whether you're into writing, art, or photography, these books will inspire and ignite your creative spirit. Find your next favorite read to enhance your artistic journey.",
        button: "Read More",
        img:"/assets/pexels-mastercowley-1153369.jpg",
        alt: "image 2",
    },
    {
        heading: "The Soundtrack of Your Life: Music’s Everyday Magic",
        paragraph: "Dive into the transformative power of music and its ability to elevate mundane moments into meaningful experiences. Explore playlists and genres to suit every mood.",
        button: "Read More",
        img:"/assets/pexels-shkrabaanthony-4348404.jpg",
        alt:"image 3" ,
    },
    ];

    useEffect(() =>{
        const interval = setInterval(()=> {
            setDivIndex((prevIndex) => (prevIndex + 1) % divInfo.length);
        }, 5000);
        return () => clearInterval(interval);
    },[divIndex, divInfo.length, setDivIndex,])



    return ( <>
    <div 
    className="transition-all duration-500 ease-in-out h-screen w-screen flex justify-center items-center flex-col text-white text-center px-3 relative z-10"
    style={{
        backgroundImage: `url(${divInfo[divIndex].img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
         }}
         >
            <div className="w-full h-full bg-black/40 flex justify-center items-center flex-col">
            <h1 className="font-tangerine font-bold text-7xl text-cyan-500 mb-5"> {divInfo[divIndex].heading} </h1>

            <p className="w-1/2">{divInfo[divIndex].paragraph}</p>

            <button 
            onClick={() => navigate("/blogs")}
            className="border border-cyan-500 text-cyan-500 py-2 px-5 rounded-md text-lg mt-5 transition-all duration-200 ease-linear hover:bg-cyan-500 hover:text-white">{divInfo[divIndex].button}</button>

            </div>
            {/* <button
            onClick={() => dispatch({type: "ADD"})}
            >ADD</button> */}


            </div>
    
    </>

     );
}
 
export default DashBoard;