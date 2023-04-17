export default async function getPackages(filters) {
    let filteredEvents = await(
        await fetch(
            "http://localhost:8081/v1/packages"
            )
    ).json();
    
    if (filters?.idUsuario) {
      filteredEvents = filteredEvents.filter(
      (body) => body.idUsuario === filters.idUsuario
    );
    }

    if (filters?.idUsuario === null) {
        filteredEvents = filteredEvents.filter(
        (body) => body.idUsuario === filters.idUsuario
      );
      }
    
    return Promise.resolve(
        filteredEvents
      );
};

export function getPackage(packagesOne) {
    return new Promise(async (resolve, reject) => {
        try {
          const response = await fetch("http://localhost:8081/v1/packages/" + packagesOne);
          const data = await response.json();
          resolve(data);
        } catch (error) {
          reject(error);
        }
      });
};

export async function addPlaceToPackage(packageId, place){
    console.log(packageId);
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      };
    const response = await fetch("http://localhost:8081/v1/packages/"+packageId+"/"+place, options);
    if (response.ok) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
    }else{
        const errorReason = await response.json()
        return errorReason;
    }
};

    


