import React, { useState, Fragment, useEffect } from "react";
import classes from "../curriculum-vitae.module.scss";

const Language = (props) => {
  const { languageList, setLanguageList, formIsSubmitted, languageHasError } =
    props;

  const [length, setLength] = useState(languageList.length);

  const languageListHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...languageList];
    list[index][name] = value;
    setLanguageList(list);
  };

  const removeHandler = (index) => {
    const list = [...languageList];
    list.splice(index, 1);
    setLanguageList(list);
  };

  const addHandler = () => {
    setLanguageList([...languageList, { language: "", level: "" }]);
  };

  const getSelectedLevel = (selectedLevel, index) => {
    const list = [...languageList];
    list[index]["level"] = selectedLevel;
    setLanguageList(list);
  };

  useEffect(() => {
    setLength(languageList.length);
  }, [languageList]);

  return (
    <div className={classes.language}>
      {length < 3 && (
        <p className={classes.add} onClick={addHandler}>
          Add language.
        </p>
      )}

      {languageList.map((input, index) => (
        <Fragment key={index}>
          <div className={classes.input}>
            <label>language {index + 1}</label>
            <input
              name="language"
              type="text"
              value={input.language}
              onChange={(e) => languageListHandler(e, index)}
            />
            {languageHasError && formIsSubmitted && index === 0 && (
              <p>{languageHasError}</p>
            )}
          </div>

          <LevelField
            indexFromMain={index}
            languageList={languageList}
            setLanguageList={setLanguageList}
            getSelectedLevel={getSelectedLevel}
            removeHandler={removeHandler}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default Language;

//! LEVEL FIELS COMPONENT.

export const LevelField = (props) => {
  const { indexFromMain, getSelectedLevel, removeHandler, languageList } =
    props;

  const level_array = [
    {
      name: "basic",
    },

    {
      name: "conversational",
    },

    {
      name: "fluent",
    },

    {
      name: "native",
    },
  ];
  const [selectedLevel, setSelectedLevel] = useState(level_array[0].name);
  const [levelIsActive, setLevelIsActive] = useState(false);
  const levelIsActiveHandler = () =>
    setLevelIsActive((prev) => setLevelIsActive(!prev));
  const selectLevelHandler = (value) => setSelectedLevel(value);

  useEffect(() => {
    getSelectedLevel(selectedLevel, indexFromMain);
  }, [selectedLevel]);

  return (
    <div className={classes.input}>
      <label>Level</label>
      <ul className={classes["level-box"]} onClick={levelIsActiveHandler}>
        {indexFromMain !== 0 && (
          <p
            className={classes.delete}
            onClick={(e) => {
              removeHandler(indexFromMain);
              e.stopPropagation();
            }}
          >
            delete
          </p>
        )}
        {/* <li>{selectedLevel}</li> */}
        <li>
          {languageList.map(
            (item, index) =>
              indexFromMain === index && <p key={index}>{item.level}</p>
          )}
        </li>
        {/* //! <-- dropdown for level */}
        {levelIsActive && (
          <div className={classes.dropdown}>
            {level_array.map((item, index) => (
              <div className={classes.item} key={index}>
                <p
                  onClick={(e) => {
                    selectLevelHandler(item.name);
                  }}
                  className={`${
                    selectedLevel === item.name ? classes.active : undefined
                  }`}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        )}
        {/* //! --> */}
      </ul>
    </div>
  );
};
