// import { useReducer, useState } from "react";
import "react-router-dom";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import ProjectItem from "./pages/ProjectItem";
import Login from "./pages/Login";
import Layout from "./components/Layout";

// const studentDetails = [
//   {
//     id: 1,
//     name: "Rahul",
//     age: 20,
//     department: "CSE",
//     marks: {
//       maths: 90,
//       science: 85,
//       english: 88,
//     },
//   },
//   {
//     id: 2,
//     name: "Priya",
//     age: 19,
//     department: "ECE",
//     marks: {
//       maths: 75,
//       science: 92,
//       english: 81,
//     },
//   },
//   {
//     id: 3,
//     name: "Arun",
//     age: 21,
//     department: "EEE",
//     marks: {
//       maths: 80,
//       science: 78,
//       english: 85,
//     },
//   },
// ];

// const reducerFunc = (currentState, action) => {
//   switch (action.type) {
//     case "ADD": {
//       let newdata = {
//         id: currentState.length + 1,
//         name: action.payload.name,
//         age: action.payload.age,
//         department: action.payload.department,
//         marks: {
//           maths: action.payload.marks.math,
//           science: action.payload.marks.sci,
//           english: action.payload.marks.eng,
//         },
//       };
//       return [...currentState, newdata];
//     }
//     case "DELETE": {
//       const selected = currentState.filter(
//         (item) => item.id !== Number(action.payload)
//       );
//       console.log("reducer");
//       console.log(selected);
//       return selected;
//     }
//     case "UPDATEUSER": {
//       // const selected = currentState.filter(
//       //   (item) => item.id !== Number(action.payload.id)
//       // );
//       // let updateddata = {
//       //   id: action.payload.id,
//       //   name: action.payload.name,
//       //   age: action.payload.age,
//       //   department: action.payload.department,
//       //   marks: {
//       //     maths: action.payload.marks.math,
//       //     science: action.payload.marks.sci,
//       //     english: action.payload.marks.eng,
//       //   },
//       // };
//       let update = currentState.map((item) =>
//         item.id === Number(action.payload.id)
//           ? {
//               id: action.payload.id,
//               name: action.payload.name,
//               age: action.payload.age,
//               department: action.payload.department,
//               marks: {
//                 maths: action.payload.marks.math,
//                 science: action.payload.marks.sci,
//                 english: action.payload.marks.eng,
//               },
//             }
//           : item
//       );
//       return update;
//     }
//     default:
//       return currentState;
//   }
// };
function App() {
  // const [state, dispatch] = useReducer(reducerFunc, studentDetails);
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(0);
  // const [dept, setDept] = useState("");
  // const [marks, setMarks] = useState({ math: 0, sci: 0, eng: 0 });
  // const [selectedStudent, setSelectedStudent] = useState(null);
  // const [selectedStudentDetails, setSelectedStudentDetails] = useState(null);
  // const { math, sci, eng } = marks;
  // console.log("Math ", math);
  // console.log(name);
  // console.log(age);
  // console.log(dept);
  // console.log(marks);
  // const addFunc = () => {
  //   dispatch({
  //     type: "ADD",
  //     payload: {
  //       name: name,
  //       age,
  //       department: dept,
  //       marks,
  //     },
  //   });
  // };

  // const deleteFunc = () => {
  //   dispatch({
  //     type: "DELETE",
  //     payload: selectedStudent,
  //   });
  // };

  // const updateFunc = () => {
  //   dispatch({
  //     type: "UPDATEUSER",
  //     payload: selectedStudentDetails,
  //   });
  // };
  // console.log("selectedStudent ", selectedStudent);
  // const getValue = (field) => {
  //   const selected = state.find((item) => item.id === Number(selectedStudent));
  //   return selected[field];
  // };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/education" element={<Education />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route
              path="/projects/:projectname"
              element={<ProjectItem />}
            ></Route>
          </Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
