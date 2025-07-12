interface Props {
	children: React.ReactNode
}

export default function PageMainBox(props: Props) {
	return (
		<main className="min-h-screen pt-30 xl:pt-0 bg-white dark:bg-black flex flex-col items-center justify-start xl:justify-center">
			<div className="h-auto">
				{props.children}
			</div>
		</main>
	)
}
