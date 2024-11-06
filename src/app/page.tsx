import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

const Home = async () => {
  const result = await directus.request(
    readItems("products", { fields: ["id", "name", "description", "images.*"] })
  );

  console.log("All available pages: ", result);

  // Check if result is an array and has at least one element before accessing images
  if (Array.isArray(result) && result.length > 0) {
    console.log("Available images: ", result[0].images);
  } else {
    console.log("No products found.");
  }

  return (
    <div>
      {result.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          {/* Check if product.images is an array before mapping */}
          {Array.isArray(product.images) &&
            product.images.map((image) => (
              <img
                key={image.id}
                src={`https://direct-green.dev.testen2go.de/assets/${image.directus_files_id}`}
                alt={product.name}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default Home;