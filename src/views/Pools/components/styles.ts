import { ThemeUIStyleObject } from 'theme-ui'

export const poolStyles: Record<
  | 'styledBtn'
  | 'smallBtn'
  | 'apeHarder'
  | 'container'
  | 'actionContainer'
  | 'expandedContent'
  | 'harvestContainer'
  | 'depositContainer'
  | 'harvestAllBtn'
  | 'actionWrapper'
  | 'onlyDesktop'
  | 'onlyMobile',
  ThemeUIStyleObject
> = {
  styledBtn: {
    fontSize: '16px',
    padding: '10px',
    width: '130px',
    minWidth: '100px',
    height: '44px',
    '@media screen and (max-width: 852px)': {
      minWidth: '130px',
    },
  },
  smallBtn: {
    maxWidth: '60px',
    width: '100%',
    minWidth: '44px',
    height: '44px',
  },
  apeHarder: {
    fontSize: '16px',
    minWidth: '110px',
    width: '100%',
    '@media screen and (min-width: 852px)': {
      width: '140px',
    },
    height: '44px',
  },
  container: {
    position: 'relative',
    width: '100%',
  },
  actionContainer: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  expandedContent: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '0 10px',
    justifyContent: 'space-between',
  },
  harvestContainer: {
    '@media screen and (max-width: 852px)': {
      flexWrap: 'wrap',
      width: '100%',
    },
  },
  depositContainer: {
    width: '130px',
    minWidth: '100px',
    justifyContent: 'center',
    alignItems: 'center',
    '@media screen and (max-width: 852px)': {
      minWidth: '130px',
    },
  },
  harvestAllBtn: {
    height: '36px',
    lineHeight: '18px',
    justifyContent: 'center',
    width: '100%',
    '@media screen and (min-width: 852px)': {
      width: '150px',
    },
  },
  actionWrapper: {
    width: ['100%', '100%', 'unset'],
    minWidth: '205px',
    justifyContent: 'space-between',
  },
  onlyDesktop: {
    justifyContent: 'space-around',
    display: ['none', 'none', 'flex'],
  },
  onlyMobile: {
    flexDirection: 'column',
    display: ['flex', 'flex', 'none'],
  },
}
