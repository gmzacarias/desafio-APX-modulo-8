// const API_BASE_URL = "https://desafio-apx-modulo-7.onrender.com"
const API_BASE_URL = "http://localhost:3000";

/*verificando si existe mail en la DB* */
export async function checkEmail(email?: string) {
    try {
        const verifyEmail = await fetch(API_BASE_URL + "/check-email" + "?email=" + email, {
            method: "GET",
            headers: { "content-type": "application/json" },
        })
        if (verifyEmail.ok) {
            const response = await verifyEmail.json();
            console.log("Mensaje del servidor:", response.message);

            if (response.message === "El correo electrónico existe en la base de datos") {
                return true;
            }
        } else {
            console.log("El correo electrónico no existe en la base de datos,seras redirigido a crearte una cuenta 😉");
            return false;
        }

    } catch (error) {
        console.log(error)
        return false
    }
}

/*iniciar sesion*/
export async function signIn(email: string, password: string) {

    try {
        const user = { email, password };
        const checkToken = await fetch(API_BASE_URL + "/auth/token", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        })
        if (!checkToken.ok) {
            throw new Error("Error en la solicitud")
        }
        const token = await checkToken.json();
        return { token };
    } catch (error) {
        console.log(error)
        return { token: null }
    }
}

/*Crear Cuenta*/
export async function signUp(userName: string, email: string, password: string, profilePhoto: string) {
    try {
        const newUser = {
            userName: userName,
            email: email,
            password: password,
            profilePhoto: profilePhoto
        }
        const registerUser = await fetch(API_BASE_URL + "/auth/signup", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newUser)
        })

        if (registerUser.ok) {
            const user = await registerUser.json();
            console.log("Usuario registrado correctamente:", user);
            return user;
        } else {
            console.log("Error al registrar el usuario:", registerUser.status);
        }
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
            "content-type": "application/json",
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
            headers: { "content-type": "application/json" },
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
            headers: { "content-type": "application/json" },
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
                "content-type": "application/json",
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
                "content-type": "application/json",
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
            "content-type": "application/json",
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
                'content-type': 'application/json',
            },
        });
        const nearPetsRes = await response.json();
        console.log(`Mascotas cercanas a la ubicación ${lat}, ${lng}:`, nearPetsRes);
        return nearPetsRes;
    } catch (error) {
        console.log(error);
    }
}











