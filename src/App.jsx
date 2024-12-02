import { useState } from "react";
import Item from "./Item";
import List from "./List";

export default function App() {
  const [data, setData] = useState([
    {
      id: 1, content: "Hello World!", name: "John",
      
    },
    {
      id: 2, content: "React is awesome!", name: "Jane",
      
    },
    {
      id: 3, content: "Vite is fast!", name: "Tom", 
    }
  ])
  return (
    <div style={{maxWidth: 600, margin: "30px auto"}}>
      <h1>Yaycha</h1>
      <List>
       {data.map(item => (
          <Item key={item.id} content={item.content} name={item.name}/>
       ))}
      </List>
    </div>
  )
}