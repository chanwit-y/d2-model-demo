import Image from "next/image";
import { Test } from "./example/Test";
import Optimistic from "./example/optimistic";

export default function Home() {
  return (
    <div className="p-2">
     {/* <Test />  */}
     <Optimistic />
    </div>
  );
}
