
"use client"


import { JSONEditor } from "@/app/components/JSONEditor";
import { createModal } from "@/app/lib/modal/ModalFactory";
import { Type } from "@sinclair/typebox";



export const { ProviderJSONModal, Ctx, modals, params } = createModal({
	jsonEditorModal: {
		title: "JSON Editor",
		param: Type.Object({
			// json: Type.Object({}),
		}),
		// content: Modal1,
		content: JSONEditor,
	},

}, {
	providerName: Type.Literal("JSONModal")
})