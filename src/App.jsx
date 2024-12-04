import { useState } from "react";
import Item from "./Item";
import List from "./List";
import Form from "./Form";
import Profile from "./Profile";

export default function App() {
	const [data, setData] = useState([
		{ id: 1, content: "Hello React!", name: "Alice" },
		{ id: 2, content: "Vite is Fast!", name: "Bob" },
		{ id: 3, content: "React is fun!", name: "John" },
	]);

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    setData([...data, {id, content, name}]);
  }

  const remove = id =>  {
    setData(data.filter(item => id !== item.id))
  }
	return (
		<div style={{ maxWidth: 600, margin: "20px auto" }}>
			<h1>Hello React!</h1>
			<Form add={add} />
			<List>
				{data.map((item) => (
					<Item key={item.id} item={item} remove={remove} />
				))}
			</List>
			<Profile />
		</div>
	);
}
