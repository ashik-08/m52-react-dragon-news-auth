import Navbar from "../shared/Navbar/Navbar";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    // const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const terms = form.get("terms");

    // const name = e.target.name.value;
    // const photo = e.target.photo.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // const terms = e.target.terms.checked;
    console.log(name, photo, email, password, terms);

    //   create user in firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
      });
};

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="flex justify-center text-center">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Enter your details to register.
            </Typography>
            <form onSubmit={handleRegister} className="mt-8 mb-2 w-72 md:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  type="text"
                  name="name"
                  size="lg"
                  label="Name"
                  required
                />
                <Input
                  type="text"
                  name="photo"
                  size="lg"
                  label="Photo URL"
                  required
                />
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
                  className="absolute bottom-[188px] right-3"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <Checkbox
                name="terms"
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button className="mt-6" type="submit" fullWidth>
                <input type="submit" value="Register" />
              </Button>

              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-gray-900">
                  Sign In
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
        <div className="text-center">
          {registerError && <p className="text-red-500">{registerError}</p>}
          {success && <p className="text-green-500">{success}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
