import React, { useState } from "react";
import Footer from "../../components/Footer";

function MathProblem({ question, answers, correctAnswer }) {
  const [droppedAnswers, setDroppedAnswers] = useState([]);
  const [additionalBoxes, setAdditionalBoxes] = useState([]);
  const [feedback, setFeedback] = useState("");

  const handleDrop = (event, type, index = null) => {
    event.preventDefault();
    const newAnswer = event.dataTransfer.getData("text/plain");

    if (type === "main") {
      if (!droppedAnswers.includes(newAnswer)) {
        setDroppedAnswers((prev) => [...prev, newAnswer]);
      }
    } else if (type === "additional") {
      setAdditionalBoxes((prev) =>
        prev.map((item, i) =>
          i === index ? (item ? item : newAnswer) : item
        )
      );
    }
  };

  const clearDroppedAnswers = () => setDroppedAnswers([]);
  const clearAdditionalBoxes = () => setAdditionalBoxes([]);

  const addBox = () => setAdditionalBoxes((prev) => [...prev, ""]);

  const handleSubmit = () => {
    const allAnswers = [
      ...droppedAnswers,
      ...additionalBoxes.filter((ans) => ans !== ""),
    ];
    const isCorrect = allAnswers.includes(correctAnswer);
    setFeedback(
      isCorrect ? "✅ Correct! Well done!" : "❌ Incorrect. Try again!"
    );
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow flex flex-col gap-4">
      <h2 className="text-lg font-semibold">{question}</h2>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Drop Zones */}
        <div className="flex flex-col gap-3 flex-grow">
          <div className="flex gap-2 items-center">
            {[...Array(1)].map((_, index) => (
              <div
                key={index}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, "main")}
                className="h-16 flex-1 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg bg-gray-100"
              >
                {droppedAnswers[index] || "Drop here"}
              </div>
            ))}
            <button
              onClick={clearDroppedAnswers}
              className="px-2 py-2 bg-red-500 text-white rounded text-xs"
            >
              ✕
            </button>
          </div>

          {/* Additional drop zones */}
          <div className="flex flex-col gap-2">
            {additionalBoxes.map((answer, index) => (
              <div
                key={index}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, "additional", index)}
                className="h-16 w-full flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg bg-gray-100"
              >
                {answer || "Drop here"}
              </div>
            ))}

            <div className="flex gap-2 items-center">
              <button
                onClick={addBox}
                className="px-3 py-2 bg-blue-500 text-white rounded text-sm"
              >
                + Add Box
              </button>
              <button
                onClick={clearAdditionalBoxes}
                className="px-2 py-2 bg-red-500 text-white rounded text-xs"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Submit Button & Feedback */}
          <button
            onClick={handleSubmit}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
          >
            Submit Answer
          </button>
          {feedback && (
            <div
              className={`mt-2 p-2 rounded ${
                feedback.includes("✅")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {feedback}
            </div>
          )}
        </div>

        {/* Draggable Choices */}
        <div className="flex flex-col gap-2 w-full md:w-60">
          {answers.map((answer, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => e.dataTransfer.setData("text/plain", answer)}
              className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 text-center"
            >
              {answer}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Operation() {
  const sampleProblems = [
    {
      question: "Find the domain of f(x) = 1 / (x - 3)",
      answers: ["x ≠ 3", "x ≥ 3", "x ≤ 3", "All real numbers"],
      correctAnswer: "x ≠ 3",
    },
    {
      question: "Determine the range of f(x) = x² - 4",
      answers: ["y ≥ -4", "y ≤ -4", "All real numbers", "y ≠ -4"],
      correctAnswer: "y ≥ -4",
    },
    {
      question: "What is the inverse of f(x) = 2x + 5?",
      answers: ["(x - 5) / 2", "2x - 5", "(x + 5) / 2", "x / 2 - 5"],
      correctAnswer: "(x - 5) / 2",
    },
    {
      question: "If f(x) = 3x - 7, find f(4).",
      answers: ["5", "3", "7", "9"],
      correctAnswer: "5",
    },
    {
      question:
        "Determine whether f(x) = x³ + x is an even, odd, or neither function.",
      answers: ["Odd", "Even", "Neither", "Both"],
      correctAnswer: "Odd",
    },
    {
      question: "Solve for x in f(x) = x² - 5x + 6 when f(x) = 0.",
      answers: ["x = 2, x = 3", "x = -2, x = -3", "x = 1, x = 6", "x = 0, x = 5"],
      correctAnswer: "x = 2, x = 3",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Operations on Functions
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <p className="text-gray-700">
            In this lesson, you will learn how to perform operations on
            functions such as addition, subtraction, multiplication, and
            division.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Addition:</strong> (f + g)(x) = f(x) + g(x)
            </li>
            <li>
              <strong>Subtraction:</strong> (f - g)(x) = f(x) - g(x)
            </li>
            <li>
              <strong>Multiplication:</strong> (f × g)(x) = f(x) × g(x)
            </li>
            <li>
              <strong>Division:</strong> (f ÷ g)(x) = f(x) ÷ g(x), where g(x) ≠
              0
            </li>
          </ul>

          <p className="text-gray-700">
            Try solving some examples below and test your understanding.
          </p>
        </div>

        <div className="space-y-8">
          {sampleProblems.map((problem, index) => (
            <MathProblem
              key={index}
              question={problem.question}
              answers={problem.answers}
              correctAnswer={problem.correctAnswer}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Operation;
