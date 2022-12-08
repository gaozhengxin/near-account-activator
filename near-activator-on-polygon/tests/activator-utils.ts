import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/Activator/Activator"

export function createAcceptOwnerEvent(owner: Address): AcceptOwner {
  let acceptOwnerEvent = changetype<AcceptOwner>(newMockEvent())

  acceptOwnerEvent.parameters = new Array()

  acceptOwnerEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return acceptOwnerEvent
}

export function createActivationFailedEvent(
  near_account: string,
  activationInfo: ethereum.Tuple
): ActivationFailed {
  let activationFailedEvent = changetype<ActivationFailed>(newMockEvent())

  activationFailedEvent.parameters = new Array()

  activationFailedEvent.parameters.push(
    new ethereum.EventParam(
      "near_account",
      ethereum.Value.fromString(near_account)
    )
  )
  activationFailedEvent.parameters.push(
    new ethereum.EventParam(
      "activationInfo",
      ethereum.Value.fromTuple(activationInfo)
    )
  )

  return activationFailedEvent
}

export function createActivationRequestEvent(
  near_account: string,
  activationInfo: ethereum.Tuple
): ActivationRequest {
  let activationRequestEvent = changetype<ActivationRequest>(newMockEvent())

  activationRequestEvent.parameters = new Array()

  activationRequestEvent.parameters.push(
    new ethereum.EventParam(
      "near_account",
      ethereum.Value.fromString(near_account)
    )
  )
  activationRequestEvent.parameters.push(
    new ethereum.EventParam(
      "activationInfo",
      ethereum.Value.fromTuple(activationInfo)
    )
  )

  return activationRequestEvent
}

export function createActivationSuccessEvent(
  near_account: string,
  activationInfo: ethereum.Tuple
): ActivationSuccess {
  let activationSuccessEvent = changetype<ActivationSuccess>(newMockEvent())

  activationSuccessEvent.parameters = new Array()

  activationSuccessEvent.parameters.push(
    new ethereum.EventParam(
      "near_account",
      ethereum.Value.fromString(near_account)
    )
  )
  activationSuccessEvent.parameters.push(
    new ethereum.EventParam(
      "activationInfo",
      ethereum.Value.fromTuple(activationInfo)
    )
  )

  return activationSuccessEvent
}

export function createRefundEvent(
  near_account: string,
  to: Address,
  amount: BigInt
): Refund {
  let refundEvent = changetype<Refund>(newMockEvent())

  refundEvent.parameters = new Array()

  refundEvent.parameters.push(
    new ethereum.EventParam(
      "near_account",
      ethereum.Value.fromString(near_account)
    )
  )
  refundEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  refundEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return refundEvent
}

export function createSetPausedEvent(paused: boolean): SetPaused {
  let setPausedEvent = changetype<SetPaused>(newMockEvent())

  setPausedEvent.parameters = new Array()

  setPausedEvent.parameters.push(
    new ethereum.EventParam("paused", ethereum.Value.fromBoolean(paused))
  )

  return setPausedEvent
}

export function createSetPriceEvent(price: BigInt): SetPrice {
  let setPriceEvent = changetype<SetPrice>(newMockEvent())

  setPriceEvent.parameters = new Array()

  setPriceEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return setPriceEvent
}

export function createTransferOwnerEvent(to: Address): TransferOwner {
  let transferOwnerEvent = changetype<TransferOwner>(newMockEvent())

  transferOwnerEvent.parameters = new Array()

  transferOwnerEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return transferOwnerEvent
}

export function createWithdrawlEvent(amount: BigInt, to: Address): Withdrawl {
  let withdrawlEvent = changetype<Withdrawl>(newMockEvent())

  withdrawlEvent.parameters = new Array()

  withdrawlEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawlEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return withdrawlEvent
}
