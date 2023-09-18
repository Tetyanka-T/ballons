export default interface Balloon {
    _id: string,
    imgSrc: string,
    name: string,
    code: string,
    price: number,
    description: string,
    category: string,
    grup: string,
    gender: string,
    filter: string,
}

export default interface Order {
    _id: string,
    basket: {
        balloons: [
            id: string,
            img: string,
            code: string,
            name: string,
            quantity: number,
            price: number,
        ],
        amount: number,
    },
    numberOrder: number,
    userName: string,
    userPhone: number,
    userEmail: string,
    deliveryDate: Date,
    deliveryMethod: string,
    deliveryTime: string,
    callBack: boolean,
    userAddress: string,
    comment: string,
    statusOrder: string,
    statusFinish: boolean,
}

export default interface Cart {
    id: string
    name: string,
    price: number,
    code: string,
    category: string,
    description: string,
    imgSrc: string
    quantity: number,
    priceAll: number,

}