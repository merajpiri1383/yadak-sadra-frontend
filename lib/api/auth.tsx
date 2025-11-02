import api from "@/lib/axios";
import { VerifyRegisterAPIResponseType } from "@/components/types/user";

interface RegisterAPIProps {
    username: string,
    password: string,
    phone: string,
}

export const RegisterAPI = async (data: RegisterAPIProps) => {
    const response = await api.post("/auth/register/", data);
    return response.data;
}

interface VerifyRegisterAPIProps {
    phone: string,
    otp_code: string,
}


export const VerifyRegisterAPI = async (data: VerifyRegisterAPIProps)
    : Promise<VerifyRegisterAPIResponseType> => {
    const response = await api.post("/auth/activate/", data);
    return response.data;
}

interface LoginAPIProps {
    phone: string,
    password: string,
}

export const LoginAPI = async (data: LoginAPIProps): Promise<VerifyRegisterAPIResponseType> => {
    const response = await api.post("/auth/login/", data);
    return response.data;
};