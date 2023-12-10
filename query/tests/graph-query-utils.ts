import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ComplaintApproved,
  ComplaintFiled,
  ComplaintRejected,
  ComplaintResolved,
  DataStored,
  OfficerChanged,
  gotEvidence
} from "../generated/graph_query/graph_query"

export function createComplaintApprovedEvent(
  id: BigInt,
  officer: Address,
  approvalRemark: string
): ComplaintApproved {
  let complaintApprovedEvent = changetype<ComplaintApproved>(newMockEvent())

  complaintApprovedEvent.parameters = new Array()

  complaintApprovedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  complaintApprovedEvent.parameters.push(
    new ethereum.EventParam("officer", ethereum.Value.fromAddress(officer))
  )
  complaintApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "approvalRemark",
      ethereum.Value.fromString(approvalRemark)
    )
  )

  return complaintApprovedEvent
}

export function createComplaintFiledEvent(
  id: BigInt,
  inCharge: Address,
  title: string,
  description: string
): ComplaintFiled {
  let complaintFiledEvent = changetype<ComplaintFiled>(newMockEvent())

  complaintFiledEvent.parameters = new Array()

  complaintFiledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  complaintFiledEvent.parameters.push(
    new ethereum.EventParam("inCharge", ethereum.Value.fromAddress(inCharge))
  )
  complaintFiledEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  complaintFiledEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )

  return complaintFiledEvent
}

export function createComplaintRejectedEvent(
  id: BigInt,
  officer: Address,
  rejectionRemark: string
): ComplaintRejected {
  let complaintRejectedEvent = changetype<ComplaintRejected>(newMockEvent())

  complaintRejectedEvent.parameters = new Array()

  complaintRejectedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  complaintRejectedEvent.parameters.push(
    new ethereum.EventParam("officer", ethereum.Value.fromAddress(officer))
  )
  complaintRejectedEvent.parameters.push(
    new ethereum.EventParam(
      "rejectionRemark",
      ethereum.Value.fromString(rejectionRemark)
    )
  )

  return complaintRejectedEvent
}

export function createComplaintResolvedEvent(
  id: BigInt,
  resolveStatement: string
): ComplaintResolved {
  let complaintResolvedEvent = changetype<ComplaintResolved>(newMockEvent())

  complaintResolvedEvent.parameters = new Array()

  complaintResolvedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  complaintResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "resolveStatement",
      ethereum.Value.fromString(resolveStatement)
    )
  )

  return complaintResolvedEvent
}

export function createDataStoredEvent(
  id: BigInt,
  name: string,
  description: string,
  hashlight: string
): DataStored {
  let dataStoredEvent = changetype<DataStored>(newMockEvent())

  dataStoredEvent.parameters = new Array()

  dataStoredEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  dataStoredEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  dataStoredEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  dataStoredEvent.parameters.push(
    new ethereum.EventParam("hashlight", ethereum.Value.fromString(hashlight))
  )

  return dataStoredEvent
}

export function createOfficerChangedEvent(officer: Address): OfficerChanged {
  let officerChangedEvent = changetype<OfficerChanged>(newMockEvent())

  officerChangedEvent.parameters = new Array()

  officerChangedEvent.parameters.push(
    new ethereum.EventParam("officer", ethereum.Value.fromAddress(officer))
  )

  return officerChangedEvent
}

export function creategotEvidenceEvent(
  id: BigInt,
  mainEvidence: string
): gotEvidence {
  let gotEvidenceEvent = changetype<gotEvidence>(newMockEvent())

  gotEvidenceEvent.parameters = new Array()

  gotEvidenceEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  gotEvidenceEvent.parameters.push(
    new ethereum.EventParam(
      "mainEvidence",
      ethereum.Value.fromString(mainEvidence)
    )
  )

  return gotEvidenceEvent
}
