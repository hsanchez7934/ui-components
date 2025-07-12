'use client'

import React from 'react'
import Tooltip from '../components/tooltip/Tooltip'
import {FiInfo} from 'react-icons/fi'
import PageMainBox from '../components/page-main-box/PageMainBox'

const TooltipPage = () => {
	return (
		<PageMainBox pageTitle='Tooltip Component'>
			<div
				style={{
					marginBottom: '25px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Tooltip content="This is a helpful tooltip" position="top">
					<button style={{padding: '0.5rem 1rem'}}>Hover me</button>
				</Tooltip>
			</div>
			<hr></hr>
			<div
				style={{
					marginBottom: '25px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Tooltip content="More info here" position="right">
					<span style={{marginLeft: '2rem', cursor: 'pointer'}}>
						<FiInfo size={20} />
					</span>
				</Tooltip>
			</div>
			<hr></hr>
			<div
				style={{
					marginBottom: '25px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					paddingTop: '25px'
				}}
			>
				<Tooltip content="Tooltip component" position="right">
					<div className="h-14 w-42 text-black bg-blue-200 rounded-md flex items-center justify-center cursor-pointer">
						<p>Hover over me</p>
					</div>
				</Tooltip>
			</div>
		</PageMainBox>
	)
}

export default TooltipPage
