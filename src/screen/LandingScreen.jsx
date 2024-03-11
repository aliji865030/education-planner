import { useState } from "react";

function LandingScreen() {

  // const subjectInput=document.getElementById("input")
  const [data, setdata] = useState([]);
  const [hours, setHours] = useState(0);
  const [subject, setSubject] = useState();

  function addItems() {

   if(hours>0){
    let currentValue = {
      subject: subject,
      hours: hours,
    };

    setdata([...data, currentValue]);
   }
   if(hours===0)alert("You have select 0 houes so You don't want to study ummmmmmmm 🥱🥱🥱")
   if(hours<0)alert("You realy want to study.....😒")

   setHours(0)
   setSubject("")

    
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
    <div className="flex flex-col justify-center items-center gap-6 text-center">
      <div>
        <h1 className="text-3xl">Geekster Education Planner</h1>
      </div>
      <div className="flex justify-center gap-4">
        <input
          type="text"
          placeholder="Subject"
          className="border-2 border-gray-400 px-2 w-4/12"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="number"
          placeholder="Hours"
          value={hours}
          className="border-2 px-2 border-gray-400 w-2/12"
          onChange={(e) => setHours(e.target.value)}
        />
        <button
          className="px-2 py-1 rounded-lg  text-white"
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
              className="flex justify-center items-center gap-1 py-2 border-4 px-5 rounded-lg border-green-500 my-3"
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
