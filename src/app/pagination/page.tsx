'use client'

import React from 'react'
import PageMainBox from '../components/page-main-box/PageMainBox'
import Pagination from '../components/pagination/Pagination'

export default function PaginationPage() {
	const [page, setPage] = React.useState(1);
	const [page1, setPage1] = React.useState(1)
	const [page2, setPage2] = React.useState(5)

	return (
		<PageMainBox pageTitle='Pagination Component'>
			<div className='mb-10'>
			<Pagination
				totalPages={10}
				currentPage={page}
				onPageChange={(newPage) => setPage(newPage)}
				prevLabel="Previous"
				nextLabel="Next"
			/>
			</div>
			<div className='mb-10'>
			<Pagination
				totalPages={15}
				currentPage={page2}
				onPageChange={(newPage) => setPage2(newPage)}
				prevLabel="Previous"
				nextLabel="Next"
			/>
			</div>
			<div>
			<Pagination
				totalPages={3}
				currentPage={page1}
				onPageChange={(newPage) => setPage1(newPage)}
				prevLabel="Previous"
				nextLabel="Next"
			/>
			</div>
		</PageMainBox>
	)
}
