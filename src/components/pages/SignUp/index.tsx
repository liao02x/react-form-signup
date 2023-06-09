import { useCallback } from "react";
import { Form, TextField, FetchSelectField, useFormContext } from "../../form";
import { getStates, getCities } from "../../../utils";
import "./index.css";

const StateField = () => {
  const getData = useCallback(() => {
    return getStates().then((states) =>
      states.map((state) => ({ value: state, label: state }))
    );
  }, []);
  return (
    <FetchSelectField name="state" label="State" required getData={getData} />
  );
};

const CityField = () => {
  const { values, setFieldValue } = useFormContext();
  const state = values.state;

  const getData = useCallback(() => {
    setFieldValue("city", "");
    if (!state) return Promise.resolve([]);
    return getCities(state).then((cities) =>
      cities.map((city) => ({ value: city, label: city }))
    );
  }, [state, setFieldValue]);
  return (
    <FetchSelectField
      name="city"
      label="City"
      required
      getData={getData}
      disabled={!state}
      placeholder={!state ? "select a state first" : undefined}
    />
  );
};

export default function SignUp() {
  const handleSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <main className="page">
      <section className="container">
        <div className="form-wrapper">
          <h1>Sign Up</h1>
          <Form className="form-container" onSubmit={handleSubmit}>
            <TextField
              name="firstName"
              label="First Name"
              placeholder="first name"
              pattern="[a-zA-Z0-9\s]+"
              required
            />
            <TextField
              name="lastName"
              placeholder="last name"
              label="Last Name"
              pattern="[a-zA-Z0-9\s]+"
              required
            />
            <StateField />
            <CityField />
            <TextField
              name="email"
              type="email"
              placeholder="email@example.com"
              label="Email"
              required
            />
            <TextField
              name="password"
              type="password"
              label="Password"
              pattern=".{8,}"
              required
            />
            <input
              type="submit"
              value="Sign Up Now"
              style={{ margin: "0.5em" }}
            />
          </Form>
        </div>
      </section>
    </main>
  );
}
