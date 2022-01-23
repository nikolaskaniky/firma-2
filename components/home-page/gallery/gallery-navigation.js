import React from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import classes from "../../../styles/home-page/gallery/gallery.module.scss";

const navigation_array = [
  {
    name: 'Gallery',
    linkTo: '/'
  },

  {
    name: 'Projects',
    linkTo: '/gallery'
  },
]

const GalleryNavigation = (props) => {
  const { styleClass } = props;

  const router = useRouter();
  const location = router.pathname;

  return (
    <div className={`${classes.navigation} ${styleClass}`}>
      {navigation_array.map((item, index) => (
        <Link href={item.linkTo} key={index}>
          <a className={location === item.linkTo ? classes.active : undefined}>
            {item.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default GalleryNavigation;
