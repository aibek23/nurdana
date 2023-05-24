import React, { useState, useContext, useCallback, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";
import { Context } from "../context/Context";
import EmailDistribution from "../components/EmailDistribution";
import EmailForm from "../components/EmailForm";
import UserList from "../components/UserList";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AdminPanel = () => {
  const { request } = useHttp();
  const { token } = useContext(Context);

  const [email, SetEmail] = useState("")
  const [activeComponent, setActiveComponent] = useState("emailForm");

  // const fetchLinks = useCallback(async () => {
  //   try {
  //     const fetched = await request("/api/user/all", "GET", null, {
  //       Authorization: `Bearer ${token}`,
  //     });
  //     setData(fetched);
  //   } catch (error) {
  //     toast.error(`${error}`, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }
  // }, [token, request]);

  // useEffect(() => {
  //   fetchLinks();
  // }, [fetchLinks]);
  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };
  const emailFormId =  (id) => {
    // e.preventDefault();
    console.log(id);
      SetEmail(id)
      setActiveComponent("emailForm");
  };
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "emailDistribution":
        return <EmailDistribution />;
      case "emailForm":
        return <EmailForm email={email}/>;
      case "userList":
        return <UserList  emailFormId={emailFormId} />;
      default:
        return <EmailDistribution />;
    }
  };


  return (
    <div className="container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="row mt-3">
        <div className="col-lg-3 bg-light rounded-lg pt-3">
          <button
            className={`btn ${
              activeComponent === "emailForm"
                ? "btn-primary"
                : "btn-outline-primary"
            } btn-lg btn-block`}
            onClick={() => handleComponentChange("emailForm")}
          >
            Контактный email
          </button>
          <button
            className={`btn ${
              activeComponent === "emailDistribution"
                ? "btn-primary"
                : "btn-outline-primary"
            } btn-lg btn-block`}
            onClick={() => handleComponentChange("emailDistribution")}
          >
            Отправить всем
          </button>
          <button
            className={`btn ${
              activeComponent === "userList"
                ? "btn-primary"
                : "btn-outline-primary"
            } btn-lg btn-block`}
            onClick={() => handleComponentChange("userList")}
          >
            Пользователи
          </button>
        </div>
        <div className="col-lg-9">{renderActiveComponent()}</div>
      </div>
    </div>
  );
};
