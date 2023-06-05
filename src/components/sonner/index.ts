import { toast } from "sonner";


export function loginTrue(){
    
        toast.success("Iniciaste sesion", {
            action: {
              label: 'close',
              onClick: () => console.log('Undo')
            },
          })
}


export function loginError(){
    toast.error("Contraseña Incorrecta", {
        action: {
          label: 'close',
          onClick: () => console.log('Undo')
        },
      })
}


export function signUpError(){
  toast.error("Debes completar todos los campos", {
    action: {
      label: 'close',
      onClick: () => console.log('Undo')
    },
  })

}

export function imageNotFound(){
  toast.error("Debes completar todos los campos", {
    action: {
      label: 'close',
      onClick: () => console.log('Undo')
    },
  })

}

