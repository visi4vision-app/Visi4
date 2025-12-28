import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import rankFeed from "../utils/aiFeedRanker";

export default function SmartVideoFeed({ videos, renderItem }) {
  const [sorted, setSorted] = useState([]);

  useEffect(() => {
    setSorted(rankFeed(videos));
  }, [videos]);

  return (
    <FlatList
      data={sorted}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      pagingEnabled
      showsVerticalScrollIndicator={false}
    />
  );
}
