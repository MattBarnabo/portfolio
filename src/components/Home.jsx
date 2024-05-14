import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"
const Home = ({ textBounce }) => {
	const myName = "Matt Barnabo".split("")
	const dev = "I'm a Full Stack Developer".split("")

	return (
		<div name="home" className="w-full h-screen bg-[#000201] background">
			{/* container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full z-1">
				<p className="text-red-600 font-bold text-base ">Hi, my name is</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[whitesmoke]">
					{textBounce(myName)}
				</h1>
				<h2 className=" text-4xl sm:text-7xl font-bold text-[#cac6c6]">
					{textBounce(dev)}
				</h2>
				<p className="text-[#cac6c6] py-4 max-w-[700px] font-medium">
					I specialize in building (and occasionally designing) exceptional
					digital experiences. Currently, I'm focused on building responsive
					full-stack web applications.
				</p>
				<div>
					<button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600">
						<Link to="projects" smooth={true} duration={500}>
							View Projects
						</Link>
						<span className="group-hover:rotate-90 duration-300">
							<HiArrowNarrowRight className="ml-3" />
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Home
