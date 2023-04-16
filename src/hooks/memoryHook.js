import { useState } from "react";

if(!localStorage.getItem("packages")){
    localStorage.setItem("packages", JSON.stringify([]));
  }

export function memoryHook(){
    const [packages, setPackages] = useState(JSON.parse(localStorage.getItem("packages")));
    const [index, setIndex] = useState(0);

    function addPackage(packag){
        packag.index = index;
        let addPack = [...packages, packag]
        setPackages(addPack)
        localStorage.setItem("packages", JSON.stringify(addPack))  
        setIndex(value => value + 1);
    }

    function removePackage(packag){
        let delPack = [...packages];
        const indexPack = delPack.filter(item => packag.id !== item.id)
        setPackages(indexPack);
        localStorage.setItem("packages", JSON.stringify(indexPack))
    }

    return [packages, addPackage, removePackage]
}