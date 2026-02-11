'use client'

import Link from 'next/link'

export default function LandingPage() {
	return (
		<main className="min-h-screen bg-gray-50 dark:bg-gray-900">
			{/* Hero Section */}
			<section className="px-6 py-24">
				<div className="max-w-5xl mx-auto text-center">
					<span className="inline-block mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 px-4 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
						UI Component Library
					</span>

					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
						Reusable UI components built for modern React applications
					</h1>

					<p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
						A curated collection of reusable UI components built with React, Next.js, and Tailwind
						CSS. Designed to streamline development, enforce consistency, and scale across products.
					</p>
				</div>
			</section>

			{/* Tech Stack */}
			<section className="px-6 py-16 bg-white dark:bg-gray-800">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-10 text-center">
						Built with a modern, scalable stack
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
						<div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
								React + Next.js
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								Server-ready, component-driven architecture optimized for performance and
								maintainability.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
								Tailwind CSS
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								Utility-first styling for consistent, theme-aware components with minimal overhead.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
								Design-System Ready
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								Components are built to be composable, themeable, and easy to extend as product
								needs evolve.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Components Preview */}
			<section className="px-6 py-20">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
						Included components
					</h2>

					<p className="max-w-2xl mx-auto text-center text-gray-600 dark:text-gray-400 mb-12">
						A growing set of foundational UI components commonly used across modern web
						applications.
					</p>

					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
						{[
							{text: 'Badge', href: '/badge'},
							{text: 'Button', href: '/button'},
							{text: 'Checkbox', href: '/checkbox'},
							{text: 'Dropdown', href: '/dropdown'},
							{text: 'Pagination', href: '/pagination'},
							{text: 'Radio Cards', href: '/radio-cards'},
							{text: 'Tabs', href: '/tabs'},
							{text: 'Textarea', href: '/textarea'},
							{text: 'Text Input', href: '/text-input'},
							{text: 'Toast', href: '/toast'},
							{text: 'Toggle', href: '/toggle'},
							{text: 'Tooltip', href: '/tooltip'}
						].map((component) => (
							<div
								key={component.text}
								className={[
									'rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800',
									'text-center text-sm font-medium text-gray-800 dark:text-gray-200',
									'hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer'
								].join(' ')}
							>
								<Link
									href={component.href}
									className="h-full w-full flex items-center justify-center px-2 py-4"
								>
									{component.text}
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Footer CTA */}
			<section className="px-6 py-20 bg-gray-100 dark:bg-gray-800">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
						Built to accelerate UI development
					</h2>

					<p className="text-gray-600 dark:text-gray-400 mb-8">
						This library focuses on clarity, consistency, and developer experience — making it
						easier to build polished interfaces faster.
					</p>

					<a
						href="/badge"
						className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
					>
						Explore the components
					</a>
				</div>
			</section>
		</main>
	)
}
