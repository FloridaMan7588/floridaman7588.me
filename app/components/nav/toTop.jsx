'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react"


export default function ToTop() {

	/* Lovely to-top button from https://gist.github.com/robert-kratz/e750685a279c8701beafdcb2800bdd2c */
	/*Thanks to Robert Kratz! */
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
    });

    const jumpToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div>
            {
                (show) ? (
                    <div className="fixed bottom-0 right-0 mb-4 mr-4 z-10">
                    <button onClick={jumpToTop} className="bg-crust text-text rounded-full p-2 hoverPop110 transition">
                        <FontAwesomeIcon icon={faArrowUp} className="h-6 w-6"/>
                    </button>
                </div>
                ) : (<div/>)
            }
        </div>
    )
}