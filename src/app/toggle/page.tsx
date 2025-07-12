'use client'

import React, {useState} from 'react'
import {ToggleSwitch} from '@/app/components/toggle-slider/toggle'
import {FaSun, FaMoon} from 'react-icons/fa'
import PageMainBox from '../components/page-main-box/PageMainBox'
import { HiOutlineLightBulb } from "react-icons/hi";
import { HiLightBulb } from "react-icons/hi";

const Toggle = () => {
	const [enabled, setEnabled] = useState(false)
	const [langEnabled, setLangEnabled] = useState(false)
	const [onOff, setOnOff] = useState(false)

	return (
		<PageMainBox pageTitle='Toggle Component'>
			<div className='mb-15'>
				<ToggleSwitch
					isOn={onOff}
					onToggle={() => setOnOff(!onOff)}
					labelText={onOff ? 'Off' : 'On'}
					labelPosition="right"
					icon={onOff ? <HiLightBulb /> : <HiOutlineLightBulb />}
					iconPosition="left"
					activeColor={onOff ? '#111827' : '#f59e0b'} // Dark or amber
				/>
			</div>
			<div className='mb-15'>
				<ToggleSwitch
					isOn={enabled}
					onToggle={() => setEnabled(!enabled)}
					labelText={enabled ? 'Dark Mode' : 'Light Mode'}
					labelPosition="right"
					icon={enabled ? <FaMoon /> : <FaSun />}
					iconPosition="left"
					activeColor={enabled ? '#111827' : '#f59e0b'} // Dark or amber
				/>
			</div>
			<div>
				<ToggleSwitch
					isOn={langEnabled}
					onToggle={() => setLangEnabled(!langEnabled)}
					labelText={langEnabled ? 'English' : 'Espanol'}
					labelPosition="right"
					icon={langEnabled ? <span>EN</span> : <span>ES</span>}
					iconPosition="left"
					activeColor={langEnabled ? 'rgba(67, 56, 202, 0.8)' : '#f59e0b'}
					inactiveColor='rgba(67, 56, 202, 0.8)' // Dark or amber
				/>
			</div>
		</PageMainBox>
	)
}

export default Toggle
