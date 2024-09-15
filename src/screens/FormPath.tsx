import BotChatCard from '../components/BotChatCard';
import ButtonFormTrack from '../components/buttons/ButtonFormTrack';
import UserChatCard from '../components/UserChatCard';
import { sendPostRequest } from '../services/SendForm';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from "../assets/capifin.jpg"

function FormPath() {
  const questions: { [key: number]: string } = {
    1: '¿Cuántos años tienes?',
    2: '¿Cuándo planeas jubilarte?',
    3: '¿Cuál es tu próximo gran plan en la vida',
    4: '¿Cuáles son tus ingresos mensuales y fuentes de ingreso (salario, inversiones, negocios, etc.)?',
    5: '¿Cuáles son tus gastos fijos mensuales (alquiler, servicios, alimentación, etc.)?',
    6: '¿Tienes deudas (hipotecas, préstamos, tarjetas de crédito)? ¿Cuáles son sus montos y tasas de interés?',
    7: '¿Cuáles son tus metas financieras a corto plazo (menos de 1 año) y largo plazo (más de 5 años)?',
    8: '¿Tienes un plan para la jubilación? ¿Cómo estás ahorrando para ello?',
    9: '¿Cómo te sientes respecto a tomar riesgos con inversiones?',
    10: '¿Tienes un fondo de emergencia? ¿De cuánto es?',
    11: '¿Qué porcentaje de tus ingresos te gustaría destinar al ahorro o a las inversiones?',
  };
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: questions['1'] },
  ]);
  const initialFormData = {
    form_data: [
      { position: 0, question: questions[1], answer: '' },
      { position: 1, question: questions[2], answer: '' },
      { position: 2, question: questions[3], answer: '' },
      { position: 3, question: questions[4], answer: '' },
      { position: 4, question: questions[5], answer: '' },
      { position: 5, question: questions[6], answer: '' },
      { position: 6, question: questions[7], answer: '' },
      { position: 7, question: questions[8], answer: '' },
      { position: 8, question: questions[9], answer: '' },
      { position: 9, question: questions[10], answer: '' },
      { position: 10, question: questions[11], answer: '' },
    ],
  };

  const [newMessage, setNewMessage] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(2); // Empezamos desde la segunda pregunta
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const scrollBottomChat = () => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddMessage = (e: FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const updatedFormData = { ...formData };
      updatedFormData.form_data[currentQuestion - 2].answer = newMessage;

      // Actualizar el estado del formData
      setFormData(updatedFormData);
      setChatMessages([...chatMessages, { type: 'user', message: newMessage }]);

      // Limpiar el campo de entrada
      setNewMessage('');

      // Verificar si hay más preguntas
      if (currentQuestion <= Object.keys(questions).length) {
        // Agregar la siguiente pregunta del bot
        setTimeout(() => {
          setChatMessages((prevMessages) => [
            ...prevMessages,
            { type: 'bot', message: questions[currentQuestion] },
          ]);
          setCurrentQuestion(currentQuestion + 1); // Avanzar a la siguiente pregunta
        }, 500); // Simula un pequeño retraso para la respuesta del bot
      } else {
        // Si no hay más preguntas, puedes manejar la lógica de fin de preguntas
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: 'button', message: 'Generar Path' },
        ]);
      }
    }

    localStorage.setItem(
      'chatMessages',
      JSON.stringify([
        ...chatMessages,
        { type: 'user', message: newMessage },
        { type: 'bot', message: questions[currentQuestion] },
      ]),
    );
    scrollBottomChat();
  };

  useEffect(() => {
    const chatMessages = localStorage.getItem('chatMessages');
    if (chatMessages) {
      const parsedMessages = JSON.parse(chatMessages);
      const chatBotMessages = parsedMessages.filter(
        (item: { type: string; message: string }) => item.type === 'bot',
      );
      setChatMessages(parsedMessages);
      setCurrentQuestion(chatBotMessages.length + 1);
    }
    scrollBottomChat();
  }, []);

  const handleGeneratePath = () => {
    setIsLoading(true); // Activa el estado de carga antes de la solicitud

    // Simula una solicitud POST (coloca aquí tu llamada real a sendPostRequest)
    sendPostRequest(formData)
      .then(() => {
        // Maneja la respuesta si es necesario
        localStorage.setItem('chatAlreadyAnswered', 'true');
      })
      .catch((error) => {
        console.error('Error al enviar la solicitud:', error);
      })
      .finally(() => {
        setIsLoading(false);
        navigate('/'); // Desactiva el estado de carga cuando se completa la solicitud
        window.location.reload();
      });
  };
  return (
    <div className="flex flex-col w-full h-screen justify-end">
      <article className="flex flex-row items-center rounded-3xl shadow-xl bg-white p-3 mb-auto">
        <img
          src={logo}
          alt="Profile"
          className="w-20 aspect-square object-cover rounded-full"
        />
        <div className="flex flex-col ms-3">
          <p className="text-2xl text-black font-bold">Capyfin Intelligence</p>
          <p className="text-primary font-medium text-sm">Active now</p>
        </div>
      </article>

      <div className="grid grid-cols-12 w-full max-h-[65dvh] overflow-scroll">
        {chatMessages.map((item, index) => {
          if (item.type === 'bot') {
            return <BotChatCard key={index} message={item.message} />;
          } else if (item.type === 'button') {
            return (
              <ButtonFormTrack
                key={index}
                label={item.message}
                onClick={handleGeneratePath}
                isLoading={isLoading}
              />
            );
          } else {
            return <UserChatCard key={index} message={item.message} />; // O maneja otros tipos si es necesario
          }
        })}
        <div ref={chatRef} />
      </div>
      <form
        onSubmit={handleAddMessage}
        className="flex self-end flex-row items-center h-[8dvh] rounded-xl w-full "
      >
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex w-full border-none  rounded-full focus:outline-none focus:border-indigo-300 pl-4 h-10 bg-white shadow-xl"
        />

        <button
          disabled={false}
          type="submit"
          className="flex items-center justify-center bg-white hover:bg-gray-200 active:bg-gray-300 rounded-xl text-black px-4 py-2 flex-shrink-0 h-10 shadow-xl transition-colors duration-150 ml-4"
        >
          <span className="ml-2">
            <svg
              className="w-6 h-6 transform rotate-45 -mt-px"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </span>
        </button>
      </form>
    </div>
  );
}

export default FormPath;
