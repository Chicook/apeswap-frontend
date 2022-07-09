/** @jsxImportSource theme-ui */
import { SvgProps } from '@ape.swap/uikit'
import * as React from 'react'

const MonkeyImage: React.FC<SvgProps> = ({ color = 'text' }) => {
  return (
    <svg
      width="200"
      height="90"
      viewBox="0 0 200 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ fill: color }}
    >
      <g opacity="0.5">
        <path d="M149.206 89.0034L148.996 88.2934L148.876 87.8434C148.856 87.7834 148.846 87.7334 148.826 87.6734C147.886 83.9834 147.726 80.1134 147.576 76.3634C147.406 72.1434 147.236 67.7734 145.956 63.5134L145.916 63.2034C145.736 62.5534 145.536 61.9034 145.316 61.2534C145.116 60.6134 144.896 59.9834 144.656 59.3534C139.306 45.0034 127.116 32.6634 113.206 27.7634L112.986 20.6834L104.146 25.9134C103.556 25.8234 103.016 25.7934 102.466 25.7834C102.266 24.8234 101.966 23.4334 101.696 22.2534C101.506 21.3834 101.346 20.6434 101.276 20.3034L101.116 19.5434L100.346 19.5034C93.6458 19.1434 88.3158 25.3134 87.1858 27.8834C72.9158 32.7634 60.8358 44.8434 55.3958 59.3934C55.1558 60.0234 54.9358 60.6534 54.7358 61.2934C54.4958 61.9834 54.2858 62.6834 54.0858 63.3934C52.9058 67.5934 52.7558 71.9034 52.6058 76.0834C52.4758 79.9134 52.3358 83.8734 51.3658 87.6734C51.3558 87.7334 51.3358 87.7834 51.3258 87.8434C51.2858 88.0034 51.2358 88.1534 51.1958 88.3134C51.1058 88.6534 51.0158 88.9934 50.9258 89.3434H52.9958C53.0358 89.1734 53.0858 89.0134 53.1258 88.8434C53.2158 88.5134 53.3058 88.1734 53.3858 87.8434C53.4058 87.7834 53.4158 87.7234 53.4258 87.6734C54.3458 83.8334 54.4758 79.9334 54.6058 76.1534C54.7458 72.0934 54.8958 67.9034 56.0158 63.9334C60.3958 48.3234 73.3658 34.5434 88.2858 29.6234L88.8358 29.3834L88.9558 28.8334C89.1558 27.9634 93.4258 21.6734 99.4858 21.4934C99.5558 21.8334 99.6458 22.2434 99.7458 22.6834C100.076 24.1834 100.536 26.2334 100.656 26.9434L100.796 27.7734H101.646C102.586 27.7734 103.276 27.7734 104.146 27.9434L104.516 28.0234L111.086 24.1234L111.256 29.2134L111.916 29.4334C126.686 34.3634 139.546 48.0834 143.956 63.6134L143.996 63.9534C145.246 68.0134 145.416 72.3034 145.586 76.4434C145.726 80.1334 145.886 83.9334 146.776 87.6734C146.786 87.7334 146.796 87.7834 146.816 87.8434C146.896 88.1734 146.986 88.5134 147.076 88.8434L147.226 89.3434H149.306C149.276 89.2334 149.236 89.1134 149.206 89.0034Z" />
        <path d="M56.5251 60.0032C56.4451 59.9232 56.2751 59.8232 56.0651 59.8132L56.0151 59.9032V61.8132C55.6751 61.8132 55.4351 61.6832 55.2851 61.5632L55.1551 61.5032C55.0151 61.4332 54.8751 61.3532 54.7351 61.2932C52.3151 60.1232 49.6951 60.0832 46.9451 61.1732C43.7551 62.3832 41.3151 65.3732 40.2451 69.3832C38.7851 74.7832 40.0351 80.8032 43.5051 85.0832C44.2751 86.0632 45.0651 86.9232 45.8851 87.6732C45.9551 87.7332 46.0151 87.7932 46.0751 87.8432C46.7051 88.4132 47.3451 88.9032 48.0051 89.3432H44.7651C44.2451 88.8832 43.7251 88.3832 43.2451 87.8432C43.1851 87.7932 43.1351 87.7332 43.0851 87.6732C42.6951 87.2532 42.3151 86.8032 41.9451 86.3332C38.0851 81.5732 36.6951 74.8732 38.3051 68.8632C39.5551 64.2332 42.4351 60.7532 46.2251 59.3032C50.0951 57.7732 53.2551 58.4132 55.3951 59.3932C55.5951 59.4732 55.7851 59.5732 55.9651 59.6632C56.2651 59.7532 56.4551 59.9332 56.5251 60.0032Z" />
        <path d="M158.056 86.3438C157.686 86.8138 157.306 87.2638 156.916 87.6738C156.866 87.7338 156.816 87.7938 156.766 87.8438C156.246 88.3938 155.726 88.8938 155.206 89.3438H151.896C152.546 88.9238 153.216 88.4338 153.886 87.8438C153.956 87.7838 154.016 87.7338 154.076 87.6738C154.886 86.9538 155.706 86.1038 156.496 85.0938C159.966 80.8038 161.226 74.7838 159.766 69.3838C158.696 65.3738 156.246 62.3838 153.066 61.1738C150.256 60.1138 147.706 60.1438 145.316 61.2538C145.036 61.3738 144.766 61.5138 144.496 61.6738L143.496 59.9438C143.876 59.7238 144.266 59.5238 144.656 59.3538C147.486 58.1038 150.546 58.0838 153.776 59.3038C157.566 60.7538 160.456 64.2338 161.696 68.8638C163.316 74.8738 161.916 81.5738 158.056 86.3438Z" />
        <path d="M116.274 55.0537C112.384 55.0537 108.724 55.9937 105.374 57.8537C102.004 59.7837 97.8142 59.7837 94.4242 57.8437C91.0942 55.9937 87.4342 55.0537 83.5442 55.0537C71.8442 55.0537 62.3242 64.0337 62.3242 75.0737C62.3242 77.9637 62.9642 80.7537 64.1642 83.1237C64.5642 83.9137 64.9742 84.7237 65.5642 85.4937C66.0042 86.1837 66.3642 86.9137 66.6442 87.6737C66.6642 87.7237 66.6842 87.7837 66.6942 87.8437C66.8742 88.3337 67.0142 88.8337 67.1142 89.3437H69.1442C69.0542 88.8437 68.9442 88.3337 68.7942 87.8437C68.7742 87.7837 68.7642 87.7237 68.7342 87.6737C68.3842 86.5237 67.8742 85.4037 67.2042 84.3537C66.6842 83.6637 66.3242 82.9637 65.9542 82.2237C64.8942 80.1237 64.3242 77.6537 64.3242 75.0737C64.3242 65.1337 72.9442 57.0537 83.5442 57.0537C87.0842 57.0537 90.4242 57.9137 93.4442 59.5837C97.4342 61.8637 102.384 61.8637 106.364 59.5937C109.394 57.9137 112.724 57.0537 116.274 57.0537C126.864 57.0537 135.484 65.1337 135.484 75.0737C135.484 77.6537 134.924 80.1237 133.864 82.2237L133.784 82.4237C133.644 82.9937 133.114 83.6837 132.564 84.4237C131.914 85.4437 131.414 86.5437 131.074 87.6737C131.044 87.7237 131.034 87.7837 131.014 87.8437C130.864 88.3337 130.754 88.8337 130.674 89.3437H132.694C132.794 88.8337 132.934 88.3337 133.104 87.8437C133.124 87.7837 133.144 87.7237 133.164 87.6737C133.434 86.9337 133.784 86.2337 134.204 85.5637C134.804 84.7637 135.424 83.9437 135.694 83.0337C136.864 80.6737 137.484 77.9237 137.484 75.0737C137.484 64.0337 127.964 55.0537 116.274 55.0537Z" />
        <path d="M82.5847 68.7432C78.9047 68.7432 75.8047 71.7332 75.8047 75.2632V77.1632C75.8047 80.8132 78.7847 83.6732 82.5847 83.6732C86.3847 83.6732 89.3547 80.8132 89.3547 77.1632V75.2632C89.3547 71.6032 86.3747 68.7432 82.5847 68.7432ZM87.3547 77.1632C87.3547 79.6932 85.2547 81.6732 82.5847 81.6732C79.9147 81.6732 77.8047 79.6932 77.8047 77.1632V75.2632C77.8047 72.8132 79.9947 70.7432 82.5847 70.7432C85.1747 70.7432 87.3547 72.7332 87.3547 75.2632V77.1632Z" />
        <path d="M117.425 68.7432C113.755 68.7432 110.645 71.7332 110.645 75.2632V77.1632C110.645 80.8132 113.625 83.6732 117.425 83.6732C121.225 83.6732 124.205 80.8132 124.205 77.1632V75.2632C124.205 71.6032 121.225 68.7432 117.425 68.7432ZM122.205 77.1632C122.205 79.6932 120.105 81.6732 117.425 81.6732C114.745 81.6732 112.645 79.6932 112.645 77.1632V75.2632C112.645 72.8132 114.835 70.7432 117.425 70.7432C120.015 70.7432 122.205 72.7332 122.205 75.2632V77.1632Z" />
        <path d="M199.316 87.6729H0.685547V89.3428H199.316V87.6729Z" />
        <g opacity="0.5">
          <path d="M159.577 65.0828C159.177 65.0828 158.797 64.8428 158.647 64.4528C158.447 63.9428 158.697 63.3628 159.217 63.1528C160.007 62.8428 160.767 62.5228 161.477 62.2028C161.977 61.9728 162.577 62.2028 162.797 62.7028C163.027 63.2028 162.797 63.8028 162.297 64.0228C161.547 64.3628 160.767 64.6928 159.937 65.0128C159.817 65.0628 159.697 65.0828 159.567 65.0828H159.577Z" />
          <path d="M166.067 61.8933C165.737 61.8933 165.407 61.7233 165.217 61.4233C164.927 60.9533 165.067 60.3333 165.537 60.0433C166.927 59.1733 168.137 58.2533 169.127 57.3033C169.527 56.9233 170.157 56.9333 170.537 57.3333C170.917 57.7333 170.907 58.3633 170.507 58.7433C169.417 59.7933 168.097 60.8033 166.587 61.7433C166.417 61.8433 166.237 61.8933 166.057 61.8933H166.067ZM172.647 55.2533C172.497 55.2533 172.357 55.2233 172.207 55.1533C171.707 54.9133 171.507 54.3133 171.747 53.8133C172.307 52.6533 172.597 51.4533 172.597 50.2633C172.597 50.0833 172.597 49.9133 172.577 49.7333C172.537 49.1833 172.947 48.7033 173.497 48.6633C174.027 48.6133 174.527 49.0333 174.567 49.5833C174.587 49.8033 174.587 50.0333 174.587 50.2533C174.587 51.7533 174.237 53.2433 173.537 54.6833C173.367 55.0433 173.007 55.2433 172.637 55.2433L172.647 55.2533ZM157.087 52.0133C157.037 52.0133 156.977 52.0133 156.927 52.0033C154.947 51.6833 153.287 50.7533 152.247 49.3733C151.917 48.9333 151.997 48.3033 152.437 47.9733C152.877 47.6333 153.507 47.7233 153.837 48.1633C154.567 49.1233 155.777 49.7933 157.247 50.0233C157.787 50.1133 158.167 50.6233 158.077 51.1733C157.997 51.6633 157.577 52.0133 157.087 52.0133ZM161.747 51.5333C161.337 51.5333 160.947 51.2733 160.807 50.8633C160.627 50.3433 160.897 49.7733 161.427 49.5933C162.387 49.2633 163.337 48.7633 164.257 48.1333C164.567 47.9233 164.877 47.6833 165.167 47.4233C165.577 47.0633 166.217 47.1033 166.577 47.5133C166.947 47.9333 166.897 48.5633 166.487 48.9233C166.137 49.2333 165.767 49.5233 165.387 49.7833C164.317 50.5133 163.207 51.0933 162.077 51.4833C161.967 51.5233 161.857 51.5433 161.747 51.5433V51.5333ZM172.067 46.2233C171.737 46.2233 171.407 46.0533 171.217 45.7533C170.877 45.2033 170.467 44.6733 170.007 44.1733C169.877 44.4333 169.747 44.6933 169.607 44.9333C169.337 45.4133 168.737 45.5933 168.247 45.3233C167.767 45.0533 167.587 44.4433 167.857 43.9633C168.067 43.5833 168.277 43.1733 168.467 42.7533C168.397 42.6933 168.317 42.6433 168.247 42.5833C167.807 42.2533 167.707 41.6233 168.037 41.1833C168.317 40.8033 168.817 40.6833 169.237 40.8633C169.357 40.5133 169.477 40.1533 169.597 39.7833C169.757 39.2533 170.317 38.9633 170.847 39.1233C171.377 39.2833 171.667 39.8433 171.507 40.3733C171.317 41.0033 171.107 41.6133 170.877 42.1933C171.667 42.9533 172.367 43.8033 172.917 44.6833C173.207 45.1533 173.077 45.7633 172.607 46.0633C172.437 46.1633 172.257 46.2133 172.077 46.2133L172.067 46.2233ZM152.537 45.2833C152.407 45.2833 152.277 45.2533 152.147 45.2033C151.637 44.9933 151.397 44.4033 151.617 43.8933C152.217 42.4633 153.357 41.1233 154.997 39.9233C155.447 39.5933 156.067 39.6933 156.397 40.1333C156.727 40.5833 156.627 41.2033 156.187 41.5333C154.837 42.5233 153.927 43.5733 153.467 44.6633C153.307 45.0433 152.937 45.2733 152.547 45.2733L152.537 45.2833ZM164.647 40.6333C164.547 40.6333 164.447 40.6133 164.347 40.5833C162.897 40.1233 161.457 39.9433 160.067 40.0833C159.507 40.1333 159.027 39.7333 158.977 39.1833C158.927 38.6333 159.327 38.1433 159.877 38.0933C161.537 37.9333 163.237 38.1433 164.947 38.6833C165.477 38.8533 165.767 39.4133 165.597 39.9433C165.457 40.3733 165.067 40.6433 164.647 40.6433V40.6333ZM171.617 36.4733C171.567 36.4733 171.507 36.4733 171.447 36.4633C170.907 36.3733 170.537 35.8533 170.627 35.3133C170.867 33.8633 171.047 32.3133 171.167 30.6933C171.207 30.1433 171.697 29.7333 172.237 29.7633C172.787 29.8033 173.207 30.2833 173.167 30.8333C173.047 32.5133 172.857 34.1233 172.607 35.6333C172.527 36.1233 172.107 36.4733 171.617 36.4733Z" />
          <path d="M172.308 26.9732C171.758 26.9732 171.318 26.5332 171.308 25.9832C171.288 24.4932 171.218 23.5632 171.218 23.5532C171.178 23.0032 171.588 22.5232 172.138 22.4832C172.678 22.4432 173.168 22.8532 173.208 23.4032C173.208 23.4432 173.288 24.4032 173.298 25.9632C173.298 26.5132 172.858 26.9632 172.308 26.9732H172.298H172.308Z" />
        </g>
        <g opacity="0.5">
          <path d="M29.9151 85.622C29.6851 85.622 29.4651 85.542 29.2751 85.392C29.2451 85.362 28.4651 84.712 27.3851 83.592C27.0051 83.192 27.0151 82.562 27.4151 82.182C27.8151 81.802 28.4451 81.812 28.8251 82.212C29.8151 83.242 30.5451 83.852 30.5551 83.862C30.9751 84.212 31.0351 84.842 30.6851 85.272C30.4851 85.512 30.2051 85.632 29.9151 85.632V85.622Z" />
          <path d="M24.9851 80.0622C24.6651 80.0622 24.3451 79.9122 24.1551 79.6222C23.1051 78.0622 22.3051 76.5022 21.7751 74.9922C21.6751 74.7022 21.7151 74.4022 21.8551 74.1522C21.4451 74.1122 21.0451 74.0522 20.6551 73.9822C20.1151 73.8822 19.7451 73.3622 19.8451 72.8222C19.9451 72.2822 20.4651 71.9122 21.0051 72.0122C21.7851 72.1522 22.5951 72.2222 23.4251 72.2222C24.1551 72.2222 24.8851 72.1622 25.6051 72.0522C26.1551 71.9622 26.6651 72.3422 26.7451 72.8922C26.8251 73.4422 26.4551 73.9522 25.9051 74.0322C25.1451 74.1522 24.3751 74.2122 23.6051 74.2222C23.6251 74.2522 23.6351 74.2922 23.6451 74.3322C24.1151 75.6822 24.8351 77.0822 25.7851 78.4922C26.0951 78.9522 25.9751 79.5722 25.5151 79.8822C25.3451 80.0022 25.1451 80.0522 24.9551 80.0522L24.9851 80.0622ZM30.4351 72.4722C30.0951 72.4722 29.7551 72.2922 29.5651 71.9722C29.2851 71.4922 29.4451 70.8822 29.9251 70.6022C31.1051 69.9122 31.9851 69.0722 32.5351 68.1022C32.6451 67.9122 32.7451 67.7122 32.8151 67.5222C33.0251 67.0122 33.6051 66.7722 34.1151 66.9722C34.6251 67.1822 34.8751 67.7622 34.6651 68.2722C34.5551 68.5322 34.4251 68.8022 34.2651 69.0822C33.5351 70.3622 32.4051 71.4522 30.9151 72.3222C30.7551 72.4122 30.5851 72.4622 30.4151 72.4622L30.4351 72.4722ZM16.2851 72.1722C16.0851 72.1722 15.8751 72.1122 15.7051 71.9822C14.1251 70.8522 13.0251 69.3722 12.4251 67.5922C12.2451 67.0722 12.5251 66.5022 13.0551 66.3222C13.5751 66.1422 14.1451 66.4222 14.3251 66.9522C14.7951 68.3322 15.6551 69.4722 16.8851 70.3622C17.3351 70.6822 17.4351 71.3122 17.1151 71.7622C16.9151 72.0322 16.6151 72.1822 16.3051 72.1822L16.2851 72.1722ZM22.0851 70.8022C22.0851 70.8022 22.0151 70.8022 21.9851 70.8022C21.4351 70.7422 21.0351 70.2522 21.0951 69.7022C21.1851 68.8122 21.3951 67.9322 21.7151 67.0922C22.0651 66.1722 22.5151 65.3522 23.0451 64.6322C23.3751 64.1922 24.0051 64.1022 24.4451 64.4322C24.8851 64.7622 24.9751 65.3922 24.6451 65.8322C24.2251 66.4022 23.8651 67.0622 23.5851 67.8022C23.3251 68.4822 23.1651 69.1822 23.0851 69.9022C23.0351 70.4122 22.5951 70.8022 22.0951 70.8022H22.0851ZM32.6151 64.4922C32.4051 64.4922 32.1951 64.4222 32.0151 64.2922C31.0351 63.5522 29.5051 63.2622 28.1051 63.5622C27.5651 63.6822 27.0351 63.3322 26.9151 62.7922C26.8051 62.2522 27.1451 61.7222 27.6851 61.6022C29.6451 61.1822 31.7651 61.6022 33.2151 62.7022C33.6551 63.0322 33.7451 63.6622 33.4051 64.1022C33.2051 64.3622 32.9051 64.5022 32.6051 64.5022L32.6151 64.4922ZM13.3551 63.4122C13.2551 63.4122 13.1451 63.3922 13.0351 63.3622C12.5151 63.1922 12.2251 62.6222 12.4051 62.1022C12.9451 60.4822 13.9451 58.9622 15.3651 57.6022C15.7651 57.2222 16.3951 57.2322 16.7751 57.6322C17.1551 58.0322 17.1451 58.6622 16.7451 59.0422C15.5551 60.1722 14.7351 61.4122 14.2951 62.7222C14.1551 63.1422 13.7651 63.4122 13.3451 63.4122H13.3551ZM20.1451 56.5522C19.7751 56.5522 19.4151 56.3422 19.2451 55.9822C19.0051 55.4822 19.2151 54.8822 19.7151 54.6422C21.2151 53.9222 22.8551 53.3522 24.6051 52.9622C25.1451 52.8422 25.6751 53.1822 25.7951 53.7222C25.9151 54.2622 25.5751 54.7922 25.0351 54.9122C23.4351 55.2722 21.9351 55.7822 20.5751 56.4422C20.4351 56.5122 20.2851 56.5422 20.1451 56.5422V56.5522ZM44.3951 56.4822C44.2951 56.4822 44.1851 56.4622 44.0851 56.4322C42.5851 55.9422 41.1951 55.7422 39.7251 55.5222L39.4051 55.4722C38.8551 55.3922 38.4851 54.8822 38.5651 54.3322C38.6451 53.7822 39.1551 53.4122 39.7051 53.4922L40.0251 53.5422C41.5151 53.7622 43.0451 53.9922 44.7151 54.5222C45.2451 54.6922 45.5251 55.2522 45.3551 55.7822C45.2151 56.2022 44.8251 56.4722 44.4051 56.4722L44.3951 56.4822ZM34.6751 54.6322C34.6751 54.6322 34.5851 54.6322 34.5351 54.6322C32.9251 54.4122 31.3151 54.3222 29.7651 54.3622C29.2351 54.3922 28.7551 53.9422 28.7351 53.3922C28.7151 52.8422 29.1551 52.3822 29.7051 52.3622C31.3551 52.3122 33.0951 52.4122 34.8151 52.6522C35.3651 52.7322 35.7451 53.2322 35.6651 53.7822C35.5951 54.2822 35.1651 54.6422 34.6751 54.6422V54.6322Z" />
          <path d="M50.925 60.1723C50.705 60.1723 50.485 60.1023 50.305 59.9523C49.645 59.4223 48.995 58.9423 48.365 58.5323C47.905 58.2323 47.775 57.6123 48.085 57.1423C48.385 56.6823 49.015 56.5523 49.475 56.8623C50.155 57.3123 50.865 57.8323 51.565 58.3923C51.995 58.7423 52.065 59.3623 51.725 59.8023C51.525 60.0523 51.235 60.1823 50.945 60.1823L50.925 60.1723Z" />
        </g>
        <path d="M172.096 17.6621C170.576 17.6621 169.336 16.4221 169.336 14.9021V5.42211C169.336 3.90211 170.576 2.66211 172.096 2.66211C173.616 2.66211 174.856 3.90211 174.856 5.42211V14.9021C174.856 16.4221 173.616 17.6621 172.096 17.6621ZM172.096 4.65211C171.676 4.65211 171.336 4.99211 171.336 5.41211V14.9021C171.336 15.3221 171.676 15.6621 172.096 15.6621C172.516 15.6621 172.856 15.3221 172.856 14.9021V5.42211C172.856 5.00211 172.516 4.66211 172.096 4.66211V4.65211Z" />
        <path d="M179.205 16.9529C175.705 16.9529 172.855 14.1029 172.855 10.6029C172.855 7.10293 175.705 4.25293 179.205 4.25293C182.705 4.25293 185.555 7.10293 185.555 10.6029C185.555 14.1029 182.705 16.9529 179.205 16.9529ZM179.205 6.25293C176.805 6.25293 174.855 8.20293 174.855 10.6029C174.855 13.0029 176.805 14.9529 179.205 14.9529C181.605 14.9529 183.555 13.0029 183.555 10.6029C183.555 8.20293 181.605 6.25293 179.205 6.25293Z" />
        <path d="M164.987 16.9529C161.487 16.9529 158.637 14.1029 158.637 10.6029C158.637 7.10293 161.487 4.25293 164.987 4.25293C168.487 4.25293 171.337 7.10293 171.337 10.6029C171.337 14.1029 168.487 16.9529 164.987 16.9529ZM164.987 6.25293C162.587 6.25293 160.637 8.20293 160.637 10.6029C160.637 13.0029 162.587 14.9529 164.987 14.9529C167.387 14.9529 169.337 13.0029 169.337 10.6029C169.337 8.20293 167.387 6.25293 164.987 6.25293Z" />
        <path d="M170.967 5.0625C170.707 5.0625 170.457 4.9625 170.257 4.7725L167.187 1.7025C166.797 1.3125 166.797 0.6825 167.187 0.2925C167.577 -0.0975 168.207 -0.0975 168.597 0.2925L171.667 3.3625C172.057 3.7525 172.057 4.3825 171.667 4.7725C171.467 4.9725 171.217 5.0625 170.957 5.0625H170.967Z" />
        <path d="M173.208 5.0625C172.948 5.0625 172.698 4.9625 172.498 4.7725C172.108 4.3825 172.108 3.7525 172.498 3.3625L175.568 0.2925C175.958 -0.0975 176.588 -0.0975 176.978 0.2925C177.368 0.6825 177.368 1.3125 176.978 1.7025L173.908 4.7725C173.708 4.9725 173.458 5.0625 173.198 5.0625H173.208Z" />
        <path d="M48.9938 37.7103C48.5138 37.7103 48.0938 37.3703 48.0138 36.8803C47.9238 36.3403 48.2838 35.8203 48.8338 35.7303L53.6138 34.9103C54.1638 34.8203 54.6738 35.1803 54.7638 35.7303C54.8538 36.2703 54.4938 36.7903 53.9438 36.8803L49.1638 37.7003C49.1038 37.7003 49.0538 37.7103 48.9938 37.7103Z" />
        <path d="M60.1428 25.9404C59.8828 25.9404 59.6328 25.8404 59.4328 25.6504L53.3628 19.5804C52.9728 19.1904 52.9728 18.5604 53.3628 18.1704C53.7528 17.7804 54.3828 17.7804 54.7728 18.1704L60.8428 24.2404C61.2328 24.6304 61.2328 25.2604 60.8428 25.6504C60.6428 25.8504 60.3928 25.9404 60.1328 25.9404H60.1428Z" />
        <path d="M70.4941 19.87C69.9441 19.87 69.4941 19.42 69.4941 18.87V13C69.4941 12.45 69.9441 12 70.4941 12C71.0441 12 71.4941 12.45 71.4941 13V18.87C71.4941 19.42 71.0441 19.87 70.4941 19.87Z" />
        <path d="M85.3555 78.7422C87.5646 78.7422 89.3555 76.9513 89.3555 74.7422C89.3555 72.533 87.5646 70.7422 85.3555 70.7422C83.1463 70.7422 81.3555 72.533 81.3555 74.7422C81.3555 76.9513 83.1463 78.7422 85.3555 78.7422Z" />
        <path d="M119.984 77.873C122.194 77.873 123.984 76.0822 123.984 73.873C123.984 71.6639 122.194 69.873 119.984 69.873C117.775 69.873 115.984 71.6639 115.984 73.873C115.984 76.0822 117.775 77.873 119.984 77.873Z" />
      </g>
    </svg>
  )
}

export default MonkeyImage
