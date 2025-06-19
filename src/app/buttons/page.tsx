'use client'

import {RiStarSLine} from 'react-icons/ri'
import Button from '../components/buttons/Button'

const primaryBtns = [
	{
		buttonType: 'primary',
		buttonSize: 'small',
		buttonText: 'Primary',
		ariaLabel: 'Primary Button'
	},
	{
		buttonType: 'primary',
		buttonSize: 'medium',
		buttonText: 'Primary',
		ariaLabel: 'Primary Button',
		iconPlacement: 'left',
		iconLeft: <RiStarSLine style={{fontSize: '22px', marginRight: '10px'}} />
	},
	{
		buttonType: 'primary',
		buttonSize: 'large',
		buttonText: 'Primary',
		ariaLabel: 'Primary Button',
		iconPlacement: 'right',
		iconRight: <RiStarSLine style={{fontSize: '24px', marginLeft: '10px'}} />
	},
	{
		buttonType: 'primary',
		buttonSize: 'xl',
		buttonText: 'Primary',
		ariaLabel: 'Primary Button'
	},
	{
		buttonType: 'primary',
		buttonSize: 'btnIconXLarge',
		ariaLabel: 'Primary Button',
		iconCenter: <RiStarSLine />
	}
]

const secondaryButtons = [
	{
		buttonType: 'secondary',
		buttonSize: 'small',
		buttonText: 'Secondary',
		ariaLabel: 'Secondary Button'
	},
	{
		buttonType: 'secondary',
		buttonSize: 'medium',
		buttonText: 'Secondary',
		ariaLabel: 'Secondary Button',
		iconPlacement: 'left',
		iconLeft: <RiStarSLine style={{fontSize: '22px', marginRight: '10px'}} />
	},
	{
		buttonType: 'secondary',
		buttonSize: 'large',
		buttonText: 'Secondary',
		ariaLabel: 'Secondary Button',
		iconPlacement: 'right',
		iconRight: <RiStarSLine style={{fontSize: '24px', marginLeft: '10px'}} />
	},
	{
		buttonType: 'secondary',
		buttonSize: 'xl',
		buttonText: 'Secondary',
		ariaLabel: 'Secondary Button'
	},
	{
		buttonType: 'secondary',
		buttonSize: 'btnIconXLarge',
		ariaLabel: 'Secondary Button',
		textColor: 'black',
		iconCenter: <RiStarSLine />
	}
]

const tertiaryButtons = [
	{
		buttonType: 'tertiary',
		buttonSize: 'small',
		buttonText: 'Tertiary',
		ariaLabel: 'Tertiary Button'
	},
	{
		buttonType: 'tertiary',
		buttonSize: 'medium',
		buttonText: 'Tertiary',
		ariaLabel: 'Tertiary Button',
		iconLeft: <RiStarSLine style={{fontSize: '22px', marginRight: '10px'}} />,
		iconPlacement: 'left'
	},
	{
		buttonType: 'tertiary',
		buttonSize: 'large',
		buttonText: 'Tertiary',
		ariaLabel: 'Tertiary Button',
		iconRight: <RiStarSLine style={{fontSize: '24px', marginLeft: '10px'}} />,
		iconPlacement: 'right'
	},
	{
		buttonType: 'tertiary',
		buttonSize: 'xl',
		buttonText: 'Tertiary',
		ariaLabel: 'Tertiary Button',
		iconPlacement: 'both',
		iconRight: <RiStarSLine style={{fontSize: '24px', marginLeft: '10px'}} />,
		iconLeft: <RiStarSLine style={{fontSize: '22px', marginRight: '10px'}} />
	},
	{
		buttonType: 'tertiary',
		buttonSize: 'btnIconXLarge',
		ariaLabel: 'Tertiary Button',
		iconCenter: <RiStarSLine />
	}
]

const linkcolorButtons = [
	{
		buttonType: 'linkcolor',
		buttonSize: 'small',
		buttonText: 'Link Color',
		ariaLabel: 'Link Color Button'
	},
	{
		buttonType: 'linkcolor',
		buttonSize: 'medium',
		buttonText: 'Link Color',
		ariaLabel: 'Link Color Button',
		iconPlacement: 'left',
		iconLeft: <RiStarSLine style={{fontSize: '22px', marginRight: '10px'}} />
	},
	{
		buttonType: 'linkcolor',
		buttonSize: 'large',
		buttonText: 'Link Color',
		ariaLabel: 'Link Color Button',
		iconPlacement: 'right',
		iconRight: <RiStarSLine style={{fontSize: '24px', marginLeft: '10px'}} />
	},
	{
		buttonType: 'linkcolor',
		buttonSize: 'xl',
		buttonText: 'Link Color',
		ariaLabel: 'Link Color Button',
		iconPlacement: 'both',
		iconRight: <RiStarSLine style={{fontSize: '24px', marginLeft: '10px'}} />,
		iconLeft: <RiStarSLine style={{fontSize: '22px', marginRight: '10px'}} />
	},
	{
		buttonType: 'linkcolor',
		buttonSize: 'xl',
		ariaLabel: 'Link Color Button',
		iconPlacement: 'right',
		iconRight: <RiStarSLine style={{fontSize: '28px'}} />
	}
]

