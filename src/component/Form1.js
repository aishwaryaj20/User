import { useLocalStorage } from "../useLocalStorage";
import './home.css'

const Form1 = () => {
  const [name, setName] = useLocalStorage("name", "");
  const [password,setPassword] = useLocalStorage("password", "");
  return (
    <form>
    <div className="fields">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
<br/>
<br/>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        aria-label="fullname"
      />
      <br/>
<br/>
      <input type="submit" value="Submit"></input>
      </div>
    </form>
  );
};

export default Form1;
