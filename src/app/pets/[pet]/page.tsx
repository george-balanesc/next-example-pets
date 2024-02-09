export default async function Pet({ params }: { params: { pet: string } }) {
  const petResult = await fetch(
    `http://localhost:13560/api/v1/pet/${encodeURI(params.pet)}`,
    { next: { revalidate: 0 }, cache: "no-cache" }
  );
  if (!petResult.ok) {
    return <div>Failed to fetch.</div>;
  }
  const pet = (await petResult.json()).data as {
    name: string;
    description: string;
  };
  return (
    <>
      {pet ? (
        <h1 className="text-lg white">
          {pet.name} - {pet.description}
        </h1>
      ) : (
        <h1>no such pet bruv</h1>
      )}
    </>
  );
}
