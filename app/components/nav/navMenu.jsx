'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Link from "next/link";

export default function NavMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const [onMobile] = useState(false)
	return (
		<div>
			<div className="lg:hidden flex justify-end items-center">
				<button type="button" className={`${!isOpen ? '' : 'hidden'} text-text`} onClick={() => setIsOpen(!isOpen)} aria-label='Header Menu'>
					<FontAwesomeIcon icon={faBars} />
				</button>
				<div className={`${isOpen ? '' : 'hidden'} flex feh-64 bg-mantle py-5 relative rounded-[25px] justify-self-end mt-32`}>
					<div className="flex flex-col">
						<button type="button" className={`${isOpen ? '' : 'visible'} text-text`} onClick={() => setIsOpen(!isOpen)}>
							<FontAwesomeIcon icon={faBars} className="justify-self-end" />
						</button>
						<Link href="/#about" onClick={() => setIsOpen(!isOpen)} className="px-6 text-text font-bold">About Me</Link>
						<Link href="/#projects" onClick={() => setIsOpen(!isOpen)} className="px-6 text-text font-bold">Projects</Link>
						<Link href="/contact" onClick={() => setIsOpen(!isOpen)} className="px-6 text-text font-bold">Contact</Link>
						<Link href="/blog" onClick={() => setIsOpen(!isOpen)} className="px-6 text-text font-bold">Blog</Link>
					</div>
				</div>
			</div>
			<div className={`${onMobile ? '' : 'hidden'} lg:flex`}>
				<Link href="/#about" className="px-6 text-text font-bold">About Me</Link>
				<Link href="/#projects" className="px-6 text-text font-bold">Projects</Link>
				<Link href="/contact" className="px-6 text-text font-bold">Contact</Link>
				<Link href="/blog" className="px-6 text-text font-bold">Blog</Link>
			</div>
		</div>
	)
}