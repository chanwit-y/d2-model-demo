import { use, useCallback, useState } from "react"
import Editor, { useEditor } from "../Editor"
import { createJson } from "./action"
import { Ctx } from "@/app/lib/config/modal"
import { useStore } from "./Stord"

export const JSONEditor = () => {
	const { close } = use(Ctx)
	const { value, setValue } = useEditor()
	const { reloadFileList } = useStore()


	const editHandler = useCallback((v: string) => {
		setValue(v)
	}, [])

	const addHandler = useCallback(async () => {
		await createJson(value);
		await reloadFileList();
		setValue("")
		close();
	}, [value])

	return <div>
		<Editor
			useVim
			height={600}
			onEdit={editHandler} />
		<div className=" modal-action">
			<button className="btn btn-active btn-accent"
				onClick={addHandler}
			>Add</button>
		</div>
	</div>
}
