import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faMastodon } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

interface Props {
	type: 'footer' | 'hero';
}

export default function Socials({ type }: Props) {
	if (type == 'footer') {
		return (
			<div className='grid-cols-3 md:py-4 flex justify-center'>
				<Link href='https://fm7588.me/github' aria-label='GitHub profile link'><FontAwesomeIcon icon={faGithubSquare} className='px-4 min-w-8 min-h-8 hoverPop110' /></Link>
				<Link href='https://fm7588.me/LinkedIn' aria-label='LinkedIn profile link'><FontAwesomeIcon icon={faLinkedin} className='px-4 min-w-8 min-h-8 hoverPop110' /></Link>
				<Link href='https://fm7588.me/mastodon' aria-label='Mastodon profile link'><FontAwesomeIcon icon={faMastodon} className='px-4 min-w-8 min-h-8 hoverPop110' /></Link>
				<Link href='https://fm7588.me/links' aria-label='Littlelink page link'><FontAwesomeIcon icon={faLink} className='px-4 min-w-8 min-h-8 hoverPop110' /></Link>
			</div>
		)
	}
	else if (type == 'hero') {
		return (
			<div className='grid-cols-4 py-8 flex justify-center'>
				<Link href='https://fm7588.me/github' aria-label='GitHub profile link'><FontAwesomeIcon icon={faGithubSquare} className='px-4 min-w-12 min-h-12 hoverPop110' /></Link>
				<Link href='https://fm7588.me/LinkedIn' aria-label='LinkedIn profile link'><FontAwesomeIcon icon={faLinkedin} className='px-4 min-w-12 min-h-12 hoverPop110' /></Link>
				<Link href='https://fm7588.me/mastodon' aria-label='Mastodon profile link'><FontAwesomeIcon icon={faMastodon} className='px-4 min-w-12 min-h-12 hoverPop110' /></Link>
				<Link href='https://fm7588.me/links' aria-label='Littlelink page link'><FontAwesomeIcon icon={faLink} className='px-4 min-w-12 min-h-12 hoverPop110' /></Link>
			</div>
		)
	}
}