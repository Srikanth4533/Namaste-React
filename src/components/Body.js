import { resObj } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
      <div className="card-container">
        <div className="search">Search</div>
        <div className="res-container">
          <RestaurantCard resData={resObj} />
        </div>
      </div>
    );
  };

  export default Body