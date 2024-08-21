
const main_data = {
    // 영어 데이터
    "en": {
        "logo": "assets/en/logo.png",
        "gnb": ["About Us", "Business", "PR Center", "Contact"],
        "tit": ["GREAT", "POSSIBILITY"],
        "flogo": "assets/en/footer_logo.png",
        "fmenu": ["About DAEWOO E&C", "Sitemap","Contact", "Email Security"],
        "addr": "04548 DAEWOO E&C 170 Eulji-ro, Jung-gu, Seoul, Republic of Korea"
        
    },
    // 한국어 데이터
    "ko": {
        "logo": "assets/ko/logo.png",
        "gnb": ["회사소개", "사업분야", "홍보센터", "고객센터"],
        "tit": ["BUILD", "TOGETHER"],
        "flogo": "assets/ko/footer_logo.png",
        "fmenu": ["회사소개", "사이트맵","개인정보처리방침", "이메일수집거부"],
        "addr": "04548 서울특별시 중구 을지로 170 ㈜대우건설"
    }
}
//export default main_data;

// 기본 데이터 내보내기 - 1개만
// 명명된 데이터 내보내기 - 여러개
export {en,ko};
