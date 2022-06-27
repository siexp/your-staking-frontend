import { InjectedConnector } from '@web3-react/injected-connector';
import { NetworkConnector } from '@web3-react/network-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { AbstractConnector } from '@web3-react/abstract-connector';

export const POLLING_INTERVAL = 12000;
export const DEFAULT_CHAIN_ID = 4;

export const NETWORK_URLS: { [chainId: number]: string } = {
  1: 'https://mainnet.infura.io/v3/0b0a905027d546c6a10ffc906951d678',
  4: 'https://rinkeby.infura.io/v3/0b0a905027d546c6a10ffc906951d678',
};

export const injected = new InjectedConnector({
  supportedChainIds: [1, 4],
});

export const network = new NetworkConnector({
  urls: { 1: NETWORK_URLS[1], 4: NETWORK_URLS[4] },
  defaultChainId: DEFAULT_CHAIN_ID,
});

export const walletConnect = new WalletConnectConnector({
  // rpc: { 1: NETWORK_URLS[1], 4: NETWORK_URLS[4] },
  bridge: 'https://pancakeswap.bridge.walletconnect.org/',
  qrcode: true,
  // @ts-ignore
  pollingInterval: POLLING_INTERVAL,
});

export enum ConnectorNames {
  Injected = 'Injected',
  Network = 'Network',
  WalletConnect = 'WalletConnect',
}

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.Network]: network,
  [ConnectorNames.WalletConnect]: walletConnect,
};

export function resetWalletConnector(connector: AbstractConnector) {
  if (connector && connector instanceof WalletConnectConnector) {
    connector.walletConnectProvider = undefined;
  }
}