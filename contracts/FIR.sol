// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Complaint {
    address public officer;
    uint public idplus;
    uint256[] public pending;
    uint256[] public approved;

    event ComplaintFiled(uint indexed id, address indexed inCharge, string title, string description);
    event ComplaintApproved(uint indexed id, address indexed officer, string approvalRemark);
    event ComplaintRejected(uint indexed id, address indexed officer, string rejectionRemark);
    event OfficerChanged(address indexed officer);
    event ComplaintResolved(uint indexed id, string resolveStatement);
    event gotEvidence (uint indexed id, string mainEvidence);
    event DataStored(uint indexed id, string name, string description, string hashlight);

    constructor() {
        officer = msg.sender;
        idplus = 1;
    }

    modifier onlyOfficer() {
        require(msg.sender == officer, "You are not the officer");
        _;
    }

    struct ComplaintData {
        uint id;
        address inCharge;
        string title;
        string description;
        bool exists;
        bool approved;
        bool resolved;
        string approvalRemark;
        string evidence;
    }

    mapping (uint => ComplaintData) public alltheComplaints;

    function fileComplaint(string memory _title, string memory _description) public {
        ComplaintData memory newComplaint = ComplaintData({
            id: idplus,
            inCharge: msg.sender,
            title: _title,
            description: _description,
            exists: true,
            approved: false,
            resolved: false,
            approvalRemark: "pending",
            evidence: ""
        });

        alltheComplaints[idplus] = newComplaint;
        pending.push(idplus);
        ++idplus;

        emit ComplaintFiled(newComplaint.id, newComplaint.inCharge, newComplaint.title, newComplaint.description);
    }
}
