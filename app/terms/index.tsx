import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

const TermsAndConditionsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Sección 1: Aceptación de los Términos y Condiciones */}
      <View style={styles.section}>
        <Text style={styles.title}>
          Aceptación de los Términos y Condiciones
        </Text>
        <Text style={styles.description}>
          Al acceder o utilizar la aplicación Anefito Delta, aceptas y estás
          sujeto a estos Términos y Condiciones de seguir siendo putito. Si no
          estás de acuerdo con alguno de los términos establecidos aquí, por
          favor, no utilices nuestra aplicación.
        </Text>
      </View>

      {/* Sección 2: Uso de la Aplicación */}
      <View style={styles.section}>
        <Text style={styles.title}>Uso de la Aplicación</Text>
        <Text style={styles.description}>
          Anefito Delta está diseñada para ayudarte a controlar y administrar
          tus gastos personales. Al utilizar nuestra aplicación, aceptas que
          eres el único responsable de cualquier información ingresada y
          cualquier acción realizada dentro de la misma.
        </Text>
      </View>

      {/* Sección 3: Privacidad */}
      <View style={styles.section}>
        <Text style={styles.title}>Privacidad</Text>
        <Text style={styles.description}>
          Respetamos tu privacidad y nos comprometemos a protegerla. Toda la
          información proporcionada a través de Anefito Delta se manejará de
          acuerdo con nuestra Política de Privacidad.
        </Text>
      </View>

      {/* Sección 4: Seguridad */}
      <View style={styles.section}>
        <Text style={styles.title}>Seguridad</Text>
        <Text style={styles.description}>
          Implementamos medidas de seguridad para proteger tus datos contra
          accesos no autorizados o uso indebido. Sin embargo, no podemos
          garantizar la seguridad absoluta de la información transmitida a
          través de internet.
        </Text>
      </View>

      {/* Sección 5: Registro y Cuenta */}
      <View style={styles.section}>
        <Text style={styles.title}>Registro y Cuenta</Text>
        <Text style={styles.description}>
          Es posible que necesites registrarte para acceder a ciertas funciones
          de nuestra aplicación. Al registrarte, aceptas proporcionar
          información precisa y actualizada. Eres responsable de mantener la
          confidencialidad de tu cuenta y contraseña, y de todas las actividades
          que ocurran bajo tu cuenta.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff"
  },
  section: {
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },
  description: {
    fontSize: 16
  }
});

export default TermsAndConditionsScreen;
