import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

const Home = async () => {
  const result = await directus.request(readItems("products"));
  console.log("All available pages: ", result);
  return (
  result.map((product) => {
    return (
      <div key={product.id}>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <img  src={`https://direct-green.dev.testen2go.de/assets/${product.image}`} alt={product.name} />
        <img  src={`https://direct-green.dev.testen2go.de/items/${product.image}`} alt={product.name} />
        <img  src={`https://direct-green.dev.testen2go.de/items/products/${product.image}`} alt={product.name} />
      </div>
    );
  })
  );
};

export default Home;