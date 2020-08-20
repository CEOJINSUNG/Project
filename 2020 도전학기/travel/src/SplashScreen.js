import React, { useState, useEffect } from 'react';

import {
    ActivityIndicator,
    View,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SplashScreen({ navigation }) {
    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);
            navigation.navigate('Home')
        }, 3000);
    }, []);

    return (
        <>
            <SafeAreaView style={{ flex: 0 }} />
            <StatusBar barStyle="default" />
            <SafeAreaView style={{ width: "100%", flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons
                        name="ios-lock-closed"
                        color="#5cc27b"
                        size = {150}
                    />
                    <Text
                        style={{ fontSize: 31, fontWeight: 'bold', color: '#5CC27B', marginTop: 16 }}
                    >BLOCKLOCK</Text>
                    <Text
                        style={{ fontSize: 24, fontWeight: 'bold', color: '#303030', marginTop: 16 }}
                    >안전한 여행과 배달</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}