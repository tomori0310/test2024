// 構文エラーと潜在的な問題を含むJavaScriptファイル

// 1. 変数宣言の問題
let x = 5;
let x = 10; // 同じスコープで変数を再宣言

// 2. 関数定義の問題
function myFunction(a, a) { // 重複した引数名
    return a + b; // 未定義の変数 'b' を使用
}

// 3. オブジェクトリテラルの問題
let obj = {
    prop1: "value1",
    prop1: "value2", // 重複したプロパティ名
    "invalid-key": 123,
    function() { // メソッド定義の誤り
        console.log("Hello");
    }
};

// 4. 配列リテラルの問題
let arr = [1, 2, 3,]; // 末尾のカンマ（一部の環境ではエラー）

// 5. 制御構造の問題
if (x === 5) {
    console.log("x is 5");
else { // else の前に閉じ括弧がない
    console.log("x is not 5");
}

// 6. ループの問題
for (let i = 0; i < 5; i++) {
    console.log(i);
    break; // 不必要な break 文
    console.log("This will never be reached");
}

// 7. switch 文の問題
switch (x) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        // break 文が抜けている
    default:
        console.log("Other");
}

// 8. 非同期処理の問題
async function fetchData() {
    let response = await fetch('https://api.example.com/data');
    return response.json;  // メソッド呼び出しの括弧が抜けている
}

// 9. クラス定義の問題
class MyClass {
    constructor(name) {
        this.name = name;
    }

    static {  // 静的ブロックの誤った使用
        console.log("Static block");
    }

    getName() {
        return this.name;
    }

    setName(name) {  // setter メソッドの誤った定義
        this.name = name;
    }
}

// 10. モジュールの問題
import { nonExistentFunction } from './non-existent-module.js';
export default = function() {};  // デフォルトエクスポートの誤った構文