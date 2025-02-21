import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../firebase/firebase";
import UserModel from "../models/user/UserModel";
import GroupModel from "../models/group/GroupModel";
import { useNavigate } from "react-router-dom";
import EventModel from "../models/events/EventModel";

const NavBar = ({ setUpdateFeed, updateFeed }) => {
  const toPage = useNavigate();
  const { dispatch, currentUser } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [showGroup, setShowGroup] = useState(false);
  const [showEvent, setShowEvent] = useState(false);

  const isAdmin = currentUser.user.role === "admin";

  const handleLogout = async () => {
    await auth.signOut();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="mr-4" onClick={() => toPage("/")}>
              <img src="/logo.svg" width={70} alt="Logo" />
            </div>

    
          </div>

          <div className="flex items-center gap-7 md:gap-4">
      




            <button className="flex items-center gap-2" onClick={handleLogout}>
              <span className="hidden md:block mr-1">تسجيل الخروج</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <UserModel isShow={show} setShow={setShow} />
      <GroupModel
        isShow={showGroup}
        setShow={setShowGroup}
        setUpdateFeed={setUpdateFeed}
        updateFeed={updateFeed}
      />

<EventModel
        isShow={showEvent}
        setShow={setShowEvent}
        setUpdateFeed={setUpdateFeed}
        updateFeed={updateFeed}
      />
    </>
  );
};

export default NavBar;
