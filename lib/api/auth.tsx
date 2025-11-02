import api from "@/lib/axios";
import { VerifyRegisterAPIResponseType } from "@/components/types/user";

interface RegisterAPIProps {
    username: string,
    password: string,
    phone: string,
}

export const RegisterAPI = async (data: RegisterAPIProps) => {
    const response = await api.post("http://localhost:8000/auth/register/", data);
    return response.data;
}

interface VerifyRegisterAPIProps {
    phone : string,
    otp_code : string,
}


export const VerifyRegisterAPI = async (data : VerifyRegisterAPIProps)
    : Promise<VerifyRegisterAPIResponseType> => {
    const response = await api.post("http://localhost:8000/auth/activate/",data);
    return response.data;
}