export class Movie{
    title: string;
    plot: string;
    picture:string;


    constructor(movieData:Movie){
        Object.assign(this,{
            ...movieData
        })
    }
}