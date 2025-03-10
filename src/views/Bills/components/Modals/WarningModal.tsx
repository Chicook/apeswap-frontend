/** @jsxImportSource theme-ui */
import { IconButton, useModal, WarningIcon } from '@ape.swap/uikit'
import { Checkbox, Flex, Modal, Text } from '@apeswapfinance/uikit'
import React, { useState } from 'react'
import { Bills } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import { StyledButton } from '../styles'
import BuyBillModalView from './BuyBillModalView'

interface TransferBillModalProps {
  onDismiss: () => void
  bill?: Bills
}

const WarningModal: React.FC<TransferBillModalProps> = ({ onDismiss, bill }) => {
  const [confirmBuy, setConfirmBuy] = useState(false)
  const { t } = useTranslation()
  const { index } = bill
  const [onPresentBuyBillsModal] = useModal(
    <BuyBillModalView bill={bill} onDismiss={null} />,
    true,
    true,
    `billsModal${index}`,
  )

  return (
    <Modal onDismiss={onDismiss} maxWidth="385px">
      <Flex alignItems="center" justifyContent="center" mt="10px">
        <IconButton
          icon="close"
          color="text"
          variant="transparent"
          onClick={onDismiss}
          sx={{ position: 'absolute', right: '20px', top: '25px' }}
        />
        <Text bold fontSize="35px">
          <WarningIcon width="25px" mr="10px" color="error" />
          {t('WARNING')}
          <WarningIcon width="25px" ml="10px" color="error" />
        </Text>
      </Flex>
      <Flex mt="30px" mb="30px" flexDirection="column" alignItems="center">
        <Flex flexDirection="column">
          <Flex>
            <Text style={{ fontWeight: 600 }}>
              The {bill.earnToken.symbol} you recieve from this {bill.token.symbol}-{bill.quoteToken.symbol} ApeSwap
              Bond at a <span style={{ color: 'rgba(223, 65, 65, 1)' }}>{bill.discount}%</span> discount rate is priced
              at <span style={{ textDecoration: 'underline' }}>${bill?.priceUsd}</span>, which is higher than the
              current market rate of{' '}
              <span style={{ textDecoration: 'underline' }}>${bill?.earnTokenPrice?.toFixed(3)} </span>
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex mt="20px" alignItems="center" onClick={() => setConfirmBuy((prev) => !prev)} style={{ cursor: 'pointer' }}>
        <Checkbox checked={confirmBuy} />
        <Text ml="10px" fontSize="12px" bold>
          {t(
            'I understand that I am purchasing %billToken% at a price above the current market rate, and would like to continue.',
            { billToken: bill.earnToken.symbol },
          )}
        </Text>
      </Flex>
      <Flex justifyContent="center" mt={15}>
        <StyledButton onClick={onPresentBuyBillsModal} disabled={!confirmBuy}>
          {t('Continue')}
        </StyledButton>
      </Flex>
    </Modal>
  )
}

export default React.memo(WarningModal)
