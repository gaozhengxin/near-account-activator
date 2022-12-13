### 1. Connect to EVM wallet
- Metamask and others
- Check if network id is `137` (Polygon)
### 2. Connect to Near wallet
- Sender and others
- Load user's account id
- Check if the account is not activated
### 3. Check inputs
- 1. Check Near account id
  - If it's a hex string of length 64 -> ok
  - If it's a xxx.near string -> check if it doesn't exist -> ok
- 2. Check public key
  - If it's a hex string of length 64 -> it's a valid ed25519 public key -> ok
  - If it's a base58 string -> decodes into a hex string of length 64 -> it's a valid ed25519 public key -> ok
### 4. Call activator contract on polygon
1. Get `activator.price`
2. Call `activator.activate(string accountName, string publicKey)` with `value: price`
### 5. Check result
Call `activationInfoOf(string accountId)`, where `accountId` can be a hex string or .near account name.
Display the result
```
{
    string payer
    uint price
    string publicKey
    uint status
}
```
Status has 5 possible values
```
enum activationStatus {
    void, // 0: Unknown
    pending, // 1: Is accepted, waiting to receive money on Near
    success, // 2: Success
    fail, // 3: Activation failed, user can ask for refund
    refunded // 4: Refunded
}
```
### 6. Refund
`activator.refund(accountId)`