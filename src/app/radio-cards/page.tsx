'use client'

import React, {useState} from 'react'
import {RadioCardGroup, RadioCardOption} from '../components/radio-cards/RadioCards'
import PageMainBox from '../components/page-main-box/PageMainBox'

const RadioCardsPage = () => {
	const [selected, setSelected] = useState('pro')

	const options: RadioCardOption[] = [
		{value: 'basic', label: 'Basic Plan', description: '$9/month'},
		{value: 'pro', label: 'Pro Plan', description: '$29/month'},
		{value: 'enterprise', label: 'Enterprise', description: 'Custom pricing', disabled: true}
	]

	return (
		<PageMainBox pageTitle='Radio Card Component'>
			<RadioCardGroup
				name="plan"
				options={options}
				selectedValue={selected}
				onChange={setSelected}
			/>
		</PageMainBox>
	)
}

export default RadioCardsPage
