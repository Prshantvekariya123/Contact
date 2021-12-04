import React from "react";
import {
  SidebarHeader,
  SidebarMenuList,
  MessageStatus,
} from "..";

interface Props{
  onMenuPress :  () => void;
 }


const Sidebar : React.FC<Props> = ({ onMenuPress }) => {
  return (
    <div className="sidebar">
      <SidebarHeader onMenuPress={() => onMenuPress()} />
      <SidebarMenuList title="Include Tags:" />
      <SidebarMenuList title="Exclude Tags:" />
      <MessageStatus title="Message Sent:" />
      <MessageStatus title="Message Recieved:" />
      <button className="sidebar-button">Save Filters</button>
    </div>
  );
};

export default Sidebar;
