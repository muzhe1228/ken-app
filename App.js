import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { createContext, useContext, useState } from "react";
import Loading from "./components/shared/Loading";
import NetworkError from "./components/shared/NetworkError";
import useReduceFetchData from "./hooks/useReduceFetchData";

const CommData = createContext({ title: "测试 useContext" });

export default function App() {
  const [keyword, setKeyword] = useState("");
  const { data, loading, error, onReload } = useReduceFetchData(
    `api/order/dashboard/getPieAgeData`,
    {
      method: "GET",
      params: { q: keyword },
    }
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NetworkError title="网络错误" onReload={onReload} />;
  }

  return (
    <CommData.Provider value={{ title: `测试useContext: ${keyword}` }}>
      <View style={styles.container}>
        <ChildCom />
        <Text>搜索的关键词: {keyword}</Text>
        <TextInput
          style={styles.input}
          placeholder="请输入搜索关键词"
          onChangeText={(text) => {

            setKeyword(text);
          }}
          defaultValue={keyword}
        />
        {data.map((course) => (
          <Text key={course.id} style={styles.title}>
            {course.name}
          </Text>
        ))}
        <Button title="获取数据" onPress={onReload} />
      </View>
    </CommData.Provider>
  );
}

const ChildCom = () => (
  <View style={styles.title}>
    <ChilsdCom />
  </View>
);
const ChilsdCom = () => {
  const { title } = useContext(CommData);
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e29447",
    marginBottom: 10,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    margin: 12,
  },
});
