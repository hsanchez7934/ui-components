'use client'

import Badge from '@/app/components/badge/Badge'
import PageMainBox from '../components/page-main-box/PageMainBox'

const neutralBadges = [
	{
		badgeSize: 'small',
		badgeType: 'neutral',
		badgeText: 'Neutral'
	},
	{
		badgeSize: 'medium',
		badgeType: 'neutral',
		badgeText: 'Neutral'
	},
	{
		badgeSize: 'large',
		badgeType: 'neutral',
		badgeText: 'Neutral'
	}
]

const dangerBadges = [
	{
		badgeSize: 'small',
		badgeType: 'danger',
		badgeText: 'Danger'
	},
	{
		badgeSize: 'medium',
		badgeType: 'danger',
		badgeText: 'Danger'
	},
	{
		badgeSize: 'large',
		badgeType: 'danger',
		badgeText: 'Danger'
	}
]

const warningBadges = [
	{
		badgeSize: 'small',
		badgeType: 'warning',
		badgeText: 'Warning'
	},
	{
		badgeSize: 'medium',
		badgeType: 'warning',
		badgeText: 'Warning'
	},
	{
		badgeSize: 'large',
		badgeType: 'warning',
		badgeText: 'Warning'
	}
]

const successBadges = [
	{
		badgeSize: 'small',
		badgeType: 'success',
		badgeText: 'Success'
	},
	{
		badgeSize: 'medium',
		badgeType: 'success',
		badgeText: 'Success'
	},
	{
		badgeSize: 'large',
		badgeType: 'success',
		badgeText: 'Success'
	}
]

const brandBadges = [
	{
		badgeSize: 'small',
		badgeType: 'brand',
		badgeText: 'Brand'
	},
	{
		badgeSize: 'medium',
		badgeType: 'brand',
		badgeText: 'Brand'
	},
	{
		badgeSize: 'large',
		badgeType: 'brand',
		badgeText: 'Brand'
	}
]

export default function BadgesPage() {
	const renderedBadges = (
		badgesList: {badgeSize: string; badgeType: string; badgeText: string}[]
	) => {
		const badges = badgesList.map((badge, index) => {
			return (
				<Badge
					key={index}
					badgeSize={badge.badgeSize}
					badgeType={badge.badgeType}
					badgeText={badge.badgeText}
				/>
			)
		})
		return <div className="flex items-center gap-11 mb-9">{badges}</div>
	}

	return (
		<PageMainBox pageTitle='Badge Component'>
			{renderedBadges(successBadges)}
				{renderedBadges(warningBadges)}
				{renderedBadges(dangerBadges)}
				{renderedBadges(neutralBadges)}
				{renderedBadges(brandBadges)}
		</PageMainBox>
	)
}
