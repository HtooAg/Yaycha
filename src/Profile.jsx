import { useState } from "react";

export default function Profile() {
	const [change, setChange] = useState([
		{
			id: 1,
			name: "Chris Evans",
			age: 43,
			gender: "male",
			imgSRC: "https://s1.r29static.com/bin/entry/bd9/720x864,85/2151975/image.webp",
		},
		{
			id: 2,
			name: "Jane Smith",
			age: 35,
			gender: "female",
			imgSRC: "https://static.wikia.nocookie.net/filmguide/images/3/3d/Jane_Smith.png/revision/latest?cb=20240614090147",
		},
		{
			id: 3,
			name: "Michael Johnson",
			age: 52,
			gender: "male",
			imgSRC: "https://www.eastbaytimes.com/wp-content/uploads/2017/05/mj2.jpg?w=620",
		},
	]);
	return (
		<>
			<h1>Profile Page</h1>
			{change.map((item) => (
				<div
					key={item.id}
					style={{
						border: "1px solid #ddd",
						padding: 10,
						textAlign: "center",
						marginBottom: 20,
						borderRadius: 20,
					}}
				>
					<img
						style={{
							width: 90,
							height: 90,
							borderRadius: "50%",
							backgroundSize: "cover",
						}}
						src={item.imgSRC}
						alt={"Photo Name: " + item.name}
					/>
					<h1>
						Name: <i>{item.name}</i>
					</h1>
					<h1>
						Age: <i>{item.age}</i>
					</h1>
					<h1>
						Gender: <i>{item.gender}</i>
					</h1>
				</div>
			))}
		</>
	);
}
