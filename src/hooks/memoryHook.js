import { useState } from "react";

export function memoryHook(){
    const [packages, setPackages] = useState(JSON.parse(localStorage.getItem("tasks")));

    function addPackage(packag){
        console.log(packag)
        addPack = [...packages, packag]
        setPackages(packag)
        console.log(packages)
    }

    return [packages, addPackage]
}