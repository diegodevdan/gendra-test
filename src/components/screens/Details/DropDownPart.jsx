import { View, Text, Pressable, Linking } from "react-native"
import DropDown from "../../shared/DropDown"
import { globalStyles } from "../../../styles/gobalStyles"

const ROLES = {
    buyer: 'Comprador',
    procuringEntity: 'Entidad contratante',
    supplier: 'Proveedor',
    tenderer: 'Ofertante',
}

const DropDownPart = ({ rol, name, identifier, address, id, contactPoint }) => {
    const goTo = () => {
        if (identifier?.uri) Linking.openURL(identifier?.uri)
    }
    return (
        <DropDown
            title={name}
            secondary
        >
            <View style={globalStyles.dropContent}>
                <View style={globalStyles.row}>
                    <View style={{width:'50%'}}>
                        <Text style={globalStyles.key}>Id:</Text>
                        <Text style={[globalStyles.value]}>{id}</Text>
                    </View>
                    <View>
                        <Text style={globalStyles.key}>Rol:</Text>
                        <Text style={globalStyles.value}>{ROLES[rol]}</Text>
                    </View>
                </View>
                {identifier &&
                    <View>
                        <Text style={globalStyles.key}>Identificador:</Text>
                        <Pressable onPress={goTo}>
                            <Text style={[globalStyles.value, globalStyles.link]}>{identifier.legalName}</Text>
                        </Pressable>
                    </View>
                }
                {address &&
                    <View>
                        <Text style={globalStyles.key}>Dirección:</Text>
                        <Text style={globalStyles.value}>{address.streetAddress}, {address.locality} {address.region}</Text>
                    </View>
                }
                {contactPoint &&
                    <View>
                        <Text style={[globalStyles.key, {fontWeight: 'bold'}]}>Contacto</Text>
                        <View style={globalStyles.row}>
                            <View style={{width:'50%'}}>
                                <Text style={globalStyles.key}>Nombre:</Text>
                                <Text style={globalStyles.value}>{contactPoint.name?? '--'}</Text>
                            </View>
                            <View>
                                <Text style={globalStyles.key}>Teléfono:</Text>
                                <Text style={globalStyles.value}>{contactPoint.telephone?? '--'}</Text>
                            </View>
                        </View>
                        <Text style={globalStyles.key}>email:</Text>
                        <Text style={globalStyles.value}>{contactPoint.email?.replaceAll(';', ' | ')?? '--'}</Text>
                    </View>
                }
            </View>
        </DropDown>
    )
}

export default DropDownPart