import "../styles/Login.css";

const LoginForm = () => {
  return (
    <div>
      <h1 className="text-center fs-1">🎂</h1>
      <h1 className="text-center">Birthday Reminder</h1>
      <form className="mt-3">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email Address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button type="button" className="btn btn-outline-primary mt-3">
          Login
        </button>
        <button type="button" className="btn btn-link">
          Link
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
