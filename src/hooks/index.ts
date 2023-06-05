import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { checkEmail, signIn } from "lib/api";
import { emailState, passwordState, tokenState,isLoggedState } from "state/atoms";



export const useEmailValue=()=>useRecoilValue(emailState)
export const useEmailState=()=>useRecoilState(emailState)
export const usePasswordState=()=>useRecoilState(passwordState)
export const useLogged=()=>useSetRecoilState(isLoggedState)
export const useLoggedValue=()=>useRecoilValue(isLoggedState)

