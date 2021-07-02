import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory, fetchCategories, updateCategory } from "../../store/actions/categoryActions";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const CategoryForm = () => {
 
  // const categorySlug = useParams().categorySlug;
  // const categories = useSelector((state) => state.categories.categories);


    const [category, setCategory] = useState(
       {
            name: "",
            image: "",
       } 
    );
    
  const dispatch = useDispatch();
  const history = useHistory();
  const resetForm = () => {
    setCategory({
      name: "",
      image: "",
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
 dispatch(addCategory(category));
    history.push("/categories");
    
    resetForm();
  };
  const handleChange = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
  };
  const handleImage = (event) => {
    setCategory({ ...category, image: event.target.files[0] });
  };

  return (
    <center><br/><br/>
    <form onSubmit={handleSubmit}
    style={{width:"35%",
    border:"dotted 1px black",padding:"35px"}}><br/>
      <h3>New category details</h3><br/>
      <div className="form-group">

        <input
          type="text"
          className="form-control"
          placeholder="Category name"
          onChange={handleChange}
          name="name"
          value={category.name}
        />
      </div><br/><br/>

      <div className="form-group">
        <label ><b>Category image</b></label><br/><br/>
        <input
          type="file"
          className="form-control"
          placeholder="category image"
          onChange={handleImage}
          name="image"
      
        />
      </div><br/><br/>
      <button type="submit" className="btn btn-success">
        Add
      </button>
    </form>
    </center>
  );
};

export default CategoryForm;
