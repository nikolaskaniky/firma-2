import React from "react";
import classes from "./founders.module.scss";

const Skills = (props) => {
  const { founder } = props;

  return (
    <section className={classes.skills}>
      <h1>Skills</h1>

      <div className={classes.cards}>
        {founder.skills.map((item, index) => (
          <div className={classes.card} key={index}>
            <div className={classes.title}>
              <h4>{item.name}</h4>
            </div>

            <div className={classes.table}>
              {item.content.map((item, index) => (
                <div className={classes.element} key={index}>
                    <div className={classes.info}>
                        <p>{item.name}</p>
                        <p>{item.procent}</p>
                    </div>

                    <div className={classes.bar}>
                        <div className={classes.fill} 
                            style={{
                                width: item.procent + '%'
                            }}
                        ></div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
