import {
  ComplaintApproved as ComplaintApprovedEvent,
  ComplaintFiled as ComplaintFiledEvent,
  ComplaintRejected as ComplaintRejectedEvent,
  ComplaintResolved as ComplaintResolvedEvent,
  DataStored as DataStoredEvent,
  OfficerChanged as OfficerChangedEvent,
  gotEvidence as gotEvidenceEvent
} from "../generated/graph_query/graph_query"
import {
  ComplaintApproved,
  ComplaintFiled,
  ComplaintRejected,
  ComplaintResolved,
  DataStored,
  OfficerChanged,
  gotEvidence
} from "../generated/schema"

export function handleComplaintApproved(event: ComplaintApprovedEvent): void {
  let entity = new ComplaintApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.graph_query_id = event.params.id
  entity.officer = event.params.officer
  entity.approvalRemark = event.params.approvalRemark

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleComplaintFiled(event: ComplaintFiledEvent): void {
  let entity = new ComplaintFiled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.graph_query_id = event.params.id
  entity.inCharge = event.params.inCharge
  entity.title = event.params.title
  entity.description = event.params.description

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleComplaintRejected(event: ComplaintRejectedEvent): void {
  let entity = new ComplaintRejected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.graph_query_id = event.params.id
  entity.officer = event.params.officer
  entity.rejectionRemark = event.params.rejectionRemark

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleComplaintResolved(event: ComplaintResolvedEvent): void {
  let entity = new ComplaintResolved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.graph_query_id = event.params.id
  entity.resolveStatement = event.params.resolveStatement

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDataStored(event: DataStoredEvent): void {
  let entity = new DataStored(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.graph_query_id = event.params.id
  entity.name = event.params.name
  entity.description = event.params.description
  entity.hashlight = event.params.hashlight

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOfficerChanged(event: OfficerChangedEvent): void {
  let entity = new OfficerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.officer = event.params.officer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlegotEvidence(event: gotEvidenceEvent): void {
  let entity = new gotEvidence(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.graph_query_id = event.params.id
  entity.mainEvidence = event.params.mainEvidence

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
