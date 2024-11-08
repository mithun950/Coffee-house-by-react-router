import { NavLink } from "react-router-dom";

//   home component theke categories props ta anlam

const Categories = ({categories}) => {

   
    return (
        
            <div role="tablist" className="tabs tabs-lifted mt-8">
        {
            categories.map(category => 
                <NavLink key={category.category} 
                 to={`/category/${category.category}`} 
                 role="tab"
                 
                 
                //  classname ta dnamic korsi tab gula k jeno active dekhae ei jonno ami jei tab e jabo oitai jeno color hoe baki gula hobe naa emn type er
                 
                 className={({isActive}) =>`tab text-xl font-thin ${isActive ? 'tab-active' : ' '}`}
                    >
                    {category.category}
        </NavLink>
            ) 
        }
        
      </div>
       
    );
};

export default Categories;