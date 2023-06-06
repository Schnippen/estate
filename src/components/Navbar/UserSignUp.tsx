import React from "react";
import styles from "./UserSignUp.module.css";
import Button from "../Buttons/Button";
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
import useActive from "../../utils/useActive";
import { BsFacebook, BsApple } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function UserSignUp() {
  //loading
  const [isLoading, setIsLoading] = useState(false);

  //email
  const [email, setEmail] = useState<string>("");
  const [emailValid, setEmailValid] = useActive(false);
  const EMAIL_REGEX = /[^\s@]+@[^\s@]+\.[^\s@]+/gi;
  //password
  const [password, setPassword] = useState<string>("");
  const [passwordValid, setPasswordValid] = useActive(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [passwordShown, setPasswordShown] = useActive(false);
  const inputRefPassword = useRef<HTMLInputElement>(null);
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,16}$/;
  const [showPasswordError, setShowPasswordError] = useState(false);
  //password Confirmation - Matched
  const [passwordMatched, setPasswordMatched] = useState<string>("");
  const [passwordMatchedValid, setPasswordMatchedValid] = useActive(false);
  const [focusedPasswordMatched, setFocusedPasswordMatched] = useState(false);
  const inputRefPasswordMatched = useRef<HTMLInputElement>(null);

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  useEffect(() => {
    if (showSuccessModal || showErrorModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSuccessModal, showErrorModal]);

  useEffect(() => {
    setEmailValid(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setPasswordValid(PASSWORD_REGEX.test(password));
    setPasswordMatchedValid(passwordMatched === password);
    setShowPasswordError(focusedPassword && !passwordValid);
  }, [password, passwordMatched]);

  //go back after success or error
  const navigate = useNavigate();
  useEffect(() => {
    if (showSuccessModal || showErrorModal) {
      setTimeout(() => {
        setShowSuccessModal(false);
        setShowErrorModal(false);
        navigate("/");
      }, 5000);
    }
  }, [showSuccessModal, showErrorModal]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Signing Up!");
    setIsLoading(true);
    console.log("Proceed registration");

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setShowSuccessModal(true);
      console.log("Success");
    } catch (error) {
      console.log(error);
      console.log("An error occurred. Please try again.");
      setShowErrorModal(true);
    }
  };

  const handleSpace = (e: React.KeyboardEvent) => {
    e.key === " " && e.preventDefault();
  };

  return (
    <div className={styles.signUp_body}>
      <div className={styles.header}>
        <h2>Join Anytown Real Estate</h2>
      </div>
      <Link to={"/"}>
        <span className={styles.backButton}>
          <Button>
            <HiArrowLeft />
          </Button>
          Return
        </span>
      </Link>
      <div className={styles.signUp_container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.authentication}>
            <h5 style={{ borderBottom: "1px solid rgba(216, 216, 216, 0.4)" }}>
              use{" "}
            </h5>
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
            <h5
              style={{
                margin: "0 0 10px 0",
                borderBottom: "1px solid rgba(216, 216, 216, 0.4)",
              }}
            >
              or register via
            </h5>
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
                  This field must contain a valid email address (e.g
                  johndoe@test.com)
                </p>
              </div>
            )}
            <label htmlFor="password">Password:</label>
            <div className={styles.form_div_wrapper}>
              <HiLockClosed className={styles.svg} />
              {passwordShown ? (
                <HiOutlineEye
                  className={styles.svgPassword}
                  onClick={() => {
                    if (inputRefPassword.current) {
                      inputRefPassword.current.focus();
                      setPasswordShown(!passwordShown);
                    }
                  }}
                />
              ) : (
                <HiOutlineEyeOff
                  className={styles.svgPassword}
                  onClick={() => {
                    if (inputRefPassword.current) {
                      inputRefPassword.current.focus();
                      setPasswordShown(!passwordShown);
                    }
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
                onFocus={() => setFocusedPassword((prev) => !prev)}
                onBlur={() => setFocusedPassword((prev) => !prev)}
                ref={inputRefPassword}
                onKeyDown={handleSpace}
              />
            </div>
            {focusedPassword && !passwordValid ? (
              <div className={styles.errorParagraph}>
                <p>
                  Password must be between 8 and 16 characters long.<br></br>
                  It must contain at least one number, one uppercase letter,
                  <br></br>
                  and one of the special characters: !@#$%
                </p>
              </div>
            ) : null}
            <label htmlFor="passwordConfirmation">Repeat Password:</label>
            <div className={styles.form_div_wrapper}>
              <HiLockClosed className={styles.svg} />
              {passwordShown ? (
                <HiOutlineEye
                  className={styles.svgPassword}
                  onClick={() => {
                    if (inputRefPasswordMatched.current) {
                      inputRefPasswordMatched.current.focus();
                      setPasswordShown(!passwordShown);
                    }
                  }}
                />
              ) : (
                <HiOutlineEyeOff
                  className={styles.svgPassword}
                  onClick={() => {
                    if (inputRefPasswordMatched.current) {
                      inputRefPasswordMatched.current.focus();
                      setPasswordShown(!passwordShown);
                    }
                  }}
                />
              )}

              <input
                id="passwordConfirmation"
                type={passwordShown ? "text" : "password"}
                name="passwordConfirmation"
                required
                placeholder="Repeat Password..."
                className={
                  !passwordMatched
                    ? styles.inputText
                    : passwordMatchedValid
                    ? styles.inputTextValid
                    : styles.inputTextError
                }
                onChange={(e) => setPasswordMatched(e.target.value)}
                onFocus={() => setFocusedPasswordMatched((prev) => !prev)}
                onBlur={() => setFocusedPasswordMatched((prev) => !prev)}
                ref={inputRefPasswordMatched}
                onKeyDown={handleSpace}
              />
            </div>
            {focusedPasswordMatched && !passwordMatchedValid ? (
              <div className={styles.errorParagraph}>
                <p>Repeat password</p>
              </div>
            ) : null}
            <div>
              <input
                type="submit"
                value={"Sign Up"}
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
    </div>
  );
}

export default UserSignUp;
