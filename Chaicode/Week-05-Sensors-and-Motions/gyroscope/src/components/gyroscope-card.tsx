import { useGyroscope } from "@/hooks/use-gyroscope";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const CARD_WIDTH = 300;
const CARD_HEIGHT = 180;

// Turn rad/s into visible degress on the card
const TILT = 12;

const GyroscopeCard = () => {
    const insets = useSafeAreaInsets();
    const { available, x, y, z } = useGyroscope();

    return (
        <View style={[styles.screen, { paddingTop: insets.top + 12 }]}> 
            <Text style={styles.title}>Gyroscope 3D Card</Text>
            <Text style={styles.subtitle}>
                Rotate your phone slowly to watch the card tilt in real-time. Stop to see it settle flat again.
            </Text>

            <View style={styles.sensorBox}>
                <Text style={styles.sensorTitle}>Gyroscope readings</Text>
                <View style={styles.sensorRow}>
                    <Text style={styles.sensorLabel}>x</Text>
                    <Text style={styles.sensorValue}>{x.toFixed(2)}</Text>
                </View>
                <View style={styles.sensorRow}>
                    <Text style={styles.sensorLabel}>y</Text>
                    <Text style={styles.sensorValue}> {y.toFixed(2)}</Text>
                </View>
                <View style={styles.sensorRow}>
                    <Text style={styles.sensorLabel}>z</Text>
                    <Text style={styles.sensorValue}>{z.toFixed(2)}</Text>
                </View>
                <Text style={styles.sensorHint}>
                    Still phone = values near 0. Twist the phone to change z, tilt forward/back for x and y.
                </Text>
            </View>

            {available === false && (
                <Text style={styles.warning}>Gyroscope not available on this device</Text>
            )}

            <View style={styles.stage}>
                <View style={[styles.card, {
                    transform: [
                        { perspective: 700 },
                        { rotateX: `${y * TILT}deg` },
                        { rotateY: `${-x * TILT}deg` },
                    ]
                }]}
                >
                    <View style={styles.cardContent}>
                        <View style={styles.chip} />
                        <Text style={styles.brand}>CHAICODE</Text>
                        <Text style={styles.number}>4921 8834 1209 5502</Text>
                        <Text style={styles.name}>Sensors Lab</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.footer}>
                Tilt effect: rotateX = y × {TILT}, rotateY = -x × {TILT}
            </Text>
        </View>
    )
}

export default GyroscopeCard;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#09090f',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    title: {
        color: '#f8fafc',
        fontSize: 28,
        fontWeight: '800',
        marginTop: 4,
    },
    subtitle: {
        color: '#cbd5e1',
        fontSize: 15,
        lineHeight: 22,
        marginTop: 10,
        marginBottom: 18,
    },
    sensorBox: {
        backgroundColor: '#0f172a',
        borderRadius: 24,
        padding: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.18,
        shadowRadius: 20,
        elevation: 6,
    },
    sensorTitle: {
        color: '#e2e8f0',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 14,
    },
    sensorRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    sensorLabel: {
        color: '#94a3b8',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 0.3,
    },
    sensorValue: {
        color: '#f8fafc',
        fontSize: 16,
        fontWeight: '700',
    },
    sensorHint: {
        color: '#cbd5e1',
        fontSize: 13,
        lineHeight: 18,
        marginTop: 8,
    },
    warning: {
        color: '#fda4af',
        fontSize: 14,
        marginTop: 14,
        textAlign: 'center',
        fontWeight: '600',
    },
    stage: {
        marginTop: 24,
        alignItems: 'center',
    },
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 28,
        backgroundColor: '#111827',
        borderWidth: 1,
        borderColor: 'rgba(254, 147, 50, 0.35)',
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 18 },
        shadowOpacity: 0.2,
        shadowRadius: 30,
        elevation: 10,
        overflow: 'hidden',
    },
    cardContent: {
        flex: 1,
        padding: 18,
        justifyContent: 'space-between',
    },
    chip: {
        width: 64,
        height: 42,
        borderRadius: 14,
        backgroundColor: '#FE9332',
        opacity: 0.95,
    },
    brand: {
        color: '#FE9332',
        fontSize: 12,
        letterSpacing: 1.2,
        textTransform: 'uppercase',
    },
    number: {
        color: '#f8fafc',
        fontSize: 20,
        fontWeight: '800',
        letterSpacing: 1.3,
        marginTop: 16,
    },
    name: {
        color: '#94a3b8',
        fontSize: 14,
        marginTop: 12,
    },
    footer: {
        color: '#cbd5e1',
        fontSize: 13,
        marginTop: 22,
        textAlign: 'center',
    },
})