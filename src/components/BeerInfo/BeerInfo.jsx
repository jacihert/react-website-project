import "./BeerInfo.scss";
import React from "react";

const BeerInfo = ({ beerList, beerId }) => {
  // for beer ID display all the details
  console.log(beerList);
  console.log("test", beerId);
  const beer = beerList.find((beer) => beerId === beer.id);
  console.log(beer);
  return (
    <article>
      <div className="characteristics">
        <p>
          {"Alcohol By Volume (ABV) : "}
          {beer.abv}
        </p>
        <p>
          {"International Bitterness Unit (IBU) : "}
          {beer.ibu}
        </p>
        <p>
          {"Target Final Gravity (OG) : "}
          {beer.target_fg}
        </p>
        <p>
          {"Target Orginal Gravity (FG) : "}
          {beer.target_og}
        </p>
        <p>
          {"European Brewery Convention (EBC) : "}
          {beer.ebc}
        </p>
        <p>
          {"Standard Reference Method(SRM) : "}
          {beer.srm}
        </p>
        <p>
          {"Acidity : "}
          {beer.ph}
          {" pH"}
        </p>
        <p>
          {"Attenuation_level : "}
          {beer.attenuation_level}
        </p>

        <p>
          {"Volume : "}
          {beer.volume.value} {beer.volume.unit}
        </p>
        <p>
          {"Boil Volume : "}
          {beer.boil_volume.value} {beer.boil_volume.unit}
        </p>
        <p>
          {"Methods : "}
          {JSON.stringify(beer.method.mash_temp.duration)}
          {/* {beer.method.mash_temp.temp.value} */}
        </p>

        {/* methods */}
        {/* ingredients */}

        <p>
          {"Food Pairing : "}
          {beer.food_pairing}
        </p>
        <p>
          {"Brewer Tips : "}
          {beer.brewers_tips}
        </p>
      </div>
    </article>
  );
};
export default BeerInfo;
