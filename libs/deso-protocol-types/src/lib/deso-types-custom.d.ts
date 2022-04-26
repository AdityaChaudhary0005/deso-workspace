import { BlockTemplateStats, MsgDeSoTxn, TransactionFee } from './deso-types';
export interface GetApproveResponse {
    id?: string;
    service: 'identity';
    method: 'approve';
    payload: {
        users: {
            [key: string]: {
                accessLevel: number;
                accessLevelHmac: string;
                btcDepositAddress: string;
                encryptedSeedHex: string;
                hasExtraText: boolean;
                network: string;
            };
        };
        signedTransactionHex: string;
    };
}
export interface IdentityLoginResponse {
    id?: string;
    service: 'identity';
    method: string;
    payload: {
        users: LoginUsers;
        publicKeyAdded: string;
        signedUp: boolean;
    };
}
export interface UploadImageRequest {
    UserPublicKeyBase58Check: string;
    JWT: string;
    file: File;
}
export interface UploadVideoRequest {
    uploadLength: any;
    uploadMetaData: any;
    file: File;
}
export interface GetVideoStatusRequest {
    videoId: string;
}
export interface UploadVideoResponse {
    streamMediaId: string;
}
export interface LoginUser {
    accessLevel: number;
    accessLevelHmac: string;
    btcDepositAddress: string;
    encryptedSeedHex: string;
    hasExtraText: boolean;
    ethDepositAddress: string;
    network: string;
}
export interface LoginUsers {
    [user: string]: LoginUser;
}
export interface IdentityApproveResponse {
    id?: string;
    service: 'identity';
    method: string;
    payload: {
        users: LoginUser;
        signedTransactionHex: string;
    };
}
export interface IdentityJwtResponse {
    id: string;
    service: 'identity';
    payload: {
        jwt: string;
    };
}
export interface IdentitySignRequest {
    id: string;
    service: string;
    method: string;
    payload: {
        accessLevel: number;
        accessLevelHmac: string;
        encryptedSeedHex: string;
        transactionHex?: string;
        signedTransactionHex?: string;
        encryptedMessage?: {
            EncryptedHex: string;
            PublicKey: string;
            IsSender: boolean;
            Legacy: boolean;
        }[];
    };
}
export interface GetDecryptMessagesRequest {
    EncryptedHex: string;
    PublicKey: string;
    IsSender: boolean;
    Legacy: boolean;
    Version: number;
    SenderMessagingPublicKey: string;
    SenderMessagingGroupKeyName: string;
    RecipientMessagingPublicKey: string;
    RecipientMessagingGroupKeyName: string;
}
export interface GetDecryptMessagesResponse {
    EncryptedHex: string;
    PublicKey: string;
    IsSender: boolean;
    Legacy: boolean;
    Version: number;
    SenderMessagingPublicKey: string;
    SenderMessagingGroupKeyName: string;
    RecipientMessagingPublicKey: string;
    RecipientMessagingGroupKeyName: string;
    decryptedMessage: string;
}
export interface GetBlockTemplateRequest {
    PublicKeyBase58Check: string;
    NumHeaders: number;
    HeaderVersion: number;
}
export interface GetBlockTemplateResponse {
    Headers: number[][];
    BlockID: string;
    DifficultyTargetHex: string;
    ExtraNonces: number[];
    LatestBlockTemplateStats: BlockTemplateStats;
}
export interface SubmitBlockRequest {
    PublicKeyBase58Check: string;
    Header: string[];
    ExtraData: any;
    BlockID: string;
}
export interface SubmitBlockResponse {
    IsMainChain: boolean;
    IsOrphan: boolean;
}
export declare enum DeSoNetwork {
    mainnet = "mainnet",
    testnet = "testnet"
}
export interface DerivedPrivateUserInfo {
    derivedSeedHex: string;
    derivedPublicKeyBase58Check: string;
    publicKeyBase58Check: string;
    btcDepositAddress: string;
    ethDepositAddress: string;
    expirationBlock: number;
    network: DeSoNetwork;
    accessSignature: string;
    jwt: string;
    derivedJwt: string;
    messagingPublicKeyBase58Check: string;
    messagingPrivateKey: string;
    messagingKeyName: string;
    messagingKeySignature: string;
    transactionSpendingLimitHex: string | undefined;
}
export declare enum CreatorCoinLimitOperationString {
    ANY = "any",
    BUY = "buy",
    SELL = "sell",
    TRANSFER = "transfer"
}
export declare enum DAOCoinLimitOperationString {
    ANY = "any",
    MINT = "mint",
    BURN = "burn",
    DISABLE_MINTING = "disable_minting",
    UPDATE_TRANSFER_RESTRICTION_STATUS = "update_transfer_restriction_status",
    TRANSFER = "transfer"
}
export declare type CoinLimitOperationString = DAOCoinLimitOperationString | CreatorCoinLimitOperationString;
export interface CoinOperationLimitMap<T extends CoinLimitOperationString> {
    [public_key: string]: OperationToCountMap<T>;
}
export declare type OperationToCountMap<T extends LimitOperationString> = {
    [operation in T]?: number;
};
export declare type LimitOperationString = DAOCoinLimitOperationString | CreatorCoinLimitOperationString | NFTLimitOperationString;
export declare type CreatorCoinOperationLimitMap = CoinOperationLimitMap<CreatorCoinLimitOperationString>;
export declare type DAOCoinOperationLimitMap = CoinOperationLimitMap<DAOCoinLimitOperationString>;
export declare type DAOCoinLimitOrderLimitMap = {
    [buying_public_key: string]: {
        [selling_public_key: string]: number;
    };
};
export declare enum NFTLimitOperationString {
    ANY = "any",
    UPDATE = "update",
    BID = "nft_bid",
    ACCEPT_BID = "accept_nft_bid",
    TRANSFER = "transfer",
    BURN = "burn",
    ACCEPT_TRANSFER = "accept_nft_transfer"
}
export interface NFTOperationLimitMap {
    [post_hash_hex: string]: {
        [serial_number: number]: OperationToCountMap<NFTLimitOperationString>;
    };
}
export declare enum TransactionType {
    BasicTransfer = "BASIC_TRANSFER",
    BitcoinExchange = "BITCOIN_EXCHANGE",
    PrivateMessage = "PRIVATE_MESSAGE",
    SubmitPost = "SUBMIT_POST",
    UpdateProfile = "UPDATE_PROFILE",
    UpdateBitcoinUSDExchangeRate = "UPDATE_BITCOIN_USD_EXCHANGE_RATE",
    Follow = "FOLLOW",
    Like = "LIKE",
    CreatorCoin = "CREATOR_COIN",
    SwapIdentity = "SWAP_IDENTITY",
    UpdateGlobalParams = "UPDATE_GLOBAL_PARAMS",
    CreatorCoinTransfer = "CREATOR_COIN_TRANSFER",
    CreateNFT = "CREATE_NFT",
    UpdateNFT = "UPDATE_NFT",
    AcceptNFTBid = "ACCEPT_NFT_BID",
    NFTBid = "NFT_BID",
    NFTTransfer = "NFT_TRANSFER",
    AcceptNFTTransfer = "ACCEPT_NFT_TRANSFER",
    BurnNFT = "BURN_NFT",
    AuthorizeDerivedKey = "AUTHORIZE_DERIVED_KEY",
    MessagingGroup = "MESSAGING_GROUP",
    DAOCoin = "DAO_COIN",
    DAOCoinTransfer = "DAO_COIN_TRANSFER",
    DAOCoinLimitOrder = "DAO_COIN_LIMIT_ORDER"
}
export interface TransactionSpendingLimitResponse {
    GlobalDESOLimit: number;
    TransactionCountLimitMap?: {
        [k in TransactionType]?: number;
    };
    CreatorCoinOperationLimitMap?: CreatorCoinOperationLimitMap;
    DAOCoinOperationLimitMap?: DAOCoinOperationLimitMap;
    NFTOperationLimitMap?: NFTOperationLimitMap;
    DAOCoinLimitOrderLimitMap?: DAOCoinLimitOrderLimitMap;
    DerivedKeyMemo?: string;
}
export interface IdentityDeriveParams {
    callback?: string;
    webview?: boolean;
    publicKey?: string;
    transactionSpendingLimitResponse?: TransactionSpendingLimitResponse;
    derivedPublicKey?: string;
}
export interface IdentityDeriveQueryParams {
    callback?: string;
    webview?: boolean;
    publicKey?: string;
    transactionSpendingLimitResponse?: string;
    derivedPublicKey?: string;
}
export interface AuthorizeDerivedKeyParams {
    OwnerPublicKeyBase58Check?: string;
    DerivedPublicKeyBase58Check?: string;
    ExpirationBlock?: number;
    DeleteKey: boolean;
    DerivedKeySignature?: boolean;
    TransactionFees: TransactionFee[] | null;
    MinFeeRateNanosPerKB: number;
    TransactionSpendingLimitResponse?: TransactionSpendingLimitResponse;
    Memo?: string;
    AppName?: string;
    ExtraData?: {
        [k: string]: string;
    };
}
export declare enum DAOCoinLimitOrderOperationTypeString {
    DAOCoinLimitOrderOperationTypeStringASK = "ASK",
    DAOCoinLimitOrderOperationTypeStringBID = "BID"
}
export interface DAOCoinLimitOrderWithExchangeRateAndQuantityRequest {
    TransactorPublicKeyBase58Check: string;
    BuyingDAOCoinCreatorPublicKeyBase58CheckOrUsername: string;
    SellingDAOCoinCreatorPublicKeyBase58CheckOrUsername: string;
    ExchangeRateCoinsToSellPerCoinToBuy: number;
    QuantityToFill: number;
    OperationType: DAOCoinLimitOrderOperationTypeString;
    MinFeeRateNanosPerKB?: number;
    TransactionFees: TransactionFee[] | null;
}
export interface DAOCoinLimitOrderWithCancelOrderIDRequest {
    TransactorPublicKeyBase58Check: string;
    CancelOrderID: string;
    MinFeeRateNanosPerKB?: number;
    TransactionFees: TransactionFee[] | null;
}
export interface DAOCoinLimitOrderResponse extends TransactionConstructionResponse {
    SpendAmountNanos: number;
    TotalInputNanos: number;
    ChangeAmountNanos: number;
    FeeNanos: number;
    Transaction: MsgDeSoTxn;
    TransactionHex: string;
    TxnHashHex: string;
}
export interface GetDAOCoinLimitOrdersRequest {
    DAOCoin1CreatorPublicKeyBase58CheckOrUsername: string;
    DAOCoin2CreatorPublicKeyBase58CheckOrUsername: string;
}
export interface GetDAOCoinLimitOrdersResponse {
    Orders: DAOCoinLimitOrderEntryResponse[];
}
export interface DAOCoinLimitOrderEntryResponse {
    TransactorPublicKeyBase58Check: string;
    BuyingDAOCoinCreatorPublicKeyBase58Check: string;
    SellingDAOCoinCreatorPublicKeyBase58Check: string;
    ExchangeRateCoinsToSellPerCoinToBuy: number;
    QuantityToFill: number;
    OperationType: DAOCoinLimitOrderOperationTypeString;
    OrderID: string;
}
export interface GetTransactorDAOCoinLimitOrdersRequest {
    TransactorPublicKeyBase58CheckOrUsername: string;
}
export interface TransactionConstructionResponse {
    TransactionHex: string;
}