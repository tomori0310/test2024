// 警告: このコードには意図的にセキュリティ上の問題が含まれています。
// 実際の環境で使用しないでください。

// 1. クロスサイトスクリプティング (XSS) の脆弱性
function displayUserInput() {
    var userInput = document.getElementById('userInput').value;
    document.getElementById('output').innerHTML = userInput;
}

// 2. SQL インジェクションの脆弱性
function queryDatabase(userId) {
    var query = "SELECT * FROM users WHERE id = " + userId;
    // この query を直接データベースに送信する（危険）
}

// 3. 機密情報の露出
var apiKey = "1234567890abcdef";
console.log("API Key: " + apiKey);

// 4. eval() の使用（潜在的に危険）
function executeUserCode(code) {
    eval(code);
}

// 5. 安全でないランダム値の生成
function generateToken() {
    return Math.random().toString(36).substring(7);
}

// 6. パスワードを平文で保存
var users = [
    { username: "admin", password: "password123" },
    { username: "user", password: "qwerty" }
];

// 7. 安全でない正規表現
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}