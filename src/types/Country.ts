export interface ICountry {
    flags: {
        alt:string,
        png:string,
        svg:string
    },
    name: {
        common: string,
        nativeName:{
            eng:{common:string, official:string},
        },
        official:string
    }
}