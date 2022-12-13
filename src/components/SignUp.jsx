import React from 'react'
import styles from './SignUp.module.css'
import { HiMail,HiLockClosed,HiUserCircle,HiOutlineEye,HiOutlineEyeOff } from "react-icons/hi";
import { BsFacebook,BsGoogle,BsApple  } from "react-icons/bs";



function SignUp() {

    const handleSumbit=(e)=>{
        e.preventDefault();
        alert("Submitting!");
    };

  return (
    <body className={styles.signUp_body}>
        <div className={styles.header}><h2>Dołącz do Anytown Real Estate</h2></div>
        <div className={styles.signUp_container}>
        <form>
            <HiUserCircle/>
            <div className={styles.authentication}>
            <h5>skorzystaj z </h5>
            <div className={styles.authentication_button_wrapper}>
            <button className={styles.authentication_button}><BsGoogle/>Google</button>
            <button className={styles.authentication_button}><BsFacebook/>Facebook</button>
            <button className={styles.authentication_button}><BsApple/>Apple</button>
            </div>
            <h5>lub zarejestruj sie przez</h5>
            </div>
            <div className={styles.authentication_panel}>
            <div className={styles.form_div_wrapper}>
                  <HiMail className={styles.svg} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Wpisz e-mail"
                    className={styles.inputText}
                  />
                </div>
                <div className={styles.form_div_wrapper}>
                  <HiLockClosed className={styles.svg} />
                  <input
                    type="password"
                    name="email"
                    placeholder="Hasło..."
                    className={styles.inputText}
                  />
                </div>
                <input type="checkbox" />
                <input type="checkbox" />
                <div>
                    <input type="submit" value={"Zarejestruj się"} className={styles.submit} onSubmit={handleSumbit}/>
                </div>
            </div>
        </form>
        </div>
        <div className={styles.signUpBusiness_container}>
        <h3>Reprezentujesz firmę?</h3>
        <p>Załóż konto dla firm</p>
        </div>
        
    </body>
  )
}

export default SignUp