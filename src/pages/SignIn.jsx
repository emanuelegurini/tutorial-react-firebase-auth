import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const auth = getAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailValidation = !email.length;
  const passwordValidation = !password.length;

  const formValidation = emailValidation || passwordValidation;

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col p-2">
      <h1>SignIn page</h1>
      <form className="w-[400px] flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          className="border-2 border-slate-400 p-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border-2 border-slate-400 p-2"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={`bg-green-700 ${formValidation ? "bg-green-200" : ""} p-2`}
          disabled={formValidation}
          type="submit"
        >
          Sing-up
        </button>
      </form>
    </div>
  );
}

export default SignIn;
