function getImagePath(fileName) {
  return `${process.env.PUBLIC_URL}/pic/${fileName}`;
}

const data = [
  { id: 1, name: '크롭셔츠', price: 258000, image: getImagePath('cropshirt.JPG') },
  { id: 2, name: '풀오버 후디', price: 378000, image: getImagePath('hoodifo.png') },
  { id: 3, name: '풀오버 니트', price: 358000, image: getImagePath('knitfo.JPG') },
  { id: 4, name: '후디', price: 59000, image: getImagePath('hoodi.JPG') },
  { id: 5, name: '풀오버 컬러니트', price: 298000, image: getImagePath('foknit.JPG') },
  { id: 6, name: '블록 베스트', price: 498000, image: getImagePath('blockv.JPG') },
  { id: 7, name: '니트 베스트', price: 398000, image: getImagePath('knitv.JPG') },
  { id: 8, name: '숏 가디건', price: 218000, image: getImagePath('shortcardigan.JPG') },
  { id: 9, name: '가디건', price: 498000, image: getImagePath('cardigan.JPG') },
  { id: 10, name: '바람막이', price: 79000, image: getImagePath('windbreak.JPG') },
  { id: 11, name: '체크 자켓', price: 698000, image: getImagePath('checkjk.JPG') },
  { id: 12, name: '에코 자켓', price: 898000, image: getImagePath('echojk.JPG') },
  { id: 13, name: '숏 자켓', price: 1180000, image: getImagePath('shotjk.JPG') },
  { id: 14, name: '벹티드 코트', price: 1580000, image: getImagePath('beltedcoat.JPG') },
  { id: 15, name: '롱 코트', price: 958000, image: getImagePath('longcoat.JPG') },
  { id: 16, name: '구스다운', price: 678000, image: getImagePath('padding.JPG') },
  { id: 17, name: 'PK 카라 원피스', price: 24000, image: getImagePath('pkdress.JPG') },
  { id: 18, name: '슬리브리스 원피스', price: 358000, image: getImagePath('sleevlessdress.JPG') },
  { id: 19, name: 'CK 스커트', price: 338000, image: getImagePath('ckskirt.JPG') },
  { id: 20, name: '데님 스커트', price: 300000, image: getImagePath('denims.JPG') },
  { id: 21, name: '코튼 데님 팬츠', price: 258000, image: getImagePath('cottondenimp.JPG') },
  { id: 22, name: '데님 Jean', price: 350000, image: getImagePath('denimj.JPG') },
  { id: 23, name: '조거 팬츠', price: 238000, image: getImagePath('jogpan.JPG') },
  { id: 24, name: '울 팬츠', price: 298000, image: getImagePath('woolpants.JPG') },
  { id: 25, name: 'PK 카라 티셔츠', price: 23000, image: getImagePath('karat.JPG') },
  { id: 26, name: '워크 베스트', price: 490000, image: getImagePath('workv.JPG') },
  { id: 27, name: '볼 캡', price: 26000, image: getImagePath('cap.JPG') },
  { id: 28, name: '백 & 키링', price: 97700, image: getImagePath('bagkey.JPG') },
  { id: 29, name: '홈 웨어', price: 59000, image: getImagePath('homewear.JPG') },
  { id: 30, name: '스트링 백팩', price: 59000, image: getImagePath('stringbp.JPG') },
  { id: 31, name: '지갑', price: 39000, image: getImagePath('wallet.JPG') },
];

export default data;
