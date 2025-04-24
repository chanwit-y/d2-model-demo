import Editor from "./Editor"

export const JSONEditor = () => {
	return <div   >
		<Editor height={600} useVim={true} />
		<div className=" modal-action">
			<button className="btn btn-active btn-accent">Add</button>
		</div>
	</div>
}
