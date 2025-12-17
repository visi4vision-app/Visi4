import { View, TouchableOpacity, Text } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useEffect, useState } from "react";

export default function Live() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [type, setType] = useState(CameraType.front);

  useEffect(() => {
    if (!permission) requestPermission();
  }, []);

  if (!permission?.granted) {
    return <Text>Permission caméra refusée</Text>;
  }

  return (
    <Camera style={{ flex: 1 }} type={type}>
      <TouchableOpacity
        onPress={() =>
          setType(type === CameraType.front ? CameraType.back : CameraType.front)
        }
        style={{
          position: "absolute",
          bottom: 40,
          alignSelf: "center",
          backgroundColor: "red",
          padding: 15,
          borderRadius: 50,
        }}
      >
        <Text style={{ color: "white" }}>LIVE</Text>
      </TouchableOpacity>
    </Camera>
  );
}
