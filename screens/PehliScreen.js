import React,{useState} from "react";
import { Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
//import './App.css';

export default function MyScreen(){
    const[currentValue,setValue] = useState(0)
    function update(){
        setValue(currentValue+1)
    }

    return(
        <>
        <SafeAreaView>
        <Text style={{fontSize:20,color:"red"}}>
            this is PehliScreen

        </Text>
        <Text fontSize={30}>button clicked {currentValue}  times</Text>
        <Button onClick={update} >click here</Button>
        </SafeAreaView>
        </>
    );

}
