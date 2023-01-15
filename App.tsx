import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import Login from './views/external/Login';
import InternalNavigation from './navigations/InternalNavigation';
import Home from './views/external/Home';

export default function App() {
  return (
    
    <SafeAreaView className="flex-1 ">
      {/* <Navigations/> */}
      {/* <Login></Login> */}
      <Home></Home>
      
    </SafeAreaView>
  );
}

