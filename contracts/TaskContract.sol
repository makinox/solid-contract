// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract TaskContract {
    uint256 taskCounter = 0;

    struct Task {
        uint256 id;
        string title;
        string description;
        bool done;
        uint256 createdAt;
    }

    mapping(uint256 => Task) public task;

    function createTask(string memory _title, string memory _description)
        public
    {
        task[taskCounter] = Task(taskCounter, _title, _description, false, block.timestamp);
        taskCounter++;
    }

    // function toggleDone() {}
}
