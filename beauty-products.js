// Родительский класс
class BeautyProduct {
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }

    getInfo() {
        return `${this.name} - ${this.price} ₽`;
    }
}

// Дочерний класс
class FaceCream extends BeautyProduct {
    constructor(name,price,skinType) {
        super(name,price);
        this.skinType = skinType;
    }

    getCreamInfo() {
        return `${this.getInfo()}, тип кожи: ${this.skinType}`;
    }
}

// Дочерний класс для масок
class FaceMask extends BeautyProduct {
    constructor(name,price,effect) {
        super(name,price);
        this.effect = effect;
    }

    getMaskInfo() {
        return `${this.getInfo()}, эффект: ${this.effect}`;
    }
}

const mask = new FaceMask("Увлажняющая маска", 3500, "увлажнение");

console.log(mask.getMaskInfo());