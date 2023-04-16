const getPlaces = async () => {
    return await(
        await fetch(
            "http://localhost:8082/v1/places"
            )
    ).json();
};

export default getPlaces();