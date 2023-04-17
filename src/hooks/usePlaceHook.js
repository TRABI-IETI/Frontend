import { useEffect, useState } from "react";
import { getPlace } from "../services/placesServices";

export function usePlaceHook(){
    const [lugares, setLugar] = useState([]);

    function getImagePlace(paquete){  
        const places = paquete.places;

        // console.log(paquete)
        if(places.length === 0){
          const prov = {"imagen": "https://cdn.discordapp.com/attachments/1097284237528399962/1097319695763374130/Blank-Package-PNG-Image.png"}
          const newList=[...lugares]
          newList.push(prov)
          setLugar(newList);
        }else{
          const place = places[0]
          getPlace(place).then((lugar) => {
            const prov = {"imagen":lugar.imagen}
            // console.log(prov)
            const newList=[...lugares]
            newList.push(prov)
            setLugar(newList);
          });
        }
    }
    // useEffect(() => {
    //     getImagePlace(paquete)
    //   }, [])

    return({lugares, getImagePlace})
}