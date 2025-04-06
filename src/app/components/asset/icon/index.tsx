import { createElement } from 'react';
import { Dragable } from './Dragable';

export const Icons = {
	Dragable
}


export const useIcons = (key: keyof typeof Icons) => {

}


export const IconsX = (width: number, height: number) => {
	return {
		Dragable: createElement(Dragable, {
			width,
			height
		})
	}
}
