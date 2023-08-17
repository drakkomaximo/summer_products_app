import { PREFIXPRICES } from ".";

export const formattedPriceValue = ({price, preffixPrice}:{price: number, preffixPrice: PREFIXPRICES}) => (
    `${preffixPrice}${Number(price).toLocaleString('en')}`
)