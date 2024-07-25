import { signOut, getAuth } from "firebase/auth";

function Home() {
  const auth = getAuth();

  const handleClick = () => {
    signOut(auth)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col w-[300px]">
      <h1>Hello, World!</h1>
      <p>
        Questa è la pagina home, volendo puoi anche fare un Signout premendo su
        questo bottone 👇👇👇{" "}
      </p>
      <button onClick={handleClick} className="bg-red-500 p-2">
        Sign Out
      </button>
    </div>
  );
}

export default Home;
