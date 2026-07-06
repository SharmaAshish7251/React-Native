import { useEffect, useState } from "react";
import { Magnetometer } from "expo-sensors";
import { Platform } from "react-native";

export function useMagnetometer() {
  const [available, setAvailable] = useState<boolean | null>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  const [heading, setHeading] = useState(0);

  useEffect(() => {
    // type declaration
    let subscription: { remove: () => void } | undefined;
    void (async () => {
      const isAvailable = await Magnetometer.isAvailableAsync();
      setAvailable(isAvailable);
      if (!isAvailable) return;

      Magnetometer.setUpdateInterval(100);

      //   setting values
      subscription = Magnetometer.addListener((data) => {
        setX(data.x);
        setY(data.y);
        setZ(data.z);
        setHeading(getHeading(data.x, data.y));
      });
    })();
    return () => subscription?.remove();
  }, []);

  return { available, x, y, z, heading };
}

//  converts values in degree, this function converts values(x,y,z) into degree

function getHeading(x: number, y: number) {
  const radians = Platform.OS === "ios" ? Math.atan2(x, y) : Math.atan2(-x, -y);

  const degress = (radians * 180) / Math.PI;
  return (degress + 360) % 360;
}
