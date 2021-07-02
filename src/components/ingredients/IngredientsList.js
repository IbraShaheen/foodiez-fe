// Styling
// import { ListWrapper } from "../styles";
// Components
import SearchBar from "../SearchBar";

import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import IngredientItem from "./IngredientItem";

const IngredientsList = (props) => {

  // const products = useSelector((state)=> state.products.products)
  const ingredients= props.ingredients;
//   console.log(Ingredients)
  const [query, setQuery] = useState("");

  const ingredientList = ingredients
    .filter((ingredient) =>
    ingredient.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((ingredient) => (
      <IngredientItem
      ingredient={ingredient}
        key={ingredient.id}

      />
    ));

  return (
    <div><br/><br/><br/>
      <SearchBar setQuery={setQuery} />
      <br/><br/>
      <div>{ingredientList}</div>
    </div>
  );
};

export default IngredientsList;