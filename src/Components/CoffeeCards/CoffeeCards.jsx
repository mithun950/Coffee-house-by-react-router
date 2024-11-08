
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Cards from "../Cards";
import { useEffect, useState } from "react";
const CoffeeCards = () => {

    const [coffees,setCoffees] = useState([]);

// data ansi card dekhanor jonno coffees api theke 
              const data = useLoaderData();

    // category tab er jonno data ansi useParams diye
    const {categoryTab}  = useParams();



    // ei hook ta btn e click korle jeno onno r ekta page e jae tar jonno
    const navigate = useNavigate();


    // category onujai tab e click korle data anar jonno
    useEffect(() => {
       if(categoryTab){
        const  filterByCategory = [...data].filter(
            coffee => coffee.category === categoryTab
        )

        setCoffees(filterByCategory)
       }
       else{
        setCoffees(data.slice(0,5))
       }
    },[categoryTab,data])
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
             coffees.map(coffee => <Cards key={coffee.id} coffee={coffee}></Cards>)
            }
              
          {/* eta view all btn eta onClick er maddhome onno r ekta page e data pathae */}
              <button className="btn btn-warning" onClick={()=> navigate ('/coffees')}>View All</button>
        </div>

       
    );
};

export default CoffeeCards;