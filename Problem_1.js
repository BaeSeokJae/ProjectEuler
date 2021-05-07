/**
 * 1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면?
 * 10보다 작은 자연수 중에서 3 또는 5의 배수는 3, 5, 6, 9 이고, 이것을 모두 더하면 23입니다.
 * 1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면 얼마일까요?
 */
function problem1(arg) {
  let sum = 0;
  for (let i = 0; i < arg; i++)
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  return sum;
}
/**
 * 피보나치 수열에서 4백만 이하이면서 짝수인 항의 합
 * 피보나치(Fibonacci) 수열의 각 항은 바로 앞의 항 두 개를 더한 것입니다. 1과 2로 시작하는 경우 이 수열은 아래와 같습니다.
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * 4백만 이하의 짝수 값을 갖는 모든 피보나치 항을 더하면 얼마가 됩니까?
 *
 * 풀이
 * 피보나치(Fibonacci) 수열의 각 항은 바로 앞의 항 두 개를 더한 것입니다.
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * 따라서
 * 1 + 2 = 3
 * 2 + 3 = 5
 * 3 + 5 = 8
 * 5 + 8 = 13
 * ...
 * 위와 같은 방식으로 진행하기 때문에
 * 초기 fibo_1, fibo_2값을 정한후 합계(fibo_3)를 내고
 * 짝수면 결과값 + 합계(fibo_3) / 홀수면 넘긴 후
 * fibo_1값은 fibo_2로 치환
 * fibo_2값은 fibo_3으로 치환하는 방식으로 4백만 이하값을 반복문 실행
 */
function problem2(arg) {
  // 재귀함수 사용 실패
  //   let sum = 0;
  //   fibonacci = (arg) => {
  //     if (arg < 2) return arg;
  //     return fibonacci(arg - 1) + fibonacci(arg - 2);
  //   };

  //   for (let i = 1; i < arg; i++) {
  //     if (fibonacci(i) % 2 === 0) {
  //       console.log("결과" + fibonacci(i));
  //       sum = sum + fibonacci(i);
  //     }
  //   }
  //   return sum;
  //*

  let sum = 2;
  let fibo_1 = 1;
  let fibo_2 = 2;
  let fibo_3 = 0;
  while (true) {
    if (fibo_3 > 4000000) break;
    fibo_3 = fibo_1 + fibo_2;
    if (fibo_3 % 2 === 0) {
      sum += fibo_3;
    }
    fibo_1 = fibo_2;
    fibo_2 = fibo_3;
  }
  return sum;
}

/**
 * 가장 큰 소인수 구하기
 * 어떤 수를 소수의 곱으로만 나타내는 것을 소인수분해라 하고, 이 소수들을 그 수의 소인수라고 합니다.
 * 예를 들면 13195의 소인수는 5, 7, 13, 29 입니다.
 * 600851475143의 소인수 중에서 가장 큰 수를 구하세요.
 *
 * 풀이
 * 소수는 1을 제외한 약수로 1과 자기 자신만을 갖는 수를 의미.
 * 초기 값과 i로 나누어 떨어질 경우 해당값을 저장 후
 * 초기 값을 나누어진 값으로 변환.
 * 위의 과정을 계속 진행 후 for문이 끝나게 되면 가장 큰 수가 저장되어 있기 때문에
 * 결과 도출
 */
function problem3(arg) {
  let arr = 0;
  for (let i = 3; i <= arg; i++) {
    if (arg % i === 0) {
      arr = i;
      arg /= i;
    }
  }
  return arr;
}

// const result = problem2(4000000);
const result = problem3(600851475143);

console.log(result);
