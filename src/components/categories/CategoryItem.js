// import { LibraryItem } from "../../styles";
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const category = props.category;
  return (
    <center>
    <div style={{
      
      margin:"1.5%",borderRadius:"10px",
      padding:"15px", width:"40%",
      boxShadow:"4px 4px 4px 5px gray",
      backgroundColor:"#e5e5e5"

    }}>
        
      <h2 >  {category.name}  </h2><br/>
      <Link to={`/categories/${category.slug}`}>
        <img src={category.image} style={{
          width:"280px",height:"280px",
          border:"double 5px green"}} />
        </Link><br/><br/><br/>
    </div>
    </center>);
};
export default CategoryItem;