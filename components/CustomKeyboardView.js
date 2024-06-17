import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";

export default function CustomKeyboardView({ children, inChat }) {
  let kavConfig = {};
  let scrollViewConfig = {};
  if (inChat) {
    kavConfig = { keyboardVerticalOffset: 90 };
    scrollViewConfig = { contentContainerStyle: { flex: 1 } };
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} {...kavConfig}>
      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        {...scrollViewConfig}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
