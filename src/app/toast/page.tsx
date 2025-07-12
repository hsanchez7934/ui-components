import React from 'react'
import Toast from '@/app/components/toast/Toast'
import PageMainBox from '../components/page-main-box/PageMainBox'

const styles = {
	marginBottom: '20px',
	paddingLeft: '20px',
	paddingRight: '20px'
}

const App = () => {
	return (
		<PageMainBox>
			<div style={styles}>
				<Toast type="success" message="Your changes have been saved successfully." />
			</div>
			<div style={styles}>
				<Toast type="warning" message="This action may affect system performance." />
			</div>
			<div style={styles}>
				<Toast type="error" message="Failed to save changes. Please try again." />
			</div>
			<div style={styles}>
				<Toast type="neutral" message="You're viewing read-only mode." />
			</div>
		</PageMainBox>
	)
}

export default App
