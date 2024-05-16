'use client'
import { Neko } from 'neko-ts';
import { useEffect, useRef } from "react";

export default function ONeko() {
	const neko = useRef()
	useEffect(() => {
		if (!neko.current) {
			neko.current = new Neko({
				speed: 0.2,
				origin: {
					x: 100,
					y: 100,
				},
			});
		}
	}, [neko]);
}