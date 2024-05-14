import React from "react"

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#000201] text-gray-300">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-[#F30EC6]">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold ">
						<p className="content">
							{" "}
							I'm Matt, nice to meet you. Please have a look around.
						</p>
					</div>
					<div>
						<p className="">
							I am passionate about building software that improves the lives of
							those around me. I specialize in React and Ruby on Rails. With a
							focus on frontend work. How can I help you make your website
							shine?
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
