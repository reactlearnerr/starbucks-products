const express = require("express");
const app = express();

const products = [
  {
    name: "Pumpkin Spice Chai Tea Latte",
    productId: 1,
    description: "Pumpkin and spices go great with steamed milk and light foam",
    price: 6,
    image_url:
      "https://globalassets.starbucks.com/assets/727b21c60eec40208098cb94903ebca0.jpg",
    count: 20,
  },
  {
    name: "Honey Citrus Mint Tea",
    productId: 2,
    description:
      "Herbal tea with steamed lemonade and a touch of honey is perfect for the cold weather!",
    price: 3,
    image_url:
      "https://globalassets.starbucks.com/assets/4bffd5c29ee644a5b810610c322f741a.jpg",
    count: 30,
  },
  {
    name: "Morning Muffin",
    productId: 3,
    description:
      "This healthy muffin has zucchini, carrots, crunchy nuts and a dash of cane sugar",
    price: 2,
    image_url:
      "https://globalassets.starbucks.com/assets/3f3ff719711d45b2993903a7a8d1549d.jpg",
    count: 5,
  },
  {
    name: "Iced lemon pond cake",
    productId: 4,
    description: "A moist lemon cake with sweet icing",
    price: 2,
    image_url:
      "https://globalassets.starbucks.com/assets/12014fa89261475798a3c3b7dcc54552.jpg",
    count: 4,
  },
];

app.get("/api/v1/products", (req, res) => {
  res.json({ products: products, statusCode: 200, message: "Success" });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
