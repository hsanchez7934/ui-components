export default function Home() {
	return (
		<main className="h-screen pt-20">
			<section className="h-full flex flex-col justify-center items-center magicpattern">
				<h1
					className="text-black mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
					style={{fontFamily: 'NotePlanner'}}
				>
					UI Components Library
				</h1>
				<p
					className="text-black text-center w-[70%] lg:w-[60%] 2xl:w-[40%] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
					style={{fontFamily: 'Rubik'}}
				>
					Here we will preview a collection of reusable components built using React & TailwindCSS.
					Click the button below to get started.
				</p>
				<div>
					<button>Get Started</button>
				</div>
			</section>
		</main>
	)
}
