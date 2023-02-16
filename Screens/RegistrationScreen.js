import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bcgimage}
        source={require("../assets/images/Photo-BG.jpg")}
      >
        <View style={styles.form}>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput style={styles.input} placeholder={"Логін"} />
          <TextInput style={styles.input} placeholder={"Електронна пошта"} />
          <TextInput style={styles.input} placeholder={"Пароль"} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bcgimage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginHorizontal: 16,

    backgroundColor: "#F6F6F6",
  },
});
