import InfoCard from "../components/InfoCard/InfoCard";
import TaskCard from "../components/TaskCard/TaskCard";
import Navbar from "../components/navbar/navbar";

import { MainSectionStyles } from "./Index.styles";

export default function Index() {
  return (
    <>
      <Navbar />
      <section className={`flex justify-center ${MainSectionStyles}`}>
        <InfoCard title="Wallet" description="" isDark={false} />
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
