import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null); // 현재 열려 있는 질문의 인덱스를 관리합니다.
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태 추가

  // FAQ 데이터
  const faqs = [
    { question: "사이즈 선택 도와줘", answer: "알아서 골라,," },
    { question: "배송조회 어떻게 해", answer: "송장번호 뜨면 할 수 있다." },
    { question: "택배사 연락처 알고싶음", answer: "송장 뜨면 택배사 번호 알 걸?" },
  ];

  // 질문 클릭 시 답변 토글
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // 검색 필터
  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="FAQ"
      style={{
        maxWidth: "600px",
        margin: "20px auto",
      }}
    >
      <h2>FAQ</h2>

      {/* 검색 기능 추가 */}
      <div className="search-bar" style={{ marginBottom: "20px" }}>
        <label
          style={{
            display: "block",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
        </label>
        <input
          type="text"
          placeholder="무엇을 도와드릴까요?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div>

      {/* FAQ 목록 */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredFAQs.map((faq, index) => (
          <li key={index} style={{ marginBottom: "15px" }}>
            <button
              onClick={() => toggleFAQ(index)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "10px",
                fontSize: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                background: activeIndex === index ? "#f0f0f0" : "#fff",
                cursor: "pointer",
              }}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <p
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderTop: "none",
                  background: "#f9f9f9",
                }}
              >
                {faq.answer}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
