import React from "react";
import styles from "./SignUp.module.css";
import Button from "./Button";
import {
  HiMail,
  HiLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiArrowLeft,
  HiCheck,
  HiOutlineX,
} from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useActive from "./useActive";
import { BsFacebook, BsApple } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";

function SignUp() {
  //email
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useActive(false);
  const EMAIL_REGEX = /[^\s@]+@[^\s@]+\.[^\s@]+/gi;
  //password
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useActive(false);
  const [focusedPassword, setFocusedPassword] = useActive(false);
  const [passwordShown, setPasswordShown] = useActive(false);
  const inputRefPassword = useRef();
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,16}$/;

  //password Confirmation - Matched
  const [passwordMatched, setPasswordMatched] = useState("");
  const [passwordMatchedValid, setPasswordMatchedValid] = useActive(false);
  const [focusedPasswordMatched, setFocusedPasswordMatched] = useActive(false);
  const inputRefPasswordMatched = useRef();

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  useEffect(() => {
    setEmailValid(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setPasswordValid(PASSWORD_REGEX.test(password));
    setPasswordMatchedValid(passwordMatched === password);
  }, [password, passwordMatched]);

  //console.table(passwordValid, password, passwordMatched, passwordMatchedValid);

  //go back after succes or error
  const navigate = useNavigate();
  useEffect(() => {
    if (showSuccessModal || showErrorModal) {
      setTimeout(() => {
        setShowSuccessModal(false);
        setShowErrorModal(false);
        navigate("/");
      }, 3000);
    }
  }, [showSuccessModal, showErrorModal]);

  const handleSumbit = (e) => {
    e.preventDefault();
    alert("Submitting!");
    const newUser = { email, password };
    fetch("http://localhost:3200/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShowSuccessModal(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setShowErrorModal(true);
      });
  };

  const handleSpace = (e) => {
    e.key === " " && e.preventDefault();
  };

  return (
    <body className={styles.signUp_body}>
      <div className={styles.header}>
        <h2>Dołącz do Anytown Real Estate</h2>
      </div>
      <Link to={-1}>
        <span className={styles.backButton}>
          <Button>
            <HiArrowLeft />
          </Button>
          Wróć
        </span>
      </Link>
      <div className={styles.signUp_container}>
        <form onSubmit={handleSumbit}>
          <div className={styles.authentication}>
            <h5>skorzystaj z </h5>
            <div className={styles.authentication_button_wrapper}>
              <button className={styles.authentication_button}>
                <FcGoogle />
                Google
              </button>
              <button className={styles.authentication_button}>
                <BsFacebook />
                Facebook
              </button>
              <button className={styles.authentication_button}>
                <BsApple />
                Apple
              </button>
            </div>
            <h5 style={{ margin: "0 0 10px 0" }}>lub zarejestruj sie przez</h5>
          </div>
          <div className={styles.authentication_panel}>
            <label htmlFor="email">E-mail:</label>
            <div className={styles.form_div_wrapper}>
              <HiMail className={styles.svg} />
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Wpisz e-mail"
                required
                className={
                  !email
                    ? styles.inputText
                    : emailValid
                    ? styles.inputTextValid
                    : styles.inputTextError
                }
                onChange={(e) => setEmail(e.target.value.trim())}
                onKeyDown={handleSpace}
              />
            </div>
            {!email || emailValid ? null : (
              <div className={styles.errorParagraph}>
                <p>
                  To pole musi zawierać poprawny adres e-mail (np.
                  jan.kowalski@mail.com).
                </p>
              </div>
            )}
            <label htmlFor="password">Hasło:</label>
            <div className={styles.form_div_wrapper}>
              <HiLockClosed className={styles.svg} />
              {passwordShown ? (
                <HiOutlineEye
                  className={styles.svgPassword}
                  onClick={() => {
                    inputRefPassword.current.focus();
                    setPasswordShown();
                  }}
                />
              ) : (
                <HiOutlineEyeOff
                  className={styles.svgPassword}
                  onClick={() => {
                    inputRefPassword.current.focus();
                    setPasswordShown();
                  }}
                />
              )}

              <input
                id="password"
                type={passwordShown ? "text" : "password"}
                name="password"
                required
                placeholder="Hasło..."
                className={
                  !password
                    ? styles.inputText
                    : passwordValid
                    ? styles.inputTextValid
                    : styles.inputTextError
                }
                onChange={(e) => setPassword(e.target.value)}
                onFocus={setFocusedPassword}
                onBlur={setFocusedPassword}
                ref={inputRefPassword}
                onKeyDown={handleSpace}
              />
            </div>
            {focusedPassword && !passwordValid ? (
              <div className={styles.errorParagraph}>
                <p>
                  Hasło musi mieć długośc od 8 do 16 liter<br></br>
                  Musi zawierać jedną liczbę, wielką literę<br></br>
                  oraz jeden ze znaków specjalnych !@#$%
                </p>
              </div>
            ) : null}
            <label htmlFor="passwordConfirmation">Powtórz Hasło:</label>
            <div className={styles.form_div_wrapper}>
              <HiLockClosed className={styles.svg} />
              {passwordShown ? (
                <HiOutlineEye
                  className={styles.svgPassword}
                  onClick={() => {
                    inputRefPasswordMatched.current.focus();
                    setPasswordShown();
                  }}
                />
              ) : (
                <HiOutlineEyeOff
                  className={styles.svgPassword}
                  onClick={() => {
                    inputRefPasswordMatched.current.focus();
                    setPasswordShown();
                  }}
                />
              )}

              <input
                id="passwordConfirmation"
                type={passwordShown ? "text" : "password"}
                name="passwordConfirmation"
                required
                placeholder="Powtórz Hasło..."
                className={
                  !passwordMatched
                    ? styles.inputText
                    : passwordMatchedValid
                    ? styles.inputTextValid
                    : styles.inputTextError
                }
                onChange={(e) => setPasswordMatched(e.target.value)}
                onFocus={setFocusedPasswordMatched}
                onBlur={setFocusedPasswordMatched}
                ref={inputRefPasswordMatched}
                onKeyDown={handleSpace}
              />
            </div>
            {focusedPasswordMatched && !passwordMatchedValid ? (
              <div className={styles.errorParagraph}>
                <p>Powtórz Hasło</p>
              </div>
            ) : null}
            <input type="checkbox" />
            <input type="checkbox" />
            <div>
              <input
                type="submit"
                value={"Zarejestruj się"}
                className={styles.submit}
                disabled={
                  !emailValid || !passwordValid || !passwordMatchedValid
                    ? true
                    : false
                }
              />
            </div>
          </div>
        </form>
      </div>
      <div className={styles.signUpBusiness_container}>
        <h3>Reprezentujesz firmę?</h3>
        <p>Załóż konto dla firm</p>
      </div>
      {showSuccessModal ? (
        <div className={styles.modal}>
          <div className={styles.modalWrapper}>
            <HiCheck className={styles.successModal} />
            <h1>Success</h1>
          </div>
        </div>
      ) : null}
      {showErrorModal ? (
        <div className={styles.modal}>
          <div className={styles.modalWrapper}>
            <HiOutlineX className={styles.errorModal} />
            <h1>Error</h1>
          </div>
        </div>
      ) : null}
    </body>
  );
}

export default SignUp;
