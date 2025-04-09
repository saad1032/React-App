   /* import React from "react"
    import {StyleSheet,view,FlatList} from "react-native"
    import { SafeAreaView } from "react-native-safe-area-context"

    export default function SubScreen(){
        const Data = [
            {
                id:"1",title:"first item"
            },
            {
                id:"2",title:"Second item"
            },
            {
                id:"3",title:"third item"
            },
            {
                id:"4",title:"fouth item"
            }
        ]

    }


    <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
        />
*/

import {react,useState} from "react";
import { Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
//import './App.css';

export default function App(){
    const[currentValue,setValue] = useState(0)
    function update(){
        setValue(currentValue+1)
    }

    return(
        <>
        <text fontSize={30}>button clicked {currentValue}  times</text>
        <button onClick={update} >click here</button>
        </>
    );

}
