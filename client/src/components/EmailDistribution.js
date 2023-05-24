import React,{useEffect , useContext ,useCallback , useState} from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHttp } from "../hooks/http.hook";
import { Context } from "../context/Context";

const EmailDistribution = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { request } = useHttp();
    const { token } = useContext(Context);
    const handleSubmit = useCallback(async (e) => {
      e.preventDefault();
      setIsLoading(true); // Установите состояние загрузки в true перед отправкой запроса
      try {
        const data = await request("/api/sendBulkEmails", "POST", {subject, message}, {
          Authorization: `Bearer ${token}`,
        });
        console.log(data);
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
      } finally {
        setIsLoading(false); // Установите состояние загрузки в false после завершения запроса (в блоке finally)
      }
    }, [request, subject, message, token]);


  return (
    <div className="container  bg-light rounded-lg p-3">
      <h2>Рассылка по электронной почте</h2>
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
          <label htmlFor="subject" className="form-label">Тема</label>
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
          <label htmlFor="message" className="form-label"> Сообщение</label>
          <textarea
            className="form-control"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{"height": "350px"}}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mr-5" disabled={isLoading}>
        {isLoading ? "Отправка..." : "Отправить"}
      </button>
      <button className="btn btn-danger" type="button" onClick={() => {setSubject(""); setMessage("");}}>
        Стереть
      </button>
      </form>
    </div>
  );
};

export default EmailDistribution;