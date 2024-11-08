import { Link } from "react-router-dom";

const Cards = ({ coffee }) => {
  const { name, image, category, origin, type, rating, popularity, id } =
    coffee || {};
  return (
    <div className="flex relative shadow-xl p-8 rounded-xl">
      <Link to={`/coffee/${id}`}>
      <div className="">
        <img className=" w-full  h-[300px] object-cover rounded-xl " src={image} alt="" />
        </div>
        <h3>
          Name: <small>{name}</small>
        </h3>
        <h3>
          Category: <small>{category}</small>
        </h3>
        <h3>
          Origin: <small>{origin}</small>
        </h3>
        <h3>
          Rating: <small>{rating}</small>
        </h3>
        <h3>
          Type: <small>{type}</small>
        </h3>
        <h3>
          Popularity: <small>{popularity}</small>
        </h3>
      </Link>

      <p></p>
    </div>
  );
};

export default Cards;
