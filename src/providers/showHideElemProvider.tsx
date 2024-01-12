import { createContext, useContext, useState } from "react";

type ElementToShow = React.ReactNode | (() => React.ReactNode);

const ShowHideContext = createContext<{
	open: [boolean, (open: boolean) => void];
	elementToShow: [ElementToShow, (elementToShow: ElementToShow) => void];
	setOpen: (open: boolean) => void;
}>(null!);

const ShowHideElementProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [open, setOpen] = useState(false);
	const [elementToShow, setElementToShow] = useState<ElementToShow>(() => (
		<div>
			<button onClick={() => setOpen(false)}>Close</button>
		</div>
	));

	const DisplayElementToShow = () => {
		if (typeof elementToShow === "function") {
			const Elem = elementToShow;
			return <Elem />;
		}
		return elementToShow;
	};

	return (
		<ShowHideContext.Provider
			value={{
				open: [open, setOpen],
				elementToShow: [elementToShow, setElementToShow],
				setOpen,
			}}
		>
			{open && (
				<div data-intent="overlaying-element">
					<DisplayElementToShow />
				</div>
			)}
			{children}
		</ShowHideContext.Provider>
	);
};

export default ShowHideElementProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useElemToShow = () => {
	const { elementToShow, open } = useContext(ShowHideContext);

	if (!elementToShow) throw new Error("No element to show");

	return { open, elementToShow };
};
