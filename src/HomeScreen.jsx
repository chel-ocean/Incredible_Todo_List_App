import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({navigation}){
    return (
        <MainLayout>
        <ToDoList addTask={addTask}/>
        <ToDoForm />
        <Button title="Go to About" onPress={() => navigation.navigate('About')}/>
      </MainLayout>
    );
}