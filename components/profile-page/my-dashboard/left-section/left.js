import React from "react";
import Image from "next/image";
import classes from "./left.module.scss";
import Box from "../../reusable/box";
import { user } from "../../../../data/users-data";

const Left = () => {
  console.log(user);

  return (
    <div className={classes.left}>
      {/* //! <-- main box */}
      <Box style={classes["profile-box"]}>
        <div className={classes.image}>
          <Image
            src={user.photo}
            layout="fill"
            objectFit="cover"
            alt="profile image"
          />
        </div>

        <div className={classes.name}>
          <h4>
            {user.firstName} {user.lastName}
          </h4>
        </div>

        <div className={classes["button-wrapper"]}>
          <div className={classes.button}>
            <p>Edit Profile</p>
          </div>
        </div>
      </Box>

      {/* //! --> */}

      {/* //! <-- gender box */}
      <Box title="Gender" style={classes.box}>
        <div className={classes.row}>
          <p>Gender:</p>
          <span>Male</span>
        </div>
      </Box>
      {/* //! --> */}

      {/* //! <-- birth box */}
      <Box title="Date of birth">
        <div className={classes.row}>
          <p>Date of birth:</p>
          <span>{user.dateOfBirth} (24)</span>
        </div>
      </Box>
      {/* //! --> */}

      <Box title="Address" content>
        <div className={classes.row}>
          <p>Address 1:</p>
          <span>27 Rue du Couedic</span>
        </div>

        <div className={classes.row}>
          <p>Address 2:</p>
          <span>27 Rue du Couedic</span>
        </div>

        <div className={classes.row}>
          <p>City:</p>
          <span>{user.city}</span>
        </div>

        <div className={classes.row}>
          <p>Region:</p>
          <span>Finister</span>
        </div>

        <div className={classes.row}>
          <p>Country:</p>
          <span>{user.country}</span>
        </div>

        <div className={classes.row}>
          <p>Postal Code 1:</p>
          <span>29300</span>
        </div>
      </Box>

      <Box title="Phone">
        <div className={classes.row}>
          <p>Phone:</p>
          <span>0723 162 209</span>
        </div>
      </Box>

      <Box title="Email">
        <div className={classes.row}>
          <p>Email address</p>
          <span>{user.email}</span>
        </div>
      </Box>

      <Box title="Company" content>
        <div className={classes.row}>
          <p>Company:</p>
          <span>{user.company}</span>
        </div>

        <div className={classes.row}>
          <p>Address 1:</p>
          <span></span>
        </div>

        <div className={classes.row}>
          <p>Address 2:</p>
          <span></span>
        </div>

        <div className={classes.row}>
          <p>City:</p>
          <span></span>
        </div>

        <div className={classes.row}>
          <p>Region:</p>
          <span></span>
        </div>

        <div className={classes.row}>
          <p>Country:</p>
          <span></span>
        </div>

        <div className={classes.row}>
          <p>Postal Code:</p>
          <span></span>
        </div>
      </Box>

      <Box title="Links" content>
        <div className={classes.row}>
          <p>Link website 1:</p>
          <span>https://www.google.com</span>
        </div>

        <div className={classes.row}>
          <p>Link website 2:</p>
          <span>https://www.google.com</span>
        </div>

        <div className={classes.row}>
          <p>Link website 3:</p>
          <span>https://www.google.com</span>
        </div>
      </Box>

      <Box title="Description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, ut
          similique ab delectus culpa quod suscipit dolorum neque nihil
          molestias, soluta, perspiciatis magni accusantium corporis tempore
          commodi odit sint voluptatem ratione quis optio repudiandae quidem.
          Voluptatibus dolor pariatur, qui exercitationem libero, nam molestias
          rerum dolore minus distinctio, obcaecati natus fugiat quae repudiandae
          maiores ipsa corporis necessitatibus similique laudantium officiis
          sunt.
        </p>
      </Box>
    </div>
  );
};

export default Left;
