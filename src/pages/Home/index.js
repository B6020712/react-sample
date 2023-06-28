import React from "react";
import {View, SafeAreaView, FlatList, TouchableOpacity, Text, ActivityIndicator} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import {AntDesign} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchBar from "../../components/SearchBar";
import Style from "./style";
import Colors from "../../styles/colors";
import Notes from "../../components/RenderNotes";

function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    return (
        <SafeAreaView>
            {/* HEADING */}
            <Text>NOTE-TAKING-APP</Text>
            {/* SEARCH BAR */}
            <SearchBar data={data} onChange={setData} />
            {/* NOTES */}
            <FlatList />
            {/* ADD TODO BUTTON */}
            <TouchableOpacity>
                <AntDesign name="pluscircle" size={60} color={Colors.addButton} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Home;