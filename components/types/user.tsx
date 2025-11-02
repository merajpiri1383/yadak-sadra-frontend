

export interface UserType {
    username : string,
    phone : string,
};


export interface VerifyRegisterAPIResponseType {
    access_token : string,
    refresh_token : string,
    user : UserType,
}