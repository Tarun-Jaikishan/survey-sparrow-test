import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { GrValidate } from "react-icons/gr";
import { FaCartPlus } from "react-icons/fa";

export default function Home() {
  const data = [
    {
      name: "Hyderabadi Chicken Dum Biryani",
      description:
        "Aromatic basmati rice cooked with succulent chicken pieces in a traditional dum style.",
      price: 280.0,
      is_veg: false,
      is_available: true,
    },
    {
      name: "Mughlai Chicken Biryani",
      description:
        "A rich and creamy biryani with tender chicken, nuts, and saffron.",
      price: 320.0,
      is_veg: false,
      is_available: false,
    },
    {
      name: "Chicken 65",
      description:
        "Spicy, deep-fried chicken bites, a perfect start to your meal.",
      price: 220.0,
      is_veg: false,
      is_available: true,
    },
    {
      name: "Paneer Tikka",
      description:
        "Cottage cheese cubes marinated in spices and grilled in a tandoor.",
      price: 200.0,
      is_veg: true,
      is_available: false,
    },
  ];

  console.log(data);

  return (
    <div className="mt-10 space-y-5">
      {data.map((item, i) => {
        return (
          <Card
            key={i}
            name={item.name}
            description={item.description}
            price={item.price}
            is_available={item.is_available}
            is_veg={item.is_veg}
          />
        );
      })}
    </div>
  );
}

const Card = ({ name, description, price, is_veg, is_available }) => {
  return (
    <article className="mx-10">
      <div className="bg-purple-100 shadow-lg p-5 rounded hover:bg-purple-200/50 hover:shadow-xl duration-300">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold uppercase">{name}</h1>
          <div
            className={`${is_veg ? "bg-green-200" : "bg-red-200"} flex items-center gap-2 px-2 py-1 rounded`}
          >
            <GiMeal
              className={`${is_veg ? "text-green-600" : "text-red-600"}`}
              size={22}
            />
            <span className={`${is_veg ? "text-green-600" : "text-red-600"}`}>
              {is_veg ? "Veg" : "Non-Veg"}
            </span>
          </div>
        </div>

        <p className="font-light">{description}</p>

        <div className="mt-5 flex justify-between">
          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-2 px-2 py-1 rounded`}>
              {is_available ? (
                <GrValidate
                  className={`${is_available ? "text-green-600" : "text-red-600"}`}
                  size={22}
                />
              ) : (
                <FaLock
                  className={`${is_available ? "text-green-600" : "text-red-600"}`}
                  size={22}
                />
              )}

              <span
                className={`${is_available ? "text-green-600" : "text-red-600"}`}
              >
                {is_available ? "Available" : "Not Available"}
              </span>
            </div>
          </div>

          <strong className="text-xl px-2 py-1 bg-purple-600 text-white rounded">
            INR {price}
          </strong>
        </div>
        <button
          className="mt-5 bg-green-600 text-white px-2 py-1 rounded"
          type="button"
        >
          Add to cart
        </button>
      </div>
    </article>
  );
};
