var storageData = document.getElementById("storage-data");

// 存储storage
function setStorage(key, value) {
  localStorage.setItem(key, value);
  showStorage();
}

// 获得storage
function getStorage(key) {
  console.log(localStorage.getItem(key));
}

// 移除某个storage
function removeStorage(key) {
  localStorage.removeItem(key);
}

// 清空storage
function clearStorage() {
  localStorage.clear();
}

// 遍历storage
function showStorage() {
  var strStorage = '';
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    strStorage += key + ":" + localStorage.getItem(key) + "<br/>";
  }
  storageData.innerHTML = strStorage;
}

showStorage();

// 监听
function storageEventHandle(event) {
  console.log(
    '数据名称：' + event.key + '\n' +
    '以前的值：' + event.oldValue + '\n' +
    '新的值：' + event.newValue + '\n' +
    '链接：' + event.url + '\n'
  );
  console.dir(event.storageArea);
}

document.getElementById('set-storage').addEventListener('click', function () {
  setStorage((new Date()).getTime(), (new Date()).getTime());
}, false);

document.getElementById('clear-storage').addEventListener('click', function () {
  clearStorage();
}, false);

// 监听storage 发生变化的事件绑定
window.addEventListener('storage', storageEventHandle, false);
