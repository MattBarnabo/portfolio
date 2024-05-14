import React from "react"
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import Tailwind from "../assets/tailwind.png"
import Github from "../assets/github.png"
import ReactImg from "../assets/react.png"
import Rails from "../assets/Rails.png"
import Ruby from "../assets/ruby.png"
import Javascript from "../assets/javascript.png"
const Skills = () => {
	return (
		<div name="skills" className="w-full h-screen bg-[#000201] text-gray-300">
			{/* container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-red-600">
						Skills
					</p>
					<p className=" py-4">These are the technologies I've worked with.</p>
				</div>

				{/* icon container */}
				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<div className="hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Ruby} alt="Ruby icon" />
						<p className="my-4">RUBY</p>
					</div>
					<div className="hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
						<p className="my-4">REACT</p>
					</div>
					<div className="hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Rails} alt="Rails icon" />
						<p className="my-4">RAILS</p>
					</div>
					<div className=" shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
						<p className="my-4">TAILWIND</p>
					</div>
					<div className="hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Github} alt="GitHub icon" />
						<p className="my-4">GITHUB</p>
					</div>
					<div className="hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={Javascript}
							alt="javascript icon"
						/>
						<p className="my-4">JAVASCRIPT</p>
					</div>
					<div className="hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
						<p className="my-4">HTML</p>
					</div>
					<div className="hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={CSS} alt="css icon" />
						<p className="my-4">CSS</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
