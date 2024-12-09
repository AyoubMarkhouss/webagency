import Navbar from "./components/Navbar";
import { CgMouse } from "react-icons/cg";
export default function Home() {
  return (
    <div className="bg-[#f5efe9]">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-red-600 to-red-700 ">
        <div className="flex flex-col gap-y-12 px-20">
          <h1 className="fontunb text-8xl text-white text-center">
             Crafting Digital Experiences that Inspire 
          </h1>

          <div className="fontunb grid grid-cols-3 text-white ">
            <div className="col-span-1">
              <p className=" flex items-center text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt
                excepturi nihil
              </p>
            </div>
            <div className="flex justify-center col-span-1">
              <div className="fontunb flex items-center gap-x-2 absolute bottom-10">
                <CgMouse size={20} color="white" />
                Scroll To Explore
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
      <div className="h-screen">
        <h1>test</h1>
      </div>
    </div>
  );
}
