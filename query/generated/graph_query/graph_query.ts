// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ComplaintApproved extends ethereum.Event {
  get params(): ComplaintApproved__Params {
    return new ComplaintApproved__Params(this);
  }
}

export class ComplaintApproved__Params {
  _event: ComplaintApproved;

  constructor(event: ComplaintApproved) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get officer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approvalRemark(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class ComplaintFiled extends ethereum.Event {
  get params(): ComplaintFiled__Params {
    return new ComplaintFiled__Params(this);
  }
}

export class ComplaintFiled__Params {
  _event: ComplaintFiled;

  constructor(event: ComplaintFiled) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get inCharge(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get title(): string {
    return this._event.parameters[2].value.toString();
  }

  get description(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class ComplaintRejected extends ethereum.Event {
  get params(): ComplaintRejected__Params {
    return new ComplaintRejected__Params(this);
  }
}

export class ComplaintRejected__Params {
  _event: ComplaintRejected;

  constructor(event: ComplaintRejected) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get officer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get rejectionRemark(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class ComplaintResolved extends ethereum.Event {
  get params(): ComplaintResolved__Params {
    return new ComplaintResolved__Params(this);
  }
}

export class ComplaintResolved__Params {
  _event: ComplaintResolved;

  constructor(event: ComplaintResolved) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get resolveStatement(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class DataStored extends ethereum.Event {
  get params(): DataStored__Params {
    return new DataStored__Params(this);
  }
}

export class DataStored__Params {
  _event: DataStored;

  constructor(event: DataStored) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get description(): string {
    return this._event.parameters[2].value.toString();
  }

  get hashlight(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class OfficerChanged extends ethereum.Event {
  get params(): OfficerChanged__Params {
    return new OfficerChanged__Params(this);
  }
}

export class OfficerChanged__Params {
  _event: OfficerChanged;

  constructor(event: OfficerChanged) {
    this._event = event;
  }

  get officer(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class gotEvidence extends ethereum.Event {
  get params(): gotEvidence__Params {
    return new gotEvidence__Params(this);
  }
}

export class gotEvidence__Params {
  _event: gotEvidence;

  constructor(event: gotEvidence) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get mainEvidence(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class graph_query__alltheComplaintsResult {
  value0: BigInt;
  value1: Address;
  value2: string;
  value3: string;
  value4: boolean;
  value5: boolean;
  value6: boolean;
  value7: string;
  value8: string;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: string,
    value3: string,
    value4: boolean,
    value5: boolean,
    value6: boolean,
    value7: string,
    value8: string
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    map.set("value7", ethereum.Value.fromString(this.value7));
    map.set("value8", ethereum.Value.fromString(this.value8));
    return map;
  }

  getId(): BigInt {
    return this.value0;
  }

  getInCharge(): Address {
    return this.value1;
  }

  getTitle(): string {
    return this.value2;
  }

  getDescription(): string {
    return this.value3;
  }

  getExists(): boolean {
    return this.value4;
  }

  getApproved(): boolean {
    return this.value5;
  }

  getResolved(): boolean {
    return this.value6;
  }

  getApprovalRemark(): string {
    return this.value7;
  }

  getEvidence(): string {
    return this.value8;
  }
}

export class graph_query extends ethereum.SmartContract {
  static bind(address: Address): graph_query {
    return new graph_query("graph_query", address);
  }

  alltheComplaints(param0: BigInt): graph_query__alltheComplaintsResult {
    let result = super.call(
      "alltheComplaints",
      "alltheComplaints(uint256):(uint256,address,string,string,bool,bool,bool,string,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new graph_query__alltheComplaintsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toString(),
      result[3].toString(),
      result[4].toBoolean(),
      result[5].toBoolean(),
      result[6].toBoolean(),
      result[7].toString(),
      result[8].toString()
    );
  }

  try_alltheComplaints(
    param0: BigInt
  ): ethereum.CallResult<graph_query__alltheComplaintsResult> {
    let result = super.tryCall(
      "alltheComplaints",
      "alltheComplaints(uint256):(uint256,address,string,string,bool,bool,bool,string,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new graph_query__alltheComplaintsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toString(),
        value[3].toString(),
        value[4].toBoolean(),
        value[5].toBoolean(),
        value[6].toBoolean(),
        value[7].toString(),
        value[8].toString()
      )
    );
  }

  approved(param0: BigInt): BigInt {
    let result = super.call("approved", "approved(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_approved(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("approved", "approved(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  caseRegistration(
    _name: string,
    _description: string,
    _evidenceHash: string
  ): BigInt {
    let result = super.call(
      "caseRegistration",
      "caseRegistration(string,string,string):(uint256)",
      [
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_description),
        ethereum.Value.fromString(_evidenceHash)
      ]
    );

    return result[0].toBigInt();
  }

  try_caseRegistration(
    _name: string,
    _description: string,
    _evidenceHash: string
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "caseRegistration",
      "caseRegistration(string,string,string):(uint256)",
      [
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_description),
        ethereum.Value.fromString(_evidenceHash)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getEvidences(_id: BigInt): string {
    let result = super.call("getEvidences", "getEvidences(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_id)
    ]);

    return result[0].toString();
  }

  try_getEvidences(_id: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getEvidences",
      "getEvidences(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  idplus(): BigInt {
    let result = super.call("idplus", "idplus():(uint256)", []);

    return result[0].toBigInt();
  }

  try_idplus(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("idplus", "idplus():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  officer(): Address {
    let result = super.call("officer", "officer():(address)", []);

    return result[0].toAddress();
  }

  try_officer(): ethereum.CallResult<Address> {
    let result = super.tryCall("officer", "officer():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pending(param0: BigInt): BigInt {
    let result = super.call("pending", "pending(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_pending(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("pending", "pending(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  removeComplaint(_id: BigInt, _reason: string): string {
    let result = super.call(
      "removeComplaint",
      "removeComplaint(uint256,string):(string)",
      [
        ethereum.Value.fromUnsignedBigInt(_id),
        ethereum.Value.fromString(_reason)
      ]
    );

    return result[0].toString();
  }

  try_removeComplaint(
    _id: BigInt,
    _reason: string
  ): ethereum.CallResult<string> {
    let result = super.tryCall(
      "removeComplaint",
      "removeComplaint(uint256,string):(string)",
      [
        ethereum.Value.fromUnsignedBigInt(_id),
        ethereum.Value.fromString(_reason)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  resolve(_id: BigInt, _resolveStatement: string): string {
    let result = super.call("resolve", "resolve(uint256,string):(string)", [
      ethereum.Value.fromUnsignedBigInt(_id),
      ethereum.Value.fromString(_resolveStatement)
    ]);

    return result[0].toString();
  }

  try_resolve(
    _id: BigInt,
    _resolveStatement: string
  ): ethereum.CallResult<string> {
    let result = super.tryCall("resolve", "resolve(uint256,string):(string)", [
      ethereum.Value.fromUnsignedBigInt(_id),
      ethereum.Value.fromString(_resolveStatement)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddEvidenceCall extends ethereum.Call {
  get inputs(): AddEvidenceCall__Inputs {
    return new AddEvidenceCall__Inputs(this);
  }

  get outputs(): AddEvidenceCall__Outputs {
    return new AddEvidenceCall__Outputs(this);
  }
}

export class AddEvidenceCall__Inputs {
  _call: AddEvidenceCall;

  constructor(call: AddEvidenceCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _evidence(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class AddEvidenceCall__Outputs {
  _call: AddEvidenceCall;

  constructor(call: AddEvidenceCall) {
    this._call = call;
  }
}

export class ApproveComplaintCall extends ethereum.Call {
  get inputs(): ApproveComplaintCall__Inputs {
    return new ApproveComplaintCall__Inputs(this);
  }

  get outputs(): ApproveComplaintCall__Outputs {
    return new ApproveComplaintCall__Outputs(this);
  }
}

export class ApproveComplaintCall__Inputs {
  _call: ApproveComplaintCall;

  constructor(call: ApproveComplaintCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _approvalRemark(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ApproveComplaintCall__Outputs {
  _call: ApproveComplaintCall;

  constructor(call: ApproveComplaintCall) {
    this._call = call;
  }
}

export class CaseRegistrationCall extends ethereum.Call {
  get inputs(): CaseRegistrationCall__Inputs {
    return new CaseRegistrationCall__Inputs(this);
  }

  get outputs(): CaseRegistrationCall__Outputs {
    return new CaseRegistrationCall__Outputs(this);
  }
}

export class CaseRegistrationCall__Inputs {
  _call: CaseRegistrationCall;

  constructor(call: CaseRegistrationCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _description(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _evidenceHash(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class CaseRegistrationCall__Outputs {
  _call: CaseRegistrationCall;

  constructor(call: CaseRegistrationCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ChangeOfficerCall extends ethereum.Call {
  get inputs(): ChangeOfficerCall__Inputs {
    return new ChangeOfficerCall__Inputs(this);
  }

  get outputs(): ChangeOfficerCall__Outputs {
    return new ChangeOfficerCall__Outputs(this);
  }
}

export class ChangeOfficerCall__Inputs {
  _call: ChangeOfficerCall;

  constructor(call: ChangeOfficerCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeOfficerCall__Outputs {
  _call: ChangeOfficerCall;

  constructor(call: ChangeOfficerCall) {
    this._call = call;
  }
}

export class FileComplaintCall extends ethereum.Call {
  get inputs(): FileComplaintCall__Inputs {
    return new FileComplaintCall__Inputs(this);
  }

  get outputs(): FileComplaintCall__Outputs {
    return new FileComplaintCall__Outputs(this);
  }
}

export class FileComplaintCall__Inputs {
  _call: FileComplaintCall;

  constructor(call: FileComplaintCall) {
    this._call = call;
  }

  get _title(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _description(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class FileComplaintCall__Outputs {
  _call: FileComplaintCall;

  constructor(call: FileComplaintCall) {
    this._call = call;
  }
}

export class RemoveComplaintCall extends ethereum.Call {
  get inputs(): RemoveComplaintCall__Inputs {
    return new RemoveComplaintCall__Inputs(this);
  }

  get outputs(): RemoveComplaintCall__Outputs {
    return new RemoveComplaintCall__Outputs(this);
  }
}

export class RemoveComplaintCall__Inputs {
  _call: RemoveComplaintCall;

  constructor(call: RemoveComplaintCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _reason(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class RemoveComplaintCall__Outputs {
  _call: RemoveComplaintCall;

  constructor(call: RemoveComplaintCall) {
    this._call = call;
  }

  get value0(): string {
    return this._call.outputValues[0].value.toString();
  }
}

export class ResolveCall extends ethereum.Call {
  get inputs(): ResolveCall__Inputs {
    return new ResolveCall__Inputs(this);
  }

  get outputs(): ResolveCall__Outputs {
    return new ResolveCall__Outputs(this);
  }
}

export class ResolveCall__Inputs {
  _call: ResolveCall;

  constructor(call: ResolveCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _resolveStatement(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ResolveCall__Outputs {
  _call: ResolveCall;

  constructor(call: ResolveCall) {
    this._call = call;
  }

  get value0(): string {
    return this._call.outputValues[0].value.toString();
  }
}
