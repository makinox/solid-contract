import { FluidContainer, TopBar } from "@makinox/makinox-ui";

export default function Navbar() {
  return (
    <header className={TopBar()}>
      <nav className={FluidContainer()}>
        <div>
          <span>Solid task</span>
        </div>
        <div>
          <span>li</span>
          <span>li</span>
          <span>li</span>
        </div>
      </nav>
    </header>
  );
}
