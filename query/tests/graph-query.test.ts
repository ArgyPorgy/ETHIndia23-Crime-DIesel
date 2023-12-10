import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ComplaintApproved } from "../generated/schema"
import { ComplaintApproved as ComplaintApprovedEvent } from "../generated/graph_query/graph_query"
import { handleComplaintApproved } from "../src/graph-query"
import { createComplaintApprovedEvent } from "./graph-query-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let officer = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let approvalRemark = "Example string value"
    let newComplaintApprovedEvent = createComplaintApprovedEvent(
      id,
      officer,
      approvalRemark
    )
    handleComplaintApproved(newComplaintApprovedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ComplaintApproved created and stored", () => {
    assert.entityCount("ComplaintApproved", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ComplaintApproved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "officer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ComplaintApproved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "approvalRemark",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
