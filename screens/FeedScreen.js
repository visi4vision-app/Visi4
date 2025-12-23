import { gifts } from "../services/visicoin/gifts.service";
import GiftButton from "../components/buttons/GiftButton";
import GiftAnimation from "../components/GiftAnimation";
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { recommend } from "../services/recommendation.service";import { computeScore } from "../services/algorithm.service";import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import ActionButtons from '../components/buttons/ActionButtons';
import CameraView from '../components/CameraView';
import LikeButton from '../components/LikeButton';
import Comments from '../components/Comments';

const { height } = Dimensions.get('window');

const videos = [
  { id: '1' },
  { id: '2' },
];

export default function FeedScreen() {
  return (
    <FlatList
      data={videos}
      keyExtractor={(item) => item.id}
      pagingEnabled
      renderItem={() => (
        <View style={{ height, backgroundColor: 'black' }}>

          {/* 🔴 LA VIDÉO / CAMÉRA */}
          <CameraView />

          {/* ❤️ LIKE ANIMÉ */}
          <LikeButton />

          {/* 💬 COMMENTAIRES */}
          <Comments />

          {/* 🎛️ BOUTONS (like / comment / share / live) */}
          <ActionButtons />

        </View>
      )}
    />
  );
}
