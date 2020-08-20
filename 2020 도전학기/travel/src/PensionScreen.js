import React, { useState, useEffect, useReducer } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image,
    ImageBackground,
    FlatList,
    RefreshControl,
    Modal
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { modal } from './HomeScreen';
import { web3, buyAccount, sellerAccount, privateKey1, myContract, BlockLockAddress, BlockLockdata } from './config';

export default function PensionScreen({ navigation }) {
    //블록체인 결제 트랜잭션 발생
    const name = "밤바다가 보이는 여수 펜션";
    const phonenumber = '010-1234-1234';
    const startTime = 20200820;
    const endTime = 20200821;
    const Product = [
        {
            title: '지갑주소',
            content: sellerAccount
        },
        {
            title: '전화번호',
            content: '010-1234-1234'
        },
        {
            title: '가격(1박 기준)',
            content: '135000원'
        },
        {
            title: '입실시간',
            content: '2020-08-20 15:00'
        },
        {
            title: '퇴실시간',
            content: '2020-08-21 12:00'
        }
    ]
    const Tx = require('ethereumjs-tx').Transaction
    const price = web3.utils.toHex(web3.utils.toWei('0.01', 'ether'))
    const sendmoney = () => {
        let extradata = myContract.methods.purchase(sellerAccount, name, phonenumber, price, startTime, endTime).encodeABI()
        web3.eth.getTransactionCount(buyAccount, (err, txCount) => {
            const txObject = {
                from: buyAccount,
                nonce: web3.utils.toHex(txCount),
                to: BlockLockAddress,
                value: '0x0',
                gasLimit: web3.utils.toHex(2100000),
                gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
                data: extradata
            }
            //여기서 web3가 2이상이면 아래의 {chain: 'ropsten}을 선언해줘야함
            const tx = new Tx(txObject, {chain: 'ropsten'});
            tx.sign(privateKey1);
            const serializedTx = tx.serialize();
            const raw = '0x' + serializedTx.toString('hex');
            web3.eth.sendSignedTransaction(raw)
                .once('transactionHash', (hash) => {
                    console.info('transactionHash', 'https://ropsten.etherscan.io/tx/' + hash);
                })
                .once('receipt', (receipt) => {
                    console.info('receipt', receipt);
                }).on('error', console.error);
        });
    }

    //새로고침하기
    const [refreshing, setRefreshing] = useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(1000).then(() => setRefreshing(false));
    }, []);

    //비밀번호 입력창
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [four, setFour] = useState(false);
    const OneImage = one === true ? require('./icon/passwordicon.png') : require('./icon/blank.png')
    const TwoImage = two === true ? require('./icon/passwordicon.png') : require('./icon/blank.png')
    const ThreeImage = three === true ? require('./icon/passwordicon.png') : require('./icon/blank.png')
    const FourImage = four === true ? require('./icon/passwordicon.png') : require('./icon/blank.png')

    function pass(count, action) {
        switch (action.type) {
            case 'plus':
                return count += 1;
            case 'minus':
                return count -= 1;
            case 'delete':
                setOne(false);
                setTwo(false);
                setThree(false);
                setFour(false);
                return count = 0;
            case 'confirmwrong':
                return count = 0;
        }
    }

    function confirmTrue() {
        setPasswordVisible(false);
        sendmoney();
        navigation.goBack();
    }
    const [count, dispatch] = useReducer(pass, 0);
    const onIncrease = () => {
        dispatch({
            type: 'plus'
        })
    }
    const onDecrease = () => {
        dispatch({
            type: 'minus'
        })
    }

    const onDelete = () => {
        dispatch({
            type: 'delete'
        })
    }

    const [passWord, setPassWord] = useState([]);
    const onAddOne = () => {
        setPassWord(passWord.concat(1))
    }
    const onAddTwo = () => {
        setPassWord(passWord.concat(2))
    }
    const onAddThree = () => {
        setPassWord(passWord.concat(3))
    }
    const onAddFour = () => {
        setPassWord(passWord.concat(4))
    }
    const onAddFive = () => {
        setPassWord(passWord.concat(5))
    }
    const onAddSix = () => {
        setPassWord(passWord.concat(6))
    }
    const onAddSeven = () => {
        setPassWord(passWord.concat(7))
    }
    const onAddEight = () => {
        setPassWord(passWord.concat(8))
    }
    const onAddNine = () => {
        setPassWord(passWord.concat(9))
    }
    const onAddZero = () => {
        setPassWord(passWord.concat(0))
    }
    const onDeleteOne = () => {
        setPassWord(passWord.slice(0, passWord.length - 1))
    }
    const onDeleteAll = () => {
        setPassWord(passWord.slice(0, 0))
    }

    useEffect(() => {
        if (count > 4) {
            console.log("초과되었습니다.");
            setPassWord(passWord.slice(0, passWord.length - 1))
            dispatch({
                type: 'minus'
            })
        }
        else if (count < 0) {
            setOne(false);
            setTwo(false);
            setThree(false);
            setFour(false);
            console.log("작습니다.");
            dispatch({
                type: 'plus'
            })
        }
        else if (count === 0) {
            setOne(false);
            setTwo(false);
            setThree(false);
            setFour(false);
            console.log(passWord);
            console.log("0");
        }
        else if (count === 1) {
            setOne(true);
            setTwo(false);
            setThree(false);
            setFour(false);
            console.log(passWord);
            console.log("1");
        }
        else if (count === 2) {
            setOne(true);
            setTwo(true);
            setThree(false);
            setFour(false);
            console.log(passWord);
            console.log("2")
        }
        else if (count === 3) {
            setOne(true);
            setTwo(true);
            setThree(true);
            setFour(false);
            console.log(passWord);
            console.log("3")
        }
        else if (count === 4) {
            setOne(true);
            setTwo(true);
            setThree(true);
            setFour(true);
            console.log(passWord);
            console.log("4")
            setTimeout(() => {
                confirmTrue();
            }, 300)
        }
    }, [count])

    return (
        <>
            <SafeAreaView style={{ flex: 0 }} />
            <StatusBar />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }} >
                <Modal
                    animationType="slide"
                    visible={passwordVisible}
                    onRequestClose={() => setPasswordVisible(false)}
                >
                    <View style={{ flex: 1, backgroundColor: '#CCCCCC', justifyContent: 'flex-end' }}>
                        <View style={{
                            flex: 0.7,
                            borderTopRightRadius: 35,
                            borderTopLeftRadius: 35,
                            backgroundColor: '#ffffff',
                            alignItems: 'center'
                        }}>
                            <Text style={modal.modalText}>비밀번호</Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingLeft: 60,
                                paddingRight: 60,
                                marginTop: 16
                            }}>
                                <View style={[modal.iconBox, { marginRight: 12 }]}>
                                    <Image resizeMode="contain" style={{ width: 20, height: 60 }} source={OneImage} />
                                </View>
                                <View style={[modal.iconBox, { marginRight: 6 }]}>
                                    <Image resizeMode="contain" style={{ width: 20, height: 60 }} source={TwoImage} />
                                </View>
                                <View style={[modal.iconBox, { marginLeft: 6 }]}>
                                    <Image resizeMode="contain" style={{ width: 20, height: 60 }} source={ThreeImage} />
                                </View>
                                <View style={[modal.iconBox, { marginLeft: 12 }]}>
                                    <Image resizeMode="contain" style={{ width: 20, height: 60 }} source={FourImage} />
                                </View>
                            </View>
                            <View style={modal.modalPasswordBox}>
                                <View style={modal.largeBox}>
                                    <View style={modal.mediumBox}>
                                        <TouchableOpacity style={modal.smallBox} onPress={onIncrease} onPressIn={onAddOne}>
                                            <Text style={modal.number}>1</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={modal.smallBox} onPress={onIncrease} onPressIn={onAddTwo}>
                                            <Text style={modal.number}>2</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={modal.smallBox} onPress={onIncrease} onPressIn={onAddThree}>
                                            <Text style={modal.number}>3</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={modal.mediumBox}>
                                        <TouchableOpacity style={modal.smallBox} onPress={onIncrease} onPressIn={onAddFour}>
                                            <Text style={modal.number}>4</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={modal.smallBox} onPress={onIncrease} onPressIn={onAddFive}>
                                            <Text style={modal.number}>5</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={modal.smallBox} onPress={onIncrease} onPressIn={onAddSix}>
                                            <Text style={modal.number}>6</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={modal.mediumBox}>
                                        <TouchableOpacity style={modal.smallBox} onPress={onIncrease} onPressIn={onAddSeven}>
                                            <Text style={modal.number}>7</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={modal.smallBox} onPress={onIncrease} onPressIn={onAddEight}>
                                            <Text style={modal.number}>8</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={modal.smallBox} onPress={onIncrease} onPressIn={onAddNine}>
                                            <Text style={modal.number}>9</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={modal.mediumBox}>
                                        <TouchableOpacity style={modal.smallBox} onPress={onDelete} onPressIn={onDeleteAll}>
                                            <Text style={modal.text}>취소</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={modal.smallBox} onPress={onIncrease} onPressIn={onAddZero}>
                                            <Text style={modal.number}>0</Text >
                                        </TouchableOpacity>
                                        <TouchableOpacity style={modal.smallBox} onPress={onDecrease} onPressIn={onDeleteOne}>
                                            <Text style={modal.text}>지우기</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                >
                    <Image style={{ height: 273.5, width: '100%' }} resizeMode="contain" source={require('./icon/yeosureserve.jpeg')} />
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        marginTop: 8,
                        color: '#303030'
                    }}>{name}</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        marginLeft: 24,
                        marginTop: 12
                    }}>
                        <Ionicons name="star" color="gold" size={12} />
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '200',
                            marginLeft: 4,
                            marginRight: 12,
                            color: '#303030'
                        }}>4.39 (132)</Text>
                        <Ionicons name="medal" color="gold" size={12} />
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '200',
                            marginLeft: 4,
                            marginRight: 12,
                            color: '#303030'
                        }}>슈퍼호스트</Text>
                        <View style={{ width: 2, height: 2, borderRadius: 1, backgroundColor: '#303030', marginRight: 8 }} />
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '200',
                            marginLeft: 4,
                            marginRight: 12,
                            color: '#303030'
                        }}>여수시, 전라남도, 한국</Text>
                    </View>
                    <View style={{ borderWidth: 0.2, borderColor: '#303030', alignSelf: 'center', width: '90%', marginTop: 20 }} />
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginLeft: 24,
                        marginRight: 24,
                        marginTop: 12,
                        marginBottom: 12
                    }}>
                        <View style={{
                            alignItems: 'flex-start',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginBottom: 4
                            }}>집 전체</Text>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 'normal',
                                marginBottom: 4
                            }}>호스트: 명륜이님</Text>
                        </View>
                        <Ionicons name="person-circle" size={36} />
                    </View>
                    <View style={{ borderWidth: 0.2, borderColor: '#303030', alignSelf: 'center', width: '90%' }} />
                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 24,
                        alignItems: 'center',
                        marginTop: 12
                    }}>
                        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'gold' }} />
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            marginLeft: 4
                        }} >상세정보</Text>
                    </View>
                    <FlatList
                        data={Product}
                        keyExtractor={(item) => item.title}
                        renderItem={({ item }) => (
                            <View style={{ marginLeft:24, marginRight: 24, alignItems: 'center', flexDirection: 'row', marginTop: 8 }}>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    width: 100
                                }}>{item.title}</Text>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: 'normal',
                                    width: 250,
                                    marginLeft: 4
                                }}>{item.content}</Text>
                            </View>
                        )}
                    />
                </ScrollView>
                <TouchableOpacity onPress={() => setPasswordVisible(true)} style={{ flexDirection: "row", position: "absolute", bottom: 0 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#5cc27b', width: "100%", height: 60, }}>
                        <Text style={{ fontSize: 20, letterSpacing: 1.5, color: 'white', fontWeight: 'bold' }}>결제하기</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
            <SafeAreaView style={{ flex: 0 }} />
        </>
    )
}