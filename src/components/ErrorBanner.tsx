export default function ErrorBanner({ message }: { message: string }) {
  return <div className="error">{message}</div>;
}
