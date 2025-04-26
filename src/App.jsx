import { useState } from "react";
import "./App.css";

import LoginForm from "./components/LoginForm/LoginForm";
import LoginFormOne from "./components/LoginFormOne/LoginFormOne";
import SearchBar from "./components/SearchBar/SearchBar";
import LangSwitcher from "./components/LangSwitcher/LangSwitcher";
import LoginFormControlled from "./components/LoginFormControlled/LoginFormControlled";

// import initialTasks from "./tasks.json";
import Form from "./components/Collection of Elements/Form/Form";
import Filter from "./components/Collection of Elements/Filter/Filter";
import TaskList from "./components/Collection of Elements/TaskList/TaskList";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import FeedbackFormTwo from "./components/FeedbackFormTwo/FeedbackFormTwo";
import FeedbackFormThree from "./components/FeedbackFormThree/FeedbackFormThree";
import FeedbackFormFour from "./components/FeedbackFormFour/FeedbackFormFour";
import FeedbackFormFive from "./components/FeedbackFormFive/FeedbackFormFive";
import FeedbackFormSix from "./components/FeedbackFormSix/FeedbackFormSix";
import FeedbackFormSeven from "./components/FeedbackFormSeven/FeedbackFormSeven";

// =================================== Task 1: Using Forms ==============================
// const App = () => {
//   // Колбек-функція для обробки сабміту форми
//   const handleLogin = (userData) => {
//     // Виконуємо необхідні операції з даними
//     console.log(userData);
//   };

//   // Передаємо колбек як пропс форми
//   return (
//     <div>
//       <h1>Please login to your account!</h1>
//       <LoginForm onLogin={handleLogin} />
//     </div>
//   );
// };

// export default App;

// =================================== Task 2: useId ==============================

// const App = () => {
//   // Колбек-функція для обробки сабміту форми
//   const handleLogin = (userData) => {
//     // Виконуємо необхідні операції з даними
//     console.log(userData);
//   };

//   // Передаємо колбек як пропс форми
//   return (
//     <div>
//       <h1>Please login to your account!</h1>
//       <LoginFormOne onLogin={handleLogin} />
//     </div>
//   );
// };

// export default App;

// =================================== Task 3: Controlled Elements ==============================

// const App = () => {
//   return (
//     <div>
//       <h1>Please, provide your input</h1>
//       <SearchBar />
//     </div>
//   );
// };

// export default App;

// =================================== Task 4: Select Element ==============================

// const App = () => {
//   const [lang, setLang] = useState("uk");

//   return (
//     <>
//       <p>Selected language: {lang}</p>
//       <LangSwitcher value={lang} onSelect={setLang} />
//     </>
//   );
// };

// export default App;

// =================================== Task 5: Radio Buttons ==============================
// const App = () => {
//   const [coffeeSize, setCoffeeSize] = useState("sm");

//   const handleSizeChange = (evt) => {
//     setCoffeeSize(evt.target.value);
//   };

//   return (
//     <>
//       <h1>Select coffee size</h1>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="sm"
//           checked={coffeeSize === "sm"}
//           onChange={handleSizeChange}
//         />
//         Small
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="md"
//           checked={coffeeSize === "md"}
//           onChange={handleSizeChange}
//         />
//         Meduim
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="lg"
//           checked={coffeeSize === "lg"}
//           onChange={handleSizeChange}
//         />
//         Large
//       </label>
//       <p>
//         <b>Selected size:</b> {coffeeSize}
//       </p>
//     </>
//   );
// };

// export default App;

// =================================== Task 6: Checkbox ==============================

// const App = () => {
//   const [hasAccepted, setHasAccepted] = useState(false);

//   const handleChange = (evt) => {
//     setHasAccepted(evt.target.checked);
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           name="terms"
//           checked={hasAccepted}
//           onChange={handleChange}
//         />
//         I accept terms and conditions
//       </label>
//       <button type="button" disabled={!hasAccepted}>
//         Proceed
//       </button>
//     </div>
//   );
// };

// export default App;

// =================================== Task 7: Login Form Controlled ==============================
// const App = () => {
//   return (
//     <div>
//       <LoginFormControlled />
//     </div>
//   );
// };

// export default App;

// =================================== Task 8: Video Workshop: Collection of Elements ==============================

// export default function App() {
//   const [tasks, setTasks] = useState(initialTasks);
//   const [filter, setFilter] = useState("");

//   const addTask = (newTask) => {
//     setTasks((prevTasks) => {
//       return [...prevTasks, newTask];
//     });
//   };

//   const deleteTask = (taskId) => {
//     setTasks((prevTasks) => {
//       return prevTasks.filter((task) => task.id !== taskId);
//     });
//   };

//   const visibleTasks = tasks.filter((task) =>
//     task.text.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div>
//       <Form onAdd={addTask} />
//       <Filter value={filter} onFilter={setFilter} />
//       <TaskList tasks={visibleTasks} onDelete={deleteTask} />
//     </div>
//   );
// }

// =================================== Task 9.1: Formik ==============================

// const App = () => {
//   return (
//     <div>
//       <FeedbackForm />
//     </div>
//   );
// };

// export default App;

// =================================== Task 9.2: Formik ==============================

// const App = () => {
//   return (
//     <div>
//       <FeedbackFormTwo />
//     </div>
//   );
// };

// export default App;

// =================================== Task 9.3: Formik ==============================

// const App = () => {
//   return (
//     <div>
//       <FeedbackFormThree />
//     </div>
//   );
// };

// export default App;

// =================================== Task 9.4: Formik ==============================

// const App = () => {
//   return (
//     <div>
//       <FeedbackFormFour />
//     </div>
//   );
// };

// export default App;

// =================================== Task 9.5: Formik ==============================

// const App = () => {
//   return (
//     <div>
//       <FeedbackFormFive />
//     </div>
//   );
// };

// export default App;

// =================================== Task 9.6: Formik ==============================

// const App = () => {
//   return (
//     <div>
//       <FeedbackFormSix />
//     </div>
//   );
// };

// export default App;

// =================================== Task 9.7: Formik ==============================

const App = () => {
  return (
    <div>
      <FeedbackFormSeven />
    </div>
  );
};

export default App;
