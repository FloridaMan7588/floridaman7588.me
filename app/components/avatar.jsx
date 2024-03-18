import Gravatar from 'react-awesome-gravatar'
import Image from 'next/image';
const options = {
	  size: 256
}

export default function Avatar({ className }) {
	return (
	<div>
		<Gravatar email='me@floridaman7588.me' options={options}>
			{url => (<Image src={url} alt='Avatar' className={className} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' fill priority={true}/>)}
  		</Gravatar>
	</div>
	)
}