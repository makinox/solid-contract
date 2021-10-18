import { ButtonText, Card } from "@makinox/makinox-ui";

export default function InfoCard({ title, description = "", isDark }) {
  const walletConnected = Boolean(description.length);

  return (
    <article className={Card({ isDark })}>
      <div className="card-header">
        <h6 className="headline6">{title}</h6>
      </div>
      <div className="card-body">
        <p className="body2">
          {!walletConnected ? "No wallet connected" : description}
        </p>
      </div>
      <div className="card-bottom">
        {!walletConnected ? (
          <button
            className={ButtonText({ isDark })}
            onClick={() => console.log("open")}
          >
            connect
          </button>
        ) : (
          <></>
        )}
      </div>
    </article>
  );
}
