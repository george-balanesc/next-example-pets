import Link from "next/link";

export default async function Home() {
  const petsResult = await fetch("http://localhost:13560/api/v1/pet");
  if (!petsResult.ok) {
    return <div>Failed to fetch.</div>;
  }
  const pets = (await petsResult.json()).data as {
    name: string;
    description: string;
  }[];
  return (
    <div className="flex flex-col gap-3">
      {" "}
      <ul>
        {pets.map((pet) => (
          <li key={pet.name}>
            <Link href={`/pets/${pet.name}`}>{pet.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        <Link href={"/pets/add"} className="border-2 border-white p-1">
          add pet +
        </Link>
      </div>
    </div>
  );
}
