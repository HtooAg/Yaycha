export default function Item({ item, remove }) {
	return (
		<div
		>
			<li
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					padding: 10,
					borderBottom: "1px solid #ddd",
				}}
			>
				<span>
					{item.content} - <b>{item.name}</b>
				</span>
				<div>
					<button onClick={() => remove(item.id)}>Delete</button>
				</div>
			</li>
		</div>
	);
}
