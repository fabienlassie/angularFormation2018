export class ProductVo {

    public id:number = 0;
    public name: string = null;
    public price: number = 0;
    public category: string = null;
    public img: string = null;
    public ref: string = null;

    constructor(id: number, name: string, price: number, category: string, img: string, ref: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.img = img;
        this.ref = ref;
    }
}

export const PRODUCT_MOCK: Array<ProductVo> = [{
    id: 1, name: "Dark Vador", price: 40, category: "Toys", img: "assets/goodies/darkvador.jpg", ref: "75001" 
},{
    id: 2, name: "Kylo Ren", price: 40, category: "Toys", img: "assets/goodies/kyloren.jpg", ref: "75002" 
},{
    id: 3, name: "Luke Skywalker", price: 30, category: "Toys", img: "assets/goodies/luke.jpg", ref: "75003" 
},{
    id: 4, name: "Obiwan Kenobi", price: 30, category: "Toys", img: "assets/goodies/obiwan.jpg", ref: "75004" 
},{
    id: 5, name: "Rey", price: 30, category: "Toys", img: "assets/goodies/rey.jpg", ref: "75005" 
},{
    id: 6, name: "Jyn Erso", price: 30, category: "Toys", img: "assets/goodies/jynerso.jpg", ref: "75006" 
},{
    id: 7, name: "Jango Fett", price: 20, category: "Toys", img: "assets/goodies/jangofett.jpg", ref: "75007" 
},{
    id: 8, name: "Bobba Fett", price: 20, category: "Toys", img: "assets/goodies/bobbafett.jpg", ref: "75008" 
}];
