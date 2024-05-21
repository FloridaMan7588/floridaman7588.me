import BaseCard from "@components/cards/basecard"
import ProjectCard from "@components/cards/projectcard"
import waterfoxLogo from '@images/projects/waterfox-logo.png';
import mochadLogo from '@images/projects/mochad-logo.png';

export default function Projects() {
	return (
		<main className="bg-ctp-base min-h-screen max-w-screen text-text">
			<BaseCard>
				<div className='grid grid-cols-1 md:grid-cols-3 md:justify-center'>
					<ProjectCard title='Project 1' description='This is a project description' image={waterfoxLogo} imageLink='' sourceUrl='https://fm7588.me/test' downloadUrl='https://fm7588.me/test'/>
					<ProjectCard title='Project 2' description='This is a project description' image={mochadLogo} imageLink='' sourceUrl='https://fm7588.me/test' downloadUrl='https://fm7588.me/test'/>
					<ProjectCard title='Project 1' description='This is a project description' image={waterfoxLogo} imageLink='' sourceUrl='https://fm7588.me/test' downloadUrl='https://fm7588.me/test'/>
					<ProjectCard title='Project 2' description='This is a project description' image={mochadLogo} imageLink='' sourceUrl='https://fm7588.me/test' downloadUrl='https://fm7588.me/test'/>
				</div>
			</BaseCard>
		</main>
	)
}