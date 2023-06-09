import React from "react";
import styles from "./styles.module.css";
const Search = ({search,handleChangeSearch}) => {
  return (
    <section
      className={
        styles.input_search +
        " d-flex align-items-center  pe-0 ps-2 gap-3 col-12 col-md-8 py-2"
      }
    >
      <ion-icon name="search-outline" className="icon ps-3"></ion-icon>
      <input
        type="text"
        value={search}
        className={styles.search + " w-100"}
        placeholder="Search the website..."
        onChange={handleChangeSearch}
      />
    </section>
  );
};

export default Search;
