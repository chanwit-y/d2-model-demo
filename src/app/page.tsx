import Image from "next/image";
import { Test } from "./example/Test";
import Optimistic from "./example/optimistic";
import { Query } from "./example/query";
import { Ex } from "./example/Ex";
import { FormEx } from "./example/form";
// import DemoContext from "./example/context/DemoContext";

export default function Home() {
  return (
    <div className="p-2">
     {/* <Test />  */}
     {/* <Optimistic /> */}
     {/* <DemoContext /> */}
     {/* <Query /> */}
     <FormEx />
    </div>
  );
}
