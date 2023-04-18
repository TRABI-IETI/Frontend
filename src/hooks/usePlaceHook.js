import { useEffect, useState } from "react";
import { getPlace } from "../services/placesServices";

export function usePlaceHook(){

    async function getPromises(place){
      const res = await getPlace(place);
      return res;
    }

    function getImagePlace(paquete){  
        var places = paquete.places;
        var response = {"imagen": "matame"}
        // console.log(paquete)
        if(places.length === 0){
          // return {"imagen": "https://cdn.discordapp.com/attachments/1097284237528399962/1097319695763374130/Blank-Package-PNG-Image.png"};
          return new Promise(async (resolve, reject) => {
            try {
              resolve({"imagen": "https://cdn.discordapp.com/attachments/1097284237528399962/1097319695763374130/Blank-Package-PNG-Image.png"});
            } catch (error) {
              reject(error);
            }
          })
        }else{
          const place = places[0];
          return getPlace(place);
          //console.log(getPromises(place).then(value=>value));
        }
    }
    // useEffect(() => {
    //     getImagePlace(paquete)
    //   }, [])

    return({getImagePlace})
}