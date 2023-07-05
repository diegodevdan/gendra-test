import React, { FC, useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"
import DropDown from "../../shared/DropDown"
import useParserDate from "../../../hooks/useParserDate"
import { globalStyles } from "../../../styles/gobalStyles"

const DropDownAward = ({ supplier, title, startDate, endDate, value, currency }) => {
    const { updateDate: updateStartContract, labelDate: startDateLabel } = useParserDate()
    const { updateDate: updateEndContract, labelDate: endDateLabel } = useParserDate()

    const parcerAmount = (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    useEffect(() => {
        updateStartContract(startDate)
        updateEndContract(endDate)
    }, [])
    return (
        <DropDown
            title={supplier}
            secondary
        >
            <View style={globalStyles.dropContent}>
                <Text style={globalStyles.key}>Contrato:</Text>
                <Text style={globalStyles.value}>{title}</Text>
                <View style={globalStyles.row}>
                    <View>
                        <Text style={globalStyles.key}>Inicio del contrato:</Text>
                        <Text style={globalStyles.value}>{startDateLabel}</Text>
                    </View>
                    <View>
                        <Text style={globalStyles.key}>Fin del contrato:</Text>
                        <Text style={globalStyles.value}>{endDateLabel}</Text>
                    </View>
                </View>
                <View style={globalStyles.right}>
                    <Text style={globalStyles.key}>Valor del contrato:</Text>
                    <Text style={globalStyles.value}>$ {parcerAmount(value)} {currency}</Text>
                </View>
            </View>
        </DropDown>
    )
}

export default DropDownAward