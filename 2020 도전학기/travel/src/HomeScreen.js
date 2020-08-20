import React, {useState, useReducer, useEffect} from 'react';
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
    Modal,
    Dimensions,
    RefreshControl
} from 'react-native';
import Swiper from 'react-native-swiper';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const modal = StyleSheet.create({
    modalText: {
        fontSize: 24,
        fontFamily: 'NunitoSans-Bold',
        color: '#202426',
        marginTop: 32,
    },
    modalPasswordBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16
    },
    iconBox: {
        height: 80,
        width: 60,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#5cc27b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    largeBox: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16
    },
    mediumBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    smallBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 0.25 * WIDTH,
        height: 0.1 * HEIGHT
    },
    number: {
        fontSize: 34,
        fontFamily: 'NunitoSans-Regular',
        color: '#352641',
    },
})

export default function HomeScreen({ navigation }) {
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

    const [privatekey, setPrivate] = useState(false);
    const [check, setCheck] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [four, setFour] = useState(false);
    const payData = [
        {
            name: '상품',
            content: '밤바다가 보이는 여수 펜션'
        },
        {
            name: '입실시간',
            content: '2020/08/20 15:00'
        },
        {
            name: '퇴실시간',
            content: '2020/08/21 12:00'
        },
        {
            name: '가격',
            content: '135000원'
        },
        {
            name: '연락처',
            content: '010-1234-1234'
        },
    ]

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
        setPrivate(true);
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
    const [passWordTwo, setPassWordTwo] = useState([]);
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
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
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
                        <Text style={{ fontSize: 24}}>
                            <Text style={{ fontWeight: 'bold', color: '#5CC27B' }}>Home</Text>
                            <Text style={{ fontWeight: 'normal', color: '#979797'}}> With Skku</Text>
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Image source={require('./icon/alram.png')} />
                    </View>
                </View>
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                >
                    <Text style={{
                        marginLeft: 8,
                        marginTop: 12,
                        color: '#303030',
                        fontSize: 18,
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    }}>
                        당신의 안전한 여행과 배달을 위해
                    </Text>
                    <Text style={{
                        marginLeft: 8,
                        marginTop: 4,
                        color: '#5cc27b',
                        fontSize: 30,
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    }}>
                        BLOCKLOCK
                    </Text>
                    {privatekey === false ?
                        <>
                            <Image source={require('./icon/pension.jpeg')} style={{ width: '80%', height: 250, borderRadius: 30, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginBottom: 8, marginTop: 8 }} />
                            <TouchableOpacity onPress={() => setPasswordVisible(true)} style={{backgroundColor: 'orange', width: 180, height: 30, marginBottom: 8, borderRadius: 10, alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{ color: '#ffffff', fontSize: 14, fontWeight: 'bold' }}>QR코드 확인하기</Text>
                            </TouchableOpacity>
                        </>
                        :
                        <>
                            <Image style={{ width: 250, height: 250, alignSelf: 'center' }} source={require('./icon/qrcode.png')} />
                            <Text style={{ fontSize: 24, color: '#5cc27b', alignSelf: 'center', marginBottom: 16 }}>banana-apple-grape</Text>
                        </>
                    }
                    <View style={{
                        marginLeft: 24,
                        marginRight: 24,
                        padding: 16,
                        marginBottom: 16,
                        borderRadius: 10,
                        backgroundColor: '#5cc27b'
                    }}>
                        <Text style={{
                            color: 'gold',
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginBottom: 4
                        }}>결제정보</Text>
                        <FlatList
                            data={payData}
                            renderItem={({item}) => 
                                (<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                                    <Text style={{
                                        color: '#ffffff',
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        width: 120
                                    }}>{item.name}</Text>
                                    <Text style={{
                                        color: '#ffffff',
                                        fontSize: 14,
                                        fontWeight: 'normal',
                                    }}>{item.content}</Text>
                                </View>)
                            }
                        />
                    </View>
                    <View style={{marginLeft: 24, marginBottom: 4, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>
                        <View style={{width: 8, height: 8, borderRadius: 4, backgroundColor: 'red', marginRight: 8}} />
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>숙박 시 주의사항</Text>
                    </View>
                    <View style={{marginLeft: 24, marginBottom: 16, backgroundColor: 'orange', borderRadius: 10, marginRight: 24, padding: 8}}>
                        <Text style={{fontSize: 12, textAlign: 'left', marginBottom: 4, color: '#303030'}}>1. 블록체인 사용기간이 만료 시 자동으로 문이 열립니다.</Text>
                        <Text style={{fontSize: 12, textAlign: 'left', color: '#303030'}}>2. 입실시간과 퇴실시간을 잘 지켜주시기 바랍니다. </Text>
                    </View>
                    <Swiper autoplay={true} dotStyle={{
                        borderColor: '#ffffff',
                        borderWidth: 1,
                        backgroundColor: '#FFFFFF'
                    }} activeDotColor='#ffffff' height={120} loop={true}>
                        <ImageBackground style={{ height: 80, width: '100%', alignItems: 'center', justifyContent: 'center' }} resizeMode="cover" source={require("./icon/chicken.jpg")} >
                            <Text style={{
                                color: '#ffffff',
                                fontWeight: 'bold',
                                fontSize: 16,
                                alignSelf: 'flex-end',
                                marginRight: 12,
                            }}>치킨 구매시 </Text>
                            <Text style={{
                                color: 'gold',
                                fontWeight: 'bold',
                                fontSize: 18,
                                alignSelf: 'flex-end',
                                marginRight: 12,
                                marginTop: 4
                            }}>할인 쿠폰 증정!!</Text>
                        </ImageBackground>
                        <ImageBackground style={{ height: 80, width: '100%', alignItems: 'center', justifyContent: 'center' }} resizeMode="cover" source={require("./icon/hotel.png")} >
                            <Text style={{
                                color: '#ffffff',
                                fontWeight: 'bold',
                                fontSize: 16,
                                alignSelf: 'flex-start',
                                marginLeft: 12,
                            }}>얼리버드 특가 </Text>
                            <Text style={{
                                color: 'gold',
                                fontWeight: 'bold',
                                fontSize: 18,
                                alignSelf: 'flex-start',
                                marginLeft: 12,
                                marginTop: 4
                            }}>30% 할인!!</Text>
                        </ImageBackground>
                    </Swiper>
                </ScrollView>
            </SafeAreaView>
            <SafeAreaView style={{ flex: 0 }} />
        </>
    )
}