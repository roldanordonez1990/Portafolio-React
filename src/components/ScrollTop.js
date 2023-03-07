import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollTop = () => {
  const { pathname } = useLocation();
  //El useLocation guarda la dirección en cada momento y la guarda en el pathname.
  //El useEffect ejecutará el scroll a cero al inicio de cada navegación
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
};
