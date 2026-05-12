import { useUserStore } from "../../redux/store/userStore";

function LoginForm() {
  const { setIsUserLoggedIn } = useUserStore();

  const handleClick = () => {
    setIsUserLoggedIn(true);
  };

  return (
    <div>
      <button
        className="text-white bg-gray-600 px-4 py-1 rounded-sm cursor-pointer"
        onClick={handleClick}
      >
        Login{" "}
      </button>
    </div>
  );
}

export default LoginForm;
