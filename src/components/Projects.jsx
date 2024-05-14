import React from "react"
import PerrfectMatch from "../assets/Projects/Perrfect-match.png"
import FlatFinder from "../assets/Projects/Flat-finder.png"
import SpookySpace from "../assets/Projects/Background.png"

const Projects = () => {
	return (
		<div
			name="projects"
			className="w-full md:h-screen text-gray-300 bg-[#000201]"
		>
			{/* Container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#F30EC6]">
						Projects
					</p>
					<p className="pt-4">Check out some of my recent projects</p>
				</div>

				{/* Card container */}
				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{/* Card item 1 */}
					<div
						style={{ backgroundImage: `url(${SpookySpace})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effect */}
						<div className="opacity-0 group-hover:opacity-100">
							<h1 className="text-3xl font-bold  text-white tracking-wide text-center">
								Spooky Space
							</h1>
							<h3 className="text-xl font-semibold text-white tracking-wide text-center">
								React, Ruby on Rails, & Tailwind CSS
							</h3>
							<p className="text-sm font-normal text-white tracking-wide text-center !important">
								Horror movie app using an external API to allow users to
								discover new horror movies, save them, rate them, and comment on
								them.
							</p>
							<div className="pt-8 text-center">
								<a href="https://github.com/Spooky-space" target="_blank">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
								<a
									href="https://spooky-space-frontend.onrender.com"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* Card item 2 */}
					<div
						style={{ backgroundImage: `url(${FlatFinder})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effect */}
						<div className="opacity-0 group-hover:opacity-100">
							<h1 className="text-3xl font-bold  text-white tracking-wide text-center">
								Flat Finder
							</h1>
							<h3 className="text-xl font-semibold text-white tracking-wide text-center">
								React & Ruby on Rails
							</h3>
							<p className="text-sm font-normal text-white tracking-wide text-center !important">
								Apartment listing app allowing users to list apartments, and
								view apartments other users have list.
							</p>
							<div className="pt-8 text-center">
								<a
									href="https://github.com/MattBarnabo/flat-finder-frontend"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Frontend
									</button>
								</a>
								<a
									href="https://github.com/MattBarnabo/flat-finder-backend"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Backend
									</button>
								</a>
								{/* <a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a> */}
							</div>
						</div>
					</div>

					{/* Card item 3 */}
					<div
						style={{ backgroundImage: `url(${PerrfectMatch})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effect */}
						<div className="opacity-0 group-hover:opacity-100">
							<h1 className="text-3xl font-bold  text-white tracking-wide text-center">
								Perrfect Match
							</h1>
							<h3 className="text-xl font-semibold text-white tracking-wide text-center">
								React & Ruby on Rails
							</h3>
							<p className="text-sm font-normal text-white tracking-wide text-center !important">
								Tinder for Cats! Find the cat you want to adopt by swiping
								through the list.
							</p>
							<div className="pt-8 text-center">
								<a
									href="https://github.com/MattBarnabo/Perrfect-Match-frontend"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Frontend
									</button>
								</a>
								<a
									href="https://github.com/MattBarnabo/perrfect-match-backend"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Backend
									</button>
								</a>
								{/* <a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a> */}
							</div>
						</div>
					</div>

					{/* Card item 4 */}
					{/* <div
						style={{ backgroundImage: `url(${TextBasedGame})` }}
						className="shadow-lg shadow-[#040c16] group container rouded-md flex justify-center items-center mx-auto content-div"
					> */}
					{/* Hover Effect */}
					{/* <div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wide">
								Ruby Application
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div> */}
					{/* Card item 5 */}
					{/* <div
						style={{ backgroundImage: `url(${TicTacToe})` }}
						className="shadow-lg shadow-[#040c16] group container rouded-md flex justify-center items-center mx-auto content-div"
					> */}
					{/* Hover Effect */}
					{/* <div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wide">
								React JS Application
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
        </div> */}

					{/* Card item 6 */}
					{/* <div
						style={{ backgroundImage: `url(${TextBasedGame})` }}
						className="shadow-lg shadow-[#040c16] group container rouded-md flex justify-center items-center mx-auto content-div"
					> */}
					{/* Hover Effect */}
					{/* <div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wide">
								Ruby Application
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	)
}

export default Projects
