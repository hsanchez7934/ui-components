'use client'

import React from 'react'
import {Tabs, TabItem} from '@/app/components/tabs/Tabs'
import PageMainBox from '../components/page-main-box/PageMainBox'

const para = (
	<p>
		Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit
		quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
	</p>
)

const para2 = (
	<p>
		Medium latte affogato caramelization, dark, to go skinny body seasonal iced. So, to go, aged
		black americano plunger pot that cup white et breve. Cappuccino barista galão aroma aged con
		panna robust. Trifecta cultivar in redeye latte dark ut mocha kopi-luwak seasonal shop.
	</p>
)
const para3 = (
	<p>
		The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and
		illustrious history. It was born from humble roots, only to rise to well-seasoned greatness.
	</p>
)

const option1 = <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.</p>
const option2 = <p>Why do we even need weapons anyway? We have her. Yeah, I want a date with Bo Derek. We all want things. We never would have upset you if we knew you had superpowers.</p>
const option3 = <p>Who is the goto on this job with the way forward we need to dialog around your choice of work attire. Put a record on and see who dances.</p>

const TabsPage = () => {
	const tabItems: TabItem[] = [
		{
			label: 'Heading 1',
			content: para
		},
		{label: 'Heading 2', content: para2},
		{label: 'Heading 3', content: para3}
	]

	const tabItems1: TabItem[] = [
		{
			label: 'Option 1',
			content: option1
		},
		{label: 'Option 2', content: option2},
		{label: 'Option 3', content: option3}
	]

	return (
		<PageMainBox>
			<div>
				<Tabs tabs={tabItems} />
			</div>
			<div>
				<Tabs tabs={tabItems1} />
			</div>
		</PageMainBox>
	)
}

export default TabsPage
