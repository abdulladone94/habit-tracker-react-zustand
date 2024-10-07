import { Box, Container, Typography } from '@mui/material';
import './App.css';
import useHabitStore from './store/store';
import AddHabitForm from './components/add-habit-form';

function App() {
  const store = useHabitStore();
  console.log(store);
  return (
    <Container>
      <Box>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Habit Tracker
        </Typography>
        {/* Form  */}
        <AddHabitForm />
        {/* List  */}
        {/* Stats  */}
      </Box>
    </Container>
  );
}

export default App;
