import { useElemToShow } from "./providers/showHideElemProvider";

function App() {
  const { open, setOpen } = useElemToShow();

  return (
    <div className="fixed inset-0 flex flex-col items-start justify-center bg-neutral-100">
      <div className="m-auto flex max-w-lg flex-col items-center justify-center gap-1">
        <h1 className="text-lg font-medium">Simple Global Hide/Show flow</h1>
        <p className="mx-auto max-w-[80%] break-words text-center">
          Could ie. be used for fullscreen modals, popups, etc. where you want the element in
          question to be shown/hidden from anywhere in the app.
        </p>

        <div className="flex items-start justify-center">
          <span>open: {JSON.stringify(open, null, 2)}</span>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="mt-2 flex w-auto items-center justify-center rounded-xl border bg-neutral-300 px-2 py-1 font-medium hover:border-transparent hover:bg-neutral-700 hover:text-white md:rounded-lg"
        >
          Open
        </button>
      </div>
    </div>
  );
}

export default App;
