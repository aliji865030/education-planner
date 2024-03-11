import { useState } from "react";

function LandingScreen() {

  const [data, setdata] = useState([]);
  const [hours, setHours] = useState();
  const [subject, setSubject] = useState();

  function addItems() {

    let currentValue = {
      subject: subject,
      hours: hours,
    };

    setdata([...data, currentValue]);
    
  }

  function updateValue(index, e) {
    let updatedData = [...data];

    let value = Number(updatedData[index].hours);

    if (e.target.innerText === "+") {
      updatedData[index].hours = value + 1;
    }
    if (e.target.innerText === "-") {
      if (value > 0) {
        updatedData[index].hours = value - 1;
      }
    }

    setdata([...updatedData]);

  }

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div>
        <h1 className="text-3xl">Geekster Education Planner</h1>
      </div>
      <div className="flex justify-center gap-4">
        <input
          type="text"
          placeholder="Subject"
          className="border-2 px-2 w-4/12"
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="number"
          placeholder="Hours"
          className="border-2 px-2 w-2/12"
          onChange={(e) => setHours(e.target.value)}
        />
        <button
          className="px-2 py-1 rounded-lg text-white"
          style={{ backgroundColor: "#3b82f6" }}
          onClick={addItems}
        >
          Add
        </button>
      </div>
      <div>
        {data.map((item, index) => {
          return (
            <div
              className="flex justify-center items-center gap-1 py-2"
              key={index}
              onClick={(e) => updateValue(index, e)}
            >
              <p>
                <span>{item.subject}</span> -
              </p>
              <p>
                <span>{item.hours}</span> hours
              </p>
              <button
                className="text-2xl px-3 rounded-md mx-3"
                style={{ backgroundColor: "#22c55e" }}
              >
                +
              </button>
              <button
                className="text-2xl px-3 rounded-md"
                style={{ backgroundColor: "#ef4444" }}
              >
                -
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LandingScreen;
