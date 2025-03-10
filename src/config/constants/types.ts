import { ChainId } from '@ape.swap/sdk'

export type IfoStatus = 'coming_soon' | 'live' | 'finished'

export interface Ifo {
  id: string
  isActive: boolean
  isLinear: boolean
  address: string
  name: string
  subTitle?: string
  description?: string
  launchDate: string
  launchTime: string
  saleAmount: string
  raiseAmount: string
  totalAmountRaised?: string // Used to show the subscription amount post iao
  bananaToBurn?: string
  projectSiteUrl: string
  currency: string
  currencyAddress: string
  offeringCurrency: string
  tokenDecimals: number
  releaseBlockNumber: number
  vestingTime?: string
  vesting?: boolean
  startBlock?: number
  burnedTxUrl?: string
}

export interface SerializedToken {
  chainId: number
  address: string
  decimals: number
  symbol?: string
  name?: string
  projectLink?: string
}

export enum QuoteToken {
  'BNB' = 'BNB',
  'CAKE' = 'CAKE',
  'BANANA' = 'BANANA',
  'SYRUP' = 'SYRUP',
  'BUSD' = 'BUSD',
  'TWT' = 'TWT',
  'UST' = 'UST',
  'ETH' = 'ETH',
  'USDT' = 'USDT',
}

export enum PoolCategory {
  'COMMUNITY' = 'Community',
  'APEZONE' = 'ApeZone',
  'CORE' = 'Core',
  'JUNGLE' = 'Jungle',
  'BINANCE' = 'Binance', // Pools using native BNB behave differently than pools using a token
}

export enum VaultVersion {
  'V1' = 'V1',
  'V2' = 'V2',
  'V3' = 'V3',
}

export interface Decimals {
  [ChainId.MAINNET]?: number
  [ChainId.BSC_TESTNET]?: number
  [ChainId.BSC]?: number
  [ChainId.MATIC]?: number
  [ChainId.TLOS]?: number
}

export interface Address {
  [ChainId.BSC_TESTNET]?: string
  [ChainId.BSC]?: string
  [ChainId.MATIC]?: string
  [ChainId.TLOS]?: string
}

export interface ChainToNumber {
  [ChainId.BSC_TESTNET]?: number
  [ChainId.BSC]?: number
  [ChainId.MATIC]?: number
  [ChainId.TLOS]?: number
}

export interface ChainToString {
  [ChainId.BSC_TESTNET]?: string
  [ChainId.BSC]?: string
  [ChainId.MATIC]?: string
  [ChainId.TLOS]?: string
}

export interface FarmStyles {
  deprecated: any
  warning: any
  featured: any
  inactive: any
}

export interface FarmConfig {
  pid: number
  lpSymbol: string
  lpAddresses: Address
  tokenSymbol: string
  style?: keyof FarmStyles
  image?: string
  disableApr?: boolean
  tokenAddresses: Address
  quoteTokenSymbol: QuoteToken
  quoteTokenAdresses: Address
  multiplier?: string
  isCommunity?: boolean
  dual?: {
    rewardPerBlock: number
    earnLabel: string
    endBlock: number
  }
  projectLink?: string
}

export interface PoolConfig {
  sousId: number
  image?: string
  tokenName: string
  stakingToken: Token
  stakingLimit?: number
  bonusEndBlock?: number
  rewardToken: Token
  contractAddress: Address
  poolCategory?: PoolCategory
  projectLink: string
  twitter?: string
  tokenPerBlock: string
  sortOrder?: number
  harvest?: boolean
  reflect?: boolean
  isFinished?: boolean
  tokenDecimals: number
  displayDecimals?: number
  lpStaking?: boolean
  lpTokens?: {
    token: Token
    quoteToken: Token
  }
  forAdmins?: boolean
  emergencyWithdraw?: boolean
  isEarnTokenLp?: boolean
}

export interface NfaStakingPoolConfig {
  sousId: number
  tier: number
  rewardToken: Token
  contractAddress: Address
  tokenPerBlock: string
  isFinished: boolean
  endBlock: number
}

export interface Token {
  symbol: string
  address?: Address
  decimals?: Decimals
  dontFetch?: boolean
  lpToken?: boolean
  price?: number
  active?: boolean
}

export type Images = {
  lg: string
  md: string
  sm: string
  ipfs?: string
}

export type Attributes = {
  faceColor: string
  baseColor: string
  frames: string
  mouths: string
  eyes: string
  hats: string
  rarityScore: string
  rarityTierNumber: number
  rarityTierName: string
  rarityOverallRank: number
}

export type Nft = {
  index: number
  name: string
  image: string
  uri: string
  attributes: Attributes
}

export type Nfb = {
  image: string
}

export type NfbAttribute = {
  traitType: string
  value: string
}

export type NfaAttribute = {
  id: string
  occurance: number
  category: string
  uri: string
}

export type TeamImages = {
  alt: string
} & Images

export type Team = {
  id: number
  name: string
  description: string
  isJoinable?: boolean
  users: number
  points: number
  images: TeamImages
  background: string
  textColor: string
}

export type PageMeta = {
  title: string
  description?: string
  image?: string
}

// Interfaces used in Vaults
export interface MasterChef {
  pid: ChainToNumber
  address: Address
  rewardsPerBlock: ChainToString
  rewardToken: Token
}

export interface VaultConfig {
  id: number
  pid: number
  type: 'MAX' | 'AUTO' | 'BURN'
  version: VaultVersion
  availableChains: number[]
  stratAddress: Address
  platform: string
  token: Token
  quoteToken?: Token
  stakeToken: Token
  rewardToken: Token
  masterchef: MasterChef
  inactive?: boolean
  depositFee?: number
  rewardsInSeconds?: boolean
  fee?: string
}

export interface DualFarmConfig {
  pid: number
  network: number
  stakeTokenAddress: string
  rewarderAddress: string
  dualImage?: boolean
  stakeTokens: {
    token0: Token
    token1: Token
  }
  rewardTokens: {
    token0: Token
    token1?: Token
  }
}

export interface JungleFarmConfig {
  jungleId: number
  image?: string
  tokenName: string
  stakingToken: Token
  stakingLimit?: number
  bonusEndBlock?: number
  rewardToken: Token
  contractAddress: Address
  projectLink: string
  twitter?: string
  tokenPerBlock?: string
  sortOrder?: number
  harvest?: boolean
  reflect?: boolean
  isFinished?: boolean
  tokenDecimals: number
  displayDecimals?: number
  lpStaking?: boolean
  lpTokens?: {
    token: Token
    quoteToken: Token
  }
  forAdmins?: boolean
  emergencyWithdraw?: boolean
  isEarnTokenLp?: boolean
  // With the switching of rewards per block to seconds
  rewardsPerSecond?: string
  network: number
  unZapable?: boolean
}

// Types used to check for live IAOs
export type LiveIfo = {
  id: number
  label: string
  settings: {
    id: number
    tag: string
    navItem: string
  }[]
}

export interface BillsConfig {
  index: number
  contractAddress: Address
  billType: 'liquidity' | 'reserve' | 'launch'
  token: Token
  quoteToken: Token
  lpToken: Token
  earnToken: Token
  inactive?: boolean
  projectLink?: string
  twitter?: string
}
