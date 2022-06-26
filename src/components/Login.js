const Login = () => {
  return (
    <div className="login">
      <h1>Sign In</h1>
      <form>
        <div className="form-control">
          <input type="text" required></input>
          <label>Username</label>
        </div>
        <div className="form-control">
          <input type="password" required></input>
          <label>Password</label>
        </div>
        <button className="btn">SUBMIT</button>
        <p className="text">
          Don't have an account?
          <a href="/">Create account</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