const linkgrayButtons = [
	{
		buttonType: 'linkgray',
		buttonSize: 'small',
		buttonText: 'Link Gray',
		ariaLabel: 'Link Gray Button'
	},
	{
		buttonType: 'linkgray',
		buttonSize: 'medium',
		buttonText: 'Link Gray',
		ariaLabel: 'Link Gray Button',
		iconLeft: <RiStarSLine style={{fontSize: '22px', marginRight: '10px'}} />,
		iconPlacement: 'left'
	},
	{
		buttonType: 'linkgray',
		buttonSize: 'large',
		buttonText: 'Link Gray',
		ariaLabel: 'Link Gray Button',
		iconRight: <RiStarSLine style={{fontSize: '24px', marginLeft: '10px'}} />,
		iconPlacement: 'right'
	},
	{
		buttonType: 'linkgray',
		buttonSize: 'xl',
		buttonText: 'Link Gray',
		ariaLabel: 'Link Gray Button',
		iconPlacement: 'both',
		iconRight: <RiStarSLine style={{fontSize: '24px', marginLeft: '10px'}} />,
		iconLeft: <RiStarSLine style={{fontSize: '22px', marginRight: '10px'}} />
	},
	{
		buttonType: 'linkgray',
		buttonSize: 'xl',
		ariaLabel: 'Link Gray Button',
		iconPlacement: 'right',
		iconRight: <RiStarSLine style={{fontSize: '28px'}} />
	}
]

const destructiveButtons = [
	{
		buttonType: 'destructive',
		buttonSize: 'small',
		buttonText: 'Destructive',
		ariaLabel: 'Destructive Button'
	},
	{
		buttonType: 'destructive',
		buttonSize: 'medium',
		buttonText: 'Destructive',
		ariaLabel: 'Destructive Button',
		iconLeft: <RiStarSLine style={{fontSize: '22px', marginRight: '10px'}} />,
		iconPlacement: 'left'
	},
	{
		buttonType: 'destructive',
		buttonSize: 'large',
		buttonText: 'Destructive',
		ariaLabel: 'Destructive Button',
		iconRight: <RiStarSLine style={{fontSize: '24px', marginLeft: '10px'}} />,
		iconPlacement: 'right'
	},
	{
		buttonType: 'destructive',
		buttonSize: 'xl',
		buttonText: 'Destructive',
		ariaLabel: 'Destructive Button'
	},
	{
		buttonType: 'destructive',
		buttonSize: 'btnIconXLarge',
		ariaLabel: 'Destructive Button',
		iconCenter: <RiStarSLine />
	}
]

type ButtonType = string | 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'linkcolor' | 'linkgray'
type ButtonSize = string | 'small' | 'medium' | 'large' | 'xl'

type Btns = {
	buttonType: ButtonType
	buttonSize: ButtonSize
	buttonText?: string
	iconPlacement?: string
	iconLeft?: React.ReactElement
	iconRight?: React.ReactElement
	iconCenter?: React.ReactElement
	classes?: string
	ariaLabel: string
	btnDisabledState?: boolean
}

const renderedBtns = (btns: Btns[]) => {
	const buttonsToRender = btns.map((btn: Btns, index: number) => {
		return (
			<div key={index} className="inline-block">
				<Button {...btn} btnDisabledState={index === 3 ? true : false} />
			</div>
		)
	})
	return <div className="flex flex-wrap items-center gap-7 p-8">{buttonsToRender}</div>
}

export default function ButtonsPage() {
	return (
		<main className="min-h-screen pt-20 bg-white dark:bg-black flex flex-col items-center justify-center">
			<div className="h-auto">
				{renderedBtns(primaryBtns)}
				{renderedBtns(secondaryButtons)}
				{renderedBtns(tertiaryButtons)}
				{renderedBtns(linkcolorButtons)}
				{renderedBtns(linkgrayButtons)}
				{renderedBtns(destructiveButtons)}
			</div>
		</main>
	)
}
