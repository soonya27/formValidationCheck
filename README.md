# formValidationCheck , form null 체크

### [githubpage](https://soonya27.github.io/formValidationCheck/)


### example
```html
<form id="formData">
    <strong>장소</strong>
    <input type="text" name="place">
    <strong>매니져이름</strong>
    <input type="text" name="manager">
    <strong>방문자</strong>
    <input type="text" name="visitor">
</form>
<button type="button" id="btnFormSave" style="width:100%">저장</button>

<p id="formText"></p>
<p id="errorText" style="color:red;"></p>

```


```javascript
const formText = document.querySelector('#formText');
const errorText = document.querySelector('#errorText');

document.querySelector('#btnFormSave').addEventListener('click', function () {
    // dataJson {객체}로 받음
    let formJson = {
        place: document.querySelector('[name="place"]').value,
        manager: document.querySelector('[name="manager"]').value,
        visitor: document.querySelector('[name="visitor"]').value,
    }

    //dataJson 체크해야할 key값과 문자(text)
    let checkValidationObj = [
        { name: 'place', text: '장소' },
        { name: 'manager', text: '매니져이름' },
        { name: 'visitor', text: '방문자' },
    ];

    errorText.innerHTML = '';
    formText.innerHTML = '';
    if (checkValidation(formJson, checkValidationObj)) {
        // console.log('저장완료');
        errorText.innerHTML = '저장완료';
    }
});
```

### code
```javascript

/**
 * every  : 하나라도 false면 break
 * @param  {object} formJson
 * @param  {Array< {name : string , text : string }>} checkValidation
 * @return {boolean} true => validation충족, false => 불충족
 */
function checkValidation(formJson, checkValidation) {
    return checkValidation.every(function (item) {
        const vals = formJson[item.name];
        if (!vals) {
            // console.log(`${item.text} 을/를 입력해주세요.`)
            errorText.innerHTML = `${item.text} 을/를 입력해주세요.`;
            return false;
        }
        // console.log(item.text + ':' + vals);
        const span = document.createElement('span');
        span.innerHTML = item.text + ':' + vals;
        formText.append(span);

        return true;
    });
}

```

