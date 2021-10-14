const TaskContract = artifacts.require("TaskContract");

contract("TaskContract", () => {
  let taskc;

  before(async () => {
    taskc = await TaskContract.deployed();
  });

  it("migrate deployed successfully", async () => {
    const address = taskc.address;

    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
  });

  it("get task list", async () => {
    const counter = await taskc.taskCounter();
    const actualTask = await taskc.task(counter.toNumber() - 1);

    assert.typeOf(counter.toNumber(), "number");
    assert.equal(actualTask.id.toNumber(), counter - 1);
  });
});
