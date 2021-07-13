import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, FlatList, Text, View } from "react-native";
import LottieView from "lottie-react-native";

export default function LoadingAnimation() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const resp = await fetch("https://api.sampleapis.com/coffee/hot");
    const data = await resp.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <SafeAreaView>
      {data ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <LottieView
          source={require("./assets/67313-lava-preloader.json")}
          style={{ width: 100, height: 100 }}
          speed={-1}
          autoPlay
          loop
        />
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: "yellow",
    padding: 20,
    marginVertical: 8,
  },
});
