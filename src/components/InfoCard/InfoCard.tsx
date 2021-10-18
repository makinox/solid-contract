import { ButtonText, Card } from "@makinox/makinox-ui";

export default function InfoCard({ title, description, isDark }) {
  return (
    <article className={Card({ isDark })}>
      <div className="card-header">
        <h6 className="headline6">{title}</h6>
      </div>
      <div className="card-body">
        <p className="body2">{description}</p>
      </div>
      <div className="card-bottom">
        <button
          className={ButtonText({ isDark })}
          onClick={() => console.log("open")}
        >
          open
        </button>
      </div>
    </article>
  );
}
