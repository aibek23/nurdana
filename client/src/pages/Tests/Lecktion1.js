import React, { useState } from "react";
const Lecktion1 = () => {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });
  const [answer, setAnswer] = useState({
    span1: "___",
    color1: "",
    trueAnswer1: "ist",
    span2: "___",
    color2: "",
    trueAnswer2: "Gut, und dir?",
    span3: "___",
    color3: "",
    trueAnswer3: "sprichst",
    span4: "___",
    color4: "",
    trueAnswer4: "ist",
    span5: "___",
    color5: "",
    trueAnswer5: "Deutsch",
  });
  const [score, setScore] = useState(0);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Проверка ответов и определение уровня языка
    const { question1, question2, question3, question4, question5 } = answers;

    // Реализуйте свою логику для определения уровня языка на основе ответов
    const updatedAnswer = { ...answer };
    if (question1 !== answer.trueAnswer1) {
      updatedAnswer.color1 = "red";
      updatedAnswer.span1 = question1;
      setAnswer(updatedAnswer);
    } else {
      updatedAnswer.color1 = "#75AD73FF";
      setAnswer(updatedAnswer);
      setScore(score + 1);
    }
    if (question2 !== answer.trueAnswer2) {
      updatedAnswer.color2 = "red";
      updatedAnswer.span2 = question2;
      setAnswer(updatedAnswer);
    } else {
      updatedAnswer.color2 = "#75AD73FF";
      setAnswer(updatedAnswer);
      setScore(score + 1);
    }
    if (question3 !== answer.trueAnswer3) {
      updatedAnswer.color3 = "red";
      updatedAnswer.span3 = question3;
      setAnswer(updatedAnswer);
    } else {
      updatedAnswer.color3 = "#75AD73FF";
      setAnswer(updatedAnswer);
      setScore(score + 1);
    }
    if (question4 !== answer.trueAnswer4) {
      updatedAnswer.color4 = "red";
      updatedAnswer.span4 = question4;
      setAnswer(updatedAnswer);
    } else {
      updatedAnswer.color4 = "#75AD73FF";
      setAnswer(updatedAnswer);
      setScore(score + 1);
    }
    if (question5 !== answer.trueAnswer5) {
      updatedAnswer.color5 = "red";
      updatedAnswer.span5 = question5;
      setAnswer(updatedAnswer);
    } else {
      updatedAnswer.color5 = "#75AD73FF";
      setAnswer(updatedAnswer);
      setScore(score + 1);
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center">
        {score}
        <div>
          <form onSubmit={handleFormSubmit} className="mt-5">
            <h2 className="m-5">
              1. Guten Tag, mein Name{" "}
              {!answer.color1 ? (
                <span style={{ backgroundColor: answer.color1 }}>
                  {answer.span1}
                </span>
              ) : (
                ""
              )}{" "}
              {answer.color1 === "red" ? (
                <span style={{ position: "relative" }}>
                  {
                    <span
                      style={{
                        position: "absolute",
                        bottom: "35px",
                        padding: "5px",
                        color: "#75AD73FF",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      {answer.trueAnswer1}{" "}
                    </span>
                  }
                  <span
                    style={{ backgroundColor: answer.color1, padding: "3px" }}
                  >
                    {answer.span1}
                  </span>
                </span>
              ) : answer.color1 === "#75AD73FF" ? (
                <span
                  style={{ backgroundColor: answer.color1, padding: "3px" }}
                >
                  {" "}
                  {answers.question1}{" "}
                </span>
              ) : (
                ""
              )}
              Peter
            </h2>
            <ul>
              <li>heiße</li>
              <li>heißt</li>
              <li>ist</li>
            </ul>
            <label className="d-flex font-weight-bold">
              1)
              <input
                className="form-control ml-3"
                type="text"
                name="question1"
                value={answers.question1}
                onChange={handleInputChange}
              />
            </label>
            <h2 className="m-5">
              2. Wie geht es Ihnen?{" "}
              {!answer.color2 ? (
                <span style={{ backgroundColor: answer.color2 }}>
                  {answer.span2}
                </span>
              ) : (
                ""
              )}{" "}
              {answer.color2 === "red" ? (
                <span style={{ position: "relative" }}>
                  {
                    <p
                      style={{
                        position: "",
                        bottom: "35px",
                        padding: "3px",
                        color: "#75AD73FF",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      {answer.trueAnswer2}{" "}
                    </p>
                  }
                  <span
                    style={{ backgroundColor: answer.color2, padding: "3px" }}
                  >
                    {answer.span2}
                  </span>
                </span>
              ) : answer.color2 === "#75AD73FF" ? (
                <span
                  style={{ backgroundColor: answer.color2, padding: "3px" }}
                >
                  {" "}
                  {answers.question2}{" "}
                </span>
              ) : (
                ""
              )}
            </h2>
            <ul>
              <li>Bitte schön.</li>
              <li>Ich gehe gut.</li>
              <li>Gut, und dir?</li>
            </ul>
            <label className="d-flex font-weight-bold">
              2)
              <input
                className="form-control ml-3 "
                type="text"
                name="question2"
                value={answers.question2}
                onChange={handleInputChange}
              />
            </label>
            <h2 className="m-5">
              3. Welche Sprachen{" "}
              {!answer.color3 ? (
                <span style={{ backgroundColor: answer.color3 }}>
                  {answer.span3}
                </span>
              ) : (
                ""
              )}{" "}
              {answer.color3 === "red" ? (
                <span style={{ position: "relative" }}>
                  {
                    <span
                      style={{
                        position: "absolute",
                        bottom: "35px",
                        padding: "3px",
                        color: "#75AD73FF",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      {answer.trueAnswer3}{" "}
                    </span>
                  }
                  <span
                    style={{ backgroundColor: answer.color3, padding: "3px" }}
                  >
                    {answer.span3}
                  </span>
                </span>
              ) : answer.color3 === "#75AD73FF" ? (
                <span
                  style={{ backgroundColor: answer.color3, padding: "3px" }}
                >
                  {" "}
                  {answers.question3}{" "}
                </span>
              ) : (
                ""
              )}{" "}
              du?
            </h2>
            <ul>
              <li>spricht</li>
              <li>sprichst</li>
              <li>sprecht</li>
            </ul>
            <label className="d-flex font-weight-bold">
              3)
              <input
                className="form-control ml-3"
                type="text"
                name="question3"
                value={answers.question3}
                onChange={handleInputChange}
              />
            </label>
            <h2 className="m-5">
              4. Peter{" "}
              {!answer.color4 ? (
                <span style={{ backgroundColor: answer.color4 }}>
                  {answer.span3}
                </span>
              ) : (
                ""
              )}{" "}
              {answer.color4 === "red" ? (
                <span style={{ position: "relative" }}>
                  {
                    <span
                      style={{
                        position: "absolute",
                        bottom: "35px",
                        padding: "3px",
                        color: "#75AD73FF",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      {answer.trueAnswer4}{" "}
                    </span>
                  }
                  <span
                    style={{ backgroundColor: answer.color4, padding: "3px" }}
                  >
                    {answer.span4}
                  </span>
                </span>
              ) : answer.color4 === "#75AD73FF" ? (
                <span
                  style={{ backgroundColor: answer.color4, padding: "3px" }}
                >
                  {" "}
                  {answers.question4}{" "}
                </span>
              ) : (
                ""
              )}{" "}
              drei Jahre alt.
            </h2>
            <ul>
              <li>sind</li>
              <li>ist</li>
              <li>hast</li>
            </ul>

            <label className="d-flex font-weight-bold">
              4)
              <input
                className="form-control ml-3"
                type="text"
                name="question4"
                value={answers.question4}
                onChange={handleInputChange}
              />
            </label>
            <h2 className="m-5">
              5. Ich spreche{" "}
              {!answer.color5 ? (
                <span style={{ backgroundColor: answer.color5 }}>
                  {answer.span5}
                </span>
              ) : (
                ""
              )}{" "}
              {answer.color5 === "red" ? (
                <span style={{ position: "relative" }}>
                  {
                    <span
                      style={{
                        position: "absolute",
                        bottom: "35px",
                        padding: "3px",
                        color: "#75AD73FF",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      {answer.trueAnswer5}{" "}
                    </span>
                  }
                  <span
                    style={{ backgroundColor: answer.color5, padding: "3px" }}
                  >
                    {answer.span5}
                  </span>
                </span>
              ) : answer.color5 === "#75AD73FF" ? (
                <span
                  style={{ backgroundColor: answer.color5, padding: "3px" }}
                >
                  {" "}
                  {answers.question5}{" "}
                </span>
              ) : (
                ""
              )}
              .
            </h2>
            <ul>
              <li>Nicht</li>
              <li>Wohne</li>
              <li>Kaputt</li>
            </ul>
            <label className="d-flex font-weight-bold">
              5)
              <input
                className="form-control ml-3"
                type="text"
                name="question5"
                value={answers.question5}
                onChange={handleInputChange}
              />
            </label>
            <p className="mt-3">
              <button type="submit" className="btn btn-primary">
                Определить уровень
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Lecktion1;
