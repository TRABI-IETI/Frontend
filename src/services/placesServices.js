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