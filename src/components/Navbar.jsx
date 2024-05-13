import React, { useState } from "react"
import Logo from "../assets/M.png"
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { Link } from "react-scroll"

const Navbar = () => {
	const [nav, setNav] = useState(false)
	const handleClick = () => setNav(!nav)
	const handleLogoClick = () => {
		return <Link to="home" smooth={true} duration={500}></Link>
	}
	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[transparent ] text-gray-300">
			<div>
				<Link
					to="home"
					smooth={true}
					duration={500}
					className="font-bold button"
				>
					<img src={Logo} alt="Logo" style={{ width: "115px" }} />
				</Link>
			</div>

			{/* menu */}
			<ul className="hidden md:flex">
				<li>
					<Link
						to="home"
						smooth={true}
						duration={500}
						className="font-bold button"
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						to="about"
						smooth={true}
						duration={500}
						className="font-bold button"
					>
						About
					</Link>
				</li>
				<li>
					<Link
						to="skills"
						smooth={true}
						duration={500}
						className="font-bold button"
					>
						Skills
					</Link>
				</li>
				<li>
					<Link
						to="projects"
						smooth={true}
						duration={500}
						className="font-bold button"
					>
						Projects
					</Link>
				</li>
				<li>
					<Link
						to="contact"
						smooth={true}
						duration={500}
						className="font-bold button"
					>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger menu */}
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* Mobile menu */}
			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen bg-[#000201] flex flex-col justify-center items-center"
				}
			>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="home"
						smooth={true}
						duration={500}
						className="font-bold button"
					>
						Home
					</Link>
				</li>
				<li className=" py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="about"
						smooth={true}
						duration={500}
						className="font-bold button"
					>
						About
					</Link>
				</li>
				<li className=" py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="skills"
						smooth={true}
						duration={500}
						className="font-bold button"
					>
						Skills
					</Link>
				</li>
				<li className=" py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="projects"
						smooth={true}
						duration={500}
						className="font-bold button"
					>
						Projects
					</Link>
				</li>
				<li className=" py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="contact"
						smooth={true}
						duration={500}
						className="font-bold button"
					>
						Contact
					</Link>
				</li>
			</ul>

			{/* Social icons */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://www.linkedin.com/in/mattbarnabo/"
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://github.com/MattBarnabo"
						>
							GitHub
							<FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://mail.google.com/mail/?view=cm&fs=1&to=mattbarnabo@gmail.com&su=SUBJECT&body=BODY&bcc=mattbarnabo@gmail.com"
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://docs.google.com/document/d/162WyRtdkpCLiAAOAa3jCZmudygpMxtPf3ABr0wdfX9s/edit?usp=sharing"
						>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
