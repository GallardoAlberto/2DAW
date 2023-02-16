export class Cocina {
    
    reference : string;
    image : string;
    description : string;
    price : number;
    color : string;

    constructor(reference : string, image : string, description : string, price : number, color : string) {
        this.reference = reference;
        this.image = image;
        this.description = description;
        this.price = price;
        this.color = color;
    }
}
