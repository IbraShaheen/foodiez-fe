import { Link, Redirect, useParams } from "react-router-dom";

// Components

import { useSelector } from "react-redux";


import IngredientsList from "../ingredients/IngredientsList";
const CategoriesDetail = () => {
  const ingredientLoading=useSelector((state)=>state.ingredients.loading)
  const categoryLoading = useSelector(state => state.categories.loading)
  const categories = useSelector((state) => state.categories.categories);
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const categorySlug = useParams().categorySlug;
  const category = categories.find(
    (category) => category.slug === categorySlug
  );
  console.log(category)

  if (!category||categoryLoading || ingredientLoading) return <Redirect to="/categories" />;
const getIngredientById = (ingredientId, ingredients) => 
    ingredients.find((ingredient) => ingredient.id === ingredientId);

    
  const listOfIngredients = category.ingredients? category.ingredients.map((ingredient) =>getIngredientById(ingredient.id, ingredients)) : []
  
 
    
  return (
    <div>
      <center>

      <br/><Link to={`/categories/${category.id}/ingredients/new`}  
      style={{padding:"7px",borderRadius:"10px",
      textDecoration:"none",color:"white",
      backgroundColor:"darkgreen",
      width:"200px",
      margin:"auto",color:"white",
      fontSize:"18px"}}> ➕ Add Ingredient</Link>
      <br/><br/><h2> {category.name} </h2>
      
      <br/>
      <img style={{width:"280px",height:"280px"}} src={category.image} alt={category.name} style={{width:"250px",height:"250px"}} /><br/><br/>
      
      <hr style={{width:"80%",
      backgroundColor:"green", height:"3px"}}/>
       <hr style={{width:"60%",
      backgroundColor:"green", height:"3px"}}/>
       <hr style={{width:"25%",
      backgroundColor:"green", height:"2px"}}/>

      {categoryLoading?<h3>Loading...</h3>:<IngredientsList ingredients={listOfIngredients} />}
      </center>
    </div>
  );
};

export default CategoriesDetail;
