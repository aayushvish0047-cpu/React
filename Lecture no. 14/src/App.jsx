import { useState } from "react";
import { useForm } from "react-hook-form";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors , isSubmitting },
  } = useForm();

  // Custom submit handler function
 async function onSubmit(data){
      await new Promise ((reslove)=>setTimeout(reslove,5000));
      console.log("Form Submitted Data:", data);
 }

  return (
    <div className="form-container">
      {/* Attach handleSubmit to the onSubmit event of the form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        
        {/* First Name Field */}
        <div>
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            className={errors.firstName ? 'input-error':""}
            type="text"
            {...register("firstName", { required: "First name is required", minLength:{value:3, message:"min len atleast 3" }})}
          />
          {errors.firstName && <span className="error">{errors.firstName.message}</span>}
        </div>

        {/* Middle Name Field */}
        <div>
          <label htmlFor="middleName">Middle name</label>
          <input
            id="middleName"
            type="text"
            {...register("middleName")} // Optional field
          />
        </div>

        {/* Last Name Field */}
        <div>
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            type="text"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && <span className="error">{errors.lastName.message}</span>}
        </div>

        <button type="submit" disabled={isSubmitting} value={isSubmitting? "Submitting":"Submit"} >Submit</button>
      </form>
    </div>
  );
}

export default App;
