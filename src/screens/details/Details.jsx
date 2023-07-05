import React, { useCallback, useContext, useEffect, useMemo } from "react"
import { View, Text, StyleSheet, Pressable, Linking, ScrollView } from "react-native"
import { globalStyles } from "../../styles/gobalStyles"
import { TendersContext } from '../../context/TendersContext'
import Card from "../../components/shared/Card"
import DropDown from "../../components/shared/DropDown"
import DropDownAward from "../../components/screens/Details/DropDownAward"
import DropDownContract from "../../components/screens/Details/DropDownContract"
import DropDownPart from "../../components/screens/Details/DropDownPart"
import useParserDate from "../../hooks/useParserDate"

const DetailsScreen = ({ route }) => {
    const { ocid } = route.params
    const { tenders } = useContext(TendersContext)
    const { updateDate, labelDate, labelHour } = useParserDate()

    const tender = useMemo(() => {
        return tenders.find(tender => tender.ocid === ocid)
    }, [ocid, tenders])


    const goTo = useCallback(() => {
        Linking.openURL(tender.compiledRelease.publisher.uri)
    }, [tender])

    const findWinner = useCallback((awardID) => {
        return tender.compiledRelease.awards?.find(award => award.id === awardID).suppliers[0].name
    }, [tender])

    useEffect(() => {
        updateDate(tender.compiledRelease.date)
    }, [tender])

    return (
        <View style={globalStyles.container}>
            <ScrollView>

                <View style={globalStyles.wrap}>
                    <Text style={styles.title}>{tender.compiledRelease.tender.title ?? `LICITACIÓN DESCONOCIDA #${tender.compiledRelease.tender.id}`}</Text>
                    <Text style={styles.info}>
                        {ocid}
                    </Text>
                    <Card>
                        <View style={styles.cardHeader}>
                            <Text style={styles.headerText}>Licitación</Text>
                            <Text style={styles.headerText}>{tender.compiledRelease.tender.id}</Text>
                        </View>
                        <Text style={globalStyles.key}>Editor:</Text>
                        <Pressable onPress={goTo}>
                            <Text style={[globalStyles.value, globalStyles.link]}>{tender.compiledRelease.publisher.name}</Text>
                        </Pressable>
                        {tender.compiledRelease.buyer &&
                            <>
                                <Text style={globalStyles.key}>Comprador:</Text>
                                <Text style={globalStyles.value}>{tender.compiledRelease.buyer.name}</Text>
                            </>
                        }
                        <Text style={globalStyles.key}>Publicado:</Text>
                        <Text style={globalStyles.value}>{labelDate} - {labelHour}</Text>
                    </Card>
                    {tender.compiledRelease.awards &&
                        <View style={styles.dropWrap}>
                            <DropDown
                                title='Ganadores'
                                icon='award'
                            >
                                <Card>
                                    {tender.compiledRelease.awards?.map((award, index) =>
                                        <View style={styles.dropWrap} key={index}>
                                            <DropDownAward
                                                supplier={award.suppliers[0].name}
                                                title={award.title}
                                                startDate={award.contractPeriod.startDate}
                                                endDate={award.contractPeriod.endDate}
                                                value={award.value.amount}
                                                currency={award.value.currency}
                                            />
                                        </View>
                                    )}
                                </Card>
                            </DropDown>
                        </View>
                    }
                    {tender.compiledRelease.contracts &&
                        <View style={styles.dropWrap}>
                            <DropDown
                                title='Contratos'
                                icon='file-signature'
                            >
                                <Card>
                                    {tender.compiledRelease.contracts?.map((contract, index) =>
                                        <View style={styles.dropWrap} key={index}>
                                            <DropDownContract
                                                supplier={findWinner(contract.awardID)}
                                                title={contract.title}
                                                description={contract.description}
                                                dateSigned={contract.dateSigned}
                                            />
                                        </View>
                                    )}
                                </Card>
                            </DropDown>
                        </View>
                    }
                    <View style={styles.dropWrap}>
                        <DropDown
                            title='Partes'
                            icon='users'
                        >
                            <Card>
                                {tender.compiledRelease.parties?.map((part, index) =>
                                    <View style={styles.dropWrap} key={index}>
                                        <DropDownPart
                                            {...part}
                                            rol={part.roles[0]}
                                        />
                                    </View>
                                )}
                            </Card>
                        </DropDown>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#c9c9c9',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    info: {
        fontSize: 14,
        marginBottom: 10,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dropWrap: {
        marginVertical: 5,
    }
})

export default DetailsScreen