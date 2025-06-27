import PageMainBox from '../components/page-main-box/PageMainBox'
import TextInputs from '../components/text-input/TextInputs'
import {RiMailLine, RiQuestionLine} from 'react-icons/ri'

const inputsList = [
	{
		labelText: 'Email',
		inputType: 'email',
		placeholderText: 'name@email.com',
		hintText: 'This is a hint text.',
		inputSize: 'small',
		title: 'Input Title',
		labelForID: 'email1',
		inputID: 'email1',
		iconLeft: <RiMailLine />,
		iconRight: <RiQuestionLine />,
		classes: 'inputFocusNormal',
		errorText: ''
	},
	{
		labelText: 'Password',
		inputType: 'password',
		placeholderText: 'Enter password...',
		hintText: 'This is a hint text.',
		inputSize: 'small',
		title: 'Input Title',
		labelForID: 'password1',
		inputID: 'password1',
		iconRight: <RiQuestionLine />,
		classes: 'inputFocusNormal',
		errorText: ''
	},
	{
		labelText: 'Email',
		inputType: 'email',
		placeholderText: 'name@email.com',
		hintText: 'This is a hint text.',
		inputSize: 'small',
		title: 'Input Title',
		labelForID: 'email2',
		inputID: 'email2',
		iconLeft: <RiMailLine />,
		iconRight: <RiQuestionLine />,
		disabledState: true,
		classes: 'inputFocusNormal',
		errorText: ''
	},
	{
		labelText: 'Email',
		inputType: 'email',
		placeholderText: 'name@email.com',
		hintText: '',
		errorText: 'This is an error message.',
		inputSize: 'small',
		title: 'Input Title',
		labelForID: 'password1',
		inputID: 'password1',
		iconRight: <RiQuestionLine />,
		classes: 'inputFocusError',
		iconColor: 'rgba(220, 38, 38, 0.8)'
	}
]

export default function TextInputsPage() {
	const renderedInputListItem = () => {
		return inputsList.map((input, index) => {
			return (
				<div className="h-auto mb-6" key={index}>
					<TextInputs {...input} />
				</div>
			)
		})
	}

	return <PageMainBox>{renderedInputListItem()}</PageMainBox>
}
