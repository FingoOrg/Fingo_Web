

import BotChatCard from "../components/BotChatCard"
import ButtonFormTrack from "../components/buttons/ButtonFormTrack";
import InputChat from "../components/inputs/InputChat";
import UserChatCard from "../components/UserChatCard";
import { sendPostRequest } from '../services/SendForm';
import React, { useState } from 'react';

function FormPath() {
    const questions: { [key: number]: string } = {
        1: "¿Cuántos años tienes?",
        2: "¿Cuándo planeas jubilarte?",
        3: "¿Cuál es tu próximo gran plan en la vida",
        4: "¿Cuáles son tus ingresos mensuales y fuentes de ingreso (salario, inversiones, negocios, etc.)?",
        5: "¿Cuáles son tus gastos fijos mensuales (alquiler, servicios, alimentación, etc.)?",
        6: "¿Tienes deudas (hipotecas, préstamos, tarjetas de crédito)? ¿Cuáles son sus montos y tasas de interés?",
        7: "¿Cuáles son tus metas financieras a corto plazo (menos de 1 año) y largo plazo (más de 5 años)?",
        8: "¿Tienes un plan para la jubilación? ¿Cómo estás ahorrando para ello?",
        9: "¿Cómo te sientes respecto a tomar riesgos con inversiones?",
        10: "¿Tienes un fondo de emergencia? ¿De cuánto es?",
        11: "¿Qué porcentaje de tus ingresos te gustaría destinar al ahorro o a las inversiones?"
    };
    const [chatMessages, setChatMessages] = useState([
        { type: 'bot', message: questions["1"] }
    ]);


    const [newMessage, setNewMessage] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(2); // Empezamos desde la segunda pregunta

    const handleAddMessage = () => {
        if (newMessage.trim()) {
            // Agregar mensaje del usuario a la lista
            setChatMessages([...chatMessages, { type: 'user', message: newMessage }]);

            // Limpiar el campo de entrada
            setNewMessage('');

            // Verificar si hay más preguntas
            if (currentQuestion <= Object.keys(questions).length) {
                // Agregar la siguiente pregunta del bot
                setTimeout(() => {
                    setChatMessages(prevMessages => [
                        ...prevMessages,
                        { type: 'bot', message: questions[currentQuestion] }
                    ]);
                    setCurrentQuestion(currentQuestion + 1); // Avanzar a la siguiente pregunta
                }, 500); // Simula un pequeño retraso para la respuesta del bot
            } else {
                // Si no hay más preguntas, puedes manejar la lógica de fin de preguntas
                setChatMessages(prevMessages => [
                    ...prevMessages,
                    { type: 'button', message: "Generar Path" }
                ]);
            }
        }
    };
    return (

        <div className="flex h-screen antialiased bg-secondary text-gray-800">
            <div className="flex flex-row h-full w-full overflow-x-hidden">

                <div className="flex flex-col flex-auto h-full ">
                    <div
                        className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-secondary h-full p-4"
                    >
                        <div className="flex flex-col h-full overflow-x-auto mb-4">
                            <div className="flex flex-col h-full">
                                <div className="grid grid-cols-12 gap-y-2">

                                    {chatMessages.map((item) => {
                                        if (item.type === 'bot') {
                                            return <BotChatCard message={item.message} />;
                                        } else if (item.type === 'button') {
                                            return <ButtonFormTrack label={item.message} onClick={sendPostRequest} />;
                                        } else {
                                            return <UserChatCard message={item.message} />; // O maneja otros tipos si es necesario
                                        }
                                    })}


                                </div>
                            </div>
                        </div>
                        <div
                            className="flex flex-row items-center h-16 rounded-xl bg-secondary w-full "
                        >

                            <div className="flex-grow ml-4">
                                <div className="relative w-full">
                                    <input

                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        className="flex w-full border-none  rounded-full focus:outline-none focus:border-indigo-300 pl-4 h-14 bg-white shadow-xl"
                                    />

                                </div>
                            </div>
                            <div className="ml-4">
                                <button
                                    onClick={handleAddMessage}
                                    className="flex items-center justify-center bg-white hover:bg-gray-200 active:bg-gray-300 rounded-xl text-black px-4 py-2 flex-shrink-0 h-14 shadow-xl transition-colors duration-150"
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
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                            ></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormPath