import Colors from '@/assets/styles/color';
import {
  CheckIcon,
  ChevronLeftIcon,
  HeartIcon,
  PlusIcon,
} from 'lucide-react-native';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from './styles';

export default function HomeScreen() {
  const tasks = [
    {
      time: '9:00 AM',
      title: 'Meeting',
      description: 'Discuss team tasks for the day.',
      // images: [
      //   require('./assets/person1.png'),
      //   require('./assets/person2.png'),
      //   require('./assets/person3.png'),
      //   require('./assets/person4.png'),
      // ],
      done: true,
    },
    {
      time: '11:00 AM',
      title: 'Icon set',
      description: 'Edit icons for Navi Project.',
    },
    {
      time: '12:00 PM',
      title: 'Make prototypes',
      description: 'Make and send prototypes to the client.',
    },
    {
      time: '2:00 PM',
      title: 'Check work',
      description: 'Check out the work of the new junior designer.',
    },
    {
      time: '2:50 PM',
      title: 'Landing page',
      description: 'Start work on landing page design.',
    },
  ];

  function getNextThirtyDays(): Array<{
    id: string;
    day: string;
    week: string;
  }> {
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    const result = [];
    const currentDate = new Date();

    for (let i = 0; i < 30; i++) {
      const futureDate = new Date();
      futureDate.setDate(currentDate.getDate() + i);

      const id = (i + 1).toString();
      const day = futureDate.getDate().toString().padStart(2, '0');
      const week = daysOfWeek[futureDate.getDay()];

      result.push({ id, day, week });
    }

    return result;
  }

  return (
    <View style={styles.content}>
      <View style={styles.headerContent}>
        <TouchableOpacity>
          <ChevronLeftIcon color={Colors.zinc[950]} size={32} />
        </TouchableOpacity>

        <TouchableOpacity>
          <HeartIcon color={Colors.zinc[950]} size={32} />
        </TouchableOpacity>
      </View>

      <View style={styles.dateContent}>
        <View style={styles.now}>
          <Text style={styles.textSmall}>april 10, 2021</Text>
          <Text style={styles.text}>Today</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <PlusIcon color={Colors.zinc[50]} size={25} />
          <Text style={styles.buttonText}>Novo Evento</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={getNextThirtyDays()}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} style={styles.flatListWeek}>
            <Text style={styles.textSmall}>{item.day}</Text>
            <Text style={[styles.text, { fontSize: 12 }]}>{item.week}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <ScrollView >
        {tasks.map((task, index) => (
          <View key={index} style={styles.item}>
            <View style={styles.timeContainer}>
              <Text style={styles.time}>{task.time}</Text>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.circle} />
              {index < tasks.length - 1 && <View style={styles.line} />}
            </View>
            <View style={styles.detailsContainer}>
              <View style={styles.card}>
                <Text style={styles.title}>{task.title}</Text>
                <Text style={styles.description}>{task.description}</Text>

                {task.done && (
                  <View style={styles.doneIconContainer}>
                    <CheckIcon size={20} color="#000" />
                  </View>
                )}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
