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

    function approveComplaint(uint _id, string memory _approvalRemark) public onlyOfficer {
        ComplaintData storage currentComplaint = alltheComplaints[_id];
        require(currentComplaint.exists, "Complaint does not exist");
        require(!currentComplaint.approved, "Complaint already verified");

        currentComplaint.approvalRemark = _approvalRemark;
        currentComplaint.approved = true;
        approved.push(_id);

        emit ComplaintApproved(currentComplaint.id, officer, _approvalRemark);
    }

    function removeComplaint(uint _id, string memory _reason) public onlyOfficer returns(string memory) {
        ComplaintData storage currentComplaint = alltheComplaints[_id];
        require(currentComplaint.exists, "Complaint does not exist!");
        require(!currentComplaint.approved, "Cannot remove an approved complaint!");

        currentComplaint.exists = false;
        emit ComplaintRejected(currentComplaint.id, officer, _reason);

        return _reason;
    }  
     function changeOfficer(address _address) public onlyOfficer {
        officer = _address;
        emit OfficerChanged(_address);
    }
     function resolve(uint _id, string memory _resolveStatement) public onlyOfficer returns (string memory){
        ComplaintData storage currentComplaint = alltheComplaints[_id];
        require (currentComplaint.exists, "Complaint does not exist");
        require (currentComplaint.resolved == false, "complaint is already resolved");
        currentComplaint.resolved = true;
        emit ComplaintResolved(_id, _resolveStatement);

        return "Case Resolved!";
    }

    function addEvidence(uint _id, string memory _evidence) public onlyOfficer {
        ComplaintData storage currentComplaint = alltheComplaints[_id];
        require(currentComplaint.exists, "Complaint does not exist");
        currentComplaint.evidence = string(abi.encodePacked(currentComplaint.evidence, "-", _evidence));
    }

    function getEvidences(uint _id) public view returns (string memory) {
        ComplaintData storage currentComplaint = alltheComplaints[_id];
        require(currentComplaint.exists, "Complaint does not exist");

        return currentComplaint.evidence;
    }

     function caseRegistration(string memory _name, string memory _description, string memory _evidenceHash) public returns (uint) {
        ComplaintData memory newComplaint = ComplaintData({
            id: idplus,
            inCharge: msg.sender,
            title: _name,
            description: _description,
            exists: true,
            approved: false,
            resolved: false,
            approvalRemark: "pending",            evidence: _evidenceHash
        });

        alltheComplaints[idplus] = newComplaint;
        ++idplus;

        emit DataStored(newComplaint.id, _name, _description, _evidenceHash);

        return newComplaint.id;
    }
    
}
