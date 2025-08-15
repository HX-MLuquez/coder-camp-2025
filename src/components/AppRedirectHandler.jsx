import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function AppRedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Si hay un refresh, location.key será "default" en React Router v6
    if (performance.getEntriesByType("navigation")[0].type === "reload") {
      if (location.pathname !== "/") {
        navigate("/", { replace: true });
      }
    }
  }, [location, navigate]);

  return null; // no renderiza nada
}
export default AppRedirectHandler;