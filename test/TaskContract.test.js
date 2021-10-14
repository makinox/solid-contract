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
});
