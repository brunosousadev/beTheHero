import React from 'react';
import { Feather } from '@expo/vector-icons'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import logoImg from '../../assets/logo.png';
import * as MailComposer from 'expo-mail-composer';

import {currencyFormatting} from '../../utils/utils';
import {translate} from '../../locales';
import {colors } from '../../theme';
import styles from './styles';

export default function Detail() {
    const route = useRoute();
    const navigation = useNavigation();
    const incident = route.params.incident;

    const message = `${translate('Hello')}, ${incident.name},  ${translate('descriptionPartOne')} ${incident.title}  ${translate('descriptionPartTwo')}  ${currencyFormatting(incident.value)}`;
    
    function navigateBack() {
        navigation.goBack();
    }

    async function sendEmail() {
        MailComposer.composeAsync({
            subject: `${translate('HeroCase')} ${incident.title}`,
            recipients: [incident.email],
            body: message,
        });
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color={colors.tertiary} />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>{translate('NGO')}:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>{translate('CASES')}</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>{translate('VALUE')}: </Text>
                <Text style={styles.incidentValue}>{currencyFormatting(incident.value)}</Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>{translate('SaveDay')}</Text>
                <Text style={styles.heroTitle}>{translate('BeHeroCase')}</Text>
                <Text style={styles.heroDescription}>{translate('contact')}</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp} >
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendEmail} >
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}