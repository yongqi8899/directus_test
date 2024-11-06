import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

const Home = async () => {
  const result = await directus.request(readItems("products", { fields: ["id", "name", "description", "images.*"] }));
  console.log("All available pages: ", result);
  return result.map((product) => {
    return (
      <div key={product.id}>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        {product.images &&
          product.images.map((image:any) => {
            return (
              <img
                key={image.id}
                src={`https://direct-green.dev.testen2go.de/assets/${image.directus_files_id}`}
                alt={product.name}
              />
            );
          })}

      </div>
    );
  });
};

export default Home;
