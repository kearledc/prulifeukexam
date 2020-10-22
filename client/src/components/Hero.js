import { useMutation } from "@apollo/client";
import React from "react";
import { removeHeroMutation } from "../queries/mutations";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Hero = ({ id, name, teamName, primaryAttribute }) => {
  const onRemoveHeroHandler = () => {
    Swal.fire({
      title: "Are you sure you want to remove this Hero?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Deleted!", "Expense has been deleted.", "success").then(
          onRemoveHeroCallback
        );
      }
    });
  };

  const [onRemoveHeroCallback] = useMutation(removeHeroMutation, {
    update() {
      window.location.reload();
    },
    variables: { id },
  });

  return (
    <div>
      <h2>
        <Link to={`./edit/${id}`}>{name}</Link>
      </h2>
      <p>Allegiance: {teamName}</p>
      <p>Attribute: {primaryAttribute}</p>
      <button onClick={onRemoveHeroHandler}>X</button>
    </div>
  );
};

export default Hero;
