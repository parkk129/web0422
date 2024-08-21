
const main_data = {
    // 영어 데이터
    "en": {
        "logo": "MEGABOX",
        "gnb": ["About Us", "Business", "PR Center", "Contact"],
        "mtit": ["MB", "MEGABOX"],
        "stit" : ["movie","event","customer"],
        "s2" : {
            img:"../",
            tit:"pilot"
        }
    },
    // 한국어 데이터
    "ko": {
        "logo": "메가박스",
        "gnb": ["회사소개", "사업분야", "홍보센터", "고객센터"],
        "mtit": ["엠비", "메가박스"],
        "stit": ["영화", "이벤트", "고객센터"],
    }
}
//export default main_data;

// 기본 데이터 내보내기 - 1개만
// 명명된 데이터 내보내기 - 여러개
export {en,ko};
