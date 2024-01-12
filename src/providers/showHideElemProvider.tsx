import { XIcon } from "lucide-react";
import { createContext, useContext, useState } from "react";

const ShowHideContext = createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>(null!);

const ShowHideElementProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <ShowHideContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {open && (
        <div
          data-intent="overlaying-element"
          className="fixed left-0 top-0 z-50 flex h-full w-full bg-black bg-opacity-50"
        >
          <div className="relative left-0 top-0 flex h-full w-full">
            <button
              className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-xl border bg-neutral-300 hover:border-transparent hover:bg-neutral-700 hover:text-white md:h-7 md:w-7 md:rounded-lg"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Click here to close the overlay</span>
              <XIcon />
            </button>
          </div>
        </div>
      )}
      {children}
    </ShowHideContext.Provider>
  );
};

export default ShowHideElementProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useElemToShow = () => {
  const { open, setOpen } = useContext(ShowHideContext);

  if (open == undefined || !setOpen) throw new Error("No element to show");

  return { open, setOpen };
};
