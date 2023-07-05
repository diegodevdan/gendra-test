import React, { FC, useEffect, useState, useCallback, useContext } from "react"
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Pressable } from "react-native"
import { getRecordsMGC } from '../../services/records'
import CardTender from '../../components/screens/Home/CardTender'
import { globalStyles } from '../../styles/gobalStyles'
import { TendersContext } from '../../context/TendersContext'
import { tendersToCardProps } from '../../adapters/tendersToCardProps'
import Pagination from '../../components/shared/Pagination'
import Counter from '../../components/shared/Counter'

const HomeScreen = ({ navigation }) => {
    const { navigate } = navigation
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(5)
    const { tenders, addTenders } = useContext(TendersContext)
    const [biddings, setBiddings] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalElements, setTotalElements] = useState(0)

    const getBiddings = useCallback(async () => {
        setLoading(true)
        try {
            const response = await getRecordsMGC(currentPage, count)
            setTotalElements(response.pagination.total)
            addTenders(response.results)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }, [count, currentPage])

    useEffect(() => {
        setBiddings(tendersToCardProps(tenders))
    }, [tenders])

    useEffect(() => {
        getBiddings()
    }, [getBiddings])
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.wrap}>
                <ScrollView>
                    <View style={styles.counterContainer}>
                        <Text>Elementos por pagina</Text>
                        <Counter
                            min={5}
                            max={100}
                            step={5}
                            setCount={setCount}
                        />
                    </View>
                    {loading ?
                        <View style={styles.loader}>
                            <Text>Cargando...</Text>
                            <ActivityIndicator size="large" color="#243033" />
                        </View>
                        :
                        <View style={styles.tenders}>
                            {biddings.map((bidding) =>
                                <Pressable key={bidding.ocid} onPress={() => navigate('Details', { ocid: bidding.ocid })}>
                                    <CardTender {...bidding} />
                                </Pressable>
                            )}
                        </View>
                    }
                </ScrollView>
                <View style={styles.infoContainer}>
                    <Pagination numberOfPages={totalElements / count} setPage={setCurrentPage} page={currentPage} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    infoContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    info: {
        fontSize: 12,
    },
    publisher: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    tenders: {
        marginTop: 10,
        marginBottom: 50,
        gap: 8,
    },
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5,
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 200
    }
})

export default HomeScreen