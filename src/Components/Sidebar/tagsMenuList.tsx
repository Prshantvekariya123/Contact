import React from "react";
import {AiFillCheckCircle} from "react-icons/ai"

interface Props{
  title: string
}


const SidebarMenuList  : React.FC<Props> = ({ title }) => {
  return (
    <>
      <h3 className="sidebar-heading" style={{ fontSize: "20px" }}>
        {title}
      </h3>
      <ul className="sidebar-ul">
        <li>
          <p className="text-secondary m-0">Greeting</p>
          <p className="icon">
            <AiFillCheckCircle />
          </p>
        </li>
        <li>
          <p className="text-secondary m-0">Greeting</p>
          <p className="icon">
            <AiFillCheckCircle />
          </p>
        </li>
        <li>
          <p className="text-secondary m-0">Greeting</p>
          <p className="icon">
            <AiFillCheckCircle />
          </p>
        </li>
        <li>
          <p className="text-secondary m-0">Greeting</p>
          <p className="icon">
            <AiFillCheckCircle />
          </p>
        </li>
      </ul>
    </>
  );
};

export default SidebarMenuList;
