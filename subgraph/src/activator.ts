import {
  AcceptOwner as AcceptOwnerEvent,
  ActivationFailed as ActivationFailedEvent,
  ActivationRequest as ActivationRequestEvent,
  ActivationSuccess as ActivationSuccessEvent,
  Refund as RefundEvent,
  SetPaused as SetPausedEvent,
  SetPrice as SetPriceEvent,
  TransferOwner as TransferOwnerEvent,
  Withdrawl as WithdrawlEvent
} from "../generated/Activator/Activator"
import {
  AcceptOwner,
  ActivationFailed,
  ActivationRequest,
  ActivationSuccess,
  Refund,
  SetPaused,
  SetPrice,
  TransferOwner,
  Withdrawl
} from "../generated/schema"

export function handleAcceptOwner(event: AcceptOwnerEvent): void {
  let entity = new AcceptOwner(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleActivationFailed(event: ActivationFailedEvent): void {
  let entity = new ActivationFailed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.near_account = event.params.near_account
  entity.activationInfo_payer = event.params.activationInfo.payer
  entity.activationInfo_price = event.params.activationInfo.price
  entity.activationInfo_publicKey = event.params.activationInfo.publicKey
  entity.activationInfo_status = event.params.activationInfo.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleActivationRequest(event: ActivationRequestEvent): void {
  let entity = new ActivationRequest(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.near_account = event.params.near_account
  entity.activationInfo_payer = event.params.activationInfo.payer
  entity.activationInfo_price = event.params.activationInfo.price
  entity.activationInfo_publicKey = event.params.activationInfo.publicKey
  entity.activationInfo_status = event.params.activationInfo.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleActivationSuccess(event: ActivationSuccessEvent): void {
  let entity = new ActivationSuccess(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.near_account = event.params.near_account
  entity.activationInfo_payer = event.params.activationInfo.payer
  entity.activationInfo_price = event.params.activationInfo.price
  entity.activationInfo_publicKey = event.params.activationInfo.publicKey
  entity.activationInfo_status = event.params.activationInfo.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRefund(event: RefundEvent): void {
  let entity = new Refund(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.near_account = event.params.near_account
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetPaused(event: SetPausedEvent): void {
  let entity = new SetPaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.paused = event.params.paused

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetPrice(event: SetPriceEvent): void {
  let entity = new SetPrice(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferOwner(event: TransferOwnerEvent): void {
  let entity = new TransferOwner(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawl(event: WithdrawlEvent): void {
  let entity = new Withdrawl(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
