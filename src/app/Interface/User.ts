export interface User{
    id: String,
    name: String,
    firstName?: String,
    lastName?: String,
    country?: IdName,
    alpha2code?: String,
    phoneNumber?: String
}

export interface IdName{
    id: number,
    name: string
}