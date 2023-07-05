import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    wrap: {
        flex: 1,
        width: '95%',
        alignSelf: 'center',
        marginBottom: 10,
    },
    key: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 14,
        marginBottom: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    right: {
        alignItems: 'center',
    },
    link: {
        color: '#0057B2',
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
    },
    dropContent: {
        paddingHorizontal: 16,
    }
});