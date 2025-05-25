import { useState } from "react";

function KeutelBank() {
  const [users, setUsers] = useState([
    { name: "Rogier", keutels: 10 },
    { name: "Marieke", keutels: 10 },
    { name: "Tim", keutels: 10 },
  ]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState(1);

  const transfer = () => {
    if (from === to || amount <= 0) return;
    setUsers((prev) =>
      prev.map((u) => {
        if (u.name === from && u.keutels >= amount) {
          return { ...u, keutels: u.keutels - amount };
        } else if (u.name === to) {
          return { ...u, keutels: u.keutels + amount };
        } else {
          return u;
        }
      })
    );
  };

  return (
    <div style={{ padding: 20, backgroundColor: '#ffe4f0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: 32, textAlign: 'center' }}>💩 KeutelBank Pinkpop 💗</h1>
      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 30 }}>
        {users.map((user) => (
          <div key={user.name} style={{ background: 'white', padding: 20, borderRadius: 12, width: 150, textAlign: 'center', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <h2>{user.name}</h2>
            <p style={{ fontSize: 24 }}>{user.keutels} 💩</p>
          </div>
        ))}
      </div>
      <div style={{ background: 'white', padding: 20, borderRadius: 12, maxWidth: 400, margin: '0 auto' }}>
        <h3>💩 Keutels overmaken</h3>
        <input placeholder="Van (naam)" value={from} onChange={(e) => setFrom(e.target.value)} style={{ margin: '5px 0', padding: 8, width: '100%' }} />
        <input placeholder="Naar (naam)" value={to} onChange={(e) => setTo(e.target.value)} style={{ margin: '5px 0', padding: 8, width: '100%' }} />
        <input type="number" placeholder="Aantal keutels" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} style={{ margin: '5px 0', padding: 8, width: '100%' }} />
        <button onClick={transfer} style={{ backgroundColor: '#ff69b4', color: 'white', padding: 10, marginTop: 10, width: '100%', border: 'none', borderRadius: 8 }}>
          💩 Verstuur Keutels
        </button>
      </div>
    </div>
  );
}

export default KeutelBank;
