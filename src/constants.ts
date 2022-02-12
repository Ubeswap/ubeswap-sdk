import JSBI from 'jsbi'

// exports for external consumption
export { BigintIsh } from '@ubeswap/token-math'

export enum ChainId {
  MAINNET = 42220,
  ALFAJORES = 44787,
  BAKLAVA = 62320
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0x62d5b84bE28a183aBB507E125B384122D2C25fAE'

export const INIT_CODE_HASH = '0xb3b8ff62960acea3a88039ebcf80699f15786f1b17cebd82802f7375827a339c'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

interface ChainInfo {
  name: string
  fornoURL: string
  blockscoutURL: string
}

export const CHAIN_INFO: { [K in ChainId]: ChainInfo } = {
  [ChainId.ALFAJORES]: {
    name: 'Alfajores',
    fornoURL: 'https://alfajores-forno.celo-testnet.org',
    blockscoutURL: 'https://alfajores-blockscout.celo-testnet.org'
  },
  [ChainId.BAKLAVA]: {
    name: 'Baklava',
    fornoURL: 'https://baklava-forno.celo-testnet.org',
    blockscoutURL: 'https://baklava-blockscout.celo-testnet.org'
  },
  [ChainId.MAINNET]: {
    name: 'Mainnet',
    fornoURL: 'https://forno.celo.org',
    blockscoutURL: 'https://explorer.celo.org'
  }
}
