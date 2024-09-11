const Register = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSubmit = () => {
      if (username === '' || email === '' || password === '' || confirmPassword === '') {
        Alert.alert('Error', 'Por favor, complete todos los campos.');
        return;
      }
  
      if (password !== confirmPassword) {
        Alert.alert('Error', 'Las contraseñas no coinciden.');
        return;
      }
  
      Alert.alert('Registro exitoso', 'Por favor, inicie sesión.');
      navigation.navigate('Login');
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Register;
  