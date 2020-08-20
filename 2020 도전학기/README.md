2020 도전학기 프로젝트
==================

## [도전학기 수강과목] : 4차산업혁명과 창업비즈니스, 머신러닝과 딥러닝, 블록체인의 기초

#### [Etherscan] : https://ropsten.etherscan.io/address/0x02db0f2480c4f766095123f0a0ef4c417715e90e 
    - 컨트랙트를 확인하려면 위 주소로 들어가 확인하면 됨

#### BlockLock 아이디어

    1. 문제점
       - 혼행족을 대상으로 한 숙소 범죄가 증가하고 있다.
       - 배달 중간에 음식을 빼먹는 경우가 있었다.
       - 해외의 경우 배달 물품이 사라지는 경우가 많았고 드론 배달의 경우에도 드론 자체를 훔쳐가거나 물품을 훔쳐가는 경우가 있어 이를 방지하는 특허기술이 개발중이다.
    
    2. 솔루션
       - 블록체인 기반 통합 IoT 서비스를 통해 고객들의 음식 또는 물품이 사라지지 않도록 해준다.
    
    3. 현재 블록체인을 적용한 기능
       - 송금하기(MypageScreen.js)
       - 구매하기(PensionScreen.js)

#### BlockLock 사용법
    
    1. git을 통해 travel을 다운 받는다.
    2. 다운 받고 나서 해당 폴더 위치로 가서 아래의 명령어를 친다.
       - npm install  <- node_module을 다운 받음
       - cd ios & pod install <- ios 버전 install but ios는 react-native-vector-icons 설정을 하지 않아 하지 않는게 좋을듯 하다.
       - cd ..
    3. web3와 통신하기
       - config.js 를 보면 web3의 api 키를 적는 곳이 있다. 여기서 Infura 사이트에 가서 개인적인 api 를 발급받아 넣는다.
    4. 자신의 주소 및 PrivateKey 적기
       - config.js 를 보면 account와 privateKey1이 있는데 안에다가 자신의 지갑주소 및 개인키를 넣는다.
    5. 실행하기
       - npx react-native run-android 로 안드로이드 버전을 실행함
