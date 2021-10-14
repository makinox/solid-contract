// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract TaskContract {
    uint public taskCounter = 0;

    constructor () {
        createTask("Mi primer tarea de ejemplo", "Mi primera descripcion");
    }

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

    function toggleDone(uint _id) public {
        Task memory _task = task[_id];
        _task.done = !_task.done;
        task[_id] = _task;
    }
}
