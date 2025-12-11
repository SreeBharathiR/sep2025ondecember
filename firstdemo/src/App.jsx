import { useReducer, useState } from "react";

import "./App.css";

function App() {
  const studentDetails = [
    {
      id: 1,
      name: "Rahul",
      age: 20,
      department: "CSE",
      marks: {
        maths: 90,
        science: 85,
        english: 88,
      },
    },
    {
      id: 2,
      name: "Priya",
      age: 19,
      department: "ECE",
      marks: {
        maths: 75,
        science: 92,
        english: 81,
      },
    },
    {
      id: 3,
      name: "Arun",
      age: 21,
      department: "EEE",
      marks: {
        maths: 80,
        science: 78,
        english: 85,
      },
    },
  ];

  const reducerFunc = (currentState, action) => {
    switch (action.type) {
      case "ADD":
        return [
          ...currentState,
          {
            id: currentState.length + 1,
            name: action.payload.name,
            age: action.payload.age,
            department: action.payload.department,
            marks: {
              maths: action.payload.marks.math,
              science: action.payload.marks.sci,
              english: action.payload.marks.eng,
            },
          },
        ];
      case "DELETE":
      default:
        return currentState;
    }
  };
  const [state, dispatch] = useReducer(reducerFunc, studentDetails);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [dept, setDept] = useState("");
  const [marks, setMarks] = useState({ math: 0, sci: 0, eng: 0 });
  console.log(name);
  console.log(age);
  console.log(dept);
  console.log(marks);
  const addFunc = () => {
    dispatch({
      type: "ADD",
      payload: {
        name: name,
        age,
        department: dept,
        marks,
      },
    });
  };
  console.log(state);
  return (
    <>
      <ol>
        {" "}
        {state.map((val) => (
          <li key={val.id}>
            <p>{val.name}</p>
            <p>{val.age}</p>
            <p>{val.department}</p>
          </li>
        ))}
      </ol>
      Name:
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <br></br>
      Age:
      <input type="number" onChange={(e) => setAge(e.target.value)}></input>
      <br></br>
      Dept:
      <input type="text" onChange={(e) => setDept(e.target.value)}></input>
      <br></br>
      Marks:
      <br></br>
      Maths:
      <input
        type="number"
        onChange={(e) => setMarks({ ...marks, math: e.target.value })}
      ></input>{" "}
      <br></br>Science
      <input
        type="number"
        onChange={(e) => setMarks({ ...marks, sci: e.target.value })}
      ></input>{" "}
      <br></br>English
      <input
        type="number"
        onChange={(e) => setMarks({ ...marks, eng: e.target.value })}
      ></input>
      <br></br>
      <button onClick={addFunc}>Add</button>
    </>
  );
}

export default App;
