'use client'

import PageMainBox from '../components/page-main-box/PageMainBox'
import DropDown from '../components/dropdown/Dropdown'
import { FaAddressBook } from 'react-icons/fa6'
import { PiBowlFood } from "react-icons/pi";
import {faker} from '@faker-js/faker'
import { MdAirplanemodeActive } from "react-icons/md";
import { PiBird } from "react-icons/pi";
import { GiCommercialAirplane } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";

export default function DropDownPage() {
	const airlineData = () => {
		const data = []
		for (let i = 0; i < 5; i++) {
			data.push({
				value: faker.airline.airport().iataCode
			})
		}
		return data
	}

	const employesData = () => {
		const data = []
		for (let i = 0; i < 10; i++) {
			data.push({
				value: faker.person.fullName(),
				iconLeft: <IoPerson className='clickable text-black dark:text-black mr-1.5' />
			})
		}
		return data
	}

	const foodData = () => {
		const data = []
		for (let i = 0; i < 6; i++) {
			data.push({
				value: faker.food.dish()
			})
		}
		return data
	}

	const birdSpeciesData = () => {
		const data = []
		for (let i = 0; i < 5; i++) {
			data.push({
				value: faker.animal.bird()
			})
		}
		return data
	}

	const loremIpsumData = () => {
		const data = []
		for (let i = 0; i < 6; i++) {
			data.push({
				value: faker.lorem.sentence()
			})
		}
		return data
	}

	const renderedMenus = () => {
		airlineData()
		const menus = [
			{
				width: 250,
				height: 40,
				iconLeft: <MdAirplanemodeActive className='clickable' />,
				data: airlineData(),
				bgColor: 'bg-sky-200',
				bgColorHover: 'hover:bg-sky-300',
				textColorLightMode: 'text-black',
				textColorDarkMode: 'dark:text-black',
				textColorHoverLightMode: 'text-black',
				textColorHoverDarkMode: 'dark:hover:text-black'
			},
			{
				width: 275,
				height: 45,
				bgColor: 'bg-red-200',
				bgColorHover: 'hover:bg-red-300',
				iconLeft: <FaAddressBook className='clickable' />,
				data: employesData(),
				textColorLightMode: 'text-black',
				textColorDarkMode: 'dark:text-black',
				textColorHoverLightMode: 'text-black',
				textColorHoverDarkMode: 'dark:hover:text-black'
			},
			{
				width: 300,
				height: 50,
				bgColor: 'bg-yellow-200',
				bgColorHover: 'hover:bg-yellow-300',
				iconLeft: <PiBowlFood className='clickable' />,
				data: foodData(),
				textColorLightMode: 'text-black',
				textColorDarkMode: 'dark:text-black',
				textColorHoverLightMode: 'text-black',
				textColorHoverDarkMode: 'dark:hover:text-black'
			},
			{
				width: 325,
				height: 50,
				bgColor: 'bg-indigo-200',
				bgColorHover: 'hover:bg-indigo-300',
				iconLeft: <PiBird className='clickable' />,
				data: birdSpeciesData(),
				textColorLightMode: 'text-black',
				textColorDarkMode: 'dark:text-black',
				textColorHoverLightMode: 'text-black',
				textColorHoverDarkMode: 'dark:hover:text-black'
			},
			{
				width: 350,
				height: 50,
				bgColor: 'bg-green-200',
				bgColorHover: 'hover:bg-green-300',
				data: loremIpsumData(),
				textColorLightMode: 'text-black',
				textColorDarkMode: 'dark:text-black',
				textColorHoverLightMode: 'text-black',
				textColorHoverDarkMode: 'dark:hover:text-black'
			},
			{
				width: 250,
				height: 40,
				iconLeft: <GiCommercialAirplane className='clickable' />,
				data: [{value: faker.airline.airline().name}],
				isDisabled: true
			}
		]

		return menus.map((menu, index) => {
			return (
				<div key={index} className='mb-10'>
					<DropDown key={index} {...menu} />
				</div>
			)
		})
	}

	return <PageMainBox>{renderedMenus()}</PageMainBox>
}
