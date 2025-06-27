'use client'

import Checkbox from '@/app/components/checkbox/Checkbox'
import PageMainBox from '../components/page-main-box/PageMainBox'

export default function CheckboxPage() {
	return (
		<PageMainBox>
			<Checkbox index={0} />
			<Checkbox index={1} />
			<Checkbox index={2} />
		</PageMainBox>
	)
}
