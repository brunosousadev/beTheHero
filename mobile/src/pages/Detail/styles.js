import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { colors } from '../../theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop:  Constants.statusBarHeight + 20,        
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',             
    },
    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: colors.quaternary,
        marginBottom: 16,
        marginTop: 25
    },
    incidentProperty: {
        fontSize: 14,
        color: colors.secondary,
        fontWeight: 'bold',
        marginTop: 24,

    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,        
        color: colors.secondary
    },
    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: colors.quaternary,
        marginBottom: 16,        
    },
    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.primary,
        lineHeight: 30,
    },
    heroDescription: {
        fontSize: 15,
        color: colors.secondary,
        marginTop: 16
    },
    actions: {
        marginTop: 16,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    action: {
        backgroundColor: colors.tertiary,
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText: {
        color: colors.quaternary,
        fontSize: 15
    },

});