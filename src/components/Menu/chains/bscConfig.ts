import { MenuEntry } from '@ape.swap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const CURRENT_MIGRATE_PATH = 'the-migration'

const bscConfig: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Exchange'),
    lightIcon: 'ExchangeLightImage',
    darkIcon: 'ExchangeDarkImage',
    items: [
      {
        label: t('Swap'),
        href: '/swap',
        isNew: false,
      },
      {
        label: t('Orders'),
        href: '/limit-orders',
        isNew: false,
      },
      {
        label: t('Liquidity'),
        href: '/zap',
        isNew: false,
      },
      {
        label: t('Pro Trading'),
        href: 'https://pro.apeswap.finance',
        isNew: false,
      },
      {
        label: t('GNANA'),
        href: '/gnana',
        isNew: false,
      },
    ],
  },
  {
    label: t('Stake'),
    lightIcon: 'StakeLightImage',
    darkIcon: 'StakeDarkImage',
    items: [
      {
        label: t('Migrate'),
        href: '/' + CURRENT_MIGRATE_PATH,
        isNew: true,
      },
      {
        label: t('Staking Pools'),
        href: '/pools',
        isNew: false,
      },
      {
        label: t('BANANA Maximizers'),
        href: '/maximizers',
        isNew: false,
      },
      {
        label: t('BANANA Farms'),
        href: '/farms',
        isNew: false,
      },
      {
        label: t('Jungle Farms'),
        href: '/jungle-farms',
        isNew: false,
      },
    ],
  },
  {
    label: t('Raise'),
    lightIcon: 'OfferingsLightImage',
    darkIcon: 'OfferingsDarkImage',
    items: [
      {
        label: t('Bonds'),
        href: '/bonds',
        isNew: false,
      },
      {
        label: t('Official IAO'),
        href: '/iao',
        isNew: false,
      },
    ],
  },
  {
    label: t('Collect'),
    lightIcon: 'NfaLightImage',
    darkIcon: 'NfaDarkImage',
    items: [
      {
        label: t('NFA Collection'),
        href: '/nft',
        isNew: false,
      },
      {
        label: t('NFA Auction'),
        href: '/auction',
        isNew: false,
      },
      {
        label: t('NFA Liquidity'),
        href: 'https://liquidcollectibles.io/collection/0x6afc012783e3a6ef8c5f05f8eee2edef6a052ec4',
        isNew: false,
      },
      {
        label: t('NFB Collection'),
        href: 'https://nftkey.app/collections/nfbs/',
        isNew: false,
      },
      {
        label: t('NFB Liquidity'),
        href: 'https://liquidcollectibles.io/collection/0x9f707a412302a3ad64028a9f73f354725c992081',
        isNew: false,
      },
    ],
  },
  {
    label: t('Lend'),
    href: 'https://lending.apeswap.finance/',
    isNew: false,
  },
  {
    label: t('Explore'),
    lightIcon: 'MoreLightImage',
    darkIcon: 'MoreDarkImage',
    items: [
      {
        label: t('ApeStats'),
        href: '/apestats',
        isNew: false,
      },
      {
        label: t('Dashboard'),
        href: 'protocol-dashboard',
        isNew: false,
      },
      {
        label: t('Documentation'),
        href: 'https://apeswap.gitbook.io/apeswap-finance/',
        isNew: false,
      },
      {
        label: t('Charts'),
        href: '/info',
        isNew: false,
      },
      {
        label: t('Governance'),
        href: 'https://discuss.apeswap.finance',
        isNew: false,
      },
      {
        label: t('Newsletter'),
        href: '?modal=newsletter',
        isNew: true,
      },
    ],
  },
]

export default bscConfig
