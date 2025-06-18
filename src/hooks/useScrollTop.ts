import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useOnlineStatus() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);
}
