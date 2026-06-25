import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Title } from "~/components/Title";
import { useState } from "react";
import { Button } from "~/components/Button";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  const navigate = useNavigate();
  const [inputData, setInputData] = useState('');

  function handleNavigate() {
    navigate(`/recipes?search=${inputData}`)
  }

  function handleClick() {
    console.log("Button Clicked!: Here is what is in input: ", inputData)
    handleNavigate()
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      handleClick()
    }
  }

  return (
    <div>
      <Title > Recipe Finder </Title>
      <div className="flex justify-center gap-1">
        <input className="border-2" type="text" 
        value={inputData}
        onChange={(e) => setInputData(e.target.value) }
        onKeyDown={(e) => handleKeyDown(e)}
        />
        <Button 
          label="Click Me!"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
