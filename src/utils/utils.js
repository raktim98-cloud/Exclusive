export const previousPrice = (price, discountPercentage)=> {
    (price / (1 - discountPercentage / 100)).toFixed(2)
}