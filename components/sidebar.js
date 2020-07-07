import Select from "react-select";
import { useEffect, useRef, useState } from "react";
import("../pages/notes/data.json").then((years) =>
  years["default"].forEach(append_dropdown)
);

var options = [];

function append_dropdown(item, index) {
  options.push({ value: item, label: item.replace(/_/g, " ") });
  //   console.log(test_options);
}

function Sidebar() {
  const [count, setCount] = useState(0);

  function handleChange(selectedOption) {
    import(
      "../pages/notes/" + selectedOption.value + "/data.json"
    ).then((module) => setCount(module["default"].toString()));
    // setCount(selectedOption.value);
    // console.log(selectedOption.value);
  }
  return (
    <div className="flex-none w-full max-w-xs text-black bg-gray-200 p-4 shadow-xl rounded-br">
      <Select options={options} onChange={handleChange} />
      <hr className="mb-4" />
      <ul className="text-lg">
        <li>{count}</li>
      </ul>
    </div>
  );
}

export default Sidebar;
