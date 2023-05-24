// const API_BASE_URL = "https://desafio-apx-modulo-7.onrender.com"
const API_BASE_URL = "http://localhost:3000";


/*verificando si existe mail en la DB* */
export async function checkEmail(email: string) {
    try {
        const verifyEmail = await fetch(API_BASE_URL + "/check-email" + "?email=" + email, {
            method: "GET",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify({ email })
        })
        console.log("chequeando si existe mail", verifyEmail)
        return verifyEmail
    } catch (error) {
        console.log(error)
    }
}

/*iniciar sesion*/
export async function signIn(email: string, password: string) {
    try {
        const user = { email, password };
        const checkToken = await fetch(API_BASE_URL + "/auth/token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        console.log(`inicio de sesion de email:${email},password:${password}`)
        return checkToken
    } catch (error) {
        console.log(error)
    }
}

/*Crear Cuenta*/
export async function signUp(userName: string, email: string, password: string) {
    try {
        const createNewUser = { userName, email, password };
        const registerUser = await fetch(API_BASE_URL + "/auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(createNewUser)
        })
        console.log(`usuario registrado correctamente,
        username:${userName},
        email:${email},
        password:${password}
        `)
        return registerUser
    } catch (error) {
        console.log(error)
    }
}

/*Actualizar info del usuario*/
//actualiza los datos de un usuario ya existente

export async function updateUser({ email, password, token, userId }) {
    const data = { email, password };
    const authorization = `bearer ${token};`
    const updateUserData = await fetch(API_BASE_URL + "/update-user" + "?userId=" + userId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: authorization
        },
        body: JSON.stringify(data)
    })
    const newUserData = await updateUserData.json()
    console.log("datos actualizados")
    return newUserData
}


/*Solicitar restablecer la contraseña*/
export async function resetPassword(email: string) {
    try {
        const response = await fetch(API_BASE_URL + "/reset-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        })
        const data = await response.json();
        console.log(data.message)
        return data;
    }
    catch (error) {
        console.log(error)
        return null
    }
}

/*Restablecer la contraseña*/
export async function resetPasswordConfirmation(token: string, newPassword: string) {
    try {
        const response = await fetch(API_BASE_URL + "/reset-password/" + token, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ newPassword })
        })
        const data = await response.json()
        console.log(data.message);
        return data;
    }
    catch (error) {
        console.log(error)
        return null
    }
}

/*Crear reporte de una mascota*/
export async function reportPet({ userId, token, petName, imageURL, lat, lng, found, zoneReport }) {
    try {
        const data = { petName, imageURL, lat, lng, found, zoneReport };
        const authorization = `bearer ${token}`;
        const createPet = await fetch(API_BASE_URL + "/create-pet" + "?userId" + userId, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: authorization,
            },
            body: JSON.stringify(data)
        })
        const newPet = await createPet.json()
        console.log(`Hola,ya se creo el reporte de ${petName}`)
        return newPet
    } catch (error) {
        console.log(error)
    }
}

/*Editar reporte de una mascota*/
export async function updateDataPet({ petId, token, petName, imageURL, lat, lng, found, zoneReport }) {
    try {
        const data = { petName, imageURL, lat, lng, found, zoneReport };
        const authorization = `bearer ${token}`;
        const updatePet = await fetch(API_BASE_URL + "/update-pet" + "?petId=" + petId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: authorization,
            },
            body: JSON.stringify(data)
        })
        const updatePetResponse = await updatePet.json();
        console.log("datos de la mascota actualizados")
        return updatePetResponse
    } catch (error) {
        console.log(error)
    }
}


/*Eliminar reporte de una mascota*/
export async function deleteDataPet({ petId, token }) {
    const authorization = `bearer ${token}`;
    const deletePet = await fetch(API_BASE_URL + "/pet" + "?petId" + petId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: authorization,
        }
    })
    console.log(`la mascota id=${petId} ha sido eliminada de la base de datos`)
    return deletePet
}

/* Obtener las mascotas cercanas a mi ubicación */
export async function NearPets({ lat, lng }) {
    try {
        const response = await fetch(`${API_BASE_URL}/near-pets?lat=${lat}&lng=${lng}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const nearPetsRes = await response.json();
        console.log(`Mascotas cercanas a la ubicación ${lat}, ${lng}:`, nearPetsRes);
        return nearPetsRes;
    } catch (error) {
        console.log(error);
    }
}











