import { OutlineButton } from "../Button/Button";
import "./OfflineOverlay.scss";

export default function OfflineOverlay() {
  return (
    <div className="offline-overlay">
      {/* <img
        src='/offline.png'
        alt="Offline illustration"
        className="offline-image"
      /> */}
      <h2>Connect to the internet</h2>
      <p>You're offline. Check your connection.</p>
      <OutlineButton className="medium" onClick={() => window.location.reload()}>
        Retry
      </OutlineButton>
    </div>
  );
}
