# TodayWhatILearned

하루하루 공부한 자료들을 모아놓는 공간입니다.

[Web&App] 

- 공부 자료 https://learnjs.vlpt.us/

- css 자료 https://heropy.blog/

      style-components 적용 시 주의 사항
      component 이름을 대문자로 시작해야함

- 리액트(React) 원서 : https://reactjs.org/

  cf) 리액트 앱 생성시 command line에서 'npx create-react-app 이름' 을 쳐줘야한다
  
      생성 후 npm start or yarn start를 폴더 위에서 치면 작동한다.
      yarn add react-router-dom
      yarn add axios는 redux나 redux middleware 없이 API를 연동할 때 사용한다
      yarn add react-redux
      yarn add redux-devtools-extension

- 리액트(React) Velopert : https://velopert.com/reactjs-tutorials

- 리액트 아이콘(React-icon) : https://react-icons.netlify.com/#/

- 센트리(sentry, 오류를 잡아내는 기능을 더해줌) : https://sentry.io/welcome/

- 프리티어(Prettier, 코드의 규칙을 설정해주는 기능을 지원해준다) : https://prettier.io/

  cf) format document or format on save 둘중 하나 하면 됨
  
- EsLint : VScode에서 다운을 받으면 여기서 어떤 변수가 쓰였는지 않쓰였는지 알 수 있다. 여러 규칙들을 설정해줌.

- Snippet : 코드들을 자동생성하는 기능으로 VScode에서 다운을 받거나 직접 코드조각들을 생성해서 사용하는 방법이 있다. 

- Sass(스타일링을 쉽게 해주는 기능) : https://sass-guidelin.es/ko/

- JSONPlaceholder(API 연동을 도와주는 사이트) : https://jsonplaceholder.typicode.com/

   cf) Redux 및 ContextAPI를 사용할 때 쓰는 함수들의 기능

       Action : type이 있어야 하고 data와 text를 가지고 있는 경우로 있다.
       Dispatch : Action을 실행시키는 기능을 가진다.
       Reducer : 상태를 바꿔주는 역할을 한다.
       Subscribe : Dispatch가 발생했을 때 특정함수를 호출하는 역할을 한다.

- Django 공부 자료 :https://tutorial.djangogirls.org/ko/ 와 https://www.djangoproject.com/

      mac에서 장고 시작
      $ mkdir djangogirls
      $ cd djangogirls
      $ python3 -m venv myvenv
      
      가상환경 활성화
      $ source myvenv/bin/activate
      
      최신버전인지 확인
      (myvenv) ~$ python3 -m pip install --upgrade pip
      
      최신버전 장고 설치
      $ pip install Django==3.0.8
      
      장고프로젝트 시작하기
      $ django-admin startproject mysite(다른 이름 써도 됨).
      
      설정변경 및 데이터베이스 
      시간, 경로, 서버 설정함.
      $ python3 manage.py migrate를 함
      $ python3 manage.py runserver를 돌려서 서버가 잘 작동하는지 봐야함
      
      앱 시작하기
      python manage.py startapp (내가 이름으로 설정하면 됨)
      python manage.py migrations (이름) 이렇게 하면 데이터베이스와 앱이 연결이 됨

[Bigdata]

- python 기반으로 데이터 분석을 하고 있음

- 공부 순서 : Webcrawling->numpy, pandas -> 단순선형회기분석 -> 다항선형회기분석

- matlab : https://github.com/matlab2tikz/matlab2tikz

- Keras : https://github.com/keras-team/keras

- tensorflow : https://github.com/tensorflow/tensorflow

[Blockchain]

- 공부 순서 : Golang, Rust, Smart Contract, Node.js -> 하이퍼레져, 코스모스, 서브스트레이트

- Rust : https://rust-kr.org/

- Smart Contract

- [한글] : https://github.com/search?q=%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0

- [영어] : https://github.com/ethereum/solidity

- Hyperledger Fabric : https://hyperledger-fabric.readthedocs.io/en/release-2.0/

[React Native]

- React Native 시작 및 node_module 설치

  1) React Native 시작
      
      React-Native 공식 사이트 : https://reactnative.dev/versions
      
      공식사이트를 통해 React Native CLI를 사용하고 초기 환경 설정을 한다.
      
      그 다음 window환경 같은 경우 npx react-native init myownProject(다른 이름도 좋음)을 치면 초기 시작이 됨
      
      다운이 완료되면 핸드폰 기기와 컴퓨터를 연결하고 npx react-native start를 치면 앱이 실행이 됨
  
  2) node_module 설치
      
      npm install or yarn add 추가하고자 하는 모듈을 하면 나옴 
      
      아래와 같은 순서로 다운 받는 것을 추천한다. 왜냐하면 react-native-firebase를 설치하고 react-navigation/native를 설치하면 react-native-firebase/firestore가 삭제되기 때문이다
      
      (1) React Navigation : https://reactnavigation.org/
      
      (2) react-native-firebase : https://rnfirebase.io/
      
      (3) react-native-image-picker : https://github.com/dev-yakuza/react-native-image-picker-example/blob/master/src/App.tsx
      
      (4) react-native-vector-icons : https://oblador.github.io/react-native-vector-icons/
      
      (5) react-native-elements : https://react-native-elements.github.io/react-native-elements/

- 오류
  오류가 발생했을 때는 어느 경로에서 오류가 발생했는지 확인해야함
  
    1번 구글 firebase와 연결할 떄 package 오류가 발생했음 이 때 googleservice.json()에서 package name을 바꿔야함
    
    2번 https://stackoverflow.com/questions/43604603/module-appregistry-is-not-registered-callable-module-calling-runapplication
    
    3번 https://stackoverflow.com/questions/47291056/could-not-find-tools-jar-please-check-that-c-program-files-java-jre1-8-0-151-c
    
    4번 https://stackoverflow.com/questions/60310873/execution-failed-for-task-appmergedexdebug-firestore-flutter
    
    5번 https://github.com/oblador/react-native-vector-icons/issues/429
    
    6번 리액트 네이티브 앱을 만들던 도중 version이 6.0이상이면 android를 실행할 때 @react-native-community/toolbar-android가 존재하지 않는다 따라서 이를 설치해줘야 함
