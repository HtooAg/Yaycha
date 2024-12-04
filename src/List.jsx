export default function List({ children }) {
	return (
		<ul
			style={{
				listStyle: "none",
				border: "1px solid #ddd",
				borderRadius: 5,
				overflow: "hidden",
				padding: 0,
			}}
		>
			{children}
		</ul>
	);
}
