"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddPet() {
  const [pet, setPet] = useState({ name: "", description: "" });

  const router = useRouter();
  async function postPet() {
    const postPetResult = await fetch("http://localhost:13560/api/v1/pet", {
      method: "POST",
      body: JSON.stringify(pet),
      headers: { "Content-Type": "application/json" },
    });

    if (postPetResult.ok) {
      router.push("/");
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg">Add pet</h2>
      <input
        type="text"
        id="name"
        value={pet.name}
        onChange={(e) => setPet((v) => ({ ...v, name: e.target.value }))}
        placeholder="pet name"
        className="text-black"
      ></input>
      <input
        type="text"
        id="decription"
        value={pet.description}
        onChange={(e) => setPet((v) => ({ ...v, description: e.target.value }))}
        placeholder="pet decription"
        className="text-black"
      ></input>
      <button
        type="button"
        disabled={!pet.name || !pet.description}
        onClick={postPet}
      >
        post this
      </button>
    </div>
  );
}
