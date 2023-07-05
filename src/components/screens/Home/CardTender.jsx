import React, { FC } from "react"
import { View, Text, StyleSheet } from "react-native"
import Card from '../../shared/Card'
import useParserDate from '../../../hooks/useParserDate'
import { FontAwesome5 } from '@expo/vector-icons';

const CardTender = ({ title, publiser, date, id, ocid, contracts, parties, winners }) => {
    const {
        day,
        month,
        year,
        hour,
        minutes,
        meridian,
    } = useParserDate(date)
    return (
        <Card>
            <Text style={styles.title}>
                {title ?? `LICITACIÓN DESCONOCIDA #${id}`}
            </Text>
            <Text style={styles.publisher}>
                {publiser}
            </Text>
            <Text style={styles.info}>
                {day} de {month} de {year} - {hour}:{minutes} {meridian}
            </Text>
            <Text style={styles.info}>
                {ocid}
            </Text>
            <View style={styles.infoContainer}>
                {contracts > 0 &&
                    <View style={styles.row}>
                        <FontAwesome5 name="file-contract" size={16} color="black" />
                        <Text style={styles.info}>{contracts} - Contratos</Text>
                    </View>
                }
                {parties > 0 &&
                    <View style={styles.row}>
                        <FontAwesome5 name="users" size={16} color="black" />
                        <Text style={styles.info}>{parties} - Participantes</Text>
                    </View>
                }
                {winners > 0 &&
                    <View style={styles.row}>
                        <FontAwesome5 name="award" size={16} color="black" />
                        <Text style={styles.info}>{winners} - Ganador</Text>
                    </View>
                }
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
        gap: 10,
    },
    info: {
        fontSize: 12,
    },
    publisher: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    row: {
        flexDirection: 'row',
        gap: 5,
    }
})

export default CardTender