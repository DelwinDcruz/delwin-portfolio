
"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import "./PortfolioChatbot.css";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
};

const initialQuestions = [
  "Tell me about Delwin",
  "What are his technical skills?",
  "Show me his projects",
  "Tell me about his experience",
  "What is his education?",
  "How can I contact him?",
];

const answers: {
  keywords: string[];
  answer: string;
  suggestions: string[];
}[] = [
  {
    keywords: ["who are you", "about delwin", "about yourself", "introduce", "tell me about delwin"],
    answer:
      "Delwin D'Cruz is a developer with a B.Tech in Electrical and Electronics Engineering and a strong interest in software development. He works with Java, Spring Boot, React, Next.js, and related web technologies. Explore the portfolio to learn more about his work!",
    suggestions: [
      "What are his technical skills?",
      "Show me his projects",
      "Tell me about his education",
    ],
  },
  {
    keywords: ["skill", "technology", "tech stack", "programming language", "java", "react", "spring boot", "database"],
    answer:
      "Delwin's technical skills include Java, Spring Boot, Spring MVC, Hibernate, JDBC, SQL/MySQL, HTML, CSS, JavaScript, React.js, Next.js, REST APIs, Git, and GitHub. His experience varies by technology and project.",
    suggestions: [
      "Show me his projects",
      "Tell me about his experience",
      "What is his education?",
    ],
  },
  {
    keywords: ["project", "projects", "github", "built", "portfolio work"],
    answer:
      "Delwin has worked on projects involving web development, Java applications, and full-stack development. Examples include a Bank Management System, a Movie Booking application, and a portfolio website. Visit the Projects section of this portfolio for the available project details and source links.",
    suggestions: [
      "What technologies does he use?",
      "Tell me about his experience",
      "Open GitHub",
    ],
  },
  {
    keywords: ["experience", "work", "job", "internship", "portfolix", "inmakes"],
    answer:
      "Delwin has development experience associated with Portfolix Tech and Java development training/internship experience with Inmakes Infotech. His portfolio highlights his work with modern web technologies and application development.",
    suggestions: [
      "What are his technical skills?",
      "Show me his projects",
      "Is he available for work?",
    ],
  },
  {
    keywords: ["education", "degree", "college", "btech", "qualification", "study"],
    answer:
      "Delwin completed a B.Tech in Electrical and Electronics Engineering from PRIST University, Thanjavur. He subsequently developed his skills in Java and full-stack software development.",
    suggestions: [
      "What are his technical skills?",
      "Tell me about his experience",
      "Show me his projects",
    ],
  },
  {
    keywords: ["contact", "email", "reach", "hire", "github", "linkedin"],
    answer:
      "You can contact Delwin using the contact details and professional links displayed in the Contact section of this portfolio. You can also explore his GitHub to see his code and projects.",
    suggestions: [
      "Show me his projects",
      "What are his technical skills?",
      "Tell me about his experience",
    ],
  },
  {
    keywords: ["available for work", "looking for a job", "open to work", "hire him", "job opportunity"],
    answer:
      "Thanks for your interest in Delwin! Please check his portfolio and contact him directly to discuss current availability and suitable opportunities.",
    suggestions: [
      "What are his technical skills?",
      "Show me his projects",
      "How can I contact him?",
    ],
  },
  {
    keywords: ["open github"],
    answer:
      "You can explore Delwin's GitHub repositories here: https://github.com/DelwinDcruz",
    suggestions: [
      "Show me his projects",
      "What are his technical skills?",
      "How can I contact him?",
    ],
  },
];

function getReply(input: string) {
  const text = input.toLowerCase().trim().replace(/[?!.,]/g, "");

  if (/^(hi|hello|hey|hii|hiii|good morning|good afternoon|good evening)$/.test(text)) {
    return {
      answer:
        "Hello! 👋 Welcome to Delwin D'Cruz's portfolio. I'm his virtual assistant. I can tell you about his skills, projects, education, and experience. What would you like to know?",
      suggestions: initialQuestions.slice(0, 4),
    };
  }

  if (/\b(thanks|thank you|thankyou)\b/.test(text)) {
    return {
      answer: "You're welcome! 😊 Would you like to know anything else about Delwin?",
      suggestions: initialQuestions.slice(0, 4),
    };
  }

  const match = answers.find((item) =>
    item.keywords.some((keyword) => text.includes(keyword))
  );

  if (match) {
    return {
      answer: match.answer,
      suggestions: match.suggestions,
    };
  }

  return {
    answer:
      "Sorry, I couldn't understand that question yet. 😅 I'm still learning! Try asking about Delwin's skills, projects, education, experience, or contact details.",
    suggestions: initialQuestions,
  };
}

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [suggestions, setSuggestions] = useState(initialQuestions);
  const nextId = useRef(1);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: nextId.current++,
          role: "bot",
          text: "Hi! 👋 Welcome to my website. I'm Delwin D'Cruz's virtual assistant. Ask me anything about Delwin, or choose a question below!",
        },
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, suggestions]);

  function sendMessage(value: string) {
    const text = value.trim();
    if (!text) return;

    const reply = getReply(text);

    setMessages((previous) => [
      ...previous,
      { id: nextId.current++, role: "user", text },
      { id: nextId.current++, role: "bot", text: reply.answer },
    ]);

    setSuggestions(reply.suggestions);
    setInput("");
  }

  return (
    <>
      {isOpen && (
        <section
          className="portfolio-chat-panel"
          aria-label="Portfolio chatbot"
          aria-describedby="portfolio-chat-description"
        >
          <header className="portfolio-chat-header">
            <div className="portfolio-chat-avatar">
              <Bot size={24} />
            </div>
            <div className="portfolio-chat-heading">
              <strong>Delwin's Assistant</strong>
              <span id="portfolio-chat-description">Here to help you explore</span>
            </div>
            <button
              className="portfolio-chat-icon-button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <X size={21} />
            </button>
          </header>

          <div className="portfolio-chat-messages" aria-live="polite">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`portfolio-chat-message ${
                  message.role === "user" ? "user-message" : "bot-message"
                }`}
              >
                {message.text.startsWith("https://") ? (
                  <a href={message.text} target="_blank" rel="noreferrer">
                    {message.text}
                  </a>
                ) : (
                  message.text
                )}
              </div>
            ))}

            <div className="portfolio-chat-suggestions">
              <span>Suggested questions</span>
              {suggestions.map((question) => (
                <button
                  key={question}
                  onClick={() => sendMessage(question)}
                >
                  {question}
                </button>
              ))}
            </div>
            <div ref={bottomRef} />
          </div>

          <form
            className="portfolio-chat-input-area"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask me about Delwin..."
              aria-label="Type your question"
            />
            <button type="submit" aria-label="Send message" disabled={!input.trim()}>
              <Send size={18} />
            </button>
          </form>
        </section>
      )}

      <button
        className="portfolio-chat-launcher"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close portfolio chat" : "Open portfolio chat"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
      </button>
    </>
  );
}
