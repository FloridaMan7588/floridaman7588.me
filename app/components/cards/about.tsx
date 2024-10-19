import { ReactElement } from 'react'

interface Props {
	about: string;
	skills: string[];
}

export default function AboutCard({ about, skills }: Props) {
	const skillList: ReactElement[] = []
	for (const skill of skills) {
		const listId = skills.indexOf(skill)
		skillList.push(<li className='py-2 md:py-4' key={listId}>{'• ' + skill}</li>)
	}
	return (
		<div className='bg-ctp-mantle rounded-[45px]'>
			<h1 className='text-ctp-text text-center text-4xl font-bold px-7 py-4'>About Me</h1>
			<div className='grid-cols-1 grid md:flex md:justify-center place-items-center px-4'>
				<div className='text-ctp-text text-center px-2 md:text-2xl md:px-16 text-lg md:py-8'>
					<p>{about}</p>
				</div>
				<div className="py-8">
					<div className='text-ctp-text px-8 md:px-16 py-4 rounded-[45px] justify-center min-w-fit bg-crust'>
						<h2 className='text-3xl font-bold py-4'>My Skills</h2>
						<ul className='md:text-xl text-lg md:w-64'>{skillList}</ul>
					</div>
				</div>
			</div>
		</div>
	)
}