/** @jsxImportSource theme-ui */
import React from 'react'
import { Flex, Skeleton, Text } from '@apeswapfinance/uikit'
import { IconButton, ListTag, ListTagVariants, Modal, useModal } from '@ape.swap/uikit'
import ServiceTokenDisplay from 'components/ServiceTokenDisplay'
import { Bills } from 'state/types'
import { getBalanceNumber } from 'utils/formatBalance'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import {
  BillDescriptionContainer,
  BillFooterContentContainer,
  BillsFooterContainer,
  BillsImage,
  BillTitleContainer,
  GridTextValContainer,
  ModalBodyContainer,
  StyledHeadingText,
  TopDescriptionText,
  Container,
  MobileFooterContainer,
  MobileFooterContentContainer,
} from './styles'
import Claim from '../Actions/Claim'
import VestedTimer from '../VestedTimer'
import TransferBillModal from './TransferBillModal'
import { StyledButton } from '../styles'

const modalProps = {
  sx: {
    zIndex: 11,
    overflowY: 'auto',
    maxHeight: 'calc(100% - 30px)',
    minWidth: 'unset',
    width: ['90%'],
    '@media screen and (min-width: 1180px)': {
      maxWidth: '1200px',
    },
    maxWidth: '350px',
  },
}

interface BillModalProps {
  onDismiss: () => void
  bill: Bills
  billId: string
}

const BILL_ATTRIBUTES = ['The Legend', 'The Location', 'The Moment', 'The Trend', 'The Innovation']

