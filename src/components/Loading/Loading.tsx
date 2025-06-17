import "./Loading.scss";

type LoadingProps = {
    text?: string;
    style?: any;
}

export default function Loading(props: LoadingProps) {
  return (
    <div className="loading-container" style={props?.style}>
      <div className="spinner" />
      <p>{props?.text || 'Loading...'}</p>
    </div>
  );
}
