import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "./signup.css"
import { Title } from "components/ui/title";
import { Dropzone } from "components/dropzone";
import { Label } from "components/ui/label";
import { Input } from "components/ui/inputs";
import { Button } from "components/ui/buttons";
import { useRecoilState, useSetRecoilState } from "recoil";
import { dataUserState } from "state/atoms";
import { imageNotFound, newUser, signUpError } from "components/sonner";
import { signUp } from "lib/api";

export function SignUp() {
    const navigate = useNavigate();
    const [dataUser, SetDataUser] = useRecoilState(dataUserState)





    function handleFileUpload(file) {

        console.log(file.dataURL)
        SetDataUser((prevData) => ({
            ...prevData,
            profilePhoto: file.dataURL,
        }));
    };







    const handleInputChange = (e) => {
        const { name, value } = e.target
            // Actualizar el estado del campo correspondiente
            SetDataUser((prevData) => ({
                ...prevData,
                [name]: value
            }));
    
    };



    async function handleSubmit(event) {
        event.preventDefault();
        // // Use FormData to get the input values
        const formData = new FormData(event.target);
        formData.append("userName", dataUser.userName);
        formData.append("email", dataUser.email);
        formData.append("password", dataUser.password);
        formData.append("profilePhoto", dataUser.profilePhoto);
        // Optionally, convert FormData into an object
        const dataObject = Object.fromEntries(formData);

        console.log(dataObject)

        SetDataUser(dataUser)
        console.log("dataUserState", dataUser)


        if (dataUser.userName && dataUser.email && dataUser.password && dataUser.profilePhoto) {
            try {
                const response = await signUp(dataUser.userName, dataUser.email, dataUser.password, dataUser.profilePhoto);
                if (response) {
                    SetDataUser((prevData)=>({
                        ...prevData,
                        id:response.id,
                    }))
                }

                console.log("data guardada",dataUser)
                newUser()
                navigate("/about")
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log("hay un error")
        }
    };




    return (
        <main className={css.signUpContainer}>
            <Title>Crea tu cuenta</Title>
            <div className={css.imagen}></div>
            <form className={css.formContainer} onSubmit={handleSubmit}>
                <div className={css.pictureContainer}>
                    <Dropzone name="profilePhoto" onFileUpload={handleFileUpload} required="true" ></Dropzone>
                    <Label> Arrastra y suelta un archivo <br></br> o haz clic para seleccionarlo</Label>
                </div>

                <div className={css.inputsContainer}>
                    <label>Email:</label>
                    <Input
                        type="email"
                        name="email"
                        placeholder=""
                        value={dataUser.email}
                        onChange={handleInputChange}
                        width="300px"
                        required
                    />
                    <label>Password:</label>
                    <Input
                        type="password"
                        name="password"
                        placeholder=""
                        value={dataUser.password}
                        onChange={handleInputChange}
                        width="300px"
                        required
                    />
                    <label>Username:</label>
                    <Input
                        type="text"
                        name="userName"
                        placeholder=""
                        value={dataUser.userName}
                        onChange={handleInputChange}
                        width="300px"
                        required
                    />

                    <button type="submit">Submit</button>
                    

                </div>

            </form>
        </main>
    )

}
