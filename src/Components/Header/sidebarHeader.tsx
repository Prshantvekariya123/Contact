import React, { useContext } from "react";
import { CgMenuRight } from "react-icons/cg";
import { ContactContext } from "../../Context/ContactContext";

interface Props {
  onMenuPress: () => void;
}

const SidebarHeader: React.FC<Props> = ({ onMenuPress }) => {
  const { contactList } = useContext<any>(ContactContext);
  return (
    <>
      <div className="sidebar-header">
        <div>
          <p className="m-0 p-0">
            <CgMenuRight
              className="menu-icon"
              style={{ fontSize: "25px" }}
              onClick={() => onMenuPress()}
            />
          </p>
          <h3 className="header-heading">&nbsp;&nbsp;Audience</h3>
        </div>
        <p className="m-0 p-0">{contactList?.length || 0} Contacts</p>
      </div>
    </>
  );
};

export default SidebarHeader;
