export default async function getPlaces() {
    return await(
        await fetch(
            "http://localhost:8082/v1/places"
            )
    ).json();
};

export async function getPlace(place) {
    return await(
        await fetch(
            "http://localhost:8082/v1/places/"+place
            )
    ).json();
};

export async function createPlace(data){
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
    const response = await fetch("http://localhost:8082/v1/places/", options);
    if (response.ok) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
    }else{
        const errorReason = await response.json()
        return errorReason;
    }
};