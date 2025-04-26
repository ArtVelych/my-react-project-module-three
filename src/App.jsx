// import { useState } from 'react'
import "./App.css";

import LoginForm from "./components/LoginForm/LoginForm";
import LoginFormOne from "./components/LoginFormOne/LoginFormOne";
import SearchBar from "./components/SearchBar/SearchBar";

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

const App = () => {
  return (
    <div>
      <h1>Please, provide your input</h1>
      <SearchBar />
    </div>
  );
};

export default App;

// =================================== Task 4: ==============================
