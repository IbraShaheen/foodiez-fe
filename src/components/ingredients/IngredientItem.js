


// Components

import { Link } from "react-router-dom";
// Styling
// import { IngredientWrapper } from "../styles";

const IngredientItem = (props) => {
 
  const ingredient=props.ingredient
  return (
    <div>
       
        {/* <img
        style={{width:"280px",height:"280px"}} alt={ingredient.name} src={ingredient.image} />
     
      <p>{ingredient.name}</p>
      
      */}
      <center>
    <div style={{
      
      margin:"1.5%",borderRadius:"10px",
      padding:"15px", width:"40%",
      boxShadow:"4px 4px 4px 5px gray",
      backgroundColor:"#e5e5e5"

    }}>
        
      <h2 >|  {ingredient.name}  |</h2><br/>
      {/* <Link to={`/ingredients/${ingredient.slug}`}>
        <img src={ingredient.image} style={{
          width:"280px",height:"280px",
          border:"double 5px green"}} />
        </Link><br/><br/><br/> */}
             
        <img src={ingredient.image} style={{
          width:"280px",height:"280px",
          border:"double 5px green"}} />
    </div>
    </center>
    </div>
  );
};

export default IngredientItem;