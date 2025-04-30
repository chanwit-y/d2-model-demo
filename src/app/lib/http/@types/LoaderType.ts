
export type LoadType = {
  type: Load
  loaderId: string 
}

export enum Load {
  Loading,
  Loaded,
}