import React, { FC, useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"
import DropDown from "../../shared/DropDown"
import useParserDate from "../../../hooks/useParserDate"
import { globalStyles } from "../../../styles/gobalStyles"

const DropDownContract = ({ supplier, title, description, dateSigned }) => {
    const { updateDate, labelDate } = useParserDate()

    useEffect(() => {
        updateDate(dateSigned)
    }, [])
    return (
        <DropDown
            title={title}
            secondary
        >
            <View style={globalStyles.dropContent}>
                <Text style={globalStyles.key}>Contrato:</Text>
                <Text style={globalStyles.value}>{title}</Text>
                {description &&
                    <>
                        <Text style={globalStyles.key}>Descripción:</Text>
                        <Text style={globalStyles.value}>{description}</Text>
                    </>
                }
                {supplier &&
                    <>
                        <Text style={globalStyles.key}>Proveedor:</Text>
                        <Text style={globalStyles.value}>{supplier}</Text>
                    </>
                }
                {dateSigned &&
                    <>
                        <Text style={globalStyles.key}>Firmado el:</Text>
                        <Text style={globalStyles.value}>{labelDate}</Text>
                    </>
                }
            </View>
        </DropDown>
    )
}

export default DropDownContract