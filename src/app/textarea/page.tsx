'use client'

import React, {useState} from 'react'
import Textarea from '../components/textarea/Textarea'
import PageMainBox from '../components/page-main-box/PageMainBox'

const TextareaPage = () => {
	const [bio, setBio] = useState('')
	const [error, setError] = useState('')
	const [desc, setDesc] = useState('')
	const [descError, setDescError] = useState('')
	const [interests, setInterests] = useState('')
	const [errorStateInterests, setErrorStateInterests] = useState('Errors are present')

	const handleBioChange = (value: string) => {
		setBio(value)
		setError(value.length > 200 ? 'Bio cannot exceed 200 characters.' : '')
	}

	const handleDescChange = (value: string) => {
		setDesc(value)
		setDescError(value.length > 500 ? 'Description cannot exceed 200 characters.' : '')
	}

	const handleInterestsChange = (value: string) => {
		setInterests(value)
		setErrorStateInterests(value.length > 300 ? 'Interests cannot exceed 300 characters.' : '')
	}

	return (
		<PageMainBox pageTitle='Textarea Component'>
			<div>
				<Textarea
					label="Your Bio"
					value={bio}
					onChange={handleBioChange}
					maxLength={200}
					error={error}
					placeholder="Tell us about yourself..."
				/>
			</div>
			<div>
				<Textarea
					label="Description"
					value={desc}
					onChange={handleDescChange}
					maxLength={500}
					error={descError}
					placeholder="Enter description..."
				/>
			</div>
			<div>
				<Textarea
					label="Interests"
					value={interests}
					onChange={handleInterestsChange}
					maxLength={500}
					error={errorStateInterests}
					placeholder="Enter description..."
				/>
			</div>
		</PageMainBox>
	)
}

export default TextareaPage
