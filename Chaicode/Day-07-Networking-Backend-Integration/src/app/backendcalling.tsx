import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const BackendCalling =()=>{

useEffect(()=>{
     async function pingBackend(){
        const res = await fetch("http://192.168.1.36:3000/api/v1/hello-world")
        const data = await res.json()
        console.log(data)
     }
     pingBackend()
},[])

return (
    <View>
        <Text>Local Backend Calling</Text>
        
    </View>
)


}

export default BackendCalling;

const styles = StyleSheet.create({})