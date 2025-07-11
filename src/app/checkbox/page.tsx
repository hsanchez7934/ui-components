'use client'

import Checkbox from '@/app/components/checkbox/Checkbox'
import PageMainBox from '../components/page-main-box/PageMainBox'
import CheckboxGroup from '../components/checkbox/CheckboxGroup'

const meats = [
	{value: 'bacon', label: 'Bacon'},
	{value: 'ham', label: 'Ham'},
	{value: 'pepperoni', label: 'Pepperoni'},
	{value: 'salami', label: 'Salami'}
]

const veggies = [
	{value: 'olives', label: 'Olives'},
	{value: 'onions', label: 'Onions'},
	{value: 'mushrooms', label: 'Mushrooms'},
	{value: 'peppadews', label: 'Peppadews'}
]

export default function CheckboxPage() {
	return (
		<PageMainBox>
			<div className="h-auto w-full xl:flex">
				<section className="flex items-center justify-center flex-col p-7 xl:p-20">
					<Checkbox index={0} />
					<Checkbox index={1} />
					<Checkbox index={2} />
				</section>
				<section className="flex items-center justify-center flex-col p-7 xl:p-20">
					<div className="mb-7">
						<CheckboxGroup parentLabel="Meat" options={meats} />
					</div>
					<div>
						<CheckboxGroup parentLabel="Vegetables" options={veggies} />
					</div>
				</section>
			</div>
		</PageMainBox>
	)
}
