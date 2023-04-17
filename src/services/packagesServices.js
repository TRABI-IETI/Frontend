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

export async function getPackage(packagesOne) {
    return await(
        await fetch(
            "http://localhost:8081/v1/packages/"+packagesOne
            )
    ).json();
};