function checkValidation(formJson, checkValidation) {
    return checkValidation.every(function (item) {  //every : 모두 true / 하나라도 false이면 break
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





/**
 * @param  {object} formJson
 * @param  {Array< {name : string , text : string }>} checkValidation
 * @return {boolean} true => validation충족, false => 불충족
 */
//some으로 하는방법 : some - 하나라도 true면 break
// function checkFormValidation2( formJson , checkValidation) {
// 	let checkedNum = 0;
// 	checkValidation.some(function(item ,idx){
// 		const vals = formJson[item.name];
// 		if (!vals) {
// 			modal.showAlertModal('done',{ title: `${item.text} 을/를 입력해주세요.`, btn: '확인' },function(){
// 				$(`[name="${item.name}"]`).focus();
// 			});
// 		}else {
// 			//console.log(item.text +':' +  vals);
// 			checkedNum++;
// 		}
// 		return (vals === null || vals === '' || vals === undefined);
// 	});
// 	return checkedNum === checkValidation.length;
// }



//for문 break버전
/**
 * form의 필수요소값 체크 + 해당내용 입력swal기능.
 * key 배열일때는 값이 있을때만(length != 0 ) formData에 추가.
 * @param requiredFormObject 필수입력요소 { 'name' : '입력사항이름'} : object 
 * @param formData  :object
 * @returns : boolean
 */
function checkIsFormFull(requiredFormObject, formData, text) {
    let isFormFull = false;
    let txt = text || '입력';
    for (const key in requiredFormObject) {
        isFormFull = true;
        if (!formData[key]) {
            isFormFull = false;
            swal2Alert(`${requiredFormObject[key]} 을/를 ${txt}해주세요.`, 3, function () {
            });
            break;
        }
    }
    return isFormFull;
}


