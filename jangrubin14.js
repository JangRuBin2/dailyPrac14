function exampleOne(a) {
  if(typeof a ==='number') {
    // ! a에서 소숫점을 제외한a를 뺐을 때 0이 아니라면 a는 실수
    // console.log(1 - Math.floor(1.2))
    if(a - Math.floor(a) !== 0) {
      throw new Error('정수를 입력해야 합니다');
    }
  } else {
    throw new Error('정수를 입력해야 합니다')
  }
  return a;
}
// exampleOne(1.2)
