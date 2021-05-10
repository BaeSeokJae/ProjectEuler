/**
1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면?
10보다 작은 자연수 중에서 3 또는 5의 배수는 3, 5, 6, 9 이고, 이것을 모두 더하면 23입니다.
1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면 얼마일까요?
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
피보나치 수열에서 4백만 이하이면서 짝수인 항의 합

피보나치(Fibonacci) 수열의 각 항은 바로 앞의 항 두 개를 더한 것입니다. 1과 2로 시작하는 경우 이 수열은 아래와 같습니다.

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

4백만 이하의 짝수 값을 갖는 모든 피보나치 항을 더하면 얼마가 됩니까?

풀이

피보나치(Fibonacci) 수열의 각 항은 바로 앞의 항 두 개를 더한 것입니다.

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

따라서

1 + 2 = 3
2 + 3 = 5
3 + 5 = 8
5 + 8 = 13
...

위와 같은 방식으로 진행하기 때문에
초기 fibo_1, fibo_2값을 정한후 합계(fibo_3)를 내고
짝수면 결과값 + 합계(fibo_3) / 홀수면 넘긴 후
fibo_1값은 fibo_2로 치환
fibo_2값은 fibo_3으로 치환하는 방식으로 4백만 이하값을 반복문 실행
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
  // console.log("결과" + fibonacci(i));
  // sum = sum + fibonacci(i);
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
가장 큰 소인수 구하기

어떤 수를 소수의 곱으로만 나타내는 것을 소인수분해라 하고, 이 소수들을 그 수의 소인수라고 합니다.

예를 들면 13195의 소인수는 5, 7, 13, 29 입니다.

600851475143의 소인수 중에서 가장 큰 수를 구하세요.

풀이

소수는 1을 제외한 약수로 1과 자기 자신만을 갖는 수를 의미.
초기 값과 i로 나누어 떨어질 경우 해당값을 저장 후
초기 값을 나누어진 값으로 변환.
위의 과정을 계속 진행 후 for문이 끝나게 되면 가장 큰 수가 저장되어 있기 때문에
결과 도출
 */
function problem3(arg) {
  let sum = 0;
  for (let i = 3; i <= arg; i++) {
    if (arg % i === 0) {
      sum = i;
      arg /= i;
    }
  }
  return sum;
}

/**
세자리 수를 곱해 만들 수 있는 가장 큰 대칭수
앞에서부터 읽을 때나 뒤에서부터 읽을 때나 모양이 같은 수를 대칭수(palindrome)라고 부릅니다.
두 자리 수를 곱해 만들 수 있는 대칭수 중 가장 큰 수는 9009 (= 91 × 99) 입니다.
세 자리 수를 곱해 만들 수 있는 가장 큰 대칭수는 얼마입니까?

풀이
1. 대칭수 중 가장 큰 숫자를 찾아야함
2. 따라서 999 * 999 부터 감소하며 찾아가는게 제일 빠름
3. 대칭수는 reverse를 사용하여 생성후 비교
4. 처음 비교시 일치하는 결과를 최종 리턴 변수에 할당
5. 반복문이 돌면서 일치하는 값이 계속 발생함
6. 이러한 일치값을 최종 변수와 비교하고, 비교 시 최종 값 보다 작게되면 할당 X
 */
