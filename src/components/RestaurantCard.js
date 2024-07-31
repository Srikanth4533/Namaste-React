const RestaurantCard = (props) => {
    const { resData } = props;
    return (
      <>
        {resData.map((data) => {
          const {
            name,
            cuisines,
            costForTwo,
            cloudinaryImageId,
            sla,
            avgRating,
          } = data.info;
          console.log(cloudinaryImageId);
          return (
            <div className="res-card">
              <img
                src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f-auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
                alt="res-card"
              />
              <h2>{name}</h2>
              <h2>{cuisines?.join(", ")}</h2>
              <h2>{sla.deliveryTime} min</h2>
              <h2>{costForTwo}</h2>
              <h2>{avgRating} stars</h2>
            </div>
          );
        })}
      </>
    );
  };

  export default RestaurantCard