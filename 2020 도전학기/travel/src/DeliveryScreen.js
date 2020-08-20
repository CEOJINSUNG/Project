import React, {useState} from 'react';
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
    RefreshControl
} from 'react-native';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function DeliveryScreen({ navigation }) {
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

    return (
        <>
            <SafeAreaView style={{ flex: 0 }} />
            <StatusBar />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <View accessibilityRole="header" style={{ flexDirection: 'row', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                height: 50, 
                width: "100%", 
                paddingLeft: "5%", 
                }}>
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
                            <Text style={{ fontWeight: 'bold', color: '#5CC27B' }}>Delivery</Text>
                            <Text style={{ fontWeight: 'normal', color: '#979797' }}> With Skku</Text>
                        </Text>
                    </View>
                </View>
                <ScrollView 
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                >
                    <Swiper dotStyle={{
                        borderColor: '#5cc27b',
                        borderWidth: 1,
                        backgroundColor: '#FFFFFF'
                    }} activeDotColor='#5cc27b' height={300} loop={true}>
                        <ImageBackground style={{ height: 300, width: '100%', alignItems: 'flex-end', justifyContent: 'center' }} resizeMode="cover" source={require("./icon/jjajang.jpg")} >
                            <Text style={{marginRight: 12, width: 20}}>
                                <Text style={{
                                    color: '#ffffff',
                                    fontWeight: 'normal',
                                    fontSize: 16,
                                    marginRight: 12,
                                }}>지금 구매시 </Text>
                                <Text style={{
                                    color: 'gold',
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                    marginRight: 12,
                                    marginTop: 4,
                                }}>20% 할인!!</Text>
                            </Text>
                        </ImageBackground>
                        <ImageBackground style={{ height: 300, width: '100%', alignItems: 'center', justifyContent: 'flex-start' }} resizeMode="cover" source={require("./icon/jokbal.jpg")} >
                            <Text style={{marginTop: 12, marginLeft: 12}}>
                                <Text style={{
                                    color: '#000000',
                                    fontWeight: 'normal',
                                    fontSize: 20,
                                    marginRight: 12,
                                }}>족발먹어도 </Text>
                                <Text style={{
                                    color: 'red',
                                    fontWeight: 'bold',
                                    fontSize: 22,
                                    marginRight: 12,
                                    marginTop: 4,
                                }}>0 칼로리!!</Text>
                            </Text>
                        </ImageBackground>
                        <ImageBackground style={{ height: 300, width: '100%', alignItems: 'center', justifyContent: 'center' }} resizeMode="cover" source={require("./icon/sushi.jpg")} >
                            <Text style={{marginTop: 12, marginLeft: 12}}>
                                <Text style={{
                                    color: '#ffffff',
                                    fontWeight: 'normal',
                                    fontSize: 20,
                                    marginRight: 12,
                                }}>지금 당장 구매시 </Text>
                                <Text style={{
                                    color: 'gold',
                                    fontWeight: 'bold',
                                    fontSize: 22,
                                    marginRight: 12,
                                    marginTop: 4,
                                }}>배달비 무료!!</Text>
                            </Text>
                        </ImageBackground>
                    </Swiper>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginLeft: 24,
                        marginBottom: 10,
                        marginTop: 16
                    }}>
                        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'gold' }} />
                        <Text style={{
                            marginLeft: 8,
                            color: '#303030',
                            fontSize: 18,
                            fontWeight: 'bold'
                        }}>
                            <Text style={{ color: 'red' }}>안전한</Text>
                            <Text style={{ fontSize: 17 }}> 배달음식!!</Text>
                        </Text>
                    </View>
                    <View style={{
                        paddingBottom: 8,
                        paddingLeft: 24,
                        paddingRight: 24,
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 85 }}>
                                <Ionicons name="fast-food" size={40} />
                                <Text style={{ fontSize: 12 }}>패스트푸드</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 85 }}>
                                <Ionicons name="cafe" size={40} />
                                <Text style={{ fontSize: 12 }}>카페</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 85 }}>
                                <Ionicons name="ice-cream" size={40} />
                                <Text style={{ fontSize: 12 }}>아이스크림</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 85 }}>
                                <Ionicons name="ios-flame" size={40} />
                                <Text style={{ fontSize: 12 }}>화로구이</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        paddingBottom: 8,
                        paddingTop: 10,
                        paddingLeft: 24,
                        paddingRight: 24,
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 85 }}>
                                <Ionicons name="beer" size={40} />
                                <Text style={{ fontSize: 12 }}>시원한 맥주</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 85 }}>
                                <Ionicons name="cart" size={40} />
                                <Text style={{ fontSize: 12 }}>식료품</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 85 }}>
                                <Ionicons name="pizza" size={40} />
                                <Text style={{ fontSize: 12 }}>피자</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 85 }}>
                                <Ionicons name="ios-leaf" size={40} />
                                <Text style={{ fontSize: 12 }}>신선식품</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{
                        marginLeft: 8,
                        marginTop: 12,
                        color: '#303030',
                        fontSize: 18,
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    }}>
                        왜 블록체인 기반 배달인가?
                    </Text>
                    <Text style={{
                        marginLeft: 8,
                        marginTop: 4,
                        color: '#5cc27b',
                        fontSize: 30,
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    }}>
                        STEAL-LOCK
                    </Text>
                    <Text style={{
                        marginLeft: 8,
                        marginTop: 4,
                        color: '#303030',
                        fontSize: 16,
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    }}>
                        기존의 문제점
                    </Text>
                    <Text style={{
                        marginTop: 4,
                        marginLeft: 40,
                        marginRight: 40,
                        color: '#303030',
                        fontSize: 14,
                        fontWeight: 'normal',
                        alignSelf: 'center',
                        textAlign: 'center'
                    }}>
                        1. '배달원 음식 뺴먹기'라는 사회적 문제 발생
                    </Text>
                    <Text style={{
                        marginLeft: 40,
                        marginRight: 40,
                        color: '#303030',
                        fontSize: 14,
                        fontWeight: 'normal',
                        alignSelf: 'center',
                        textAlign: 'center'
                    }}>
                        2. 해외의 경우 드론 배달 시 물건을
                    </Text>
                    <Text style={{
                        marginLeft: 40,
                        marginRight: 40,
                        color: '#303030',
                        fontSize: 14,
                        fontWeight: 'normal',
                        alignSelf: 'center',
                        textAlign: 'center'
                    }}>
                        중간에 훔치는 사례 등장
                    </Text>
                    <Text style={{
                        marginLeft: 8,
                        marginTop: 6,
                        color: '#303030',
                        fontSize: 16,
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    }}>
                        솔루션
                    </Text>
                    <Text style={{
                        marginTop: 4,
                        marginLeft: 40,
                        marginRight: 40,
                        color: '#303030',
                        fontSize: 14,
                        fontWeight: 'normal',
                        alignSelf: 'center',
                        textAlign: 'center',
                        marginBottom: 16
                    }}>
                        물품이나 음식 수령 시 자신만의 고유한 키 값을 가지고 있는 사람만 수령이 가능하게 해준다.
                    </Text>
                </ScrollView>
            </SafeAreaView>
            <SafeAreaView style={{ flex: 0 }} />
        </>
    )
}