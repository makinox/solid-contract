import { useEffect, useRef, useState } from "react";
import truffleContract from "@truffle/contract";

import InfoCard from "../components/InfoCard/InfoCard";
import TaskCard from "../components/TaskCard/TaskCard";
import Navbar from "../components/navbar/navbar";

import { MainSectionStyles } from "./Index.styles";

export default function Index() {
  const [provider, setProvider] = useState();
  const [account, setAccount] = useState("");
  const [taskRef, setTaskRef] = useState();

  async function loadEthereum() {
    if (window["ethereum"]) {
      console.log("ethereum exist");
      const web3Provider = window["ethereum"];
      setProvider(web3Provider);
      const account = await web3Provider.request({
        method: "eth_requestAccounts",
      });
      setAccount(account[0]);
      loadContracts();
    }
  }

  async function loadContracts() {
    const response = await fetch("TaskContract.json");
    const data = await response.json();

    const contract = truffleContract(data);
    contract.setProvider(provider);
    setTaskRef(contract.taskContract.deployed());
  }

  useEffect(() => {
    loadEthereum();
  }, []);

  return (
    <>
      <Navbar />
      <section className={`flex justify-center ${MainSectionStyles}`}>
        <InfoCard title="Wallet" description={account} isDark={false} />
      </section>
      <section className="flex justify-center flex-wrap">
        <TaskCard title="Tarea 1" description="Description 1" isDark={false} />
        <TaskCard title="Tarea 1" description="Description 1" isDark={false} />
        <TaskCard title="Tarea 1" description="Description 1" isDark={false} />
        <TaskCard title="Tarea 1" description="Description 1" isDark={false} />
      </section>
    </>
  );
}