function problem4() {
  let sum = 0;
  let reverseSum;
  let maxSum = 0;
  for (let i = 999; i > 100; i--) {
    for (let j = 999; j > 100; j--) {
      sum = i * j;
      reverseSum = sum.toString().split("").reverse("").join("");
      if (sum.toString() === reverseSum && sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}

/**
 * 1 ~ 20 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수
 * 1 ~ 10 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 2520입니다.
 * 그러면 1 ~ 20 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 얼마입니까?
 *
 * 풀이
 * 단순히 초기 값을 1로 정해 논 후에 숫자를 차례로 늘려가며 1~20까지 숫자로 나눔.
 * 1~20까지 숫자로 나눠질때 마다 count++시키고 전부 다 나눠 진 숫자는 count가 20이므로 반복문을 중단시키고 결과 반환.
 * 20이하일 경우 count를 초기화 시키고 다시 실행하는 방식으로 진행
 * 시간이 굉장히 오래걸림
 * TODO: 리팻토링 해보자
 */
function problem5(arg) {
  let num = 1;
  let count = 0;
  while (true) {
    num++;
    for (let i = 1; i <= 20; i++) {
      if (num % i === 0) {
        count++;
      }
    }
    if (count === 20) {
      break;
    } else {
      count = 0;
    }
  }
  return num;
}

/**
1부터 100까지 "제곱의 합"과 "합의 제곱"의 차는?

1부터 10까지 자연수를 각각 제곱해 더하면 다음과 같습니다 (제곱의 합).

12 + 22 + ... + 102 = 385 1부터 10을 먼저 더한 다음에 그 결과를 제곱하면 다음과 같습니다 (합의 제곱).

(1 + 2 + ... + 10)2 = 552 = 3025 따라서 1부터 10까지 자연수에 대해 "합의 제곱"과 "제곱의 합" 의 차이는 3025 - 385 = 2640 이 됩니다.

그러면 1부터 100까지 자연수에 대해 "합의 제곱"과 "제곱의 합"의 차이는 얼마입니까?

풀이

1. 반복문을 사용하여 1부터 제곱을 구한 후 합을 구함
2. 위의 과정에서 자연수의 합을 구함
3. 반복문이 끝난 후 자연수 합의 제곱을 구함
4. 합의 제곱에서 제곱의 합을 뺄셈 후 결과 리턴
 */
function problem6() {
  let SumOfSquares = 0;
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    SumOfSquares = SumOfSquares + Math.pow(i, 2);
    sum += i;
  }
  let Squaredsum = Math.pow(sum, 2);

  return Squaredsum - SumOfSquares;
}

/**
 * 10001번째의 소수
 * 
 * 소수를 크기 순으로 나열하면 2, 3, 5, 7, 11, 13, ... 과 같이 됩니다.

이 때 10,001번째의 소수를 구하세요.

풀이

1. 먼저 소수를 구하는 함수를 생성
2. 반복문을 통해 소수일시 count를 +
3. count가 10001가 됬을때의 판별된 소수를 결과값에 할당 후 종료
4. 결과값 리턴
 */
function problem7() {
  let count = 0;
  let decimal = 2;
  let result = 0;
  function isPrime(n) {
    // 1이하일 경우엔 소수가 아닙니다.
    if (n <= 1) return false;

    // 2와 3일 경우엔 소수 입니다.
    if (n === 2 || n === 3) return true;

    // 2로 나눴을 때 나머지가 0일 경우엔 소수가 아닙니다.
    // 이 말인 즉슨 짝수는 다 소수가 아닙니다.
    if (n % 2 === 0) return false;

    // 최대 n - 1까지 돌려줍니다.
    let divisor = 3;
    while (n > divisor) {
      // 무엇이라도 0으로 떨어진다면 소수가 아닙니다.
      if (n % divisor === 0) return false;

      // 짝수일 경우를 제외한 홀수일 경우를 판단
      divisor += 2;
    }

    // 모든 조건을 통과했을 경우 소수로 인정받습니다.
    return true;
  }

  while (true) {
    if (isPrime(decimal)) {
      count++;
      if (count === 10001) {
        result += decimal;
        break;
      }
    }
    decimal++;
  }
  return result;
}

/**
1000자리 수 안에서 이어지는 5개 숫자의 곱 중 최댓값은?

다음은 연속된 1000자리 수입니다 (읽기 좋게 50자리씩 잘라 놓음).

73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450

여기서 붉게 표시된 71112의 경우 연속한 5개 숫자 7, 1, 1, 1, 2를 모두 곱하면 14입니다. 또, 그 다음 연속한 5개 숫자 11121의 경우 1, 1, 1, 2, 1을 모두 곱하면 2입니다.

이런 식으로 맨 처음 (7 × 3 × 1 × 6 × 7 = 882) 부터 맨 끝 (6 × 3 × 4 × 5 × 0 = 0) 까지 연속한 5개 숫자의 곱을 구할 수 있습니다.

이렇게 구할 수 있는 연속한 5개 숫자의 곱 중에서 가장 큰 값은 얼마입니까?

풀이

1. 숫자롤 그대로 넣을 시 JS가 표현할 수 있는 숫자 범위를 넘어서기 때문에 문자열로 변환하여 할당
2. 해당 문자를 배열로 split하여 할당ㄷ
3. 연속한 5개의 숫자의 곱을 sum 변수에 할당 후 결과값보다 sum값이 작을 경우 할당
 */

function problem8() {
  let result = 0;
  let arg =
    "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
  let splitArg = arg.split("");
  for (let i = 0; i < splitArg.length; i++) {
    let sum =
      parseInt(splitArg[i]) *
      parseInt(splitArg[i + 1]) *
      parseInt(splitArg[i + 2]) *
      parseInt(splitArg[i + 3]) *
      parseInt(splitArg[i + 4]);
    if (result < sum) {
      result = sum;
      console.log(result);
    }
  }
  return result;
}

/**
a + b + c = 1000 이 되는 피타고라스 수

세 자연수 a, b, c 가 피타고라스 정리 a2 + b2 = c2 를 만족하면 피타고라스 수라고 부릅니다 (여기서 a < b < c ).
예를 들면 32 + 42 = 9 + 16 = 25 = 52이므로 3, 4, 5는 피타고라스 수입니다.

a + b + c = 1000 인 피타고라스 수 a, b, c는 한 가지 뿐입니다. 이 때, a × b × c 는 얼마입니까?

풀이

a의 제곱근 + b의 제곱근을 한 값을 거듭제곱한 값이 소수값이 아닌 정수일때 피타고라스의 수로 정의됨
따라서 정수로 변환한 값과 아닌 값이 일치하고 a, b, c값의 합이 1000일때
a * b * c라는 결과값을 리턴  
 */
function problem9(arg) {
  for (let a = 1; a <= arg; a++) {
    for (let b = 1; b <= arg; b++) {
      let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      if (c === parseInt(c) && a + b + c === arg) {
        console.log(c, a, b);
        return a * b * c;
      }
    }
  }
}

/**
 * 이백만 이하 소수의 합

10 이하의 소수를 모두 더하면 2 + 3 + 5 + 7 = 17 이 됩니다.

이백만(2,000,000) 이하 소수의 합은 얼마입니까?

풀이

초기
1. 소수를 판별하는 함수 생성
2. 이백만(2,000,000) 이하의 전체수의 소수를 판별
3. 위의 과정 중 소수로 판별된 값을 결과 값에 계속 더함
4. 결과값 리턴
5. 문제는 해결 되었으니 무려 3분이라는 연산 시간이 걸림

개선된 풀이
1. 에라토스테네스의 체를 활용하여 구현
2. 먼저 이백만(2,000,000)이하의 값을 반복문을 통하여 배열에 전부 push
3. 주어진 수의 제곱근까지만 계산해서 불필요한 반복을 최소화한다.
4. arr[i] 가 소수일 경우, 반복문을 진행한다.
5. 맨 처음 시작하는 2는 소수이므로, 2를 제외한 2의 제곱부터, 제곱 값만 체크하여 지워나감
6. 제곱근까지 반복한다.
7. 0, 1 은 소수가 아니므로 false 값으로 변경
8. filter로 false값을 걸러내고, reduce로 전체 배열의 합을 구함
 */

function problem10(arg) {
  let sum = 0;

  // function isPrime(n) {
  //   // 1이하일 경우엔 소수가 아닙니다.
  //   if (n <= 1) return false;

  //   // 2와 3일 경우엔 소수 입니다.
  //   if (n === 2 || n === 3) return true;

  //   // 2로 나눴을 때 나머지가 0일 경우엔 소수가 아닙니다.
  //   // 이 말인 즉슨 짝수는 다 소수가 아닙니다.
  //   if (n % 2 === 0) return false;

  //   // 최대 n - 1까지 돌려줍니다.
  //   let divisor = 3;
  //   while (n > divisor) {
  //     // 무엇이라도 0으로 떨어진다면 소수가 아닙니다.
  //     if (n % divisor === 0) return false;

  //     // 짝수일 경우를 제외한 홀수일 경우를 판단
  //     divisor += 2;
  //   }

  //   // 모든 조건을 통과했을 경우 소수로 인정받습니다.
  //   return true;
  // }

  // for (let i = 2; i <= arg; i++) {
  //   if (isPrime(i)) {
  //     sum += i;
  //   }
  // }
  // console.log(startTime, elapsed);
  // return sum;

  const arr = [];

  for (let i = 0; i <= arg; i += 1) {
    arr.push(i);
  }

  for (let i = 2; i * i <= arg; i += 1) {
    if (arr[i]) {
      for (let j = i * i; j <= arg; j += i) {
        arr[j] = false;
      }
    }
  }

  arr.splice(0, 2, false, false);

  const result = arr
    .filter((value) => {
      return value !== false;
    })
    .reduce((pre, cur) => {
      return pre + cur;
    });

  return result;
}
/**
 * 20×20 격자에서 연속된 네 수의 곱 중 최댓값

아래와 같은 20×20 격자가 있습니다.

위에서 대각선 방향으로 연속된 붉은 수 네 개의 곱은 26 × 63 × 78 × 14 = 1788696 입니다.

그러면 수평, 수직, 또는 대각선 방향으로 연속된 수 네 개의 곱 중 최댓값은 얼마입니까?

풀이

1. 가로, 세로, 좌에서 우 대각선, 우에서 좌 대각선의 값을 구함
2. 4개씩 쪼개서 reduce에 넣은 후 곱셈값을 구한 후 결과 배열에 넣음
3. 최종적으로 배열안에 Max값을 찾아서 리턴
 */

function problem11(input) {
    const numList = [
    [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
    [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
    [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
    [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
    [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
    [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
    [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
    [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
    [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
    [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
    [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
    [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
    [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
    [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
    [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
    [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
    [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
    [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48],
  ]
  // input만큼의 곱셉을 담을 배열
  const multipleList = [];

  // 배열의 인자들을 곱할 함수
  const multiple = (arr) => arr.reduce((p, c) => {
    return p * c;
  });

  // 반복문을 두개를 돌려 2차원 배열들의 모든 인자들을 접근할 수 있다.
  for (let i = 0; i <= 20 - input; i++) {
    for (let j = 0; j <= 20 - input; j++) {
      // 가로방향
      multipleList.push(multiple(numList[i].slice(j, j + input)));

      // 세로방향
      multipleList.push(
        multiple(
          ((list) => {
            for (let k = 0; k < input; k++) {
              list.push(numList[i + k][j]);
            }
            // console.log(list)
            return list;
          })([])
        )
      );

      // 좌에서 우로 향하는 대각선
      multipleList.push(
        multiple(
          ((list) => {
            for (let k = 0; k < input; k++) {
              list.push(numList[i + k][j + k]);
            }
            return list;
          })([])
        )
      );

      // 우에서 좌로 향하는 대각선
      multipleList.push(
        multiple(
          ((list) => {
            for (let k = 0; k < input; k++) {
              list.push(numList[i + k][j + (input - 1) - k]);
            }
            return list;
          })([])
        )
      );
    }
  }
  // 최대값 찾기
  return multipleList.reduce((prev, cur) => Math.max(prev, cur));
}

/**
500개 이상의 약수를 갖는 가장 작은 삼각수는?

1부터 n까지의 자연수를 차례로 더하여 구해진 값을 삼각수라고 합니다.
예를 들어 7번째 삼각수는 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28이 됩니다.
이런 식으로 삼각수를 구해 나가면 다음과 같습니다.

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
이 삼각수들의 약수를 구해 봅시다.

1: 1
3: 1, 3
6: 1, 2, 3, 6
10: 1, 2, 5, 10
15: 1, 3, 5, 15
21: 1, 3, 7, 21
28: 1, 2, 4, 7, 14, 28
위에서 보듯이, 5개 이상의 약수를 갖는 첫번째 삼각수는 28입니다.

그러면 500개 이상의 약수를 갖는 가장 작은 삼각수는 얼마입니까?

풀이

초기 풀이
1. 단순히 값을 계속 올려서 약수의 갯수가 500개인 수를 찾으려고 함
2. 시간이 너무 오래 걸리고 도저히 끝나지 않아 다른 방법 물색

최종 풀이
1. 삼각수 공식 N = n * (n+1) / 2을(시그마 공식) 활용하여 해결
2. 약수 개수 구하는 건 속도를 위해서 대상의 루트까지 루프
3. 모든 숫자의 약수는 자기 자신의 절반을 넘지 못함
4. 따라서 sqrt(제곱근)을 사용하여 시간을 줄였음.
 */
function ploblem12() {
  // let value = 1;
  // let sum = 0;
  // function divisors(integer) {
  //   let arr = [];
  //   for (let i = 1; i <= integer; i++) {
  //     if (integer % i == 0) {
  //       arr.push(i);
  //     }
  //   }
  //   return arr;
  // }
  // while (true) {
  //   sum += value;
  //   let result = divisors(sum);
  //   console.log(result)
  //   if (result.length >= 500) {
  //     break;
  //   }
  //   value++;
  // }
  // return sum;

  let n, sum, count;
  n = 1;

  function cnt_div(n) {
    let cnt;
    let max_length;

    cnt = 0;
    max_length = Math.sqrt(n);

    for (let i = 0; i < max_length; i++) {
      if (n % i === 0) {
        cnt += 2;
      }
    }
    if (max_length * max_length === n) {
      cnt -= 1;
    }
    return cnt;
  }

  while (true) {
    sum = n * (n + 1) / 2;
    count = cnt_div(sum);
    if (count >= 500) {
      return sum;
    }
    n++;
  }


}

let startTime = new Date().getTime();

// const result = problem2(4000000);
// const result = problem3(600851475143);
// const result = problem4();
// const result = problem5(1000);
// const result = problem6();
// const result = problem7();
// const result = problem8();
// const result = problem9(1000);
// const result = problem10(2000000);
// const result = problem11(4);
const result = ploblem12();

let elapsed = new Date().getTime() - startTime;
console.log(elapsed / 1000); // 1000ms -> 1sec

console.log(result);
