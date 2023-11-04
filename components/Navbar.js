import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import localFont from "next/font/local";
import Image from "next/image";

const myFont = localFont({ src: "./coolvetica condensed rg.ttf" });

const Navbar = () => {
	const router = useRouter();
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const activeLinkClass =
		"block py-2 pl-3 pr-4 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow";

	const currentPathname = router.pathname;

	const routeLabels = {
		"/#about-us": "About Us",
		"/#events": "Events",
		'/#blogs': "Blogs",
		"/#team": "Team",
		"/#contact-us": "Contact Us",
	};

	useEffect(() => {
		const handleRouteChange = (url) => {
			if (currentPathname !== url) {
				setMenuOpen(false);
			}
		};

		const routeChangeCompleteListener = "routeChangeComplete";

		router.events.on(routeChangeCompleteListener, handleRouteChange);

		return () => {
			router.events.off(routeChangeCompleteListener, handleRouteChange);
		};
	}, [currentPathname]);

	return (
		<nav className={myFont.className}>
			<div className="max-w-screen flex flex-wrap items-center text-analytikaWhite justify-between mx-auto p-4">
				<Link href="/">
					<p className="flex items-center uppercase text-3xl tracking-wider font-normal">
						<Image
							src="/logo.svg"
							className="w-fit h-16 mr-3 mt-4"
							width={0}
							height={0}
							sizes="100vw"
							alt="Analytika Logo"
						/>
						Analytika
					</p>
				</Link>
				<button
					onClick={toggleMenu}
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
					aria-controls="navbar-default"
					aria-expanded={menuOpen ? "true" : "false"}
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div
					className={`w-full md:flex md:w-auto transition-opacity ease-linear ${
						menuOpen ? "block opacity-100 " : "hidden opacity-0 "
					} duration-100 `}
					id="navbar-default"
				>
					<ul className=" text-xl text-analytikaWhite md:text-3xl flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
						{Object.entries(routeLabels).map(([path, label]) => (
							<li key={path}>
								<Link href={path}>
									<p
										className={
											currentPathname === path
												? `${activeLinkClass}`
												: `block py-2 pl-3 pr-4 hover:text-analytikaGreen`
										}
										aria-current={
											currentPathname === path
												? "page"
												: undefined
										}
									>
										{label}
									</p>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
