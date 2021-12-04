import React, { createContext, useState, useEffect } from "react";

interface ContactContextProps {
  children: any;
}

export const ContactContext = createContext({});

export const ContactContextProvider = (props: ContactContextProps) => {
  const { children } = props;
  const [contactList, setContactList] = useState<unknown | []>();
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  const storeContactList = (contactData: any) => {
    setContactList(contactData);
  };

  const value = {
    contactList,
    storeContactList,
    size,
  };

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
};
