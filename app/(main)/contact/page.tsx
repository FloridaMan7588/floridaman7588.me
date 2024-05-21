import BaseCard from '@components/cards/basecard';
import ContactCard from '@components/cards/contactcard';

export default async function Blog() {
	return (
		<main className="bg-ctp-base min-h-screen max-w-screen">
			<BaseCard>
				<ContactCard
				title='Contact Me'
          content='Want to get in touch with me? Have a question about something I do? Feel free to reach out to learn about my 
		  products, services, or just get to know me!'
        	contacts={
			[{title: 'Email', link: 'mailto:me@floridaman7588.me'}, 
			{title: 'Mastodon', link: 'https://fm7588.me/mastodon'}, 
			{title: 'LinkedIn', link:'https://fm7588.me/linkedin'}, 
			{title:'Discord', link: 'https://fm7588.me/discord'}, 
			{title: 'Full Social List', link: 'https://fm7588.me/links'}]
			} />
		</BaseCard>
	</main>
	)
}