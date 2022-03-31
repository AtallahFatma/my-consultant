import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SET_USER } from "../src/graphql/Mutation";
import { Button } from "../src/components";

function CreateUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(SET_USER);

  if(error) return (<div>user connot be created {console.log(error)}</div>);

  return (
    <div className="createUser">
      <input
        type="text"
        placeholder="First name"
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Last name"
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <Button
        onPress={() => {
          createUser({
            variables: {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password
            },
          });
        }}
      >
        Create User
      </Button>
    </div>
  );
}

export default CreateUser;