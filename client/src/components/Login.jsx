const Login = () => {
  return (
    <form>
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            display: "block",
            marginTop: "25px",
            padding: "12px",
            width: "100%",
            maxWidth: "400px",
          }}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          style={{
            display: "block",
            marginTop: "25px",
            padding: "12px",
            width: "100%",
            maxWidth: "400px",
          }}
        ></input>
        <button
          type="submit"
          style={{
            marginTop: "25px",
            padding: "12px",
            width: "100%",
            maxWidth: "400px",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
