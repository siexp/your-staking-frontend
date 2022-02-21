import s from './ConnectWalletModal.module.scss';
import Logo from '@modules/common/components/Logo';
import { Checkbox } from 'antd';

import phantomWalletIcon from '@assets/images/wallet/phantom.png';
import solflareWalletIcon from '@assets/images/wallet/solflare.png';

const connectWalletList = [
  {
    logoPath: `${phantomWalletIcon}`,
    title: 'Phantom',
    url: '#',
  },
  {
    logoPath: `${solflareWalletIcon}`,
    title: 'Solflare',
    url: '#',
  },
];

const ConnectWalletModal = () => {
  const confirmPrivacy = () => {
    console.log('confirmPrivacy');
  };

  return (
    <div className={s.connectWallet}>
      <div className={s.connectWallet__logo}>
        <Logo />
      </div>
      <h5>Choose your wallet</h5>
      <div className={s.confirmPrivacy}>
        <Checkbox onChange={confirmPrivacy}>
          I have read and accept{' '}
          <a href="#" target="_blank">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" target="_blank">
            Privacy Policy
          </a>
        </Checkbox>
      </div>

      <ul className={s.connectWallet__list}>
        {connectWalletList.map((item: any) => (
          <li key={item.title}>
            <a href="#">
              <div className={s.connectWallet__listLogo}>
                <img src={item.logoPath} alt="Wallet Icon" />
              </div>

              <p className={s.connectWallet__walletName}>{item.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConnectWalletModal;
