import React from "react";
import { useRef, useEffect } from "react";
import ButtonExit from "../Buttons/ButtonExit";
import styles from "../components/Item/ItemSideArticleCredit.module.css";

function TermsOfService({ setIsActive, isActive }) {
  const ref = useRef();

  useEffect(() => {
    const handleClose = (e) => {
      if (isActive && ref.current === e.target) {
        setIsActive();
      }
    };
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [isActive]);

  return (
    <div
      ref={ref}
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#00000045",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "9999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ButtonExit setIsActive={setIsActive} />
      <div
        style={{
          backgroundColor: "#554971",
          height: "580px",
          width: "50%",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: "1rem" }}>Terms Of Service</h3>
        <div
          style={{
            margin: "0 2rem",
            width: "auto",
            height: "440px",
            backgroundColor: "#fff",
            color: "#000",
            overflowY: "auto",
            borderRadius: "5px",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            culpa dolores dolore, neque quibusdam minus. Repellendus aliquid
            omnis voluptatem facere, sint pariatur architecto aut nesciunt
            molestias blanditiis explicabo libero iure. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Libero culpa dolores dolore,
            neque quibusdam minus. Repellendus aliquid omnis voluptatem facere,
            sint pariatur architecto aut nesciunt molestias blanditiis explicabo
            libero iure. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Libero culpa dolores dolore, neque quibusdam minus.
            Repellendus aliquid omnis voluptatem facere, sint pariatur
            architecto aut nesciunt molestias blanditiis explicabo libero iure.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            culpa dolores dolore, neque quibusdam minus. Repellendus aliquid
            omnis voluptatem facere, sint pariatur architecto aut nesciunt
            molestias blanditiis explicabo libero iure. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Libero culpa dolores dolore,
            neque quibusdam minus. Repellendus aliquid omnis voluptatem facere,
            sint pariatur architecto aut nesciunt molestias blanditiis explicabo
            libero iure. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Libero culpa dolores dolore, neque quibusdam minus.
            Repellendus aliquid omnis voluptatem facere, sint pariatur
            architecto aut nesciunt molestias blanditiis explicabo libero iure.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            culpa dolores dolore, neque quibusdam minus. Repellendus aliquid
            omnis voluptatem facere, sint pariatur architecto aut nesciunt
            molestias blanditiis explicabo libero iure. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Libero culpa dolores dolore,
            neque quibusdam minus. Repellendus aliquid omnis voluptatem facere,
            sint pariatur architecto aut nesciunt molestias blanditiis explicabo
            libero iure. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Libero culpa dolores dolore, neque quibusdam minus.
            Repellendus aliquid omnis voluptatem facere, sint pariatur
            architecto aut nesciunt molestias blanditiis explicabo libero iure.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            culpa dolores dolore, neque quibusdam minus. Repellendus aliquid
            omnis voluptatem facere, sint pariatur architecto aut nesciunt
            molestias blanditiis explicabo libero iure. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Libero culpa dolores dolore,
            neque quibusdam minus. Repellendus aliquid omnis voluptatem facere,
            sint pariatur architecto aut nesciunt molestias blanditiis explicabo
            libero iure. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Libero culpa dolores dolore, neque quibusdam minus.
            Repellendus aliquid omnis voluptatem facere, sint pariatur
            architecto aut nesciunt molestias blanditiis explicabo libero iure.
          </p>
        </div>
        <div style={{ width: "300px", margin: "1rem 0" }}>
          <button className={styles.submit} onClick={setIsActive}>
            Zamknij
          </button>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
