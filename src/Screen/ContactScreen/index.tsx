import React, { useState, useEffect, useContext } from "react";
import { Sidebar, ContactList } from "../../Components";
import {
  getContactList,
  getContactImage,
  updateContact,
} from "../../Action/ContactAction";
import { getAccessToken } from "../../Action/AuthAction";
import { ContactContext } from "../../Context/ContactContext";
import { AuthContext } from "../../Context/AuthContext";

const ContactScreen = () => {
  const { contactList, storeContactList, size } =
    useContext<any>(ContactContext);
  const { storeAccessToken } = useContext<any>(AuthContext);
  const [isSidebar, setIsSidebar] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [conatctListData, setContactListData] = useState<any | []>([]);

  const getParticularContactImage = (id: number) => {
    getContactImage(id)
      .then((res: any) => {
        storeAccessToken(res);
        return res;
      })
      .catch(() => {
        return null;
      });
  };

  const updatePatricularContact = () => {
    updateContact("123")
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return e;
      });
  };

  const getRefreshToken = () => {
    getAccessToken()
      .then((res: any) => {
        const getRefreshToken = res?.data?.access_token;
        if (getRefreshToken) {
          localStorage.setItem("tokenId", getRefreshToken);
        }
      })
      .catch((err: any) => {});
  };

  const getContactListData = () => {
    getContactList()
      .then((res: any) => {
        if (res?.data?.contacts?.length > 0) {
          const data = res?.data?.contacts?.map((item: any) => {
            return {
              ...item,
              isSelected: false,
              contactImage: getParticularContactImage(item?.id),
            };
          });
          storeContactList(data);
          setContactListData(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };

  useEffect(() => {
    getRefreshToken();
    getContactListData();
    updatePatricularContact();
  }, []);

  const handleConatctSelection = (item: any) => {
    let conatct = [...contactList];
    const index = conatct?.findIndex((cItem: any) => cItem?.id === item?.id);
    conatct[index] = {
      ...conatct[index],
      isSelected: !conatct[index]?.isSelected,
    };
    storeContactList(conatct);
  };

  const onSelectAllContact = (isSelecAll: boolean) => {
    let conatct = [...contactList];

    const data = conatct?.map((cItem: any) => {
      return {
        ...cItem,
        isSelected: !isSelecAll,
      };
    });
    storeContactList(data);
  };

  const onSearch = (searchText: string) => {
    const data = conatctListData?.filter((cItem: any) => {
      return (
        cItem?.name?.toLowerCase().indexOf(searchText?.toLowerCase()) !== -1 ||
        cItem?.phoneNumber?.toLowerCase().indexOf(searchText?.toLowerCase()) !==
          -1
      );
    });
    storeContactList(data);
  };

  return (
    <div>
      <div className="d-flex">
        <div
          className={
            isSidebar ? "sidebar-containerOpen" : "sidebar-containerClose"
          }
        >
          <Sidebar
            onMenuPress={() => {
              setIsSidebar(!isSidebar);
            }}
          />
        </div>

        {size <= "700" ? (
          !isSidebar && (
            <div className="contact-container">
              <ContactList
                isSidebarVisible={isSidebar}
                onMenuPress={() => {
                  setIsSidebar(!isSidebar);
                }}
                onContactPress={(item) => {
                  handleConatctSelection(item);
                }}
                onSelectAll={(item) => onSelectAllContact(item)}
                onChange={(item) => {
                  onSearch(item);
                }}
                isLoading={isLoading}
              />
            </div>
          )
        ) : (
          <div style={{ width: isSidebar ? "75%" : "100%" }}>
            <ContactList
              isSidebarVisible={isSidebar}
              onMenuPress={() => {
                setIsSidebar(!isSidebar);
              }}
              onContactPress={(item) => {
                handleConatctSelection(item);
              }}
              onSelectAll={(item) => onSelectAllContact(item)}
              onChange={(item) => {
                onSearch(item);
              }}
              isLoading={isLoading}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactScreen;
