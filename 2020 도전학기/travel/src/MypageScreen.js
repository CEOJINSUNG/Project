import React, { useState, useEffect } from 'react';
import {
    StatusBar,
    SafeAreaView,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
    FlatList,
    Alert,
    RefreshControl
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { web3, buyAccount, sellerAccount, privateKey1, myContract, BlockLockAddress, BlockLockdata } from './config';

const style = StyleSheet.create({
    container: {
        marginBottom: 14,
        paddingLeft: 14,
        paddingRight: 14
    },
    title: {
        paddingLeft: 10,
        fontSize: 16,
        marginTop: 32,
        paddingBottom: 8,
        fontWeight: 'normal'
    },
    containerStatus: {
        marginTop: 20,
        backgroundColor: "#85D29C",
        height: 160,
        borderRadius: 10,
        justifyContent: 'space-between'
    },
    box: {
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: "#48d1cc",
        borderWidth: 3,
        alignItems: 'center',
    },
    fontText: {
        fontSize: 16,
        fontFamily: 'NunitoSans-Regular',
        color: '#79808c'
    },
    fontSubTitle: {
        fontSize: 21,
        fontFamily: 'NunitoSans-Regular',
        marginLeft: 10,
        color: '#79808c'
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'NunitoSans-Regular',
        width: "50%",
        height: 43
    }
})

export default function MyPageScreen({ navigation }) {
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

    const [money, setMoney] = useState();
    const Tx = require('ethereumjs-tx').Transaction
    const sendmoney = () => {
        web3.eth.getTransactionCount(buyAccount, (err, txCount) => {
            const txObject = {
                nonce: web3.utils.toHex(txCount),
                to: sellerAccount,
                value: web3.utils.toHex(web3.utils.toWei('0.005', 'ether')),
                gasLimit: web3.utils.toHex(100000),
                gasPrice: web3.utils.toHex(web3.utils.toWei('6', 'gwei')),
                data: BlockLockdata
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

    useEffect(() => {
        web3.eth.getBalance(buyAccount, function (err, wei) {
            const balance = web3.utils.fromWei(wei, 'ether')
            console.log(balance)
            setMoney(balance)
        })
    }, [refreshing])
    return (
        <>
            <SafeAreaView style={{ flex: 0 }} />
            <StatusBar barStyle="default" />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <View accessibilityRole="header" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50, width: "100%", paddingLeft: "5%", paddingRight: "5%" }}>
                    <View
                        style={{
                            height: 44,
                            flexDirection: 'row',
                            paddingTop: 4,
                            justifyContent: "flex-start",
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ fontSize: 24 }}>
                            <Text style={{ fontWeight: 'bold', color: '#5CC27B' }}>MyPage</Text>
                            <Text style={{ fontWeight: 'normal', color: '#979797' }}> With Skku</Text>
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <TouchableOpacity style={{ marginLeft: 8 }} >
                            <Image source={require('./icon/setting.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={style.container}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                >
                    <View style={style.container}>
                        <View style={style.containerStatus}>
                            <View style={{ marginTop: 16, marginLeft: 16, marginRight: 16 }}>
                                <Text style={{ fontSize: 16, fontFamily: "HelveticaNeue", fontFamily: 'NunitoSans-Bold', color: "white" }}>율전이님</Text>
                                <Text style={{ fontSize: 10, fontFamily: "HelveticaNeue", fontFamily: 'NunitoSans-Bold', color: "white" }}>{buyAccount}</Text>
                                <Text style={{ marginTop: 10, fontSize: 22, fontFamily: "arial", fontFamily: 'NunitoSans-Bold', color: "white" }}>{money} Ether</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 2, justifyContent: 'flex-end', alignItems: 'center', }}>
                                <TouchableOpacity onPress={() => navigation.navigate('WalletWithDrawal')} style={[style.buttonStyle, { backgroundColor: '#f0f0f0', borderBottomLeftRadius: 10 }]}>
                                    <Text style={{ fontSize: 12, color: '#303030', opacity: 0.6, fontWeight: 'bold' }}>출금</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Alert.alert(
                                    '송금',
                                    `${sellerAccount}님에게 송금하시겠습니까?`,
                                    [
                                        {
                                            text: "Cancel",
                                            onPress: () => console.log("Cancel Pressed"),
                                            style: "cancel"
                                          },
                                          { text: "OK", onPress: sendmoney() }
                                    ]
                                )} style={[style.buttonStyle, { backgroundColor: '#FFB83D', borderBottomRightRadius: 10 }]}>
                                    <Text style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}>송금하기</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <FlatList
                            data={[
                                { key: '거래내역' },
                                { key: '개인정보' },
                                { key: '공지사항'},
                                { key: '이벤트' },
                                { key: '고객안심센터'},
                                { key: '1:1 문의'},
                                { key: '로그아웃 및 탈퇴' },
                            ]}
                            renderItem={({ item }) => (<TouchableOpacity style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                borderBottomWidth: 1,
                                borderColor: "#DDDDDD",
                            }}>
                                <Text style={style.title}>{item.key}</Text>
                                <Ionicons name="md-chevron-forward-outline" size={20} style={{marginRight: 8, marginBottom: 8}} />
                            </TouchableOpacity>)}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}