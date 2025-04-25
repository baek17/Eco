import React from 'react';
import FAQ from './FAQ'; // FAQ 컴포넌트를 가져옵니다.

const Mypage = () => {
  return (
    <div className="Mypage">
      <div className='nav'>
        <h3>마이페이지</h3>
      </div>
      <div className="faq-section">
        <FAQ /> {/* FAQ 컴포넌트를 추가합니다 */}
      </div>
    </div>
  );
};

export default Mypage;
