import { useState } from "react";

//usestate stores current values, input fields start off empty on page load, "" empty string

const Login = () => {
 


  // hooks need to be inside the component func
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // handlesubmit has to be inside to have access to state
 const handleSubmit = (event) => {
    event.preventDefault()
  // console.log("email:", email);
  // console.log("password:", password);
 }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* link input fields to state */}
        <input
          type="email"
          placeholder="Enter your email"
          //make input reflect state
          value={email}
          //updates state as user types
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
}  

export default Login;
