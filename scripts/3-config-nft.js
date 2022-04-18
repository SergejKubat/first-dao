import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0xcb852f91cbC3FAD20138fe387e6bb138BCEa729D"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Capricciosa",
        description: "This NFT will give you access to PizzaDAO!",
        image: readFileSync("scripts/assets/capricciosa.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
