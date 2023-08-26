// class Car{
//     constructor(name, model, weight, speed) {
//         this.name = name;
//         this.model = model;
//         this.weight = weight;
//         this.speed = speed;
//     }

//     getInfo() {
//         console.log(
//             this.name + this.model
//         );
//     }
// }
// class Daewoo extends Car{
//     constructor(name, model, weight, speed, abs, airback) {
//         super(name, model, weight, speed);
//         this.abs = abs;
//         this.airback = airback;
//     }

//     getName() {
//         console.log(
//             this.abs + this.name
//         );
//     }
// }
// let Gentra = new Daewoo('gentra', 4, '1.5 tonna', 220, true, true);


// class phone {
//    constructor(name,model,ram,chip,storage){
//        this.name = name;
//        this.model = model;
//        this.ram = ram;
//        this.chip = chip;
//        this.storage = storage
//    }
//    getInfo(){
//        console.log(this.name + ' ' + this.model + ' ' + this.chip) ;
//    }    
// }


// class more extends phone{
//    constructor(name,model,ram,chip,storage,camera,battery){
//        super(name,model,ram,chip,storage);
//        this.camera=camera;
//        this.battery=battery;
//    }
//    getCamera(){
//        console.log(
//            this.camera + ' ' + this.battery
//        );
//    }
// }
// let iphone = new more('Iphone','XS',3,'A12','64GB','12MP','2658 mAh');


// class pc {
//    constructor(name,model,hdd,graphicCard){
//        this.name = name;
//        this.model = model;
//        this.hdd = hdd;
//        this.graphicCard = graphicCard;
//    }
//    getInfo(){
//        console.log(
//            this.name + ' ' + this.graphicCard
//        );
//    }
// }


// class add extends pc{
//    constructor(name,model,hdd,graphicCard,ram,chip){
//        super(name,model,hdd,graphicCard);
//        this.ram = ram;
//        this.chip = chip;
//    }
//    more(){
//        console.log(
//            this.name + ' ' + this.hdd + ' ' + this.ram
//        );
//    }
// }
// let laptop = new add('asus','TUFgaming','1TB',true,16,'i5');


// class book {
//    constructor(name,page,popularity){
//        this.name = name;
//        this.page = page;
//        this.popularity = popularity;
//    }
//    getInfo(){
//        console.log(this.name + ' ' + this.popularity);
//    }
// }


// class book_edit extends book{
//    constructor(name,page,popularity,janr){
//        super(name,page,popularity)
//        this.janr = janr;
//    }
//    getInfo(){
//        console.log(this.name + ' ' + this.popularity + ' ' + this.janr);
//    }
// }
// let nick = new book_edit('Mingta soz',350,'5 tar','comedy');