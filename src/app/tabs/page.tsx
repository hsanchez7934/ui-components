'use client'

import React from 'react'
import {Tabs, TabItem} from '@/app/components/tabs/Tabs'
import PageMainBox from '../components/page-main-box/PageMainBox'

const para = <p>
Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing
elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
</p>

const para2 = <p>Medium latte affogato caramelization, dark, to go skinny body seasonal iced. So, to go, aged black americano plunger pot that cup white et breve. Cappuccino barista galão aroma aged con panna robust. Trifecta cultivar in redeye latte dark ut mocha kopi-luwak seasonal shop.</p>
const para3 = <p>The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. It was born from humble roots, only to rise to well-seasoned greatness.</p>

const TabsPage = () => {
	const tabItems: TabItem[] = [
		{
			label: 'Heading 1',
			content: para
		},
		{label: 'Heading 2', content: para2},
		{label: 'Heading 3', content: para3},
	]

	return (
		<PageMainBox>
			<Tabs tabs={tabItems} />
		</PageMainBox>
	)
}

export default TabsPage
