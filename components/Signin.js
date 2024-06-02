import React, { useContext } from "react";
import { authContext } from "@/lib/store/auth-context";
import { FcGoogle } from "react-icons/fc";

function SignIn() {
  const { googleLoginHandler } = useContext(authContext);

  return (
    <main className="container max-w-2xl px-6 mx-auto">
      <h3 className=" mb-6 text-4xl font-bold text-center">
        Welcome 👋🏻, Money Manajement 💰
      </h3>

      <div className="flex flex-col overflow-hidden shadow-md shadow-slate-500 bg-stone-800 rounded-2xl">
        <div className="h-100">
          <img className="object-cover w-full h-full" src="./assets/bg.webp" />
        </div>

        <div className="px-4 py-4">
          <h3 className="text-2xl text-center">Please sign in to continue</h3>

          <button
            onClick={googleLoginHandler}
            className="flex self-start gap-2 p-4 mx-auto mt-6 text-white align-middle bg-gray-700 rounded-lg"
          >
            <FcGoogle className="text-2xl" />
            Google
          </button>
        </div>
      </div>

      <div className="text-center justify-center text-white font-bold mt-4 pt-4 pb-4">
        <footer className="text-sm" style={{ marginTop: "20px" }}>
          made with 💙 by <a href="https://iegcode.my.id">iegcode</a>
        </footer>
        <br />
      </div>
    </main>
  );
}

export default SignIn;
