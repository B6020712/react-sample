import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Route from "./src/routes/route";

// ทำตามในคลปถึง 1:09:03 กำลังแก้เออเร่ออีหยังวะอยู่

export default function App() {
  return (
    <NavigationContainer>
      <Route />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
