import { Input } from "components/ui/inputs"
import { Label } from "components/ui/label"
import { SubTitle } from "components/ui/subtitle"
import { Title } from "components/ui/title"
import { Button } from "components/ui/buttons"
import React from "react"
import { useRecoilState } from "recoil"
import { emailState } from "state/atoms"

export function ForgotPassword(){
const [email,SetEmail] = useRecoilState(emailState)



function handleInputChange(){
    SetEmail(email)
}

function handleSubmit(){

}


return (
    <main>
        <Title>Recuperar contraseña</Title>
<SubTitle>ingresa tu email,para poder enviarte un codigo asi podes ingresar</SubTitle>
<Label>Email</Label>
<Input 
type="text"
name="userName"
placeholder=""
value={email}
onChange={handleInputChange}
width="300px"
required
/>
<Button type="submit" onClick={handleSubmit} color="primary" width="300px">Reenviar codigo</Button>
    </main>
)

}