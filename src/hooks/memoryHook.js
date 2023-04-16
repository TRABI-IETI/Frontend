import { useState } from "react";

if(!localStorage.getItem("packages")){
    localStorage.setItem("packages", JSON.stringify([]));
  }

export function memoryHook(){
    const [packages, setPackages] = useState(JSON.parse(localStorage.getItem("packages")));

    function addPackage(packag){
        console.log(packages)
        //console.log(packag)
        let addPack = [...packages, packag]
        setPackages(addPack)
        localStorage.setItem("packages", JSON.stringify(addPack))
        
    }

    return [packages, addPackage]
}