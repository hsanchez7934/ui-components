import Link from 'next/link'
import Button from '@/app/components/button/Button'

export default function Home() {
	return (
		<main className="h-screen pt-20">
			<section className="h-full flex flex-col justify-center items-center magicpattern_checkerboard">
				<h1
					className="text-center text-gray-50 mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
					style={{fontFamily: 'MolganRegular'}}
				>
					UI Components Library
				</h1>
				<p
					className="text-gray-200 text-center w-[70%] lg:w-[60%] 2xl:w-[40%] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
					style={{fontFamily: 'Rubik'}}
				>
					Reusable UI component library using React, Next.js, and TailwindCSS, designed to streamline development.
				</p>
				<div className='mt-14'>
					<Link href="/badge">
						<Button
							buttonType="primary"
							buttonText="Get Started"
							buttonSize="large"
							ariaLabel="Get Started button"
						/>
					</Link>
				</div>
			</section>
		</main>
	)
}
