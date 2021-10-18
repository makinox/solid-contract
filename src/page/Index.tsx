import InfoCard from "../components/InfoCard/InfoCard";
import Navbar from "../components/navbar/navbar";
import TaskCard from "../components/TaskCard/TaskCard";

export default function Index() {
  return (
    <>
      <Navbar />
      <InfoCard title="Wallet" description="0x0002221" isDark={false} />
      <section>
        <TaskCard title="Tarea 1" description="Description 1" isDark={false} />
        <TaskCard title="Tarea 1" description="Description 1" isDark={false} />
        <TaskCard title="Tarea 1" description="Description 1" isDark={false} />
        <TaskCard title="Tarea 1" description="Description 1" isDark={false} />
      </section>
    </>
  );
}
