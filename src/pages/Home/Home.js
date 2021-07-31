import {useState} from "react";
import "./Home.css";
import Categories from "../../Data/Categories";
import { TextField, MenuItem, Button } from "@material-ui/core";
import {useHistory} from 'react-router-dom'
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";


function Home({name, setName, fetchQuestions}) {
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [error, setError] = useState(false)
  const history = useHistory()

  const handleSubmit = () => {
    if(!name||!category||!difficulty){
      setError(true)
      return
    }
    else{
      setError(false)
      fetchQuestions(category, difficulty)
      
history.push('/quiz')
    }
  }
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Please fill this up</span>
        <div className="settings__select">
          {error && <ErrorMessage>Please fill in all fields</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter your name"
            variant="outlined"
            onChange={(e)=>setName(e.target.value)}
            value = {name}
          />
          <TextField
            style={{ marginBottom: 30 }}
            select
            label="Select category"
            variant="outlined"
            onChange={(e)=>setCategory(e.target.value)}
            value = {category}
          >
            {Categories.map((category) => (
              <MenuItem key={category.category} value={category.value}>
                {category.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            style={{ marginBottom: 30 }}
            select
            label="Select difficulty"
            variant="outlined"
            onChange={(e)=>setDifficulty(e.target.value)}
            value = {difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
            Start Quiz
          </Button>
        </div>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2017/03/12/17/54/quiz-2137664_960_720.jpg"
        alt="Here should have been a candy. :("
      />
    </div>
  );
}

export default Home;
