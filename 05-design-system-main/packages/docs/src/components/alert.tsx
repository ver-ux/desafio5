import Toast from './Toast';

function App() {
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message, duration) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), duration);
  };

  return (
    <div className="app">
      <button onClick={() => showToast('Mensagem de Alerta!', 3000)}>Mostrar Toast</button>
      <Toast message={toastMessage} duration={3000} onClose={() => setToastMessage('')} />
    </div>
  );
}

export default App;

function useState(arg0: string): [any, any] {
    throw new Error('Function not implemented.');
}
