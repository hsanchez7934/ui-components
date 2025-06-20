'use client'

import Checkbox from '@/app/components/checkbox/Checkbox'

export default function CheckboxPage() {
	return (
		<main className="min-h-screen pt-20 bg-white dark:bg-black flex flex-col items-center justify-center">
			<div className="h-auto" style={{borderRadius: '12px'}}>
				<Checkbox index={0} />
				<Checkbox index={1} />
				<Checkbox index={2} />
			</div>
		</main>
	)
}
