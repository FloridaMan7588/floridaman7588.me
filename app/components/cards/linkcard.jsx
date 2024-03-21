import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function LinkCard({icon, name, color, link, description}) {
	return(
		<div className='bg-{color}'>
			<FontAwesomeIcon icon={icon} />
		</div>
	)
}