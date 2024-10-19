import { ReactNode } from "react"

interface Props {
	children: ReactNode;
	id?: string;
}

export default function BaseCard({children, id}: Props) {
	return (
		<div className="px-8 py-8 md:px-16" id={id}>
			<div className='bg-ctp-mantle rounded-[45px] min-h-fit px-4 py-4'>
				{children}
			</div>
		</div>
	)
}