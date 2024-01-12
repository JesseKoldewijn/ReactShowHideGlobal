import { useElemToShow } from "./providers/showHideElemProvider";

function App() {
	const {
		open: [open, setOpen],
	} = useElemToShow();

	return (
		<div>
			<h1>Global show hide flow</h1>

			<div>
				<span>open:{JSON.stringify(open, null, 2)} </span>
			</div>

			<button onClick={() => setOpen(true)}>Open</button>
		</div>
	);
}

export default App;
