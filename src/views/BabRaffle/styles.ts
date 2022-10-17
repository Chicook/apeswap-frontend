import { ThemeUIStyleObject } from 'theme-ui'

export const styles: Record<string, ThemeUIStyleObject> = {
  playBody: {
    lineHeight: '14px',
    fontSize: '12px',
    fontWeight: 500,
    marginBottom: '10px',
  },
  walletHolds: {
    margin: [0, '20px'],
    fontSize: '14px',
    width: '100%',
  },
  btnContainer: {
    width: ['90%'],
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: ['column', 'row'],
    gap: ['8px'],
    marginBottom: ['20px'],
  },
  btn: {
    width: ['100%', '100%', 'auto'],
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 700,
    height: '44px',
  },
  ntd: {
    background: 'white2',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: ['50px', '100px'],
    gap: [0, '15px'],
  },
  ntdTop: {
    width: ['90%'],
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: ['20px', '30px'],
    gap: ['10px', '15px'],
  },
  ntdHeader: {
    fontSize: '30px',
    lineHeight: '45px',
    fontWeight: 700,
  },
  ntdSupportHeader: {
    fontSize: ['18px', '22px'],
    lineHeight: ['27px', '33px'],
    fontWeight: 700,
  },
  ntdDescription: {
    fontSize: ['16px', '22px'],
    lineHeight: ['24px', '33px'],
    fontWeight: 400,
  },
  nfb: {
    background: 'white2',
    padding: ['20px', '40px'],
    borderRadius: '10px',
    minHeight: '400px',
    width: '100%',
    alignItems: 'center',
    justifyContent: ['center', 'left'],
    flexWrap: ['wrap', 'nowrap'],
    gap: ['20px', 0],
  },
  nfbCon: {
    flexDirection: 'column',
    width: '666px',
    padding: '0px 10px 0px 0px',
    justifyContent: 'center',
  },
  nfbTextCon: {
    gap: ['20px', '50px'],
    flexDirection: 'column',
    textAlign: ['center', 'left'],
    justifyContent: ['center', 'flex-start'],
    alignItems: ['center', 'flex-start'],
  },
  nfbHeader: {
    fontSize: '22px',
    fontWeight: 700,
    lineHeight: '33px',
  },
  nfbDescription: {
    fontSize: '12px',
    lineHeight: '14px',
    fontWeight: 500,
  },
  nfbBottom: {
    fontSize: ['16px', '18px'],
    lineHeight: ['24px', '27px'],
    fontWeight: '700px',
  },
  nfbImage: {
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
}
