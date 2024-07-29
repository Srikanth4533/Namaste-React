import React from "react";
import ReactDOM from "react-dom/client";

/**
 *
 * <div id="parent">
 *     <div id="child">
 *         <h1>I'm an h1 tag</h1>
 *         <h2>I'm an h2 tag</h2>
 *     </div>
 * </div>
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="app-logo"
          src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg"
          alt="app-logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resObj = {
  info: {
    id: "344287",
    name: "Varalakshmi Tiffins",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/c75ff48c-b373-4733-8126-e3180cbb0fa0_344287.jpg",
    locality: "Banjara Hills",
    areaName: "Filmnagar",
    costForTwo: "₹300 for two",
    cuisines: ["South Indian"],
    avgRating: 4.6,
    veg: true,
    parentId: "6482",
    avgRatingString: "4.6",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 8.2,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "8.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-07-28 11:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-South%20Indian.png",
          description: "Delivery!",
        },
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-South%20Indian.png",
              },
            },
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/varalakshmi-tiffins-banjara-hills-filmnagar-hyderabad-344287",
    type: "WEBLINK",
  },
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        src={`https://res.cloudinary.com/${resData.cloudinaryImageId}`}
        alt="res-card"
      />
      <h2>{resData.name}</h2>
      <h2>{resData.cuisines.map((n) => `${n},`)}</h2>
      <h2>{resData.sla.deliveryTime} min</h2>
      <h2>{resData.avgRating} stars</h2>
    </div>
  );
};

const Body = () => {
  return (
    <div className="card-container">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj.info} />
      </div>
    </div>
  );
};

const Footer = () => {
  return <div>Footer</div>;
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
