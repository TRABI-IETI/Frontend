export async function getUser(mail,password) {
    return await(
        await fetch(
            "http://localhost:8080/v1/users/"+mail+"/"+password
            )
    ).json();
};