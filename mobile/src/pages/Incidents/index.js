import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity  } from 'react-native';
import {currencyFormatting} from '../../utils/utils';

import {translate} from '../../locales';

import logoImg from '../../assets/logo.png';

import styles from './styles';

import api from '../../services/api';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [flagNetwork, setFlagNetwork] = useState(false);

    

    const navigation = useNavigation();

    function navigateToDetails(incident) {
        navigation.navigate('Detail', { incident });
    }

    async function loadIncidents() {
        try {
            if (loading) return;

            if (total > 0 && incidents.length == total) return;

            setLoading(true);

            const response = await api.get('incidents', {
                params: { page }
            });

            setIncidents([...incidents, ...response.data]);
            setTotal(response.headers['x-total-count']);
            setPage(page + 1);
            setLoading(false);
            setFlagNetwork(false);
        } catch (error) {
            setFlagNetwork(true);
        }
    }
    useEffect(() => {
        loadIncidents();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    {translate('totalOf')}<Text style={styles.headerTextBold}> {total} {translate('cases')} </Text>.
                        </Text>
            </View>

        <Text style={styles.title}>{translate('welcome')}</Text>

            {flagNetwork ? <Text style={styles.descriptionInfor}>{translate('loadCases')}</Text>  : 
                <Text style={styles.description}>{translate('casesBelow')}</Text>
            }
            <FlatList
                style={styles.incidentsList}
                data={incidents}
                showsVerticalScrollIndicator={false}
                keyExtractor={incident => String(incident.id)}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>{translate('NGO')}:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>{translate('CASES')}:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>{translate('VALUE')}: </Text>
                        <Text style={styles.incidentValue}>
                            {  currencyFormatting(incident.value) }
                        </Text>
                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetails(incident)}>
                            <Text style={styles.detailsButtonText}> {translate('SeeMoreDetails')} </Text>
                            <Feather name="arrow-right" size={16} color='#e02041' />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}