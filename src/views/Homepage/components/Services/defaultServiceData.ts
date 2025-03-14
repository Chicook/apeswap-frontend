import { DefaultServiceData } from './types'
import { ContextApi } from '../../../../contexts/Localization/types'

export const defaultServiceData: (t: ContextApi['t']) => DefaultServiceData[] = (t) => [
  {
    id: 'poolDetails',
    title: t('Staking Pools'),
    description: t('Earn partner tokens by staking BANANA or GNANA'),
    backgroundImg: 'images/homepage-pools',
    link: '/pools',
    stats: [],
  },
  {
    id: 'farmDetails',
    title: t('Yield Farms'),
    description: t('Earn BANANA or partner tokens by staking LP tokens'),
    backgroundImg: 'images/homepage-farms',
    link: '/farms',
    stats: [],
  },
  {
    id: 'lendingDetails',
    title: t('Lending Network'),
    description: t('Earn interest by supplying popular tokens'),
    backgroundImg: 'images/homepage-lending',
    link: 'https://lending.apeswap.finance/markets',
    stats: [],
  },
  {
    id: 'billDetails',
    title: t('ApeSwap Bonds'),
    description: t('Create protocol-owned liquidity with yield-generating NFTs'),
    backgroundImg: 'images/homepage-bills',
    link: '/bonds',
    stats: [],
  },
]
