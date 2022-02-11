import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button } from "src/components";
import { UPDATE_PASSWORD } from "src/graphql/Mutation";

function UpdatePassword() {
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  if (error) {
    return <h1> {error} </h1>;
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Email..."
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Current Password..."
        onChange={(event) => {
          setCurrentPassword(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="New Password..."
        onChange={(event) => {
          setNewPassword(event.target.value);
        }}
      />

      <Button
        onClick={() => {
          updatePassword({
            variables: {
              email: email,
              oldPassword: currentPassword,
              newPassword: newPassword,
            },
          });
        }}
      >
        UPDATE PASSWORD
      </Button>
    </div>
  );
}

export default UpdatePassword;