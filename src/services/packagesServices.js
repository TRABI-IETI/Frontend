export default async function getPackages(filters) {
    let filteredEvents = await(
        await fetch(
            "http://localhost:8081/v1/packages"
            )
    ).json();

    if (filters?.idUsuario) {
      filteredEvents = filteredEvents.filter(obj => obj.hasOwnProperty('idUsuario') && obj.idUsuario === filteredEvents.idUsuario);
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
    // return await(
    //     await fetch(
    //         "http://localhost:8081/v1/packages/"+packagesOne
    //         )
    // ).json();
};