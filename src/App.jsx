import { useState } from 'react';

// CONTROLLED COMPONENT VS. UNCONTROLLED COMPONENT
export default function App() {
  // CONTROLLED COMPONENT: input value controlled react state
  const [email, setEmail] = useState('abcd');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [input, setInput] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // READ FORM VALUE: STATE
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form action="" className="grid gap-2 max-w-2xl" onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        className="border"
        onChange={handleChange}
        value={input.email}
      />
      <input
        name="password"
        type="password"
        className="border"
        onChange={handleChange}
        value={input.password}
      />
      <input
        name="name"
        type="text"
        className="border"
        onChange={handleChange}
        value={input.name}
      />

      {/* <input
        type="email"
        className="border"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        className="border"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input
        type="text"
        className="border"
        onChange={(e) => setName(e.target.value)}
        value={name}
      /> */}

      <button>Submit</button>
    </form>
  );
}
