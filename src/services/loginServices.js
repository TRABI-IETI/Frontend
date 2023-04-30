export async function getUser(mail,password) {
    return await(
        await fetch(
            "http://localhost:8080/v1/users/"+mail+"/"+password
            )
    ).json();
};

export async function updateUser(userId, newUser){
    const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      };
    const response = await fetch("http://localhost:8080/v1/users/"+userId, options);
    if (response.ok) {
    const jsonResponse = await response.json();
    return jsonResponse;
    }else{
        const errorReason = await response.json()
        return errorReason;
    }
}