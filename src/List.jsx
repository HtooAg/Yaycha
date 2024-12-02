export default function List({children}) {
	return(
		<ul style={{
			listStyleType: "none",
            padding: 0,
            margin: 0,
			border: "1px solid #ddd",
			borderRadius: 5,
			overflow: "hidden"
		}}>
		{children}
		</ul>
	)
}