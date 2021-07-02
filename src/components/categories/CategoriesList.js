import CategoryItem from "./CategoryItem";
import { useState } from "react";
import SearchBar from "../SearchBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  const [query, setQuery] = useState("");
  
  const categoriesData = useSelector((state) => state.categories.categories);
  let categories = categoriesData
    .filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <CategoryItem category={category} key={category.id} />);

    
  return (
    <center>
    <br/><br/>
    <div className="row container"><br/>

    <br/><SearchBar setQuery={setQuery}  />

      <Link style={{padding:"5px",
      borderRadius:"15px 50px 30px",
        textDecoration:"none",color:"white",
        backgroundColor:"darkgreen",
        width:"170px",
        margin:"auto",color:"white",
        fontSize:"18px"}} to="/categories/new">
      ➕ Add Category</Link><br/><br/><br/>
      
      
      <div className="row">{categories} <hr/></div>
      
    </div>
    </center>
  );
};

export default CategoriesList;