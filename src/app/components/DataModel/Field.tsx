import React from 'react'

export const Field = () => {
	return (
		<div className='flex items-end gap-2 '>
			<label className="form-control max-w-56">
				<div className="label p-1">
					<span className="label-text text-xs">Field</span>
				</div>
				<input className='input input-bordered input-sm' type="text"  />
			</label>


			<label className="form-control max-w-56">
				<div className="label p-1">
					<span className="label-text text-xs">Type</span>
				</div>
				<select className="select select-bordered select-sm max-w-xs">
					<option disabled >What is data type?</option>
					<option >map</option>
					<option selected>string</option>
				</select>
			</label>

			<button className='mb-1 btn btn-sm btn-circle btn-outline btn-info'>
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M3 5h6v6H3zm2 2v2h2V7zm6 0h10v2H11zm0 8h10v2H11zm-6 5l-3.5-3.5l1.41-1.41L5 17.17l4.59-4.58L11 14z"/></svg>
			</button>


			<button className='mb-1 btn btn-sm btn-circle btn-outline btn-info'>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM6.2 7.7h5v1.5h-5zm6.8 8.1h5v1.5h-5zm0-2.6h5v1.5h-5zM8 18h1.5v-2h2v-1.5h-2v-2H8v2H6V16h2zm6.1-7.1l1.4-1.4l1.4 1.4l1.1-1l-1.4-1.4L18 7.1L16.9 6l-1.4 1.4L14.1 6L13 7.1l1.4 1.4L13 9.9z"/></svg>
			</button>

			<button className='mb-1 btn btn-sm btn-circle btn-outline btn-error'>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13H5v-2h14z" /></svg>
			</button>
		</div>
	)
}
