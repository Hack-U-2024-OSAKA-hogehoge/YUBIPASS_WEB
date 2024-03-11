// document.addEventListener('DOMContentLoaded', function() {
//     const inputDataField = document.getElementById('sendInput');
//     const saveButton = document.getElementById('send');
//     const savedList = document.getElementById('savedList');

//      // 保存ボタンがクリックされたときの処理
//   function onSaveButtonClick() {
//     const inputData = inputDataField.value;

//     if (inputData.trim() !== '') {
//       // Cookieから保存された情報を取得
//       let savedData = getSavedData();
//       savedData.push(inputData);

//       // Cookieに情報を保存（有効期限は1年）
//       document.cookie = "savedData=" + JSON.stringify(savedData) + "; expires=" + new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000).toUTCString();

//       // 保存された情報を表示
//       displaySavedData(savedData);
//     }
//   }

//   // 保存ボタンがクリックされたときのイベントリスナーを登録
//   saveButton.addEventListener('click', onSaveButtonClick);

//   // ページ読み込み時に保存された情報を表示
//   const savedData = getSavedData();
//   displaySavedData(savedData);

//   // Cookieから保存された情報を取得する関数
//   function getSavedData() {
//     const cookies = document.cookie.split(';');
//     for (let cookie of cookies) {
//       const [name, value] = cookie.trim().split('=');
//       if (name === 'savedData') {
//         return JSON.parse(value);
//       }
//     }
//     return [];
//   }

//   // 保存された情報を表示する関数
//   function displaySavedData(data) {
//     savedList.innerHTML = '';
//     data.slice().reverse().forEach(item => { // 配列を逆順にする
//       const listItem = document.createElement('li');
//       listItem.textContent = item;
//       savedList.appendChild(listItem);
//   });
//   }
// });
