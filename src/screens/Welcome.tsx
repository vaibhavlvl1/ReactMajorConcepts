import LoginForm from "../components/ui/LoginForm";

function Welcome() {
  return (
    <section className="w-full h-dvh flex justify-center items-center">
      <div className="border border-amber-50 p-8 flex flex-col gap-2 justify-center items-center">
        <h1 className="text-white text-2xl">Welcome</h1>
        <LoginForm />
      </div>
    </section>
  );
}

export default Welcome;
