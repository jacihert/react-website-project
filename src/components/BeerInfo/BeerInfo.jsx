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
          {"Mash Temp : "}
          {/* {beer.method.mash_temp.temp.value}{" "}
          {beer.method.mash_temp.temp.unit}{" "}
          {beer.method.mash_temp[temp].duration} */}
          {"Fermentation : "} {beer.method.fermentation.temp.value}{" "}
          {beer.method.fermentation.temp.unit}
          {"Twist : "} {beer.method.twist}
        </p>

        <p>
          {"Ingredients : "}
          {"Malt : "}
          {"Hops : "}
          {"Yeast : "} {beer.ingredients.yeast}
        </p>

        <p>
          {"Food Pairing : "}
          {beer.food_pairing.join(", ")}
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
