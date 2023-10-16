import Main from "./Details";
import Heading from "./Heading";

function App() {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="flex w-1/2 my-8 bg-white">
        <div className="w-full px-16 divide-y-2 divide-gray-300">
          <Heading />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
