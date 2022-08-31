import { getApePriceGetterAddress, getNativeWrappedAddress, getSmartPriceGetter } from 'utils/addressHelper'
import apePriceGetterABI from 'config/abi/apePriceGetter.json'
import { getBalanceNumber } from 'utils/formatBalance'
import multicall from 'utils/multicall'
import { Currency, SmartRouter, Token } from '@ape.swap/sdk'

export const getTokenUsdPrice = async (
  chainId: number,
  tokenAddress: string,
  tokenDecimal: number,
  lp?: boolean,
  isNative?: boolean,
) => {
  const priceGetterAddress = getApePriceGetterAddress(chainId)
  const nativeTokenAddress = getNativeWrappedAddress(chainId)
  if (!priceGetterAddress) return 0
  if ((tokenAddress || isNative) && tokenDecimal) {
    const call = lp
      ? {
          address: priceGetterAddress,
          name: 'getLPPrice',
          params: [tokenAddress, 18],
        }
      : {
          address: priceGetterAddress,
          name: 'getPrice',
          params: [isNative ? nativeTokenAddress : tokenAddress, tokenDecimal],
        }

    const tokenPrice = await multicall(chainId, apePriceGetterABI, [call])
    const filterPrice = getBalanceNumber(tokenPrice[0], tokenDecimal)
    return filterPrice
  }
  return null
}

export const getCurrencyUsdPrice = async (
  chainId: number,
  currency: Currency,
  lp = false,
  smartRouter?: SmartRouter,
) => {
  if (!currency) {
    return null
  }
  const isNative = currency?.symbol === 'ETH'
  const [address, decimals] = currency instanceof Token ? [currency?.address, currency?.decimals] : ['', 18]
  const priceGetterAddress = getSmartPriceGetter(chainId, smartRouter)

  const nativeTokenAddress = getNativeWrappedAddress(chainId)
  if ((address || isNative) && decimals) {
    const call = lp
      ? {
          address: priceGetterAddress,
          name: 'getLPPrice',
          params: [address, 18],
        }
      : {
          address: priceGetterAddress,
          name: 'getPrice',
          params: [isNative ? nativeTokenAddress : address, decimals],
        }
    const tokenPrice = await multicall(chainId, apePriceGetterABI, [call])
    const filterPrice = getBalanceNumber(tokenPrice[0], decimals)
    if (currency?.symbol === 'GNANA') {
      return filterPrice * 1.3889
    }
    return filterPrice
  }
  return null
}
