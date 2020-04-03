import { StyleSheet } from 'react-native';
import { colors } from '../../theme';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex :1 ,
        paddingHorizontal : 24,    
        paddingTop: Constants.statusBarHeight + 20,        
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',        
    },
    headerText: {
        fontSize: 15,        
        color: colors.secondary
    },
    headerTextBold: {
        fontWeight: 'bold',
    },
    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,        
        color: colors.primary,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.secondary
    },
    incidentsList:{
        marginTop: 32,
    },
    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: colors.quaternary,
        marginBottom: 16,

    },
    incidentProperty: {
        fontSize: 14,
        color: colors.secondary,
        fontWeight: 'bold'
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: colors.secondary
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsButtonText: {
        color: colors.tertiary,
        fontSize: 15,
        fontWeight: 'bold'
    }
});