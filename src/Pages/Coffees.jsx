import { useLoaderData } from "react-router-dom";
import Cards from "../Components/Cards";
import { useState } from "react";


const Coffees = () => {

    //  data niye ashtesi 
    const data = useLoaderData();


    const [coffees, setCoffees] = useState(data);

   

    const handleSortBy = (sortBy) => {
       // sort by popularity
    if(sortBy == "popularity"){
        const sorted = [...data].sort((a,b) => b.popularity - a.popularity)
        setCoffees(sorted)
     }
     // sort by rating
     else if (sortBy == 'rating') {
           const sorted = [...data].sort((a,b) => b.rating - a.rating)
           setCoffees(sorted)
     }
    }


    return (
        <>
        <div className=" sm:flex justify-between items-center pt-24 ">
            <h1 className="text-3xl font-thin">
                Sort Coffee&apos;s by Popularity and Rating-&gt;
            </h1>
            <div className="mt-4 sm:mt-0">
                <button  onClick={() =>handleSortBy('popularity')} className="btn btn-warning mr-4">Sort By Popularity</button>
                <button  onClick={() =>handleSortBy('rating')} className="btn btn-warning ">Sort By Rating</button>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
        {
         coffees.map(coffee => <Cards key={coffee.id} coffee={coffee}></Cards>)
        }
        </div>
        </>
    );
};

export default Coffees;