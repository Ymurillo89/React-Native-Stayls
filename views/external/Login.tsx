import React,{useState,useEffect} from 'react'
import { View, Text,TextInput,TouchableOpacity,Modal,Alert } from 'react-native'
import { getLogin } from '../../services/Login';
import { IGetDateAvailableCab, IGetUser } from '../../models/interfaces';


const login = () => {

  useEffect(() => {
    setLoginUser({idRowLocation:0,
      idRowStaff:0,
      idRowStore:0,
      usser:""})
  }, [])
  
  const [modalVisible, setModalVisible] = useState(false);  
  const [user, setUser] = useState({
    user:"",
    password:""
  })  

  const [loginUser, setLoginUser] = useState<IGetUser>()

  
  const handleLogin=()=>{
    debugger
    console.log(user);
    if(user.user!="" && user.password!=""){
      getLogin(user.user,user.password).then(items => setLoginUser(items));

  

    }

    
  }



  return (

    
    <View className='flex-1 flex-wrap px-4 mt-5'>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}/>
      <View className=''>
          <Text className='text-3xl font-bold'>Welcome</Text>
          <Text className='text-xl'>Una excelente oferta para el manejo y control de tus citas</Text>
      </View>
      <View className=' w-full'>
        <Text className="block text-md font-medium text-gray-700 text-center">Usuario</Text>
        <TextInput 
          placeholder='Usuario'
          className=" rounded border border-gray-200 p-2"
          onChangeText={text=>user.user=text}
        ></TextInput>

      </View>
      <View className=' w-full'>
        <Text className="mt-2 block text-md font-medium text-gray-700 text-center">Contraseña</Text>
        <TextInput 
          placeholder='Contaseña'
          className=" rounded border border-gray-200 p-2"
          onChangeText={text=>user.password=text}
        ></TextInput>

      </View>        

      <View className='flex flex-row justify-center '>
        <TouchableOpacity className='inline-block rounded border border-indigo-600 bg-indigo-600 px-10 mt-6' onPress={handleLogin}>
          <Text className='text-white text-center p-2'>Ingresar</Text>
        </TouchableOpacity>
      </View>     
      
      
    </View>
  )
}

export default login