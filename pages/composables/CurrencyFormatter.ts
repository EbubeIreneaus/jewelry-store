export const useCurrencyFormatter = (currency: string, amount: number) => {
    let formatter = new Intl.NumberFormat("en-US", {
        style: 'currency',
        currency: currency.toUpperCase(),
        maximumFractionDigits: 2
    })

    return formatter.format(amount)
}