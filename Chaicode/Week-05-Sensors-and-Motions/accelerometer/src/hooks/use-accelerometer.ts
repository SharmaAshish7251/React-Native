import { Accelerometer } from "expo-sensors";
import { useEffect, useState } from "react";


export function useAccelerometer() {
    // state variable
    const [available, setAvailable] = useState<boolean | null>(null);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [z, setZ] = useState(0);

    useEffect(() => {
        let subscription: { remove: () => void } | undefined;
        (async () => {
            //  this will check sensor availablity
            const isAvailable = await Accelerometer.isAvailableAsync();
            setAvailable(isAvailable);
            if (!available) return;

            // to get sensor triggered
            Accelerometer.setUpdateInterval(100);


            // to subscribe 
            subscription = Accelerometer.addListener((data) => {
                setX(data.x);
                setY(data.y);
                setZ(data.z)
            })
        })()
        return () => subscription?.remove();

    }, [])
    return { available, x, y, z };
}