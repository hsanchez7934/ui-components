'use client'

import './styles.css'
import React from 'react'

interface Props {
	index: number
}

const Checkbox = (props: Props) => {
	const [checked, setChecked] = React.useState(false)
	const [checkboxText, setCheckboxText] = React.useState('')
	const [index, setIndex] = React.useState(props.index || 0)
	const inputRef = React.useRef<HTMLInputElement>(null)

	React.useEffect(() => {
		if (index === 0) {
			setCheckboxText('Unchecked')
			setChecked(false)
		}
		if (index === 1) {
			setCheckboxText('Indeterminate')
			// @ts-expect-error generic
			inputRef.current.indeterminate = true
			setChecked(false)
		}
		if (index === 2) {
			setCheckboxText('Checked')
			setChecked(true)
		}
	}, [])

	const handleOnChange = () => {
		const input = inputRef.current
		if (index === 0) {
			// @ts-expect-error generic
			input.indeterminate = true
			setCheckboxText('Indeterminate')
			setIndex(1)
		}
		if (index === 1) {
			// @ts-expect-error generic
			input.indeterminate = false
			setChecked(true)
			setCheckboxText('Checked')
			setIndex(2)
		}
		if (index === 2) {
			setChecked(false)
			setCheckboxText('Unchecked')
			setIndex(0)
		}
	}

	return (
		<div
			className="flex items-center justify-center gap-3 mb-8"
			style={{fontFamily: 'Rubik'}}
		>
			<input
				type="checkbox"
				ref={inputRef}
				checked={checked}
				onChange={handleOnChange}
				className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 cursor-pointer"
			/>
			<span className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl w-28">
				{checkboxText}
			</span>
		</div>
	)
}

export default Checkbox
