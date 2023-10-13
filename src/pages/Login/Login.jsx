import { useContext, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result);
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="flex justify-center text-center">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Sign In
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Enter your details to login.
            </Typography>
            <form onSubmit={handleLogin} className="mt-8 mb-2 w-72 md:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  type="email"
                  name="email"
                  size="lg"
                  label="Email"
                  required
                />
                <Input
                  type={showPass ? "text" : "password"}
                  name="password"
                  size="lg"
                  label="Password"
                  required
                />
                <span
                  className="absolute top-44 right-3"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <div>
                {
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    <a
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      Forgot password?
                    </a>
                  </Typography>
                }
              </div>

              <Button className="mt-6" type="submit" fullWidth>
                <input type="submit" value="Login" />
              </Button>
              <button
                //   onClick={handleGoogleSignIn}
                className="btn btn-ghost mt-5 normal-case"
              >
                Google
              </button>

              <Typography color="gray" className="mt-4 text-center font-normal">
                Not registered yet?{" "}
                <Link to="/register" className="font-medium text-gray-900">
                  Sign Up
                </Link>
              </Typography>
            </form>
          </Card>
        </div>

        {/* <div className="text-center">
        {loginError && <p className="text-red-500">{loginError}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </div> */}

        {/* password reset modal */}
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box flex justify-center text-center">
            <Card color="transparent" shadow={false}>
              <Typography color="gray" className="mt-1 font-normal">
                Enter your email address.
              </Typography>
              <form
                //   onSubmit={handleForgetPass}
                className="mt-8 mb-2 w-72 md:w-96"
              >
                <div className="mb-4 flex flex-col gap-6">
                  <Input
                    type="email"
                    name="email"
                    size="lg"
                    label="Email"
                    required
                  />
                </div>
                <Button className="mt-6" type="submit">
                  <input type="submit" value="Send Password Reset Link" />
                </Button>
              </form>
            </Card>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default Login;
