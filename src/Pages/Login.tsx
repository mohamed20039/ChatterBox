import OAuth from "../Components/OAuth";
const Login = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="mt-32 font-semibold text-3xl">Login to your account</h1>
      <OAuth />
    </div>
  );
};

export default Login;
