import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";

interface Props {
  contactData: any;
  onContactPress: (item: any) => void;
}

const ContactItem: React.FC<Props> = ({ contactData, onContactPress }) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center my-3">
        <div
          className="d-flex align-items-center"
          onClick={() => onContactPress(contactData)}
        >
          <AiFillCheckCircle
            className="contact-select-icon"
            style={{ color: !contactData.isSelected ? "gray" : "#00a392" }}
          />
          <div>
            <div className="contact-items-container">
              <img
                className="contact-image"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
              <div>
                <p className="m-0 contact-name">{contactData?.name}</p>
                <p className="m-0 contact-number">{contactData?.phoneNumber}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <BsFillPlusCircleFill className="small-add-icon" onClick={() => {}} />
        </div>
      </div>
    </>
  );
};

export default ContactItem;
