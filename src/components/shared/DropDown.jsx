import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableWithoutFeedback, Pressable } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import Card from "./Card";

const DropDown = ({ children, title, icon, secondary = false }) => {
    const [active, setActive] = useState(false)
    
    return (
        <>
            <Pressable style={[styles.main, secondary ? styles.secondary : {}]} onPress={() => setActive(!active)}>
                <>
                    <View style={styles.dropName}>
                        {icon &&
                            <FontAwesome5 name={icon} size={18} color={secondary ? '#000000': '#FFFFFF'} />
                        }
                        <Text style={{color: secondary ? '#000000': '#FFFFFF'}} numberOfLines={1}>{title}</Text>
                    </View>
                    <FontAwesome5 name={active ? 'chevron-up' : 'chevron-down'} size={18} color={secondary ? '#000000': '#FFFFFF'} />
                </>
            </Pressable>
            <View style={[styles.content, active ? styles.contentActive : {}]}>
                {children}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: 30,
        backgroundColor: '#243033',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    dropName: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '80%',
        gap: 10,
    },
    dropTitle: {
        color: '#fff',
    },
    content: {
        width: '100%',
        marginTop: 5,
        position: 'absolute',
        top: '100%',
        opacity: 0,
    },
    contentActive: {
        top: 0,
        opacity: 1,
        position: 'relative',
    },
    secondary: {
        backgroundColor: 'transparent',
        borderColor: '#243033',
        borderWidth: 2,
    },
})

export default DropDown