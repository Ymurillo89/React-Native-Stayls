export interface IGetUser{
    idRowLocation:number
    idRowStaff:number
    idRowStore:number
    usser:string
}

export interface IGetHour{
    idRowsHour:number
    idAvailable:number
    description:string
    selected?:boolean
}

export interface IGetDateAvailableCab{
    date:string
    dateAvailableLin:IGetDateAvailableLin[]
}

export interface IGetDateAvailableLin{
    idRowsHour:number
    idRowsAvailable:number
    descriptionHour:string
}