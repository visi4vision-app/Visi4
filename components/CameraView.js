import { Camera } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';

export default function CameraView() {
  const cameraRef = useRef(null);
  const [permission, setPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === 'granted');
    })();
  }, []);

  if (!permission) {
    return <Text style={{ color: 'white' }}>Permission caméra refusée</Text>;
  }

  return (
    <Camera
      ref={cameraRef}
      style={{ flex: 1 }}
      type={Camera.Constants.Type.back}
    />
  );
}
