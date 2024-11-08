import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import Categories from "../Components/Categories";

const Home = () => {


    // category data anlam hook diye
    const categories = useLoaderData();
  return (
    <div>
      {/* banner section */}
      <Banner></Banner>

      {/* heading */}
      <Heading
        title={"Browse Coffees By Category"}
        subTitle={"Choose your desier category "}
      ></Heading>

      {/* Categories tab section */}
       <Categories categories={categories} ></Categories>
        { /* dynamic nasted componentes */}
        <Outlet></Outlet>

    </div>
  );
};

export default Home;
