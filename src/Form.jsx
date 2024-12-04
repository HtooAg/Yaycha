import { useRef } from "react";

export default function Form({ add }) {
	const contentRef = useRef();
	const nameRef = useRef();
	return (
		<>
			<form
				style={{
					background: "#def",
					display: "flex",
					flexDirection: "column",
					padding: 10,
					gap: 5,
					borderRadius: 10,
					marginBottom: 20,
				}}
				onSubmit={(e) => {
					e.preventDefault();
					const content = contentRef.current.value;
					const name = nameRef.current.value;
					e.currentTarget.reset();

					if (content && name) {
						add(content, name);
					} else {
						alert("Please fill both content & name!");
					}
				}}
			>
				<input
					type="text"
					ref={contentRef}
					placeholder="Content"
					style={{ padding: 5, borderRadius: 5 }}
				/>
				<input
					type="text"
					placeholder="Name"
					ref={nameRef}
					style={{ padding: 5, borderRadius: 5 }}
				/>
				<button
					style={{
						background: "#0d6efd",
						color: "white",
						border: "0 none",
						padding: 10,
						borderRadius: 5,
						cursor: "pointer",
					}}
					type="submit"
				>
					Post
				</button>
			</form>
		</>
	);
}
