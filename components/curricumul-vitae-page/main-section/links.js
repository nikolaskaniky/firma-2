import React from "react";
import classes from "../curriculum-vitae.module.scss";
import Input from "../../reusables/input";

const Links = (props) => {
  const { linksList, setLinksList } = props;
  const addLinkHandler = () => {
    if (linksList.length >= 4) return;
    setLinksList([...linksList, { website: "" }]);
  };
  const deleteLinkHandler = (index) => {
    const list = [...linksList];
    list.splice(index, 1);
    setLinksList(list);
  };

  const changeLinkHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...linksList];
    list[index][name] = value;
    setLinksList(list);
  };

  return (
    <div className={classes.links}>
      <p className={classes.add} onClick={addLinkHandler}>
        add link
      </p>

      {linksList.map((input, index) => (
        <div className={classes.input} key={index}>
          <label>Website {index + 1}</label>
          <input
            type="text"
            name="website"
            onChange={(e) => changeLinkHandler(e, index)}
            value={input.website}

          />
          {index > 0 && (
            <p
              style={{ cursor: "pointer" }}
              onClick={() => deleteLinkHandler(index)}
            >
              delete
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Links;
