import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import "../styles/SearchBar.css";

type Inputs = {
  searchValue: string;
};

export const SearchBar: React.FC = () => {
  const { register, handleSubmit, watch } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(JSON.stringify(data));
  console.log(watch("searchValue"));

  return (
    <div className="searchbar_container">
      <div className="searchbar_wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("searchValue")}
            placeholder="Buscar por títulos, autor, isbn, ..."
            className="searchbar_input"
            autoComplete="off"
            autoFocus
          />
          <input className="searchbar_btn" type="submit" value="Buscar" />
        </form>
      </div>
    </div>
  );
};
