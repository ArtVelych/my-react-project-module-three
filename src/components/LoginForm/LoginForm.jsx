const LoginForm = ({ onLogin }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    // Викликаємо пропс onLogin
    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" placeholder="Enter your login" />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
