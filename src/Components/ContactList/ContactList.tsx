import React, { useContext, useState } from "react";
import { ContactHeader, ContactItem } from "..";
import { AiFillCheckCircle } from "react-icons/ai";
import { ContactContext } from "../../Context/ContactContext";

interface Props {
  onMenuPress: () => void;
  onSelectAll: (item: boolean) => void;
  onContactPress: (item: any) => void;
  onChange: (item: string) => void;
  isSidebarVisible: boolean;
  isLoading: boolean;
}

const ContactList: React.FC<Props> = ({
  onMenuPress,
  isSidebarVisible,
  isLoading,
  onContactPress,
  onSelectAll,
  onChange,
}) => {
  const [isSelectAll, setIsSelectAll] = useState(false);
  const { contactList } = useContext<unknown | any>(ContactContext);

  return (
    <div className="CONTACT-LIST-CONTENT">
      <ContactHeader
        isSidebarVisible={isSidebarVisible}
        onMenuPress={() => onMenuPress()}
        onChange={(item) => onChange(item)}
      />
      <div className="d-flex align-items-center justify-content-between">
        <div
          className="d-flex align-items-center"
          onClick={() => {
            onSelectAll(isSelectAll);
            setIsSelectAll(!isSelectAll);
          }}
        >
          <AiFillCheckCircle
            className="contact-select-icon"
            style={{ color: isSelectAll ? "#00a392" : "gray" }}
          />
          <h6 className="mb-0 p-0 contact-heading">Select All</h6>
        </div>
        <button className="export-all-button">Export All</button>
      </div>

      {isLoading ? (
        <div>
          <div id="ball">
            <div id="ball1" className="balls"></div>
            <div id="ball2" className="balls"></div>
            <div id="ball3" className="balls"></div>
          </div>
        </div>
      ) : (
        <div className="contact-items-scroll">
          {contactList?.map((item: any) => {
            return (
              <ContactItem
                contactData={item}
                onContactPress={(item) => onContactPress(item)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ContactList;
