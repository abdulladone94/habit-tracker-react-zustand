import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import useHabitStore from '../store/store';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const HabitList = () => {
  const { habits, removeHabit } = useHabitStore();
  const today = new Date().toISOString().split('T')[0];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
      {habits.map((habit) => (
        <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h6">{habit.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {habit.name}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button
                  variant="outlined"
                  color={
                    habit.completedDates.includes(today) ? 'success' : 'primary'
                  }
                  startIcon={<CheckCircleOutlineRoundedIcon />}
                >
                  {habit.completedDates.includes(today)
                    ? 'Completed'
                    : 'Mark Complete'}
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteRoundedIcon />}
                  onClick={() => removeHabit(habit.id)}
                >
                  Remove
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default HabitList;
