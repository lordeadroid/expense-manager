const Login = () => {
  return (
    <div className="login-form">
      <form>
        <img src="/library-icon.png" alt="" className="logo" />
        <div className="username">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
          />
        </div>
        <div className="password">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <input type="submit" value="LOGIN" className="submit-button" />
      </form>
    </div>
  );
};

export default Login;
