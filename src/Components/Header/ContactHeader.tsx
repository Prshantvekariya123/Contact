import React, { useContext } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import { ContactContext } from "../../Context/ContactContext";

interface Props {
  onMenuPress: () => void;
  onChange: (item: string) => void;
  isSidebarVisible: boolean;
}

const ContactHeader: React.FC<Props> = ({
  onMenuPress,
  isSidebarVisible,
  onChange,
}) => {
  const { contactList } = useContext<any>(ContactContext);
  return (
    <>
      <div className="header-content">
        <div className="contact-header">
          {!isSidebarVisible && (
            <p className="m-0 p-0">
              <CgMenuRight
                className="menu-icon"
                style={{ fontSize: "25px" }}
                onClick={() => onMenuPress()}
              />
            </p>
          )}
          <h2 className="m-0 p-0 header-heading">
            All Contacts{`(${contactList?.length || 0})`}
          </h2>
          <p className="m-0 p-0">
            <BsFillPlusCircleFill className="big-add-icon" />
          </p>
        </div>
        <div className="header-input-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            className="contact-header-input"
            name=""
            placeholder="Search Contacts"
            id=""
            onChange={(e) => onChange(e?.target?.value)}
          />
        </div>
      </div>
    </>
  );
};

export default ContactHeader;
