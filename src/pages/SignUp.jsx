import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const emailValidation = !email.length;
  const passwordValidation = !password.length;
  const confirmPasswordValidation = !confirmPass.length;
  const arePasswordAncConfirmPassEqual = password !== confirmPass;

  const formValidation =
    emailValidation ||
    passwordValidation ||
    confirmPasswordValidation ||
    arePasswordAncConfirmPassEqual;

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col p-2">
      <h1>SignUp page</h1>
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
        <input
          className="border-2 border-slate-400 p-2"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPass(e.target.value)}
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

export default SignUp;
