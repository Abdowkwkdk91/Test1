const evidenceDetails = {
    note: "الملاحظة تقول: 'لن أتركك تأخذ كل شيء!' يبدو كأنها تهديد.",
    glass: "الكأس مكسور بجانب الطاولة، وعليه بصمات مشبوهة.",
    watch: "الساعة توقفت عند الساعة 10:15 مساءً، ربما هذا وقت الجريمة."
};

const correctSuspect = "الشريك التجاري";

function showEvidence(evidence) {
    document.getElementById("result-text").innerText = evidenceDetails[evidence];
}

function accuse(suspect) {
    if (suspect === correctSuspect) {
        document.getElementById("result-text").innerText = "أحسنت! الشريك التجاري هو القاتل. الدافع كان خلافًا على المال.";
    } else {
        document.getElementById("result-text").innerText = "خطأ! حاول مجددًا، ليس هذا المشتبه به.";
    
