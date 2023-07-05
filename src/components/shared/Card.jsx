import React, { FC } from "react"
import { View, Text, StyleSheet } from "react-native"

const Card = ({children}) => {
    return (
        <View style={styles.main}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        backgroundColor: '#BCC4C7',
        borderRadius: 4,
        padding: 10,
    }
})

export default Card