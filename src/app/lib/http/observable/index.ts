import { LoadType, ErrorType } from '../@types';
import { Subject } from "rxjs"

export const loader$ = new Subject<LoadType>()
export const error$ = new Subject<ErrorType>()