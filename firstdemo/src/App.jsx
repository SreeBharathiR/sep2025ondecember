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
      case "ADD": {
        let newdata = {
          id: currentState.length + 1,
          name: action.payload.name,
          age: action.payload.age,
          department: action.payload.department,
          marks: {
            maths: action.payload.marks.math,
            science: action.payload.marks.sci,
            english: action.payload.marks.eng,
          },
        };
        return [...currentState, newdata];
      }
      case "DELETE": {
        const selected = currentState.filter(
          (item) => item.id !== Number(action.payload)
        );
        console.log("reducer");
        console.log(selected);
        return selected;
      }
      case "UPDATEUSER": {
        // const selected = currentState.filter(
        //   (item) => item.id !== Number(action.payload.id)
        // );
        // let updateddata = {
        //   id: action.payload.id,
        //   name: action.payload.name,
        //   age: action.payload.age,
        //   department: action.payload.department,
        //   marks: {
        //     maths: action.payload.marks.math,
        //     science: action.payload.marks.sci,
        //     english: action.payload.marks.eng,
        //   },
        // };
        let update = currentState.map((item) =>
          item.id === Number(action.payload.id)
            ? {
                id: action.payload.id,
                name: action.payload.name,
                age: action.payload.age,
                department: action.payload.department,
                marks: {
                  maths: action.payload.marks.math,
                  science: action.payload.marks.sci,
                  english: action.payload.marks.eng,
                },
              }
            : item
        );
        return update;
      }
      default:
        return currentState;
    }
  };
  const [state, dispatch] = useReducer(reducerFunc, studentDetails);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [dept, setDept] = useState("");
  const [marks, setMarks] = useState({ math: 0, sci: 0, eng: 0 });
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedStudentDetails, setSelectedStudentDetails] = useState(null);
  const { math, sci, eng } = marks;
  console.log("Math ", math);
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

  const deleteFunc = () => {
    dispatch({
      type: "DELETE",
      payload: selectedStudent,
    });
  };

  const updateFunc = () => {
    dispatch({
      type: "UPDATEUSER",
      payload: selectedStudentDetails,
    });
  };
  console.log("selectedStudent ", selectedStudent);
  // const getValue = (field) => {
  //   const selected = state.find((item) => item.id === Number(selectedStudent));
  //   return selected[field];
  // };
  return (
    <>
      <ol>
        {" "}
        {/* <label name={"student"}></label> */}
        {state.map((val) => (
          <li key={val.id}>
            <input
              type="radio"
              name={"student"}
              value={val.id}
              id={val.id}
              onChange={(e) => {
                setSelectedStudent(e.target.value);
                setSelectedStudentDetails(val);
              }}
            />
            <p>{val.name}</p>
            <p>{val.age}</p>
            <p>{val.department}</p>
          </li>
        ))}
      </ol>
      <button onClick={deleteFunc}>Delete</button>
      <div>
        <p>
          <strong>Update Student Details:</strong>
        </p>
        <br></br>
        Name:
        <input
          type="text"
          onChange={(e) =>
            setSelectedStudentDetails({
              ...selectedStudentDetails,
              name: e.target.value,
            })
          }
          // onChange={(e) => setName(e.target.value)}
          value={selectedStudentDetails?.name || ""}
        ></input>
        <br></br>
        Age:
        <input
          type="number"
          onChange={(e) =>
            setSelectedStudentDetails({
              ...selectedStudentDetails,
              age: e.target.value,
            })
          }
          value={selectedStudentDetails?.age || ""}
        ></input>
        <br></br>
        Dept:
        <input
          type="text"
          onChange={(e) =>
            setSelectedStudentDetails({
              ...selectedStudentDetails,
              department: e.target.value,
            })
          }
          value={selectedStudentDetails?.department || ""}
        ></input>
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
        <button onClick={updateFunc}>Update</button>
      </div>
      <br></br>
      <p>Create new student</p>
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
