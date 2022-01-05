import React, { useState } from "react";

function FormInput() {
  const [numberr, setNumberr] = useState("");
  const onChangeHandler = (event) => {
    setNumberr(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    let regex = /^\d{10}$/g;
    event.target[0].value = "";
    if (regex.test(numberr)) {
      let link = "https://api.whatsapp.com/send/?phone=91" + numberr;
      window.open(link, "_blank");
    } else {
      alert("Not a 10-digit number!");
    }
  };
  return (
    <form className="actualForm" onSubmit={onSubmitHandler}>
      <label htmlFor="numberr">Enter a 10-digit Phone Number.</label>
      <input type="number" onChange={onChangeHandler} placeholder="+91" required/>
      <button>Chat!</button>
    </form>
  );
}

export default FormInput;