import React, { useState } from "react";
import {
    Alert,
    Image,
    Keyboard,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";

export default function Bmi() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [result, setResult] = useState("0.00");
    const [resultText, setResultText] = useState("การแปรผล");

    const handleResetPress = () => {
        setHeight("");
        setWeight("");
        setResult("0.00");
        setResultText("การแปรผล");
    };

    const handleCalPress = () => {
        Keyboard.dismiss();

        //validate
        if (weight.length == 0 || height.length == 0) {
            Alert.alert("คำเตือน", "กรุณาป้อนน้ำหนักและส่วนสูง");
            return;
        }
        if (weight.length == 0 || height.length == 0) {
            Alert.alert("คำเตือน", "กรุณาป้อนน้ำหนักและส่วนสูงไม่เป็น 0");
            return;
        }
        //คํานวณ
        let heightValue = parseFloat(height) / 100;
        let weightValue = parseFloat(weight);
        let bmiValue = weightValue / (heightValue * heightValue);
        setResult(bmiValue.toFixed(2));

        //แปรผล
        if (bmiValue < 18.5) {
            setResultText("ผอม");
        } else if (bmiValue < 23) {
            setResultText("ปกติ");
        } else if (bmiValue < 25) {
            setResultText("อ้วนเล็กน้อย");
        } else if (bmiValue < 30) {
            setResultText("อ้วนระดับ 1");
        } else {
            setResultText("อ้วนมาก");
        }
    };

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Image
                        source={require("@/assets/images/bmi.png")}
                        style={styles.img}
                    />
                    <View style={styles.cardInput}>
                        <Text style={styles.labelInput}>ป้อนน้ำหนัก (kg)</Text>
                        <TextInput
                            style={styles.textInput}
                            keyboardType="numeric"
                            value={weight}
                            onChangeText={setWeight}
                        />
                        <View style={{ height: 20 }} />
                        <Text style={styles.labelInput}>ป้อนส่วนสูง (cm)</Text>
                        <TextInput
                            style={styles.textInput}
                            keyboardType="numeric"
                            value={height}
                            onChangeText={setHeight}
                        />
                        <View style={{ flexDirection: "row", marginTop: 30, gap: 20 }}>
                            <TouchableOpacity
                                style={styles.btnReset}
                                onPress={handleResetPress}
                            >
                                <Text style={styles.txtbtn}>รีเซ็ต</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.btnCalculate}
                                onPress={handleCalPress}
                            >
                                <Text style={styles.txtbtn}>คำนวณ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cardResult}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontFamily: "Kanit-700bold",
                                color: "#ffffff",
                            }}
                        >
                            ผลลัพธ์ที่ได้จะแสดงที่นี่
                        </Text>
                        <Text
                            style={{
                                fontSize: 20,
                                fontFamily: "Kanit-700bold",
                                color: "#ffffff",
                            }}
                        >
                            BMI
                        </Text>
                        <Text
                            style={{
                                fontSize: 60,
                                fontFamily: "Kanit-700bold",
                                color: "#ff0000",
                            }}
                        >
                            {result}
                        </Text>
                        <Text
                            style={{
                                fontSize: 20,
                                fontFamily: "Kanit-700bold",
                                color: "#ffffff",
                            }}
                        >
                            {resultText}
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cardResult: {
        //borderWidth: 1,
        width: "80%",
        marginTop: 50,
        alignItems: "center",
        backgroundColor: "#60ff82",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
    },
    txtbtn: {
        fontSize: 18,
        fontFamily: "Kanit-700bold",
        color: "#ffffff",
    },
    btnCalculate: {
        backgroundColor: "#00ff00",
        flex: 2,
        //borderWidth: 1,
        padding: 15,
        alignItems: "center",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
    },
    btnReset: {
        backgroundColor: "#ff0000",
        flex: 1,
        //borderWidth: 1,
        padding: 15,
        alignItems: "center",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
    },
    cardInput: {
        backgroundColor: "#c0ffb0",
        width: "80%",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        marginTop: 30,
    },
    img: {
        width: 120,
        height: 120,
        marginTop: 40,
    },
    container: {
        flex: 1,
        alignItems: "center",
    },
    labelInput: {
        fontSize: 16,
        fontFamily: "Kanit-400regular",
        color: "#3a3a3a",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#9c9c9c",
        padding: 13,
        borderRadius: 5,
    },
});
