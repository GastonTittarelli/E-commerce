import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="w-full h-[87vh] flex justify-center items-center flex-col">
      <h2 className="text-[2rem] font-['Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif] font-semibold text-black mt-[2rem] mb-[1rem]">¡Oops! Page not found!</h2>
      <Link className="bg-[rgb(151,151,151)] text-white w-[150px] h-auto border-none rounded-[6px]  p-2 m-[5px] hover:bg-[#2b6cb0] transition duration-300" to="/">
        Return to store
			</Link>
    </div>
  )
}

export default NotFound