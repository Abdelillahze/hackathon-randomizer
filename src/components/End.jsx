export default function End({ choice, setClose }) {
  return (
    <div className="z-50 absolute w-full bg-black-50 h-full top-0 left-0 grid place-items-center">
      <div className="w-[200px] h-24 bg-white rounded flex flex-col py-4 px-5">
        <p>{choice}</p>
        <button
          onClick={setClose}
          className="ml-auto bg-grey-900 text-white py-2 px-4 rounded w-fit"
        >
          close
        </button>
      </div>
    </div>
  );
}
