import React, { FC, useEffect, useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';

const Pagination = ({ numberOfPages, setPage, page = 1 }) => {
    const [currentPage, setCurrentPage] = useState(page)
    const arrayLength = numberOfPages > 5 ? 4 : 5
    const valueToSum = numberOfPages - 4 < currentPage ? numberOfPages - 4 : currentPage

    const pages = Array(arrayLength).fill(0).map((_, i) => i + valueToSum)

    const handlePage = (next) => {
        const newPage = next ? currentPage + 1 : currentPage - 1
        if(newPage > numberOfPages || newPage < 1) return

        setCurrentPage(newPage)
        setPage(newPage)
    }
    
    const handlePageByValue = (value) => {
        if(value > numberOfPages || value < 1) return

        setCurrentPage(value)
        setPage(value)
    }

    useEffect(() => {
        if(page) setCurrentPage(page)
    }, [page])
    return (
        <View style={styles.main}>
            <TouchableOpacity style={[styles.page, styles.arrow, styles.arrowLeft]} onPress={() => handlePage(false)}>
                <FontAwesome5 name="chevron-left" size={20} color="black" />
            </TouchableOpacity>
            {pages.map((page, i) =>
                numberOfPages - 5 >= currentPage && i === 3 ?
                    <View style={[styles.dotsContainer]} key={i}>
                        <Text style={styles.dots}>...</Text>
                    </View>
                    :
                    <TouchableOpacity key={i} style={[styles.page, page === currentPage ? styles.current : {}]} onPress={() => handlePageByValue(page)}>
                        <Text style={page === currentPage ? styles.currentNumber : {}}>{page}</Text>
                    </TouchableOpacity>
            )}
            {numberOfPages > 5 &&
                <TouchableOpacity style={[styles.page, currentPage >= numberOfPages ? styles.current : {}]} onPress={() => handlePageByValue(numberOfPages)}>
                    <Text style={currentPage >= numberOfPages ? styles.currentNumber : {}} numberOfLines={1}>{numberOfPages}</Text>
                </TouchableOpacity>
            }
            <TouchableOpacity style={[styles.page, styles.arrow, styles.arrowRight]} onPress={() => handlePage(true)}>
                <FontAwesome5 name="chevron-right" size={20} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E5E5E5AA',
        justifyContent: 'center',
        borderRadius: 8,
    },
    page: {
        width: 40,
        height: 30,
        borderWidth: 2,
        borderColor: '#c9c9c9',
        backgroundColor: '#E5E5E5',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    current: {
        backgroundColor: '#243033',
        color: '#FFFFFF',
    },
    currentNumber: {
        color: '#FFFFFF',
    },
    arrow: {
        position: 'absolute',
    },
    arrowLeft: {
        left: 0,
    },
    arrowRight: {
        right: 0,
    },
    dotsContainer: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dots: {
        fontSize: 24,
        lineHeight: 17,
    }
})

export default Pagination