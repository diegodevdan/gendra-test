import React, { FC, useEffect, useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';

const Counter = ({ max = 10, min = 0, step = 1, setCount, initialCount = min }) => {
    const [count, setCountIntern] = useState(initialCount)

    const handlePage = (next) => {
        const newPage = next ? count + step : count - step
        if (newPage > max || newPage < min) return

        setCountIntern(newPage)
        setCount(newPage)
    }
    return (
        <View style={styles.main}>
            <TouchableOpacity style={[styles.page, styles.arrow, styles.arrowLeft]} onPress={() => handlePage(false)}>
                <FontAwesome5 name="chevron-left" size={20} color="black" />
            </TouchableOpacity>
            <View style={[styles.page, styles.current]} >
                <Text style={styles.currentNumber}>{count}</Text>
            </View>
            <TouchableOpacity style={[styles.page, styles.arrow, styles.arrowRight]} onPress={() => handlePage(true)}>
                <FontAwesome5 name="chevron-right" size={20} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    page: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    current: {
        width: 60,
        backgroundColor: '#243033',
        color: '#FFFFFF',
    },
    currentNumber: {
        color: '#FFFFFF',
    },
    arrow: {
        position: 'relative',
        borderWidth: 2,
        borderColor: '#c9c9c9',
    },
    arrowLeft: {
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    arrowRight: {
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    }
})

export default Counter