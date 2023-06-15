const addButton = document.getElementById('addButton');
const todo = document.getElementById('todo');

// タスク追加
addButton.addEventListener('click', () => {

    // 入力された値を取得(今後は値と呼ぶ)
    var todoValue = todo.value;

    // 値入力がなければ処理を終了
    if (todoValue.trim() == "") return;

    // ulタグ取得
    const ulTag = document.getElementById('ulTag');

    // liタグ生成
    const liTag = document.createElement('li');

    // pタグ生成
    const pTag = document.createElement('span');

    // 値をpタグに入れる
    pTag.textContent = todoValue;

    // liタグにpタグ追加
    liTag.appendChild(pTag);

    deleteButton = document.createElement('button');

    deleteButton.textContent = "削除";

    liTag.appendChild(deleteButton);

    // ulタグにliタグ追加
    ulTag.appendChild(liTag);

    deleteButton.addEventListener('click', (e) => {
        ulTag.removeChild(e.target.closest('li'));
    });
});




