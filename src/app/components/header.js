'use client'

import Gravatar from 'react-awesome-gravatar'
import { useState } from 'react'

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [onMobile, setOnMobile] = useState(false);

	return (
		<header className="py-4 bg-base">
			<nav className="mx-auto flex max-w-[1880px] max-h-10 items-center justify-between p-6 lg:px-8 bg-mantle rounded-[45px] lg:w-full">
				<div className="flex justify-start">
					<div className="flex items-center">
						<Gravatar email='me@floridaman7588.me'>
							{url => (<img src={url} alt='Avatar' className="rounded-full max-h-9" />)}
						</Gravatar>
					</div>
					<div className="flex items-center">
						<a href="/" className="text-text lg:text-3xl sm:text-1xl font-bold pl-7"><p>FloridaMan's Site</p></a>
					</div>
				</div>
				<div className="lg:hidden flex justify-end items-center">
					<button type="button" className="text-text" onClick={() => setIsOpen(!isOpen)}>
						<svg viewBox="0 0 20 20" fill="currentColor" className="menu w-6 h-6">
							<path fillRule="evenodd" d="M2 4.5A1.5 1.5 0 013.5 3h13a1.5 1.5 0 110 3h-13A1.5 1.5 0 012 4.5zm0 6A1.5 1.5 0 013.5 9h13a1.5 1.5 0 110 3h-13A1.5 1.5 0 012 10.5zm1.5 6a1.5 1.5 0 100-3h13a1.5 1.5 0 100 3h-13z" clipRule="evenodd" />
						</svg>
					</button>
					<div className={`${isOpen ? '' : 'hidden'} flex feh-64 bg-mantle py-5 relative rounded-[25px] justify-self-end`}>
						<div className="flex flex-col">
							<a href="#about" onClick={() => setIsOpen(!isOpen)} className="px-6 text-text font-bold">About Me</a>
							<a href="#projects" onClick={() => setIsOpen(!isOpen)} className="px-6 text-text font-bold">Projects</a>
							<a href="#contact" onClick={() => setIsOpen(!isOpen)} className="px-6 text-text font-bold">Contact</a>
							<a href="/blog" onClick={() => setIsOpen(!isOpen)} className="px-6 text-text font-bold">Blog</a>
						</div>
					</div>
				</div>

				<div className={`${onMobile ? '' : 'hidden'} lg:flex`}>
					<a href="#about" className="px-6 text-text font-bold">About Me</a>
					<a href="#projects" className="px-6 text-text font-bold">Projects</a>
					<a href="#contact" className="px-6 text-text font-bold">Contact</a>
					<a href="/blog" className="px-6 text-text font-bold">Blog</a>
				</div>
			</nav>
		</header>
	)
}