const BuyBillModalView: React.FC<BillModalProps> = ({ onDismiss, bill, billId }) => {
  const { chainId } = useActiveWeb3React()
  const { t } = useTranslation()
  const { token, quoteToken, earnToken, lpToken, index, userOwnedBillsData, userOwnedBillsNftData, billType } = bill
  const userOwnedBill = userOwnedBillsData?.find((b) => parseInt(b.id) === parseInt(billId))
  const userOwnedBillNftData = userOwnedBillsNftData?.find((b) => parseInt(b.tokenId) === parseInt(billId))
  const pending = getBalanceNumber(new BigNumber(userOwnedBill?.payout), bill?.earnToken?.decimals[chainId])?.toFixed(4)
  const pendingUsd = (parseFloat(pending) * bill?.earnTokenPrice)?.toFixed(2)
  const claimable = getBalanceNumber(
    new BigNumber(userOwnedBill?.pendingRewards),
    bill?.earnToken?.decimals[chainId],
  )?.toFixed(4)
  const attributes = userOwnedBillNftData?.attributes?.filter((attrib) => BILL_ATTRIBUTES.includes(attrib.trait_type))
  const claimableUsd = (parseFloat(claimable) * bill?.earnTokenPrice)?.toFixed(2)
  const [onPresentTransferBillModal] = useModal(
    <TransferBillModal bill={bill} billId={billId} onDismiss={onDismiss} chainId={chainId} />,
    true,
    true,
    `transferModal${billId}-${index}`,
  )
  return (
    <Modal onDismiss={onDismiss} {...modalProps}>
      <Container>
        <ModalBodyContainer>
          <IconButton
            icon="close"
            color="text"
            variant="transparent"
            onClick={onDismiss}
            sx={{ position: 'absolute', right: '20px', top: '25px' }}
          />
          {userOwnedBillNftData?.image ? (
            <BillsImage image={`${userOwnedBillNftData?.image + '?img-width=720'}`} />
          ) : (
            <Flex alignItems="center" justifyContent="center">
              <BillsImage>
                <img src={'images/bills/bill-nfts.gif'} alt="bill-img" />
              </BillsImage>
            </Flex>
          )}
          <BillDescriptionContainer width="100%">
            <Flex flexDirection="column">
              <BillTitleContainer>
                <Flex sx={{ mb: '5px' }}>
                  <ListTag variant={billType as ListTagVariants} />
                </Flex>
                <Flex alignItems="center">
                  <ServiceTokenDisplay
                    token1={token.symbol}
                    token2={bill.billType === 'reserve' ? earnToken.symbol : quoteToken.symbol}
                    token3={earnToken.symbol}
                    billArrow
                    stakeLp={billType !== 'reserve'}
                  />
                  <StyledHeadingText ml="10px" bold>
                    {lpToken.symbol}
                  </StyledHeadingText>
                  <Text ml={10}>#{userOwnedBill?.id}</Text>
                </Flex>
              </BillTitleContainer>
            </Flex>
            <Flex flexDirection="column">
              {attributes
                ? attributes.map((attrib) => {
                    return (
                      <GridTextValContainer key={attrib.value}>
                        <Text fontSize="12px">{attrib?.trait_type}</Text>
                        <Text fontSize="12px" bold>
                          {attrib?.value}
                        </Text>
                      </GridTextValContainer>
                    )
                  })
                : BILL_ATTRIBUTES.map((attrib) => {
                    return (
                      <GridTextValContainer key={attrib}>
                        <Text fontSize="12px">{t(attrib)}</Text>
                        <Skeleton width="150px" />
                      </GridTextValContainer>
                    )
                  })}
            </Flex>
            <Flex sx={{ width: '100%' }}>
              <Flex sx={{ width: '50%', padding: '5px' }}>
                <Claim
                  billAddress={bill.contractAddress[chainId]}
                  billIds={[billId]}
                  pendingRewards={userOwnedBill?.payout}
                  margin={'0'}
                />
              </Flex>
              <Flex sx={{ width: '50%', padding: '5px' }}>
                <StyledButton onClick={onPresentTransferBillModal} buttonSize={'100%'}>
                  {t('Transfer')}
                </StyledButton>
              </Flex>
            </Flex>
          </BillDescriptionContainer>
        </ModalBodyContainer>
        <BillsFooterContainer>
          <BillFooterContentContainer>
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              style={{ width: '100%', height: '100%' }}
            >
              <TopDescriptionText width="auto">{t('Fully Vested')}</TopDescriptionText>
              <StyledHeadingText ml="10px" bold>
                <VestedTimer
                  lastBlockTimestamp={userOwnedBill?.lastBlockTimestamp}
                  vesting={userOwnedBill?.vesting}
                  userModalFlag
                />
              </StyledHeadingText>
            </Flex>
          </BillFooterContentContainer>
          <BillFooterContentContainer>
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              style={{ width: '100%', height: '100%' }}
            >
              <TopDescriptionText width="auto">{t('Claimable')}</TopDescriptionText>
              <Flex>
                <ServiceTokenDisplay token1={earnToken.symbol} size={25} />
                <StyledHeadingText ml="10px" bold>
                  {claimable && claimable !== 'NaN' ? (
                    `${claimable} ($${claimableUsd})`
                  ) : (
                    <Skeleton width="150px" height="32.5px" animation="waves" />
                  )}
                </StyledHeadingText>
              </Flex>
            </Flex>
          </BillFooterContentContainer>
          <BillFooterContentContainer>
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              style={{ width: '100%', height: '100%' }}
            >
              <TopDescriptionText width="auto">{t('Pending')}</TopDescriptionText>
              <Flex>
                <ServiceTokenDisplay token1={earnToken.symbol} size={25} />
                <StyledHeadingText ml="10px" bold>
                  {pending && pending !== 'NaN' ? (
                    `${pending} ($${pendingUsd})`
                  ) : (
                    <Skeleton width="150px" height="32.5px" animation="waves" />
                  )}
                </StyledHeadingText>
              </Flex>
            </Flex>
          </BillFooterContentContainer>
        </BillsFooterContainer>
        <MobileFooterContainer>
          <MobileFooterContentContainer>
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{ width: '100%', margin: '5px' }}
            >
              <TopDescriptionText width="auto">{t('Claimable')}</TopDescriptionText>
              <Flex>
                <ServiceTokenDisplay token1={earnToken.symbol} size={20} />
                <StyledHeadingText ml="10px" bold>
                  {claimable && claimable !== 'NaN' ? (
                    `${claimable} ($${claimableUsd})`
                  ) : (
                    <Skeleton width="150px" height="32.5px" animation="waves" />
                  )}
                </StyledHeadingText>
              </Flex>
            </Flex>
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{ width: '100%', margin: '5px' }}
            >
              <TopDescriptionText width="auto">{t('Pending')}</TopDescriptionText>
              <Flex>
                <ServiceTokenDisplay token1={earnToken.symbol} size={20} />
                <StyledHeadingText ml="10px" bold>
                  {pending && pending !== 'NaN' ? (
                    `${pending} ($${pendingUsd})`
                  ) : (
                    <Skeleton width="150px" height="32.5px" animation="waves" />
                  )}
                </StyledHeadingText>
              </Flex>
            </Flex>
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{ width: '100%', margin: '5px' }}
            >
              <TopDescriptionText width="auto">{t('Fully Vested')}</TopDescriptionText>
              <StyledHeadingText ml="10px" bold>
                <VestedTimer
                  lastBlockTimestamp={userOwnedBill?.lastBlockTimestamp}
                  vesting={userOwnedBill?.vesting}
                  userModalFlag
                />
              </StyledHeadingText>
            </Flex>
          </MobileFooterContentContainer>
        </MobileFooterContainer>
      </Container>
    </Modal>
  )
}

export default React.memo(BuyBillModalView)
