import { useState } from "react";

if(!localStorage.getItem("packages")){
    localStorage.setItem("packages", JSON.stringify([]));
  }

export function memoryHook(){
    const [packages, setPackages] = useState(JSON.parse(localStorage.getItem("packages")));

    function addPackage(packag){
        console.log(packag)
        let addPack = [...packages, packag]
        setPackages(addPack)
        localStorage.setItem("packages", JSON.stringify(addPack))  
    }

    function removePackage(index){
        const newList = [...packages];
        newList.splice(index, 1);
        setPackages(newList);
        localStorage.setItem("packages", JSON.stringify(newList));
    }

    return [packages, addPackage, removePackage]
}