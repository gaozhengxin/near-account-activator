// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class AcceptOwner extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AcceptOwner entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type AcceptOwner must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AcceptOwner", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): AcceptOwner | null {
    return changetype<AcceptOwner | null>(
      store.get("AcceptOwner", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class ActivationFailed extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ActivationFailed entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type ActivationFailed must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ActivationFailed", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): ActivationFailed | null {
    return changetype<ActivationFailed | null>(
      store.get("ActivationFailed", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get near_account(): string {
    let value = this.get("near_account");
    return value!.toString();
  }

  set near_account(value: string) {
    this.set("near_account", Value.fromString(value));
  }

  get activationInfo_payer(): Bytes {
    let value = this.get("activationInfo_payer");
    return value!.toBytes();
  }

  set activationInfo_payer(value: Bytes) {
    this.set("activationInfo_payer", Value.fromBytes(value));
  }

  get activationInfo_price(): BigInt {
    let value = this.get("activationInfo_price");
    return value!.toBigInt();
  }

  set activationInfo_price(value: BigInt) {
    this.set("activationInfo_price", Value.fromBigInt(value));
  }

  get activationInfo_publicKey(): string {
    let value = this.get("activationInfo_publicKey");
    return value!.toString();
  }

  set activationInfo_publicKey(value: string) {
    this.set("activationInfo_publicKey", Value.fromString(value));
  }

  get activationInfo_status(): i32 {
    let value = this.get("activationInfo_status");
    return value!.toI32();
  }

  set activationInfo_status(value: i32) {
    this.set("activationInfo_status", Value.fromI32(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class ActivationRequest extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ActivationRequest entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type ActivationRequest must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ActivationRequest", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): ActivationRequest | null {
    return changetype<ActivationRequest | null>(
      store.get("ActivationRequest", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get near_account(): string {
    let value = this.get("near_account");
    return value!.toString();
  }

  set near_account(value: string) {
    this.set("near_account", Value.fromString(value));
  }

  get activationInfo_payer(): Bytes {
    let value = this.get("activationInfo_payer");
    return value!.toBytes();
  }

  set activationInfo_payer(value: Bytes) {
    this.set("activationInfo_payer", Value.fromBytes(value));
  }

  get activationInfo_price(): BigInt {
    let value = this.get("activationInfo_price");
    return value!.toBigInt();
  }

  set activationInfo_price(value: BigInt) {
    this.set("activationInfo_price", Value.fromBigInt(value));
  }

  get activationInfo_publicKey(): string {
    let value = this.get("activationInfo_publicKey");
    return value!.toString();
  }

  set activationInfo_publicKey(value: string) {
    this.set("activationInfo_publicKey", Value.fromString(value));
  }

  get activationInfo_status(): i32 {
    let value = this.get("activationInfo_status");
    return value!.toI32();
  }

  set activationInfo_status(value: i32) {
    this.set("activationInfo_status", Value.fromI32(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class ActivationSuccess extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ActivationSuccess entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type ActivationSuccess must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ActivationSuccess", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): ActivationSuccess | null {
    return changetype<ActivationSuccess | null>(
      store.get("ActivationSuccess", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get near_account(): string {
    let value = this.get("near_account");
    return value!.toString();
  }

  set near_account(value: string) {
    this.set("near_account", Value.fromString(value));
  }

  get activationInfo_payer(): Bytes {
    let value = this.get("activationInfo_payer");
    return value!.toBytes();
  }

  set activationInfo_payer(value: Bytes) {
    this.set("activationInfo_payer", Value.fromBytes(value));
  }

  get activationInfo_price(): BigInt {
    let value = this.get("activationInfo_price");
    return value!.toBigInt();
  }

  set activationInfo_price(value: BigInt) {
    this.set("activationInfo_price", Value.fromBigInt(value));
  }

  get activationInfo_publicKey(): string {
    let value = this.get("activationInfo_publicKey");
    return value!.toString();
  }

  set activationInfo_publicKey(value: string) {
    this.set("activationInfo_publicKey", Value.fromString(value));
  }

  get activationInfo_status(): i32 {
    let value = this.get("activationInfo_status");
    return value!.toI32();
  }

  set activationInfo_status(value: i32) {
    this.set("activationInfo_status", Value.fromI32(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class Refund extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Refund entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Refund must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Refund", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Refund | null {
    return changetype<Refund | null>(store.get("Refund", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get near_account(): string {
    let value = this.get("near_account");
    return value!.toString();
  }

  set near_account(value: string) {
    this.set("near_account", Value.fromString(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class SetPaused extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SetPaused entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type SetPaused must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SetPaused", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): SetPaused | null {
    return changetype<SetPaused | null>(
      store.get("SetPaused", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get paused(): boolean {
    let value = this.get("paused");
    return value!.toBoolean();
  }

  set paused(value: boolean) {
    this.set("paused", Value.fromBoolean(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class SetPrice extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SetPrice entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type SetPrice must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SetPrice", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): SetPrice | null {
    return changetype<SetPrice | null>(store.get("SetPrice", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class TransferOwner extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TransferOwner entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type TransferOwner must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TransferOwner", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): TransferOwner | null {
    return changetype<TransferOwner | null>(
      store.get("TransferOwner", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class Withdrawl extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Withdrawl entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Withdrawl must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Withdrawl", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Withdrawl | null {
    return changetype<Withdrawl | null>(
      store.get("Withdrawl", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}
