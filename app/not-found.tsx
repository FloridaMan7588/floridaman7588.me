import Link from "next/link";

export default function Custom404() {
	return (
			<main className="bg-ctp-base min-h-screen max-w-screen">
				<div className="flex flex-col text-center justify-center items-center h-[100vh]">
					<h1 className='text-3xl font-bold px-2 py-2 text-ctp-text'>Whoops! You&apos;ve gone somewhere you weren&apos;t supposed to...</h1>
					<Link href='/' className='px-2 py-2 text-ctp-subtext1'>Click here to go back to the home page</Link>
				</div>
			</main>
	)
}