import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

const Home = async () => {
  const result = await directus.request(readItems("products"));
  console.log("All available pages: ", result);
  // console.log("All available pages: ", JSON.stringify(result));
  return <h1>home</h1>;
};

export default Home;