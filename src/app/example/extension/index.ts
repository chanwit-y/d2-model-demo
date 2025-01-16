export {};

declare global {
  interface Array<T extends number | string> {
	print: () => void;
  }
  interface String {
	cancat: (a: string) => string;
  }
}


Array.prototype.print = function () {
	this.map((item) => console.log(item));
};


const a = [1, 2, 3];
a.print();

const b = ["a", "b", "c"];
b.print();



String.prototype.cancat = function (a: string) {
	return this + a;
}


console.log("Hello".cancat(" World"));