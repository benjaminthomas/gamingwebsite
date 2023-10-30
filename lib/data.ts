import headphone from "@/public/products/gaminheadphones.jpg";
import keyboard from "@/public/products/gamingkeyboard.jpg";
import mouse from "@/public/products/gamingmouse.jpg";
import chair from "@/public/products/gamingchair.jpg";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "About Us",
    hash: "/about",
  },
  {
    name: "New Arrivals",
    hash: "/arrivals",
  },
  {
    name: "Best Sellers",
    hash: "/bestsellers",
  },
] as const;

export const products = [
  {
    productfrom: "price starts from",
    price: "Rs. 5000",
    onsale: "20% off",
    productname: "Keyboards",
    image: keyboard,
  },
  {
    productfrom: "price starts from",
    price: "Rs. 12000",
    productname: "Gaming Chairs",
    image: chair,
  },
  {
    productfrom: "price starts from",
    onsale: "10% off",
    price: "Rs. 1000",
    productname: "Mouse",
    image: mouse,
  },
  {
    productfrom: "price starts from",
    price: "Rs. 10000",
    productname: "Headphones",
    image: headphone,
  },
] as const;
