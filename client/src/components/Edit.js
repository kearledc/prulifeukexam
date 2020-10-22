import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { getHeroByIdQuery } from "../queries/queries";
import { useForm } from "./useForm";
import { useMutation, useQuery } from "@apollo/client";
import { updateHeroMutation } from "../queries/mutations";

const Edit = (props) => {
  const heroId = props.match.params.id;
  const [hero, setHero] = useState({});

  const { onChange, onSubmitForm, values } = useForm(updateHeroCallback, {
    name: "",
    teamName: "",
    primaryAttribute: "",
  });

  const { loading } = useQuery(getHeroByIdQuery, {
    onCompleted({ getHeroById: newHero }) {
      setHero(newHero);
    },
    variables: { id: heroId },
  });

  const [updateHeroHandler] = useMutation(updateHeroMutation, {
    onCompleted(_, data) {
      props.history.push("/");
      window.location.reload();
    },
    variables: {
      id: heroId,
      ...values,
    },
  });

  function updateHeroCallback() {
    updateHeroHandler();
  }
  return (
    <div>
      <h2>Editing: {hero.name}</h2>
      <Form onSubmit={onSubmitForm} className={loading ? "loading" : ""}>
        <Form.Input
          type="text"
          label="Hero Name"
          onChange={onChange}
          value={values.name}
          name="name"
          placeholder="Enter New Hero Name"
        />
        <Form.Input
          type="text"
          label="Hero Attribute"
          onChange={onChange}
          value={values.primaryAttribute}
          name="primaryAttribute"
          placeholder="Enter New Hero Attribute"
        />
        <select onChange={onChange} name="teamName" value={values.teamName}>
          <option>Radiant</option>
          <option>Dire</option>
        </select>
        <Button primary>Edit Hero</Button>
      </Form>
    </div>
  );
};

export default Edit;
