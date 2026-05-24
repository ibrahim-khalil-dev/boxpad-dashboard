import { CONTACT } from "../lib/mockData";
import { X, Layout, ChevronDown, Plus } from "lucide-react";

export function DetailsPanel() {
	return (
		<div className='hidden lg:flex lg:w-72 bg-white border-l border-gray-200 flex-col overflow-hidden'>
			{/* Header */}
			<div className='px-4 py-3 border-b border-gray-200 flex justify-between items-center flex-shrink-0'>
				<h3 className='font-semibold text-gray-900'>
					Details
				</h3>
				<div className='flex items-center gap-1'>
					<button className='p-1 hover:bg-gray-100 rounded transition-colors'>
						<Layout size={16} className='text-gray-500' />
					</button>
					<button className='p-1 hover:bg-gray-100 rounded transition-colors'>
						<X size={16} className='text-gray-500' />
					</button>
				</div>
			</div>

			<div className='flex-1 overflow-y-auto'>
				{/* Chat Data */}
				<div className='px-4 py-3 border-b border-gray-200'>
					<button className='w-full flex justify-between items-center mb-3'>
						<h4 className='text-sm font-semibold text-gray-900'>
							Chat Data
						</h4>
						<ChevronDown
							size={14}
							className='text-gray-400'
						/>
					</button>
					<div className='space-y-6'>
						<div className='flex justify-between items-center'>
							<span className='text-sm text-gray-500'>
								Assignee
							</span>
							<div className='flex items-center gap-1.5'>
								<div className='h-5 w-5 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-semibold'>
									JW
								</div>
								<span className='text-sm text-gray-900'>
									James West
								</span>
							</div>
						</div>
						<div className='flex justify-between items-center'>
							<span className='text-sm text-gray-500'>
								Team
							</span>
							<div className='flex items-center gap-1.5'>
								<div className='h-5 w-5 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-semibold'>
									ST
								</div>
								<span className='text-sm text-gray-900'>
									Sales Team
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Contact Data */}
				<div className='px-4 py-3 border-b border-gray-200'>
					<button className='w-full flex justify-between items-center mb-3'>
						<h4 className='text-sm font-semibold text-gray-900'>
							Contact Data
						</h4>
						<ChevronDown
							size={14}
							className='text-gray-400'
						/>
					</button>
					<div className='space-y-6'>
						{[
							{
								label: "First Name",
								value: CONTACT.firstName,
							},
							{
								label: "Last Name",
								value: CONTACT.lastName,
							},
							{
								label: "Phone number",
								value: CONTACT.phone,
							},
							{ label: "Email", value: CONTACT.email },
						].map((field) => (
							<div
								key={field.label}
								className='flex justify-between items-center'>
								<span className='text-sm text-gray-500'>
									{field.label}
								</span>
								<span className='text-sm text-gray-900 font-medium'>
									{field.value}
								</span>
							</div>
						))}
					</div>
					<button className='text-sm text-blue-600 hover:text-blue-700 cursor-pointer font-medium mt-2'>
						See all
					</button>
				</div>

				{/* Contact Labels */}
				<div className='px-4 py-3 border-b border-gray-200'>
					<button className='w-full flex justify-between items-center mb-3'>
						<h4 className='text-sm font-semibold text-gray-900'>
							Contact Labels
						</h4>
						<ChevronDown
							size={14}
							className='text-gray-400'
						/>
					</button>
					<div className='flex gap-2 flex-wrap items-center'>
						{CONTACT.labels.map((label) => (
							<span
								key={label.id}
								className='flex items-center gap-1 px-2 py-1 border border-blue-300 text-blue-600 text-xs rounded-full'>
								{label.name}
							</span>
						))}
						<button className='h-6 w-6 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100'>
							<Plus size={12} className='text-gray-500' />
						</button>
					</div>
				</div>

				{/* Notes */}
				<div className='px-4 py-3 border-b border-gray-200'>
					<button className='w-full flex justify-between items-center mb-3'>
						<h4 className='text-sm font-semibold text-gray-900'>
							Notes
						</h4>
						<ChevronDown
							size={14}
							className='text-gray-400'
						/>
					</button>
					<div className='space-y-2'>
						<input
							type='text-area'
							placeholder='Add a note...'
							className='p-2.5 bg-yellow-50 border outline-none border-yellow-200 rounded text-sm text-gray-900'
						/>

						<div className='p-2.5 bg-yellow-50 border border-yellow-200 rounded text-sm text-gray-900'>
							Strong potential for future upgrades
						</div>
					</div>
				</div>

				{/* Other Chats */}
				<div className='px-4 py-3'>
					<button className='w-full flex justify-between items-center mb-3'>
						<h4 className='text-sm font-semibold text-gray-900'>
							Other Chats
						</h4>
						<ChevronDown
							size={14}
							className='text-gray-400'
						/>
					</button>
					<div className='flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer transition-colors'>
						<div className='h-8 w-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-semibold flex-shrink-0'>
							F
						</div>
						<div className='flex-1 min-w-0'>
							<p className='text-sm font-medium text-gray-900'>
								Fit4Life
							</p>
							<p className='text-xs text-gray-500'>
								On my way!
							</p>
						</div>
						<p className='text-xs text-gray-500'>
							08/06/25
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
