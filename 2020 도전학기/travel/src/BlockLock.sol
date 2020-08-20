pragma solidity >=0.4.22 <0.7.0;

contract BlockLockContract {
    address public buyer;
    address public seller;

    //제품 설명
    string name;
    string phonenumber;
    uint price;
    uint startTime;
    uint endTime;

    //구매자는 잔액이 줄어들고 판매자는 잔액이 증가한다.
    function purchase (address _seller, string _name, string _phonenumber, uint _price, uint _startTime, uint _endTime) public payable {
        buyer = msg.sender;
        balanceOf[buyer] -= _price;
        balanceOf[_seller] += _price;
        name = _name;
        phonenumber = _phonenumber;
        price = _price;
        startTime = _startTime;
        endTime = _endTime;
    }
    
    //송금을 이용한 contract 실행 트랜잭션 실행
    function transfer(address _seller, uint _money) public payable {
        buyer == msg.sender;
        balanceOf[buyer] -= _money;
        balanceOf[_seller]  += _money;  
    }

    //계좌 잔액
    mapping (address => uint) public balanceOf;

    //거래 정보를 가져옴
    function getContract() public view returns (string _name, string _phonenumber, uint _price, uint _startTime, uint _endTime) {
        return ( _name, _phonenumber, _price, _startTime, _endTime);
    }
}