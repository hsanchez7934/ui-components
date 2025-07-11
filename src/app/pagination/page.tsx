'use client'

import React from 'react'
import PageMainBox from '../components/page-main-box/PageMainBox'
import Pagination from '../components/pagination/Pagination'

export default function PaginationPage() {
	const [page, setPage] = React.useState(1);

	return (
		<PageMainBox>
			<Pagination
				totalPages={10}
				currentPage={page}
				onPageChange={(newPage) => setPage(newPage)}
				prevLabel="Previous"
				nextLabel="Next"
			/>
		</PageMainBox>
	)
}
