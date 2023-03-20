import { createClient } from "next-sanity";

const client = createClient({
  projectId: "1j482xks",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});
export function Sanity({ pets }) {

  return (
    <div>
      tech radar sanity
      <h2>pets</h2>
      {pets.length > 0 && (
        <ul>
          {pets.map((pet) => (
            <li key={pet._id}>{pet?.name}</li>
          ))}
        </ul>
      )}
      {!pets && pets.length === 0 && <p>No pets to show</p>}
      {pets.length > 0 && (
        <div>
          <pre>{JSON.stringify(pets, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const pets = await client.fetch(`*[_type == "pet"]`);

  return {
    props: {
      pets
    }
  };
}

export default Sanity;
