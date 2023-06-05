import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
    key:"recoil-persist",
    storage:localStorage
})

export const emailState = atom({
    key: "emailState",
    default: "",
    effects_UNSTABLE: [persistAtom],
})


export const passwordState = atom({
    key: "passwordState",
    default: "",
    effects_UNSTABLE: [persistAtom],
})

export const tokenState = atom({
    key: "tokenState",
    default: "",
    effects_UNSTABLE: [persistAtom]
})

export const isLoggedState=atom({
    key:"isLoggedState",
    default:false,
    effects_UNSTABLE:[persistAtom]
})



export const dataUserState=atom({
    key:"dataUserState",
    default:{
        id:"",
        userName:"",
        email:"",
        password:"",
        profilePhoto:"",
    },
    effects_UNSTABLE:[persistAtom]
})

