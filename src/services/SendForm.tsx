// api.js
export const sendPostRequest = async () => {
    try {
        // Lee el archivo JSON desde la carpeta pública
        const response = await fetch('../src/assets/responseForm.json'); // Ajusta la ruta si es necesario
        if (!response.ok) {
            throw new Error('Failed to load JSON file');
        }

        const data = await response.json();

        // Envía los datos a la API
        const apiResponse = await fetch('https://da5cms9i64.execute-api.us-west-2.amazonaws.com/dev/api/personal-plan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // Convierte el objeto data a una cadena JSON
        });

        if (!apiResponse.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await apiResponse.json();
        console.log('Success:', responseData);
    } catch (error) {
        console.error('Error:', error);
    }
};


