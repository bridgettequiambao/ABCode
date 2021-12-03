import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../util/auth";
import { Form, Button } from "react-bootstrap";

// This signup form is intentionally minimalist to reduce effort required to
// customize it to your app's needs. See the excellent best practices guide for
// sign informs on web.dev https://web.dev/sign-in-form-best-practices/

// TODO: customize styles or import styles with favorite css approach
// const styles = {
//   formControl: {
//     display: "flex",
//     padding: "0.25em",
//   },
//   label: {
//     flex: "0 1 6em",
//     paddingRight: "0.25em",
//   },
// };

const initialFormState = {
  username: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const { isLoggedIn, signup, loading, error } = useAuth();
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (error) {
      // TODO: replace window alert with custom alert.
      alert(error);
    }
  }, [error]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    signup(formState);
  };

  if (isLoggedIn) {
    // redirect to home if user is logged in
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>Sign Up</h1>
      <hr />
      <Form className="container">
        <Form.Group className="mb-3" controlId="floatingInput">
          <Form.Label htmlFor="username">User Name</Form.Label>
          <Form.Control
            autoFocus
            disabled={loading}
            id="username"
            type="text"
            placeholder="Enter username"
            name="username"
            value={formState.username.value}
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label htmlFor="email">Enter email</Form.Label>
          <Form.Control
            disabled={loading}
            id="email"
            type="email"
            name="email"
            placeholder="Enter email"
            value={formState.email.value}
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label htmlFor="new-password">Password</Form.Label>
          <Form.Control
            disabled={loading}
            id="new-password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={formState.password.value}
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <div>
          <Button
            variant="primary"
            disabled={loading}
            type="submit"
            onClick={handleSubmit}
          >
            {loading ? "Loading..." : "Submit"}
          </Button>
        </div>
      </Form>
      {/* <div style={styles.formControl}>
          <label htmlFor="username" style={styles.label}>
            Username
          </label>
          <input
            autoFocus
            disabled={loading}
            id="username"
            type="text"
            placeholder="Enter username"
            name="username"
            value={formState.username.value}
            onChange={handleInputChange}
          />
        </div> */}
      {/* <div style={styles.formControl}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            disabled={loading}
            id="email"
            type="email"
            name="email"
            placeholder="Enter email"
            value={formState.email.value}
            onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <label htmlFor="new-password" style={styles.label}>
            Password
          </label>
          <input
            disabled={loading}
            id="new-password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={formState.password.value}
            onChange={handleInputChange}
          />
        </div> */}
      {/* <div style={styles.formControl}>
          <button disabled={loading} type="submit">
            {loading ? "Loading..." : "Submit"}
          </button>
        </div> */}
      {/* </form> */}
    </div>
  );
}
