import React from "react";
import styles from "./UserInterface.module.css";
import { HiMail, HiLockClosed } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IconType } from "react-icons/lib";

type UserSignInTypes={
  handleLogin: (e: {
    target: {
        name: string;
        value?: string;
    };
}) => void;
  handleSubmit:(e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  userLogin:any;
  logOut:any;
  userLoggedIn:any;
  userData:any;
  HiOutlineEyeOff?:IconType;
  HiOutlineEye?:IconType;
}

const UserSignIn = ({
  handleLogin,
  handleSubmit,
  userLogin,
  logOut,
  userLoggedIn,
  userData,
  HiOutlineEyeOff,
  HiOutlineEye,
}:UserSignInTypes) => {
  //Loging Out
  const handleLogOut = async () => {
    try {
      logOut();
    } catch (error) {
      console.log(error);
      console.error("I had problems with Login Out");
    }
  };

  return (
    <>
      {userLoggedIn ? (
        <div className={styles.loggedIn_container}>
          <div className={styles.profilePicture}>
            <img src="" alt="" />
          </div>
          <h3 className={styles.loggedIn_email}>
            {!userData ? null : userData.email}
          </h3>
          <div className={styles.loggedIn_logOut}>
            <input
              value="Log out"
              onClick={handleLogOut}
              className={styles.submit}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.form_div_wrapper}>
            <label htmlFor="email" className={styles.form_div_label}>
              E-mail
            </label>
            <div className={styles.inputWrapper}>
              <HiMail className={styles.svg} />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                className={styles.inputText}
                onChange={handleLogin}
                required
              />
            </div>
          </div>
          <div className={styles.form_div_wrapper}>
            <label htmlFor="password" className={styles.form_div_label}>
              Password
            </label>
            <div className={styles.inputWrapper}>
              <HiLockClosed className={styles.svg} />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className={styles.inputText}
                onChange={handleLogin}
                required
              />
                          </div>
          </div>
          <input
            value="Sign In"
            type="submit"
            className={styles.submit}
            disabled={userLogin.email && userLogin.password ? false : true}
          />
          <p>Forgot your password?</p>
          <div className={styles.form_div_actions}>
            <p>Don't have an Account?</p>
            <Link to="/UserSignUp" className={styles.signup}>
              <p>Sign Up!</p>
            </Link>
          </div>
        </form>
      )}
    </>
  );
};

export default UserSignIn;
//<HiOutlineEye className={styles.svgPassword} />
//<HiOutlineEyeOff className={styles.svgPassword} />