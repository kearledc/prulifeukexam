import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Button } from "semantic-ui-react";
import { addHeroMutation } from "../queries/mutations";
import { useForm } from "./useForm";
import { NavLink, useHistory } from "react-router-dom";

const Create = () => {
  const history = useHistory();
  const [errs, setError] = useState({});
  const { onChange, onSubmitForm, values } = useForm(addHeroCallback, {
    name: "",
    teamName: "",
    primaryAttribute: "",
  });

  const [addHeroHandler, { loading }] = useMutation(addHeroMutation, {
    update(_, data) {
      history.push("/");
      window.location.reload();
    },
    onError(err) {
      setError(err.graphQLErrors[0].extensions.exception.errs);
    },
    variables: { ...values },
  });

  function addHeroCallback() {
    addHeroHandler();
  }

  return (
    <div>
      <NavLink to="/">Return</NavLink>
      <Form onSubmit={onSubmitForm} className={loading ? "loading" : ""}>
        <Form.Input
          type="text"
          label="Hero Name"
          onChange={onChange}
          value={values.name}
          name="name"
          placeholder="Enter Hero Name"
        />
        <Form.Input
          type="text"
          label="Hero Attribute"
          onChange={onChange}
          value={values.primaryAttribute}
          name="primaryAttribute"
          placeholder="Enter Hero Attribute"
        />
        <select onChange={onChange} name="teamName" value={values.teamName}>
          <option>Radiant</option>
          <option>Dire</option>
        </select>
        <Button primary>Add Hero</Button>
      </Form>
      {Object.keys(errs).length > 0 && (
        <div className="error ui message">
          <ul className="list">
            {Object.values(errs).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Create;
