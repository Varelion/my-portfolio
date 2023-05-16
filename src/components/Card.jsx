import React from "react";
import { motion } from "framer-motion";

let cardClassName =
	"max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-6 mx-3";
const Card = () => {
	return (
		<>
			<motion.div
				initial={"hidden"}
				whileInView={"visible"}
				variants={{
					visible: { opacity: 1 },
					hidden: { opacity: 0 },
				}}
				className={cardClassName}
			>
				<a href="http://www.varelion.com">
					<img
						className="rounded-t-lg w-full border-2 border-gray-400 border-opacity-0 hover:border-opacity-100 hover:border-sky-900 hover:border-width-8 transition-all duration-500"
						src="https://cdn.discordapp.com/attachments/405082073922273291/1108122083738796113/ezgif-5-aa080afa15.png"
						alt=""
					/>
				</a>
				<div className="p-5">
					<a href="http://www.varelion.com">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Varelion.com
						</h5>
					</a>
					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						This portfolio implements a sleek, dynamic front-end
						with Postgresql as a back-end solution. It is hosted on
						an AWS Cloud EC2 instance. It also sports a custom
						e-mail solution to notify me through half a dozen
						devices of any messages left here through the 'contact'
						section below.
					</p>
					<a
						href="http://www.varelion.com"
						className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
					>
						View project
						<svg
							className="ml-2 -mr-1 w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
					</a>
				</div>
			</motion.div>

			<motion.div
				initial={"hidden"}
				whileInView={"visible"}
				variants={{
					visible: { opacity: 1 },
					hidden: { opacity: 0 },
				}}
				className={cardClassName}
			>
				<a href="https://github.com/Varelion">
					<img
						className="rounded-t-lg w-full border-2 border-gray-400 border-opacity-0 hover:border-opacity-100 hover:border-sky-900 hover:border-width-8 transition-all duration-500"
						src="https://cdn.discordapp.com/attachments/405082073922273291/1108121781514031134/ezgif-5-0dca60f296.png"
						alt=""
					/>
				</a>
				<div className="p-5">
					<a href="https://github.com/Varelion">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Discord Gambling Script
						</h5>
					</a>
					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						In a Dungeons & Dragons server I'm in, a user may
						'gamble' and 'work' 8 hours to earn gold. Well, this
						script routinely sends an HTTP Post request with the
						appropriate token and header data to act as though it's
						a real user.
					</p>
					<a
						href="https://github.com/Varelion"
						className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
					>
						View project
						<svg
							className="ml-2 -mr-1 w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
					</a>
				</div>
			</motion.div>

			<motion.div
				initial={"hidden"}
				whileInView={"visible"}
				variants={{
					visible: { opacity: 1 },
					hidden: { opacity: 0 },
				}}
				className={cardClassName}
			>
				<a href="http://www.trell-o.com/">
					<img
						className="rounded-t-lg w-full border-2 border-gray-400 border-opacity-0 hover:border-opacity-100 hover:border-sky-900 hover:border-width-8 transition-all duration-500"
						src="https://cdn.discordapp.com/attachments/405082073922273291/1108121453158740079/ezgif-5-2bee2cb5ed.png"
						alt=""
					/>
				</a>
				<div className="p-5">
					<a href="http://www.trell-o.com/">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Trell-O.com
						</h5>
					</a>
					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						A complete PERN-stack application I am hosting through
						AWS. I'm not bothering with HTTPS, as this is just a
						proof of concept -- unlike my portfolio site. It incorporates a calendar solution, color palette, secure database, and a rather smooth UX.
					</p>
					<a
						href="http://www.trell-o.com/"
						className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
					>
						View project
						<svg
							className="ml-2 -mr-1 w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
					</a>
				</div>
			</motion.div>

			<motion.div
				initial={"hidden"}
				whileInView={"visible"}
				variants={{
					visible: { opacity: 1 },
					hidden: { opacity: 0 },
				}}
				className={cardClassName}
			>
				<a href="https://github.com/Varelion">
					<img
						className="rounded-t-lg w-full border-2 border-gray-400 border-opacity-0 hover:border-opacity-100 hover:border-sky-900 hover:border-width-8 transition-all duration-500"
						src="https://cdn.discordapp.com/attachments/405082073922273291/1108121602266234940/ezgif-5-42ef7ca52e.png"
						alt=""
					/>
				</a>
				<div className="p-5">
					<a href="https://github.com/Varelion">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Github Commit Bot
						</h5>
					</a>
					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						This one is quite cheeky -- utilizing Python, Github's API, and BASH's 'cron' command line task automation, I created something to commit a random number of commits per day, giving me an artificial activity boost. Some might see this as contentious, I see it as a mixture of two sayings "Modern problems require modern solutions", and Bear Grills' "Improvise. Adapt. Overcome."
					</p>
					<a
						href="https://github.com/Varelion"
						className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
					>
						View project
						<svg
							className="ml-2 -mr-1 w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
					</a>
				</div>
			</motion.div>
		</>
	);
};

export default Card;
