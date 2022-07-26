import { createMulticall, ListenerOptions } from '@uniswap/redux-multicall'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useInterfaceMulticall } from 'hooks/useContract'
import React, { useMemo } from 'react'
import { combineReducers, createStore } from 'redux'
import { useBlock } from 'state/block/hooks'

const multicall = createMulticall()
const reducer = combineReducers({ [multicall.reducerPath]: multicall.reducer })
export const store = createStore(reducer)

export default multicall

export function MulticallUpdater() {
  const { chainId } = useActiveWeb3React()
  const { currentBlock } = useBlock()
  const contract = useInterfaceMulticall()
  // TODO: Update this with block times for specific chains
  const listenerOptions: ListenerOptions = useMemo(
    () => ({
      blocksPerFetch: 1,
    }),
    [],
  )

  return (
    <multicall.Updater
      chainId={chainId}
      latestBlockNumber={currentBlock}
      contract={contract}
      listenerOptions={listenerOptions}
    />
  )
}
