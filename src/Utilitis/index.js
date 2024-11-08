import toast from "react-hot-toast";


// get data from local storage

const  getAllFavorites =() =>{

    // data gula set item e j  naam diye set korsilam oi naam ta get item er moddhe boshabo
    const all = localStorage.getItem('favorite')
   if(all) {
    const favorite = JSON.parse(all)
    return favorite;
   }
   else{
      return [];
   }
    
}




// add a coffee to local storage 

const addFavorite = coffee => {
     
//   data jokhn set korbo refresh dile jeno chole naa jae tai get korar aage data gulu same kora lage tai getAllfavorite k call dite hoe
     const favorites = getAllFavorites();
     
     // ekta data jeno doplicate ba ekadhikbar set ba add naa hote pare tar jonno
    const isExist = favorites.find(item => item.id === coffee.id)
    if(isExist){
        return toast.error('Coffee already exists!');
    }

    favorites.push(coffee);

    // eikhane local stroage e data set korbo  1st favorite name ja jei naam e localstorage e set korbo shei ta  r stringify diye favorites array k sting e replace korlo
    localStorage.setItem('favorite',JSON.stringify(favorites))

    toast.success('Successfully added!');
}

// remove a coffee from a local storage




// jei jei function banabo shob export kora lagbe na hole onno component e kaaj korbe naa
export {addFavorite,getAllFavorites}