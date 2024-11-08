import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addFavorite, getAllFavorites } from "../Utilitis";


const CoffeeDetails = () => {

    const {id} = useParams();

    const data = useLoaderData();

    const [coffee,setCoffee] = useState([]);


    // data jodi already exist hoe add favorite button ta disabled korbo tar jonno state

    const [isFavorite,setFavorite] = useState(false);

    useEffect(() => {
        const singleData = [...data].find((coffee) => coffee.id === parseInt(id ))
        setCoffee(singleData);

        // add favorite disabled hoise naki thik ache tar jonno
        const favorite = getAllFavorites()
        const isExist = favorite.find(item => item.id === singleData.id)
       if(isExist){
        setFavorite(true)
       }
    },[data,id])



    // handle fvt btn 

    const handleAddFavorite = (coffee) => {
        addFavorite(coffee);

        // kono ekta coffee success full add hobar sathe sathe sathe disable korar jonno set  item ta abar eikhane boshailam
        setFavorite(true)
    }

    return (
        <div className="pt-24">
           <h3 className="text-2xl"> {coffee.description}</h3>
           <img  className="rounded-2xl mt-4" src={coffee.image} alt="" />
           <button disabled={isFavorite} onClick={() => handleAddFavorite(coffee)} className="btn btn-warning">Add to Favorite</button>
        </div>
    );
};

export default CoffeeDetails;