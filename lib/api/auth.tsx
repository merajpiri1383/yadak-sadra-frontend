import api from "@/lib/axios";


interface RegisterAPIProps {
    username: string,
    password: string,
    phone: string,
}

export const RegisterAPI = async (data: RegisterAPIProps) => {
    const response = await api.post("http://localhost:8000/auth/register/", data);
    return response.data;
}