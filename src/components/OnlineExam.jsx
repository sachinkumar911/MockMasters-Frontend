import React, { useState } from "react";

const OnlineExam = () => {
  const subjects = ["Math", "Science", "History"];
  const questions = [
    {
      id: 1,
      subject: "Math",
      content: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    {
      id: 2,
      subject: "Science",
      content: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    // Add more questions for other subjects
  ];

  const [currentSubject, setCurrentSubject] = useState(subjects[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleSubjectChange = (subject) => {
    setCurrentSubject(subject);
    setCurrentQuestionIndex(0);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Submitting answers...");
    // Implement your submission logic here
  };

  const currentQuestion = questions.find(
    (q) => q.subject === currentSubject && q.id === currentQuestionIndex + 1
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Online Exam</h1>

      <div className="flex">
        <div className="w-1/4 pr-4">
          <h2 className="text-2xl mb-2">Subjects</h2>
          <ul>
            {subjects.map((subject) => (
              <li
                key={subject}
                className={`cursor-pointer hover:text-blue-500 ${
                  currentSubject === subject && "text-blue-500"
                }`}
                onClick={() => handleSubjectChange(subject)}
              >
                {subject}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-1/2">
          <h2 className="text-2xl mb-2">
            {currentSubject} - Question {currentQuestionIndex + 1}
          </h2>
          {currentQuestion && (
            <div>
              <p>{currentQuestion.content}</p>
              <ul>
                {currentQuestion.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex === questions.length - 1}
            >
              Next
            </button>
          </div>
        </div>

        <div className="w-1/4 pl-4">
          <h2 className="text-2xl mb-2">All Questions</h2>
          <ul>
            {questions
              .filter((q) => q.subject === currentSubject)
              .map((q) => (
                <li
                  key={q.id}
                  className={`cursor-pointer hover:text-blue-500 ${
                    currentQuestionIndex === q.id - 1 && "text-blue-500"
                  }`}
                  onClick={() => setCurrentQuestionIndex(q.id - 1)}
                >
                  {q.id}
                </li>
              ))}
          </ul>
          <button
            className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineExam;
