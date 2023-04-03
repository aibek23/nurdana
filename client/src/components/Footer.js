import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-dark text-center text-white mt-5 " style={{"marginTop":"auto"}}>
      <div className="container p-4">
        <section className="mb-4">
        <div className="btn btn-outline-light btn-floating m-1"><a
                                        href="https://instagram.com/koordinationszentrum?igshid=MDM4ZDc5MmU="
                                        target="_blank" rel="nofollow" style={{"width": "50px","height":"50px"}}><svg
                                            className="t-sociallinks__svg" style={{"width": "50px","height":"50px"}}viewBox="0 0 100 100"
                                            fill="none" xmlns="http://www.w3.org/2000/svg"> 
                                            <path
                                                d="M66.9644 10H33.04C20.3227 10 10 20.3227 10 32.9573V67.1167C10 79.6816 20.3227 90 33.04 90H66.96C79.6816 90 90 79.6816 90 67.0384V32.9616C90.0044 20.3227 79.6816 10 66.9644 10ZM29.2 50.0022C29.2 38.5083 38.5257 29.2 50.0022 29.2C61.4786 29.2 70.8 38.5083 70.8 50.0022C70.8 61.4961 61.4743 70.8 50.0022 70.8C38.5257 70.8 29.2 61.4961 29.2 50.0022ZM72.8854 31.2027C70.2079 31.2027 68.0789 29.0824 68.0789 26.4049C68.0789 23.7273 70.2035 21.6027 72.8854 21.6027C75.5586 21.6027 77.6833 23.7273 77.6833 26.4049C77.6833 29.0824 75.5586 31.2027 72.8854 31.2027Z"
                                                fill="#ffffff" />
                                            <path
                                                d="M50.0022 36.4011C42.4659 36.4011 36.4011 42.4876 36.4011 50.0022C36.4011 57.5124 42.4659 63.6033 50.0022 63.6033C57.5429 63.6033 63.6033 57.5124 63.6033 50.0022C63.6033 42.492 57.4514 36.4011 50.0022 36.4011Z"
                                                fill="#ffffff" />
                                        </svg></a></div>
          <div className="btn btn-outline-light btn-floating m-1"
                                    title="Ссылка на телеграмм канал"><a href="https://t.me/+t1NCevNbWc80MzAy"
                                        target="_blank" rel="nofollow" style={{"width": "50px","height":"50px"}}><svg
                                            //  width=50px height=50px viewBox="0 0 100 100"
                                            style={{"width": "50px","height":"50px"}} viewBox="0 0 100 100"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M83.1797 17.5886C83.1797 17.5886 90.5802 14.7028 89.9635 21.711C89.758 24.5968 87.9079 34.6968 86.4688 45.6214L81.5351 77.9827C81.5351 77.9827 81.124 82.7235 77.4237 83.548C73.7233 84.3724 68.173 80.6623 67.145 79.8378C66.3227 79.2195 51.7273 69.9438 46.5878 65.4092C45.1488 64.1724 43.5042 61.6989 46.7934 58.8132L68.3785 38.201C70.8454 35.7274 73.3122 29.956 63.0336 36.9642L34.2535 56.5459C34.2535 56.5459 30.9644 58.6071 24.7973 56.752L11.4351 52.6295C11.4351 52.6295 6.50135 49.5377 14.9298 46.4457C35.4871 36.7579 60.7724 26.864 83.1797 17.5886Z"
                                                fill="#ffffff" />
                                        </svg></a></div>
                                        <div className="btn btn-outline-light btn-floating m-1"><a
                                        href="https://google.com" target="_blank" rel="nofollow"
                                        style={{"width": "50px","height":"50px"}}><svg className="t-sociallinks__svg" style={{"width": "50px","height":"50px"}} viewBox="0 0 100 100" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M43.3077 14.1204C46.4333 11.1506 50.8581 10.1412 55.0516 10.0244C59.4777 9.98539 63.9037 10.0049 68.3285 10.0049C68.348 14.683 68.348 19.3416 68.3285 24.0197C65.4757 24.0197 62.6021 24.0197 59.7492 24.0197C57.9435 23.9028 56.0805 25.2811 55.7505 27.0868C55.7116 30.2125 55.7311 33.3369 55.7311 36.4625C59.9233 36.482 64.1168 36.4625 68.3091 36.482C67.9986 41.0042 67.436 45.5082 66.7761 49.9732C63.0684 50.0122 59.3608 49.9732 55.6531 49.9927C55.6142 63.3281 55.6726 76.6439 55.6336 89.9805C50.1203 90 44.6276 89.961 39.1142 90C39.0168 76.6646 39.1142 63.3293 39.0558 49.9927C36.377 49.9732 33.6788 50.0122 31 49.9732C31.0195 45.4887 31 41.0054 31 36.5404C33.6788 36.5015 36.377 36.5404 39.0558 36.521C39.1337 32.1728 38.9778 27.8052 39.1337 23.4571C39.4259 19.9833 40.7263 16.5082 43.3077 14.1204Z"
                                                fill="#ffffff" />
                                        </svg></a></div>
        </section>
        <section className="mb-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum</p>
        </section>
        <section className="">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Страницы</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to={"/Courses"} className="text-white">
                    Курсы
                  </Link>
                </li>
                <li>
                  <Link to={"/Grammar"} className="text-white">
                    Грамматика
                  </Link>
                </li>
                <li>
                <Link to={"//AuthPage"} className="text-white">
                      Регистрации
                  </Link>
                </li>
                
              </ul>
            </div>
            {/* <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </section>
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>© 2023 DEUTSCH MIT UNS
  </div>
</div>
</div>
)}