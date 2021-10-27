class Shop {
    constructor(items = []) {
        this.items = items;
    }

    // decrease sellIn by 1
    // decrease quality by 1 when sellIn > 0
    // decrease quality by 2 when sellIn <= 0
    // never drop quality below 0
    normalUpdate(item) {
        if(item.sellIn > 0) item.quality -= 1;
        if(item.sellIn <= 0) item.quality -= 2;
        if(item.quality < 0) item.quality = 0;
        item.sellIn -= 1;
    }

    // * decrease sellIn by 1
    // * increase quality by 1 when sellIn > 0
    // * increase quality by 2 when sellIn <= 0
    // * never increase quality above 50
    brieUpdate(item) {
        if(item.sellIn > 0) item.quality += 1;
        if(item.sellIn <= 0) item.quality += 2;
        if(item.quality > 50) item.quality = 50;
        item.sellIn -= 1;
    }

    // * never decrease in quality
    // * never decrease in sellIn date
    sulfurasUpdate(item) {}

    // decrease sellIn by 1
    // never increase quality above 50
    // drop quality to 0 when after sellIn date
    // quality increase by 1 over time
    // if less than or equal 10 days quality increase by 2
    // if less than or equal 5 days quality increase by 3
    backstagePassUpdate(item) {
        item.quality += 1;
        if(item.sellIn <= 10) item.quality += 1;
        if(item.sellIn <= 5) item.quality += 1;
        if(item.quality > 50) item.quality = 50;
        if(item.sellIn <= 0) item.quality = 0;
        item.sellIn -= 1;
    }

    updateQuality() {
        this.items.forEach(item => {

            if(item.name === "Aged Brie") {
                return this.brieUpdate(item);
            }
            if(item.name === "Sulfuras, Hand of Ragnaros") {
                return this.sulfurasUpdate(item);
            }
            if(item.name === "Backstage passes to a TAFKAL80ETC concert") {
                return this.backstagePassUpdate(item);
            }
            return this.normalUpdate(item);

        });

        return this.items;
    }
}

module.exports = Shop;