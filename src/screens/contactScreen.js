import { 
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const data = [
    {
        id: 1,
        img: 'https://x.gd/6gjKW',
        name: 'Jonh Dena',
        occupation: 'Agent'
    },
    {
        id: 2,
        img: 'https://x.gd/J6chw',
        name: 'Kessia V. Monark',
        occupation: 'Agent'
    },
    {
        id: 3,
        img: 'https://x.gd/wxU71',
        name: 'Yellena Romanoff',
        occupation: 'Agent'
    },
];

export function Contact() {
  const mockup = ({ item }) => {
    return(
        <View style={styles.content}>
            <View style={styles.imgContent}>
                <Image style={styles.img} source={{ uri: item.img}} />
            </View>

            <View style={styles.textcontent}>
                <Text style={styles.fw600}>{item.name}</Text>
                <Text style={styles.fw400}>{item.occupation}</Text>
            </View>

            <View style={styles.buttonContent}>
                <TouchableOpacity style={[styles.button, styles.btn1]}>
                    <MaterialIcons name="call" size={24} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.btn2]}>
                    <MaterialIcons name="send" size={24} color="black" />
                </TouchableOpacity>
            </View>
            
        </View>
    )

  }

  return(
    <View>
        <FlatList 
            renderItem={mockup}
            data={data}
            keyExtractor={item => item.id.toString()}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  imgContent: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 50
  },
  textcontent: {
    flex: 1
  },
  fw600: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16
  },
  fw400: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  },
  buttonContent: {
    flexDirection: 'row',
  },
  button: {
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20
  },
  btn1: {
    backgroundColor: '#5465FF',
  },
  btn2: {
    borderWidth: 1,
    borderColor: 'black'
  }
});
