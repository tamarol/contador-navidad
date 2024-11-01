import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [timeRemaining, setTimeRemaining] = useState('');
  const [timeRemainingmoney, setTimeRemainingmoney] = useState('');

  useEffect(() => {
    const money = dayjs('2024-11-14');
    const christmas = dayjs('2024-12-25');
    
    const interval = setInterval(() => {
      const now = dayjs();

      // Calcular la diferencia para la cuenta regresiva del Aguinaldo
      const differencemoney = money.diff(now, 'second'); // Diferencia en segundos
      const daysmoney = Math.floor(differencemoney / (60 * 60 * 24));
      const hoursmoney = Math.floor((differencemoney / (60 * 60)) % 24);
      const minutesmoney = Math.floor((differencemoney / 60) % 60);
      const secondsmoney = differencemoney % 60;
      setTimeRemainingmoney(`${daysmoney}d ${hoursmoney}h ${minutesmoney}m ${secondsmoney}s`);

      // Calcular la diferencia para la cuenta regresiva de Navidad
      const difference = christmas.diff(now, 'second'); // Diferencia en segundos
      const days = Math.floor(difference / (60 * 60 * 24));
      const hours = Math.floor((difference / (60 * 60)) % 24);
      const minutes = Math.floor((difference / 60) % 60);
      const seconds = difference % 60;
      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>💵 El Aguinaldo 💵</h1>
      <p className={styles.countdown}>Tiempo restante para El Aguinaldo: {timeRemainingmoney}</p>
      <div className={styles.divvacio}></div>
      <h1 className={styles.title}>🎄 Contador Navideño 🎄</h1>
      <p className={styles.countdown}>Tiempo restante para Navidad: {timeRemaining}</p>
    </div>
  );
}
