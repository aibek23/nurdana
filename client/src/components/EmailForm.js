import React,{useEffect , useContext ,useCallback , useState} from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHttp } from "../hooks/http.hook";
import { Context } from "../context/Context";

const EmaliForm = (props) =>{
    const [email, setEmail] = useState(props.email);
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const { request } = useHttp();
    const { token } = useContext(Context);
    const handleSubmit =  useCallback(async (e) => {
      e.preventDefault();
      try {
       const data = await request("/api/send-email", "POST", {email,subject,message}, {
          Authorization: `Bearer ${token}`,
        });
        toast.info(`${data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

       
      } catch (error) {
        toast.error(`${error}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
    
    // useEffect(() => {
    //   fetchLinks();
    // }, [fetchLinks]);
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // Отправка данных на сервер или другая логика обработки формы
    // };
    return(
        <div className="container  bg-light rounded-lg p-3">
        <h2>Отправить письмо</h2>
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
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email получателя
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Тема
            </label>
            <input
              type="text"
              className="form-control"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Сообщение
            </label>
            <textarea
              className="form-control"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{"height": "250px"}}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mr-5">
            Отправить
          </button>
          <button className="btn btn-danger">стереть</button>
        </form>
      </div>
    )
}

export default EmaliForm;