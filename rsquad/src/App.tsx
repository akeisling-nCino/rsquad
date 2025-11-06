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
    { id: 1, name: "Ivan Bogdin", points: 0 },
    { id: 2, name: "Wesley Crews", points: 0 },
    { id: 3, name: "Brycen Faircloth", points: 0 },
    { id: 4, name: "Caleb Gorham", points: 0 },
    { id: 5, name: "Camden Graham", points: 0 },
    { id: 6, name: "Max Halagarda", points: 0 },
    { id: 7, name: "Shea Harper", points: 0 },
    { id: 8, name: "Harrison Holland", points: 0 },
    { id: 9, name: "Jacob Jackson", points: 0 },
    { id: 10, name: "James Justice", points: 0 },
    { id: 11, name: "Nolan Kern", points: 0 },
    { id: 12, name: "Noah Lucero", points: 0 },
    { id: 13, name: "Brandt McGee", points: 0 },
    { id: 14, name: "Tyler Miller", points: 0 },
    { id: 15, name: "Knox Morgan", points: 0 },
    { id: 16, name: "Micah O'Neill", points: 2 },
    { id: 17, name: "Blake Podolinsky", points: 0 },
    { id: 18, name: "Dylan Swancer", points: 0 },
    { id: 19, name: "Nolan Thacker", points: 0 },
    { id: 20, name: "Carter Todd", points: 0 },
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
