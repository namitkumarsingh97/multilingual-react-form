import React, { useState } from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ProgressLoader from "./ProgressLoader.jsx";

const Content = () => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="forms">
        <label>
          {t("username.label")}:
          <input {...register("name", { required: true, minLength: 2 })} />
        </label>
        <label>
          {t("email.label")}:
          <input {...register("email", { required: true })} />
        </label>
        <label>
          {t("password.label")}:
          <input {...register("password", { required: true })} />
        </label>
        <button disabled={loading}>
          {loading ? <ProgressLoader /> : t("submit")}
        </button>
      </form>
    </div>
  );
};

export default Content;
