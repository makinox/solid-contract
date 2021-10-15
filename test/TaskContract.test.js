const TaskContract = artifacts.require("TaskContract");

contract("TaskContract", () => {
  let taskRef;

  before(async () => {
    taskRef = await TaskContract.deployed();
  });

  it("migrate deployed successfully", async () => {
    const address = taskRef.address;

    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
  });

  it("get task list", async () => {
    const counter = await taskRef.taskCounter();
    const actualTask = await taskRef.task(counter.toNumber() - 1);

    assert.typeOf(counter.toNumber(), "number");
    assert.equal(actualTask.title, "Mi primer tarea de ejemplo");
    assert.equal(actualTask.description, "Mi primera descripcion");
    assert.equal(actualTask.done, false);
    assert.equal(counter.toNumber(), 1);
  });

  it("created new task successfully", async () => {
    const result = await taskRef.createTask("test task", "description two");
    const taskEvent = result.logs[0].args;
    const counter = await taskRef.taskCounter();

    assert.equal(taskEvent.id.toNumber(), counter.toNumber() - 1);
    assert.equal(taskEvent.title, "test task");
    assert.equal(taskEvent.description, "description two");
    assert.equal(taskEvent.done, false);
  });

  it("task toggle done", async () => {
    const taskId = 0;
    const result = await taskRef.toggleDone(taskId);
    const actualTask = await taskRef.task(taskId);
    const taskEvent = result.logs[0].args;

    assert.equal(taskEvent.done, true);
    assert.equal(taskEvent.done, actualTask.done);
    assert.equal(taskEvent.id.toNumber(), actualTask.id.toNumber());
  });
});
