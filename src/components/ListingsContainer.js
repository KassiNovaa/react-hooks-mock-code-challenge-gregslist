import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, removeListing}) {
  const components = listings.map((listingobj) => {
    return(
    <ListingCard removeListing={removeListing} key={listingobj.id} listings={listingobj} />
    )
  });
  return (
    <main>
      <ul className="cards">
        {components}
      </ul>
    </main>
  );
}

export default ListingsContainer;
