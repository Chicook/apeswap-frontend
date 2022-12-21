/** @jsxImportSource theme-ui */
import { Flex } from '@ape.swap/uikit'
import React, { useState } from 'react'
import Pairs from '../../components/Pairs'
import { useFetchInfoBlock } from '../../../../state/info/hooks'
import NetworkSelector from '../../components/NetworkSelector'

const PairsPage = () => {
  console.log('PAGE - PAIRS')

  useFetchInfoBlock()

  const [filter, setFilter] = useState('')

  function onFilter(event) {
    setFilter(event.target.value)
  }

  return (
    <Flex sx={{ width: '100%', justifyContent: 'center' }}>
      <Flex
        sx={{
          height: 'fit-content',
          width: 'fit-content',
          maxWidth: '1200px',
          alignItems: 'center',
          flexDirection: 'column',
          margin: '40px 0px',
        }}
      >
        <NetworkSelector onFilter={onFilter} />
        <Pairs headerText="All Pairs" showFavs={true} filter={filter} amount={300} pageSize={30} />
      </Flex>
    </Flex>
  )
}

export default PairsPage
