import { useState } from "react";
import "./App.css";

interface Student {
  id: number;
  name: string;
  points: number;
}

function App() {
  const [students] = useState<Student[]>([
    { id: 1, name: "John Smith", points: 5 },
    { id: 2, name: "Mike Johnson", points: 3 },
    { id: 3, name: "David Wilson", points: 7 },
    { id: 4, name: "Chris Brown", points: 2 },
    { id: 5, name: "Alex Davis", points: 4 },
  ]);

  const sortedStudents = [...students].sort((a, b) => b.points - a.points);

  return (
    <div className="app">
      <header className="header">
        <h1>R*Squad Leaderboard</h1>
        <p className="subtitle">7th Grade Boys - Invitation Challenge</p>
        <div className="challenge-info">
          <p>
            🎯 <strong>Challenge:</strong> Earn 1 point for each person you
            invite who shows up!
          </p>
          <p>
            📅 <strong>Events:</strong> Wednesday Home Groups & Sunday R*Squad
            Live
          </p>
        </div>
      </header>

      <main className="leaderboard">
        <div className="leaderboard-header">
          <h2>Current Standings</h2>
        </div>

        <div className="students-list">
          {sortedStudents.map((student, index) => (
            <div key={student.id} className={`student-card rank-${index + 1}`}>
              <div className="rank">#{index + 1}</div>
              <div className="student-info">
                <h3>{student.name}</h3>
              </div>
              <div className="points">
                <span className="points-number">{student.points}</span>
                <span className="points-label">points</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>Keep inviting friends to R*Squad! 🌟</p>
      </footer>
    </div>
  );
}

export default App;
