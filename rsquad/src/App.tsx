import { useState } from "react";
import "./App.css";
import rsquadTitleImg from "/rsquad-title.png";
import rsquadGreenImg from "/rsquad-green.png";

interface Student {
  id: number;
  name: string;
  points: number;
}

function App() {
  const [students] = useState<Student[]>([
    { id: 1, name: "John Smith", points: 5 },
    { id: 2, name: "First Last", points: 3 },
    { id: 3, name: "Test Name", points: 7 },
    { id: 4, name: "Cool Guy", points: 2 },
    { id: 5, name: "Another Name", points: 4 },
  ]);

  const sortedStudents = [...students].sort((a, b) => b.points - a.points);

  return (
    <div className="app">
      <header className="header">
        <div className="header-logo">
          <img src={rsquadTitleImg} alt="R*Squad" className="logo-title" />
          <img src={rsquadGreenImg} alt="R*Squad Logo" className="logo-icon" />
        </div>
        <h1>Leaderboard</h1>
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
          <p>
            ✅ <strong>How to Earn Points:</strong> Bring the person you invited
            to a leader to claim your point!
          </p>
          <p>
            🏆 <strong>Winner Gets:</strong> The "Faithful Servant" trophy +
            R*Squad merch!
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
