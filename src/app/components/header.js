'use client'

import Gravatar from 'react-awesome-gravatar'
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react'

const options = {
	size: 256
  }

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [onMobile] = useState(false);

	return (
		<header className="py-4 bg-base px-2 z-[50] relative">
			<nav className="mx-auto flex max-w-[1880px] max-h-10 items-center justify-between p-6 lg:px-8 bg-mantle rounded-[45px] lg:w-full">
				<div className="flex justify-start">
					<div className="flex justify-center place-content-start w-9 h-9 relative">
						<Gravatar email='me@floridaman7588.me' options={ options }>
							{url => (<Image src={url} alt='Avatar' className="relative rounded-full max-h-9 max-w-9" sizes='' fill/>)}
						</Gravatar>
					</div>
					<div className="flex items-center">
						<a href="/" className="text-text lg:text-3xl sm:text-1xl font-bold pl-7"><p>FloridaMan&apos;s Site</p></a>
					</div>
				</div>
				<div className="lg:hidden flex justify-end items-center">
					<button type="button" className={`${!isOpen ? '' : 'hidden'} text-text`} onClick={() => setIsOpen(!isOpen)} aria-label='Header Menu'>
						<FontAwesomeIcon icon={faBars} />
					</button>
					<div className={`${isOpen ? '' : 'hidden'} flex feh-64 bg-mantle py-5 relative rounded-[25px] justify-self-end mt-32`}>
						<div className="flex flex-col">
							<button type="button" className={`${isOpen ? '' : 'visible'} text-text`} onClick={() => setIsOpen(!isOpen)}>
								<FontAwesomeIcon icon={faBars} className="justify-self-end" />
							</button>
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