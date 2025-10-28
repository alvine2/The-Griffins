const FAQData = [
  {
    question: "How do I place an order on your website?",
    answer: [
      "Simply browse our products, add your favorite items to the cart, and proceed to checkout.",
      "Fill in the required details such as shipping address and payment information.",
      "Click 'Place Order' to complete your purchase.",
    ],
  },
  {
    question: "Are all your products brand new and original?",
    answer: [
      "Yes, all items sold on The Griffins are 100% genuine, brand new, and sourced directly from trusted manufacturers and distributors.",
      "If you have any concerns about the authenticity of a product, please contact our customer support for assistance.",
    ],
  },
  {
    question: "Do you offer product warranties?",
    answer: [
      "Absolutely. Most of our electronics come with a manufacturer’s warranty. Warranty details are listed on each product page.",
      "If you have any questions about the warranty or need assistance with a warranty claim, please contact our customer support team.",
    ],
  },
  {
    question: "Can I request a product that is not listed on your website?",
    answer: [
      "Yes. You can contact our support team with product details, and we’ll try to source it for you.",
      "When creating or editing a task, you will find an option to set a reminder or due date notification.",
      "Choose the desired time or date for the reminder, and you will receive a notification or email at the specified time to remind you about the task.",
    ],
  },
];

const FAQContainer = document.querySelector(".faq-container");

const removeAllExpanded = () => {
  const questionContainers = document.querySelectorAll(
    ".faq-container .question-container"
  );

  questionContainers.forEach((q) => {
    q.classList.remove("expanded");
    const answerContainer = q.querySelector(".answer-container");
    answerContainer.style.maxHeight = "0";
  });
};

const displayFAQ = () => {
  FAQData.forEach((q) => {
    const answerHTML = q.answer
      .map(
        (a) => `<div class="answer">
        <span class="answer-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        ${a}
      </div>`
      )
      .join("");

    const html = `<div class="question">
          ${q.question}
          <span class="question-icon"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>

        <div class="answer-container">
          ${answerHTML}
        </div>`;

    const questionContainer = document.createElement("div");
    questionContainer.classList.add("question-container");
    questionContainer.innerHTML = html;

    FAQContainer.appendChild(questionContainer);

    const question = questionContainer.querySelector(".question");

    question.addEventListener("click", () => {
      if (!questionContainer.classList.contains("expanded")) {
        removeAllExpanded();
      }

      questionContainer.classList.toggle("expanded");
      const isExpanded = questionContainer.classList.contains("expanded");

      const answerContainer =
        questionContainer.querySelector(".answer-container");
      const contentHeight = answerContainer.scrollHeight;
      answerContainer.style.maxHeight = isExpanded ? `${contentHeight}px` : "0";
    });
  });
};

displayFAQ();
