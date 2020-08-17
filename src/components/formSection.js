import React, { useState } from "react";

export const FormSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [formData, setFormData] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const data = [{ name: name, phone: phone, mail: mail }];
    setFormData(data);
    setName("");
    setPhone("");
    setMail("");
  };

  const nameHandler = (e) => {
    //console.log(e.currentTarget.name)
    if (e.currentTarget.name === "name") {
      setName(e.currentTarget.value);
    } else if (e.currentTarget.name === "phone") {
      setPhone(e.currentTarget.value);
    } else {
      setMail(e.currentTarget.value);
    }
  };
  return (
    <div className="form-section" onSubmit={submitHandler}>
      <form className="form-callback">
        <h1 className="h1">
          Узнайте больше и получите персональное предложение
        </h1>
        <div className="input-wrapper">
          <input
            type="text"
            name="name"
            value={name}
            onChange={nameHandler}
            placeholder="ФИО"
            required
          />
        </div>
        <div className="input-wrapper">
          <br />
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={nameHandler}
            placeholder="Номер телефона"
            required
          />
        </div>
        <div className="input-wrapper">
          <br />
          <input
            type="text"
            name="mail"
            value={mail}
            onChange={nameHandler}
            placeholder="Электронный адрес"
            required
          />
        </div>
        <button>Отправить</button>
      </form>
    </div>
  );
};
