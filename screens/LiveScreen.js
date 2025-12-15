import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LiveScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      
      {/* TOP BAR */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
        <Text style={{ color: "red" }}>🔴 LIVE • 12.3K</Text>
        <Ionicons name="close" size={26} color="white" />
      </View>

      {/* VIDEO */}
      <View style={{ flex: 1 }} />

      {/* CHAT */}
      <View style={{ position: "absolute", bottom: 120, left: 10 }}>
        <Text style={{ color: "white" }}>👤 user123 : 🔥🔥🔥</Text>
      </View>

      {/* BOTTOM ACTIONS */}
      <View style={{
        position: "absolute",
        bottom: 20,
        right: 10,
        alignItems: "center",
        gap: 18
      }}>
        <TouchableOpacity><Ionicons name="heart" size={32} color="red" /></TouchableOpacity>
        <TouchableOpacity><Ionicons name="gift" size={32} color="gold" /></TouchableOpacity>
        <TouchableOpacity><Ionicons name="chatbubble" size={32} color="white" /></TouchableOpacity>
        <TouchableOpacity><Ionicons name="add-circle" size={36} color="white" /></TouchableOpacity>
      </View>
    </View>
  );
}
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RTCView } from "react-native-webrtc";
import { startLiveStream } from "../services/live/liveService";

export default function LiveScreen() {
  const [stream, setStream] = useState(null);
  const [liveId, setLiveId] = useState(null);

  const startLive = async () => {
    const live = await startLiveStream();
    setStream(live.stream);
    setLiveId(live.liveId);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      {stream ? (
        <>
          <RTCView
            streamURL={stream.toURL()}
            style={{ flex: 1 }}
          />
          <Text style={{ color: "white", textAlign: "center" }}>
            LIVE ID : {liveId}
          </Text>
        </>
      ) : (
        <TouchableOpacity
          onPress={startLive}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 22 }}>
            🔴 Lancer le LIVE
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
