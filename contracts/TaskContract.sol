// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract TaskContract {
    uint256 public taskCounter = 0;

    constructor() {
        createTask("Mi primer tarea de ejemplo", "Mi primera descripcion");
    }

    event TaskCreated(
        uint256 id,
        string title,
        string description,
        bool done,
        uint256 createdAt
    );

    event TaskToggleDone(uint256 id, bool done);

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
        uint256 timeStamp = block.timestamp;
        task[taskCounter] = Task(
            taskCounter,
            _title,
            _description,
            false,
            timeStamp
        );

        emit TaskCreated(taskCounter, _title, _description, false, timeStamp);

        taskCounter++;
    }

    function toggleDone(uint256 _id) public {
        Task memory _task = task[_id];
        bool toggled = !_task.done;

        _task.done = toggled;
        task[_id] = _task;

        emit TaskToggleDone(_id, toggled);
    }
}
