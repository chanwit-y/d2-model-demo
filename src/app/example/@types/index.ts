



type P1 = "A" | "B" | "C";
type P2 = "D" | "E" | "F";

type P3 = "A" | "B" | "C" | "D" | "E" | "F";

type CheckP3 = P3 extends P1 | P2 ? true : false;

type P4 = P1 extends P2 ? true : false;




type A<T extends P1 | P2> = T extends "A"
  ? { [K: string]: number }
  : T extends "D"
  ? { [K: string]: boolean }
  : { [K: string]: string };

type X2 = string;

const a: A<"A"> = {};
const b: A<"B"> = {};



type P5 = {
	name: string;
}

type P6 = {
	age: number;
}



type P7 = P5 & P6;

const p7: P7 = {
	name: "A",
	age: 21 
}


// class Pet {
// 	private _a: string = "";
// 	public b: string = "";
// 	protected name: string = "";

// 	constructor() {
// 	}
// }

// class Dog extends Pet {
// 	constructor() {
// 		super();
// 	}

// 	public cal() {
// 		this.name = "Dog";
// 	}

// }


// const p = new Pet();
// const d = new Dog();
