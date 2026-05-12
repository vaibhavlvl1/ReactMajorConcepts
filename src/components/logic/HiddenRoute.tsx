import { Navigate } from "react-router-dom";
import { useUserStore } from "../../redux/store/userStore";

function HiddenRoute({ children }: Props) {
  const isUserLoggedIn = useUserStore((state: any) => state.isUserLoggedIn);

  return !isUserLoggedIn ? children : <Navigate to="/" />;
}

export default HiddenRoute;

// Props
interface Props {
  children: React.ReactElement;
}
