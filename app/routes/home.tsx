import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Title } from "~/components/Title";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  const [inputData, setInputData] = useState('');

  function handleClick() {
    console.log("Button Clicked!: Here is what is in input: ", inputData)
  }

  return (
    <main >
      <Title> Recipe Finder </Title>
      <input className="border-2" type="text" 
      value={inputData}
      onChange={(e) => setInputData(e.target.value) }
      />
      <button onClick={handleClick}
      className="border">
        Click Me
      </button>
    </main>
  );
}
