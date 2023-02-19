import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 8 * 2
  );

  useEffect(() => {
    const OnChange = () => {
      const width = Dimensions.get("window").width;
      setDimensions(width);
    };
    const dimensionsHandler = Dimensions.addEventListener("change", OnChange);
    return () => {
      dimensionsHandler.remove();
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bcgimage}
          source={require("../../assets/images/Photo-BG.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.formBox}>
              <View
                style={{
                  ...styles.form,
                  marginBottom: isShowKeyboard ? -80 : 85,
                  width: dimensions,
                }}
              >
                <Text style={styles.title}>Увійти</Text>

                <TextInput
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  placeholder={"Електронна пошта"}
                />
                <TextInput
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                  secureTextEntry={true}
                  placeholder={"Пароль"}
                />

                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.btn}
                  onPress={keyboardHide}
                >
                  <Text style={styles.btnTitle}>Увійти</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.text}>
                    Не маєте акаунт? Зареєструватись
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  bcgimage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formBox: {
    position: "relative",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
  },
  form: {
    // marginHorizontal: 16,
  },

  title: {
    fontFamily: "Roboto-Medium",
    marginBottom: 30,
    marginTop: 30,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
  },
  input: {
    height: 50,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 16,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    fontFamily: "Roboto-Regular",
  },
  btn: {
    marginTop: 24,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    fontFamily: "Roboto-Regular",
  },
  btnTitle: {
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 19,
  },
  text: {
    textAlign: "center",
    marginTop: 16,
    fontFamily: "Roboto-Regular",
  },
});