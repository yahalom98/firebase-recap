import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { auth } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

export default function App() {
  let [omerData, setOmerData] = useState(null);
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [user, setUser] = useState(null);

  let exampleOfCollection = collection(db, "exampleOfCollection");
  async function addData() {
    await addDoc(exampleOfCollection, {
      ExampleOne: "Koolibooli",
      ExampleTwo: "KakiPipi",
    });
  }

  // // useEffect(() => {
  //   async function getData() {
  //     let data = await getDocs(exampleOfCollection);
  //     console.log(data.docs);
  //   }
  // // }, [])

  // Sign up
  let register = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in
  let signIn = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    console.log(auth);
  };
  // sign out
  let signOut = async () => {
    await signOut(auth);
  };

  // checks if the current user is live (exist)
  useEffect(() => {
    let changeUser = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      return () => changeUser();
    });
  }, [])


  return (
    <div>
      <button onClick={addData}>Click | insert data</button>
      {/* <button onClick={getData}>Click | get data</button> */}
      <button onClick={register}>Register</button>
      <input type="email" onChange={(event) => setEmail(event.target.value)} />
      <input
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={signIn}>SignIn</button>
      <button onClick={signOut}>Signout</button>
      {user ? (
        <>
          <h1>The user signed in</h1>
        </>
      ) : (
        <>
          <h1>404</h1>
        </>
      )}
    </div>
  );
}
