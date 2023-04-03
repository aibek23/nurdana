import React from "react";
import { Link,useLocation } from "react-router-dom";

export const Breadcrumb = () => {
    let location = useLocation();
    console.log(location);
  return (
    <div>
            {/* <Link  to={location}>
                ewdewd
               {location}
            </Link> */}
      {/* Link back to any previous steps of the breadcrumb. */}
      {/* {crumbs.forEach(element => {
       <Link  to={element.pathname}>
               {element.pathname}
            </Link>
      })}; */}

    </div>
  );
};
