import React, { useState } from "react";
import classes from "./category.module.scss";
import { AiFillCaretDown } from "react-icons/ai";
import useIsMounted from "../../HOOKS/useIsMounted";

const Category = (props) => {
  const {
    categoryValue,
    categoryErrors,
    setCategoryValue,
    categoryClickHandler,
  } = props;
  const isMounted = useIsMounted();

  const category_options = [
    {
      name: "fix website",
    },

    {
      name: "collaborate with us",
    },

    {
      name: "custom component",
    },

    {
      name: "create website",
    },
  ];
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const categoryDropdownHandler = (e) => {
    e.stopPropagation();
    setCategoryDropdown((prev) => setCategoryDropdown(!prev));
  };

  if (categoryDropdown) {
    isMounted &&
      window.addEventListener("click", () => {
        setCategoryDropdown(false);
        console.log(categoryDropdown);
      });
  }

  return (
    <div
      className={`${classes.label} ${classes["category-label"]}`}
      onClick={categoryDropdownHandler}
    >
      {categoryValue ? (
        <p>{categoryValue}</p>
      ) : (
        <p className={classes.placeholder}>select a category</p>
      )}
      <AiFillCaretDown className={classes.down} />

      {categoryDropdown && (
        <ul className={classes.dropdown}>
          {category_options.map((option, index) => (
            <li
              onClick={() => {
                setCategoryValue(option.name);
                categoryClickHandler();
              }}
              key={index}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
      {categoryErrors && <p className={classes.error}>{categoryErrors}</p>}
    </div>
  );
};

export default Category;
